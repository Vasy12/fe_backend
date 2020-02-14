const { BadRequestError, ResourceNotFoundError } = require( './../errors' );

class Controller {

  constructor (model) {
    this._model = model;
  }

  get model () {
    return this._model;
  }

  create = async (data) => {
    const newInstance = await this.model.create( data );
    if (newInstance) {
      return newInstance;
    }
    throw new BadRequestError();
  };
  read = async (id, options = {}) => {
    const instance = await this.model.findByPk( id, options );
    if (instance) {
      return instance;
    }
    throw new Error();
  };
  update = async (id, data) => {
    const [updatedRowsCount, updatedRows] = await this.model.update( data, {
      where: {
        id,
      },
      returning: true,
    } );
    if (updatedRowsCount) {
      return updatedRows[0];
    }
    throw new ResourceNotFoundError( this.model.name );
  };
  delete = async (id) => {
    const deletedRowsCount = await this.model.destroy( {
                                                         where: {
                                                           id,
                                                         }
                                                       } );
    if (deletedRowsCount) {
      return deletedRowsCount;
    }
    throw new ResourceNotFoundError( this.model.name );
  };

}

module.exports = Controller;

