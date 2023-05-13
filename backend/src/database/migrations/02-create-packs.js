'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('packs', {
      // ID PRIMARIO DA TABELA
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      // ID DO PRODUTO PACK
      pack_id: {
        field: "pack_id",
        type: Sequelize.BIGINT,
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'products',
          key: 'code',
        },
      },
      // ID DO PRODUTO COMPONENTE
      product_id: {
        field: "product_id",
        type: Sequelize.BIGINT,
        allowNull: false,
        onUpdate: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'products',
          key: 'code',
        },
      },
      // QUANTIDADE DO PRODUTO COMPONENTE NO PACK
      qty: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('packs');
  },
};