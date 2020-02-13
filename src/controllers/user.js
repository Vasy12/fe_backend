const { User } = require( './../models' );
const Controller = require( './../utils/controller' );

class UserController {

  constructor () {
    this._controller = new Controller( User );
  }

  createUser = async (req, res, next) => {
    try {
      const userData = (await this._controller.create( req.body )).get();
      delete userData.password;
      res.status( 201 ).send( userData );
    } catch (e) {
      next( e );
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      res.send( `${await this._controller.delete( req.params.id )}` );
    } catch (e) {
      next( e );
    }
  };

  getUserById = async (req, res, next) => {
    try {

      req.user = await this._controller.read( req.params.id, {
        attributes: {
          exclude: ['password']
        }
      } );
      next();
    } catch (e) {
      next( e );
    }
  };

  getUserByEmail = async (req, res, next) => {
    try {

      req.user = await User.findOne( {
                                       where: {
                                         email: req.body.email,
                                       }
                                     } );
      if (req.user) {
        return next();
      }
      res.status( 404 ).send( `User with email "${req.body.email}" doesn't exist` );

    } catch (e) {
      next( e );
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const userData = (await this._controller.update( req.params.id, req.body )).get();
      delete userData.password;
      res.send( userData );

    } catch (e) {
      next( e );
    }
  };

}

module.exports = new UserController();