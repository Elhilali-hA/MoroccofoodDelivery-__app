import userController from '../../controller/users-controller.js';

export default {

    group: {
      prefix: '/users',
    },
    routes: [
      {
        method: 'get',
        path: '/',
        handler: userController.getusers,
      },
      {
        method: 'get',
        path: '/:id',
        handler: userController.getuser,
      },
      {
        method: 'post',
        path: '/',
        handler: userController.createuser,
      },
      {
        method: 'put',
        path: '/:id',
        handler: userController.updateuser,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: userController.deleteuser,
      },
    ],
  };

