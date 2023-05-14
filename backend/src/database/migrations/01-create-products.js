'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      // CODIGO DO PRODUTO
      code: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        autoIncrement: false,
      },
      // NOME DO PRODUTO
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      // CUSTO DO PRODUTO
      cost_price: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
      },
      // PREÇO DE VENDA DO PRODUTO
      sales_price: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  },
};