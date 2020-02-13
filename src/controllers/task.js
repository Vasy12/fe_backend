const { Task } = require( './../models' );
const Controller = require( './../utils/controller' );

class TaskController {

  constructor () {
    this._controller = new Controller( Task );
  }

  createTask = async (req, res, next) => {
    try {
      res.send( await this._controller.create( req.body ) );
    } catch (e) {
      return res.status( 400 ).send( e );
    }
  };

  deleteTask = async (req, res, next) => {
    try {
      res.send( {
                  isDeleted: (await this._controller.delete( req.params.id )) === '1'
                } );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  getTask = async (req, res, next) => {
    try {
      res.send( await this._controller.read( req.params.id ) );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  updateTask = async (req, res, next) => {
    try {

      res.send( await this._controller.update( req.params.id, req.body ) );

    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

}

module.exports = new TaskController();