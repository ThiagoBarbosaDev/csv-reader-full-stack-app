import { Model } from 'sequelize';
import db from '.';
import { BIGINT } from 'sequelize';

class Pack extends Model {
  declare id: number;
  declare packId: number;
  declare productId: number;
  declare qty: number;
}

Pack.init({
  id: {
    type: BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  packId: {
    type: BIGINT,
    allowNull: false,
    references: {
      model: 'products',
      key: 'code',
    },
  },
  productId: {
    type: BIGINT,
    allowNull: false,
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
  modelName: 'packs',
  underscored: true,
});

export default Pack;