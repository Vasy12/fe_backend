const express = require( 'express' );
const taskRouter = express.Router();
const { TaskController } = require( '../controllers' );

taskRouter.route( '/task(/:id)?' )
          .post( TaskController.createTask )
          .get( TaskController.getTaskById )
          .patch( TaskController.updateTaskById )
          .delete( TaskController.deleteTaskById );

module.exports = taskRouter;
