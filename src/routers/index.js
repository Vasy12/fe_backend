const express = require( 'express' );
const { checkAuthorization } = require( '../middlewares/authorization' );
const { ApplicationError } = require( '../utils/errors' );
const { UserController, TaskController } = require( '../controllers' );
const adminRouter = require( './admin.js' );
const router = express.Router();

/*router.use( checkAuthorization );*/

router.use( '/admin', adminRouter );

router.route( '/users' )
      .get( UserController.getAllUsers );

router.route( '/user(/:id)?' )
      .post( UserController.createUser )
      .get( UserController.getUserById )
      .patch( UserController.updateUserById )
      .delete( UserController.deleteUserById );

router.route( '/task(/:id)?' )
      .post( TaskController.createTask )
      .get( TaskController.getTaskById )
      .patch( TaskController.updateTaskById )
      .delete( TaskController.deleteTaskById );

router.use( (err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res.status( err.status ).send( err.message );
  }
  return next( err );
} );

module.exports = router;
