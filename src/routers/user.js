const express = require( 'express' );
const userRouter = express.Router();
const { UserController } = require( '../controllers' );

userRouter.route( '/user(/:id)?' )
          .post( UserController.createUser )
          .get( UserController.getUserById )
          .patch( UserController.updateUserById )
          .delete( UserController.deleteUserById );

module.exports = userRouter;
