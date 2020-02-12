'use strict';
const { NAME_PATTERN, SALT_ROUND } = require( '../constants' );
const bcrypt = require( 'bcrypt' );

module.exports = (sequelize, DataTypes) => {
  const nameAttribute = {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: NAME_PATTERN,
    }
  };
  const User = sequelize.define( 'User', {
    firstName: nameAttribute
    ,

    lastName: nameAttribute,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.TEXT,
      field: 'passwordHash',
      allowNull: false,
      set (val) {
        this.setDataValue( 'password', bcrypt.hashSync( val, SALT_ROUND ) );
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    }
  }, {} );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};