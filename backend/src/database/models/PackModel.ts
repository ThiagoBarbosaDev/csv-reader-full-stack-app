import { Model, BIGINT, STRING } from 'sequelize';
import db from '.';

class Pack extends Model {
  declare id: number;
}

Pack.init({
  id: {
    type: BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING(100),
    primaryKey: true,
  },
}, {
  sequelize: db,
  modelName: 'packs',
  underscored: true,
  timestamps: false,
});

export default Pack;
