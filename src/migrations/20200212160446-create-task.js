'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable( 'Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      deadline: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      files: {
        type: Sequelize.ARRAY( Sequelize.STRING ),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    } );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable( 'Tasks' );
  }
};