// // @ts-check

'use strict';

const sequelize = require("sequelize");
// const { QueryInterface, Sequelize } = require("sequelize/types");

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
          queryInterface.addColumn("Items", "userId", {
            type: sequelize.INTEGER,
            references: {
              model: "Users",
              key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
          })
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
          queryInterface.removeColumn("Items", "userId")
        ]);
      });
    }
};
