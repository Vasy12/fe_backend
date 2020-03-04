const express = require( 'express' );
const { User } = require( './../models' );
const adminRouter = express.Router();

adminRouter.route( '/users' )
           .get( async (req, res, next) => {
             try {
               const users = await User.findAll( {
                                                   limit: req.query.limit || 40,
                                                   offset: req.query.offset || 0,
                                                   attributes: {
                                                     exclude: ['password']
                                                   }
                                                 } );
               res.send( users );
             } catch (e) {
               next( e );
             }
           } );

module.exports = adminRouter;

