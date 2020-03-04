const express = require( 'express' );
const router = require( './routers' );
const cors = require( 'cors' );
const PORT = process.env.NODE_PORT || 3000;
const path = require( 'path' );
const app = express();
app.use( cors() );
app.use( express.json() );

app.use( express.static( path.resolve( __dirname, '../public' ) ) );

app.post( '/api/refresh', (req, res, next) => {
  res.send( '6' );
} );

app.use( '/api', router );

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );
