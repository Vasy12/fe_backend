const { User } = require( './../../models' );
const { ResourceNotFoundError } = require( './../../utils/errors' );
module.exports = async (req, res, next) => {
  try {

    req.user = await User.findOne( {
                                     where: {
                                       email: req.body.email,
                                     }
                                   } );
    if (req.user) {
      return next();
    }
    next( new ResourceNotFoundError( User.name ) );

  } catch (e) {
    next( e );
  }
};