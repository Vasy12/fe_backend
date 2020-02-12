'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define( 'Task', {
    value: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isNull: false,
      }
    },
    deadline: {
      type: DataTypes.DATE,
      validate: {
        isNull: false,
        isDate: true,
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        isNull: false,
      }
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    files: DataTypes.ARRAY( DataTypes.STRING )
  }, {} );
  Task.associate = function (models) {
    // associations can be defined here
  };
  return Task;
};