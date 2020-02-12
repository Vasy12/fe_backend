const { Task } = require( './../models' );

class TaskController {

  createTask = async (req, res, next) => {
    try {
      const createdTask = await Task.create( {
                                               ...req.body,
                                               userId: req.headers.authorization,
                                             } );
      res.send( createdTask );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  deleteTask = async (req, res, next) => {
    try {

      const deletedRowsCount = await Task.destroy( {
                                                     where: {
                                                       id: req.params.id
                                                     }
                                                   } );
      if (deletedRowsCount) {
        return res.send( 'Task has been deleted' );
      }

      return res.status( 404 ).send( 'Error 404: Task not found' );

    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  getTask = async (req, res, next) => {
    try {
      const Task = await Task.findByPk( req.params.id );
      if (Task) {
        return res.send( Task );
      }
      return res.status( 404 ).send( 'Error 404: Task not found' );
    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

  updateTask = async (req, res, next) => {
    try {
      const [updatedRowsCount, updatedRows] = await Task.update( req.body, {
        where: {
          id: req.params.id
        },
        returning: true,
      } );
      debugger;
      if (updatedRowsCount) {
        return res.send( updatedRows[0].get() );
      }
      return res.status( 404 ).send( 'Error 404: Task not found' );

    } catch (e) {
      return res.status( 400 ).send( 'Bad request' );
    }
  };

}

module.exports = new TaskController();