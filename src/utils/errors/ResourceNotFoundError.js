const ApplicationError = require( './ApplicationError.js' );

class ResourceNotFoundError extends ApplicationError {
  constructor (resource = 'resource') {
    super( `Error 404: ${resource} not found.`, 404 );
  }
}

module.exports = ResourceNotFoundError;