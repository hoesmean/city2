'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.addColumn('User', 'etc', {
            type: Sequelize.STRING,
        }, { transaction: t })
          
      ])
  })
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          
          queryInterface.removeColumn('User', 'etc', { transaction: t }),
      ])
  })
  }
};
