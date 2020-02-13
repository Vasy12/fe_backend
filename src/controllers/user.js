const { User } = require( './../models' );
const Controller = require( './../utils/controller' );

class UserController {

  constructor () {
    this._controller = new Controller( User );
  }

  createUser = async (req, res, next) => {
    try {
      const userData = await this._controller.create( req.body ).get();
      delete userData.password;
      res.status( 201 ).send( userData );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      res.send( `${await this._controller.delete( req.params.id )}` );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  getUser = async (req, res, next) => {
    try {

      res.send( await this._controller.read( req.params.id, {
        attributes: {
          exclude: ['password']
        }
      } ) );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const userData = await this._controller.update( req.params.id, req.body ).get();
      delete userData.password;
      res.send( userData );

    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

}

module.exports = new UserController();