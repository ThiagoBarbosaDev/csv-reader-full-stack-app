import Pack from '../database/models/PackModel';
import PackProduct from '../database/models/PackProductModel';
import Product from '../database/models/ProductModel';

class PacksService {
  update = async (): Promise<PackProduct[]> => {
    const response = await PackProduct.findAll({
      where: { packId: 1010 },
      include: [
        { model: Pack, as: 'packData' },
        { model: Product, as: 'productData' },
      ],
    });
    return response;
  };
}

export default PacksService;
