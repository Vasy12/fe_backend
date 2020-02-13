const express = require( 'express' );
const { UserController, TaskController } = require( './controllers' );

const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use( express.json() );

app.post( '/login',
          UserController.getUserByEmail,
          comparePassword,
          generateTokenPair,
          saveRefreshTokenToDb,
          sendUser
);

app.post( '/user', UserController.createUser );

app.get( '/user/:id', UserController.getUser );

app.patch( '/user/:id', UserController.updateUser );

app.delete( '/user/:id', UserController.deleteUser );

app.post( '/Task', TaskController.createTask );

app.get( '/Task/:id', TaskController.getTask );

app.patch( '/Task/:id', TaskController.updateTask );

app.delete( '/Task/:id', TaskController.deleteTask );

app.use(
  (req, res, next) => {
    try {
      res.send( req.data );

    } catch (e) {
      next( e );
    }
  }
);

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );
