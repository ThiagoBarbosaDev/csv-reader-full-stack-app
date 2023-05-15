import Papa from 'papaparse';
import { ICsvFile, INotFoundCodeError } from '../interfaces';
import CsvFileSchema from './schemas';
import AppError from '../utils/AppError';
import Product from '../database/models/ProductModel';

export default class ProductService {
  handleFindProduct = async (
    csvLine: ICsvFile,
    errors: INotFoundCodeError[]
  ): Promise<Product | null> => {
    const data = await Product.findByPk(
      Number(csvLine?.product_code),
      {
        raw: true,
      }
    );

    if (!data) {
      errors.push({
        context: csvLine,
        message: 'Product code not found',
      });
    }
    return data;
  };

  handleProductNotFound = async (
    csvData: ICsvFile[]
  ): Promise<(Product | null)[]> => {
    const errors: INotFoundCodeError[] = [];
    // looks up database for product code and throws to the errorMiddleware unfound product codes
    const products = await Promise.all(
      csvData.map((csvLine) =>
        this.handleFindProduct(csvLine, errors)
      )
    );
    if (errors.length) {
      throw new AppError(404, 'Not Found', errors);
    }
    return products;
  };

  handleJoiValidation = (csvData: ICsvFile[]) => {
    const { error } = CsvFileSchema.validate(csvData, {
      abortEarly: false,
    });
    if (error) {
      throw new AppError(400, 'Bad Request', error);
    }
  };

  // eslint-disable-next-line max-lines-per-function
  handleCostPrice = (
    csvData: ICsvFile[],
    products: Product[]
  ): void => {
    const errors: INotFoundCodeError[] = [];
    // eslint-disable-next-line max-lines-per-function
    csvData.forEach((csvLine) => {
      const code = Number(csvLine.product_code);
      const newPrice = parseFloat(csvLine.new_price);

      const targetProduct = products.find(
        (product) => product?.code === code
      ) as Product;

      const costNotValid = targetProduct.costPrice >= newPrice;

      if (costNotValid) {
        errors.push({
          context: csvLine,
          message: `New price (${newPrice}) is under the cost price (${targetProduct.costPrice})`,
        });
      }
      const marginNotValid =
        newPrice >
          parseFloat((targetProduct.salesPrice * 1.1).toFixed(2)) ||
        newPrice <
          parseFloat((targetProduct.salesPrice * 0.9).toFixed(2));

      if (marginNotValid) {
        errors.push({
          context: csvLine,
          message: `New price (${newPrice}) margin is invalid, limit: 10%`,
        });
      }
    });

    const errorResponse = { csvData, productData: products };

    if (errors.length) {
      throw new AppError(400, 'Bad Request', errors, errorResponse);
    }
  };

  // handle business related validations.
  handlePrices = (csvData: ICsvFile[], products: Product[]) => {
    this.handleCostPrice(csvData, products);
  };

  validate = async (csvData: ICsvFile[]): Promise<void> => {
    this.handleJoiValidation(csvData);
    const products = (await this.handleProductNotFound(
      csvData
    )) as Product[];
    this.handlePrices(csvData, products);
  };

  parse = (csvData: string): ICsvFile[] => {
    const { data } = Papa.parse<ICsvFile>(csvData, {
      header: true,
    });
    return data;
  };

  handler = async (csvData: string): Promise<ICsvFile[]> => {
    const response = this.parse(csvData);
    await this.validate(response);
    return response;
  };
}
