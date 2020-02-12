const { User } = require( './../models' );

class UserController {

  createUser = async (req, res, next) => {
    try {
      const createdUser = await User.create( req.body );
      if (createdUser) {
        const data = createdUser.get();
        delete data.password;
        return res.send( data );
      }
      return res.status( 400 ).send( 'Bad request' );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const deletedRowsCount = await User.destroy( {
                                                     where: {
                                                       id: req.params.id
                                                     }
                                                   } );
      if (deletedRowsCount) {
        return res.send( 'User has been deleted' );
      }

      return res.status( 404 ).send( 'Error 404: User not found' );

    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  getUser = async (req, res, next) => {
    try {
      const user = await User.findByPk( req.params.id, {
        attributes: {
          exclude: ['password'],
        }
      } );
      if (user) {
        return res.send( user );
      }
      return res.status( 404 ).send( 'Error 404: User not found' );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const [updatedRowsCount, updatedRows] = await User.update( req.body, {
        where: {
          id: req.params.id
        },
        returning: true,
      } );
      if (updatedRowsCount) {
        const data = updatedRows[0].get();
        delete data.password;
        return res.send( data );
      }
      return res.status( 404 ).send( 'Error 404: User not found' );

    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

}

module.exports = new UserController();