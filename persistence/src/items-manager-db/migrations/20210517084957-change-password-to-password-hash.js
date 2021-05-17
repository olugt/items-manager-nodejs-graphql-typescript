// // @ts-check
// const { QueryInterface, Sequelize } = require("sequelize/types");

'use strict';

module.exports = {
  up:
    /**
     *
     * @param {QueryInterface} queryInterface
     * @param {Sequelize} Sequelize
     */
    async (queryInterface, Sequelize) => {
      /**
       * Add altering commands here.
       *
       * Example:
       * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
       */
      return await queryInterface.sequelize.transaction(t => {
        return Promise.all([
          queryInterface.renameColumn("Users", "password", "passwordHash")
        ]);
      });
    },

  down:
    /**
       *
       * @param {QueryInterface} queryInterface
       * @param {Sequelize} Sequelize
       */
    async (queryInterface, Sequelize) => {
      /**
       * Add reverting commands here.
       *
       * Example:
       * await queryInterface.dropTable('users');
       */
      return await queryInterface.sequelize.transaction(t => {
        return Promise.all([
          queryInterface.renameColumn("Users", "passwordHash", "password")
        ]);
      });
    }
};
