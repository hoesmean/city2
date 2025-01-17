'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.addColumn('Users', 'etc', {
            type: Sequelize.STRING,
        }, { transaction: t })
          
      ])
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          
          queryInterface.removeColumn('Users', 'etc', { transaction: t }),
      ])
  })
  }
};
