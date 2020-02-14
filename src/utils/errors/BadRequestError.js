const ApplicationError = require( './ApplicationError.js' );

class BadRequestError extends ApplicationError {
  constructor (message) {
    super( message || 'The request could not be understood by the server due to malformed syntax.', 400 );
  }
}

module.exports = BadRequestError;