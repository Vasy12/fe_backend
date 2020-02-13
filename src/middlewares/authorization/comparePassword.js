const { User } = require( '../../models' );
const bcrypt = require( 'bcrypt' );

module.exports = async (req, res, next) => {
  try {
    /*
     * {
     *   password: 'Artur1992',
     *   email: 'artur1992@gmail.com'
     * }
     *
     * */

    if (await bcrypt.compare( req.body.password, req.user.password )) {
      return next();
    }
    return res.status( 403 ).send( 'Invalid password.' );

  } catch (e) {
    next( e );
  }
};