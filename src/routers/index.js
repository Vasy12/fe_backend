const express = require( 'express' );
const { UserController, TaskController } = require( '../controllers' );

const router = express.Router();

router.route( '/user(/:id)?' )
      .post( UserController.createUser )
      .get( UserController.getUserById )
      .patch( UserController.updateUser )
      .delete( UserController.deleteUser );

module.exports = router;
