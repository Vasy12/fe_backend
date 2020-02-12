const { User } = require( './../models' );

class UserController {

  createUser = async (req, res, next) => {
    try {
      const createdUser = await User.create( req.body );
      res.send( createdUser );
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
      const user = await User.findByPk( req.params.id );
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
      debugger;
      if (updatedRowsCount) {
        return res.send( updatedRows[0].get() );
      }
      return res.status( 404 ).send( 'Error 404: User not found' );

    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

}

module.exports = new UserController();