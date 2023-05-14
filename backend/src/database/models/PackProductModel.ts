import { Model, BIGINT } from 'sequelize';
import db from '.';
import Pack from './PackModel';
import Product from './ProductModel';

class PackProduct extends Model {
  declare packId: number;
  declare productId: number;
  declare qty: number;
}

PackProduct.init({
  packId: {
    type: BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'packs',
      key: 'id',
    },
  },
  productId: {
    type: BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'products',
      key: 'code',
    },
  },
  qty: {
    type: BIGINT,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'pack_products',
  underscored: true,
  timestamps: false,
});

function defineAssociations() {
  PackProduct.belongsTo(Pack, { foreignKey: 'packId', as: 'packData' });
  Pack.hasMany(PackProduct, { foreignKey: 'packId', as: 'packData' });

  PackProduct.belongsTo(Product, { foreignKey: 'productId', as: 'productData' });
  Product.hasMany(PackProduct, { foreignKey: 'productId', as: 'productData' });
}

defineAssociations();

export default PackProduct;
