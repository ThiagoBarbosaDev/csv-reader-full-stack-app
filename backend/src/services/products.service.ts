import Papa from 'papaparse';
import {
  ICsvFile,
  INotFoundCodeError,
  IValidationResponse,
} from '../interfaces';
import CsvFileSchema from './schemas';
import AppError from '../utils/AppError';
import Product from '../database/models/ProductModel';

export default class ProductService {
  handleFindProduct = async (
    csvLine: ICsvFile,
    errors: INotFoundCodeError[],
  ): Promise<Product | null> => {
    const data = await Product.findByPk(
      Number(csvLine?.product_code),
      {
        raw: true,
      },
    );

    if (!data) {
      errors.push({
        context: csvLine,
        message: 'Código do produto não encontrado',
      });
    }
    return data;
  };

  handleProductNotFound = async (
    csvData: ICsvFile[],
  ): Promise<(Product | null
    )[]> => {
    const errors: INotFoundCodeError[] = [];
    // looks up database for product code and throws to the errorMiddleware unfound product codes
    const products = await Promise.all(
      csvData.map((csvLine) =>
        this.handleFindProduct(csvLine, errors)),
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
      throw new AppError(400, 'Bad Request', error.details);
    }
  };

  // todo: break handleCostPrice into smaller functions
  // eslint-disable-next-line max-lines-per-function
  handleCostPrice = (
    csvData: ICsvFile[],
    products: Product[],
  ): IValidationResponse => {
    const errors: INotFoundCodeError[] = [];
    // eslint-disable-next-line max-lines-per-function
    csvData.forEach((csvLine) => {
      const code = Number(csvLine.product_code);
      const newPrice = parseFloat(csvLine.new_price);

      const targetProduct = products.find(
        (product) => product?.code === code,
      ) as Product;

      const costNotValid = targetProduct.costPrice >= newPrice;

      if (costNotValid) {
        errors.push({
          context: csvLine,
          message: `PRICE: Novo preço(${newPrice}) abaixo do preço de custo
           (${targetProduct.costPrice})`,
        });
      }

      const marginNotValid = newPrice
          > parseFloat((targetProduct.salesPrice * 1.1).toFixed(2))
        || newPrice
          < parseFloat((targetProduct.salesPrice * 0.9).toFixed(2));

      if (marginNotValid) {
        errors.push({
          context: csvLine,
          message:
            'PRICE: Novo preço inválido, limite máximo de mudança: 10%',
        });
      }
    });

    const responseData = { csvData, productData: products };

    if (errors.length) {
      throw new AppError(400, 'Bad Request', errors, responseData);
    }
    return responseData;
  };

  validate = async (
    csvData: ICsvFile[],
  ): Promise<IValidationResponse> => {
    this.handleJoiValidation(csvData);

    const products = (await this.handleProductNotFound(
      csvData,
    )) as Product[];

    return this.handleCostPrice(csvData, products);
  };

  parse = (csvData: string): ICsvFile[] => {
    const { data } = Papa.parse<ICsvFile>(csvData, {
      header: true,
    });
    return data;
  };

  handler = async (csvData: string): Promise<IValidationResponse> => {
    const parsedData = this.parse(csvData);
    const response = await this.validate(parsedData);
    return response;
  };
}
