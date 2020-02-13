'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define( 'Task', {
    value: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    deadline: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    files: DataTypes.ARRAY( DataTypes.STRING )
  }, {} );

  Task.associate = function (models) {
    Task.belongsTo( models.User, {
      foreignKey: 'userId',
    } );
  };
  return Task;
};