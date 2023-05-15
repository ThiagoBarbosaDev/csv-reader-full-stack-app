import Papa from 'papaparse';
import { ICsvFile } from '../interfaces';

export default class ProductService {
  validate = (): Record<string, string> =>
    // todo: validation call
    ({ message: 'validate route works' });

  parseData = (csvData: string): ICsvFile[] => {
    const { data } = Papa.parse<ICsvFile>(csvData, {
      header: true,
    });
    return data;
  };

  handler = (csvData: string): ICsvFile[] => {
    const response = this.parseData(csvData);
    return response;
  };
}
