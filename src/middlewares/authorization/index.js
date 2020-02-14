const findUserByEmail = require( './findUserByEmail.js' );
const comparePassword = require( './comparePassword.js' );
const checkAuthorization = require( './checkAuthorization.js' );

module.exports = {
  findUserByEmail,
  comparePassword,
  checkAuthorization,
};