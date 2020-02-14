const express = require( 'express' );
const { ApplicationError } = require( '../utils/errors' );
const { UserController, TaskController } = require( '../controllers' );

const router = express.Router();

router.route( '/user(/:id)?' )
      .post( UserController.createUser )
      .get( UserController.getUserById )
      .patch( UserController.updateUser )
      .delete( UserController.deleteUser );

router.use( (err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res.status( err.status ).send( err.message );
  }
  return next( err );
} );

module.exports = router;
