import userController from '../../controller/users-controller.js';
import authrization from '../../middlewares/authorization.js'
import auth from '../../middlewares/authentification.js'

export default {

    group: {
      prefix: '/users',
      middlewares: [
        auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin', 'chef_secteur');
        },
      ],
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
        handler: userController.updateusers,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: userController.deleteusers,
      },
      {
        method: 'post',
        path: '/profile',
        handler: userController.profile,
      },
      {
        method: 'get',
        path: '/profile/:id',
        handler: userController.getprofile,
      },
      
    ],
  };

