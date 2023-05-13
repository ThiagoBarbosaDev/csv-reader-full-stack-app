import { Model, STRING, BIGINT, DECIMAL } from 'sequelize';
import db from '.';
import Pack from './PackModel';

class Product extends Model {
  declare code: number;
  declare name: string;
  declare costPrice: number;
  declare salesPrice: number;
}

Product.init({
  code: {
    type: BIGINT,
    primaryKey: true,
  },
  name: {
    type: STRING(100),
    allowNull: false,
  },
  costPrice: {
    type: DECIMAL(9, 2),
    allowNull: false,
  },
  salesPrice: {
    type: DECIMAL(9, 2),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'products',
  underscored: true,
  timestamps: false,
});

Product.belongsToMany(Pack, { foreignKey: 'product_id', through: 'packProducts' });

export default Product;
