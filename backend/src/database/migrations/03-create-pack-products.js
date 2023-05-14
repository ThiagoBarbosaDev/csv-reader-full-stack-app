'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pack_products', {
      // ID DO PRODUTO PACK
      pack_id: {
        field: "pack_id",
        type: Sequelize.BIGINT,
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'packs',
          key: 'id',
        },
      },
      // ID DO PRODUTO COMPONENTE
      product_id: {
        field: "product_id",
        type: Sequelize.BIGINT,
        allowNull: false,
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'products',
          key: 'code',
        },
      },
      // QUANTIDADE DO PRODUTO COMPONENTE NO PACK
      qty: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('pack_products');
  },
};
