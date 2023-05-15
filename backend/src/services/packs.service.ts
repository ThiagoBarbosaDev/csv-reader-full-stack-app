import Papa from 'papaparse';
import Product from '../database/models/ProductModel';
import { ICsvFile } from '../interfaces';

class PacksService {
  parse = (csvData: string): ICsvFile[] => {
    const { data } = Papa.parse<ICsvFile>(csvData, {
      header: true,
    });
    return data;
  };

  update = async (csvData: string): Promise<void> => {
    const parsedData = this.parse(csvData);
    await Promise.all(
      parsedData.map(
        async (csvFile: ICsvFile): Promise<[number, Product[]]> =>
          Product.update(
            { salesPrice: parseFloat(csvFile.new_price) },
            { where: { code: Number(csvFile.product_code) } },
          ),
      ),
    );
  };
}

export default PacksService;
