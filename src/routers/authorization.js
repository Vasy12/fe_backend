const express = require( 'express' );
const { ACTION } = require( './../constants' );
const { userSchema } = require( './../utils/validation' );
const { createValidationMW } = require( './../middlewares/validation' );
const { UserController } = require( '../controllers' );

const authorizationRoute = express.Router();

authorizationRoute.post( '/sign_up',
                         createValidationMW( userSchema )( ACTION.CREATE ),
                         UserController.createUser
);

module.exports = authorizationRoute;
