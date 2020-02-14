const { Task } = require( './../models' );
const Controller = require( './../utils/controller' );

class TaskController {

  constructor () {
    this._controller = new Controller( Task );
  }

  createTask = async (req, res, next) => {
    try {
      res.send( await this._controller.create( {
                                                 ...req.body,
                                                 userId: req.authorizationData.id
                                               } ) );
    } catch (e) {
      next( e );
    }
  };

  deleteTask = async (req, res, next) => {
    try {
      res.send( {
                  isDeleted: (await this._controller.delete( req.params.id )) === '1'
                } );
    } catch (e) {
      next( e );
    }
  };

  getTask = async (req, res, next) => {
    try {
      res.send( await this._controller.read( req.params.id ) );
    } catch (e) {
      next( new Error() );
    }
  };

  updateTask = async (req, res, next) => {
    try {

      res.send( await this._controller.update( req.params.id, req.body ) );

    } catch (e) {
      next( e );
    }
  };

}

module.exports = new TaskController();