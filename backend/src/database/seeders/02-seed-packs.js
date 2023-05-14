module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'packs',
      [
        { id: 1000, name: 'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES' },
        { id: 1010, name: 'KIT ROLO DE ALUMINIO + FILME PVC WYDA' },
        { id: 1020, name: 'SUPER PACK RED BULL VARIADOS - 6 UNIDADES' },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('packs', null, {});
  },
};


