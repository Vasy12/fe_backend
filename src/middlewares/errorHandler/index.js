const { ApplicationError } = require( '../../utils/errors' );
const { ValidationError } = require( 'sequelize' );
const { ValidationError: JoiError } = require( '@hapi/joi' );

function handleValidationError (err, req, res, next) {
  if (err instanceof JoiError) {
    const { details: [{ message }] } = err;
    return res.status( 400 ).send( message );
  } else {
    next( err );
  }
}

function handleSequelizeError (err, req, res, next) {
  if (err instanceof ValidationError) {
    const { errors: [{ value, message }] } = err;
    return res.status( 400 ).send( `Value "${value}" is invalid. ${message}.` );
  } else {
    next( err );
  }
}

function handleApplicationError (err, req, res, next) {

  if (err instanceof ApplicationError) {
    return res.status( err.status ).send( err.message );
  } else {
    next( err );
  }

}

module.exports = {
  handleApplicationError,
  handleSequelizeError,
  handleValidationError,
};
