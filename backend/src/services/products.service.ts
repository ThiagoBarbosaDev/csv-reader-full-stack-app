import Papa from 'papaparse';
import { ICsvFile, INotFoundCodeError } from '../interfaces';
import CsvFileSchema from './schemas';
import AppError from '../utils/AppError';
import Product from '../database/models/ProductModel';

export default class ProductService {
  handleFindProduct = async (
    csvLine: ICsvFile,
    index: number,
    errors: INotFoundCodeError[]
  ): Promise<INotFoundCodeError | undefined> => {
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
    return undefined;
  };

  handleProductNotFound = async (
    csvData: ICsvFile[]
  ): Promise<void> => {
    const errors: INotFoundCodeError[] = [];
    // looks up database for product code and throws to the errorMiddleware unfound product codes
    await Promise.all(
      csvData.map((csvLine, index) =>
        this.handleFindProduct(csvLine, index, errors)
      )
    );
    if (errors) {
      throw new AppError(404, 'Not Found', errors);
    }
  };

  handleJoiValidation = (csvData: ICsvFile[]) => {
    const { error } = CsvFileSchema.validate(csvData, {
      abortEarly: false,
    });
    if (error) {
      throw new AppError(400, 'Bad Request', error);
    }
  };

  validate = async (csvData: ICsvFile[]): Promise<void> => {
    this.handleJoiValidation(csvData);
    this.handleProductNotFound(csvData);
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
    console.log(response);
    return response;
  };
}
