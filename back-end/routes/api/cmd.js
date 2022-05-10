import cmdController from '../../controller/cmd-controller.js';
import authrization from '../../middlewares/authorization.js'
import auth from '../../middlewares/authentification.js'

export default {

    group: {
      prefix: '/commandes',
      middlewares: [
        auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin', 'chef_secteur','client');
        },
      ],
    },
    routes: [
      {
        method: 'get',
        path: '/:id',
        handler: cmdController.getonecmd,
      },
      {
        method: 'get',
        path: '/',
        handler: cmdController.getcmd,
      },
      {
        method: 'post',
        path: '/',
        handler: cmdController.createcmd,
      },
      {
        method: 'put',
        path: '/:id',
        handler: cmdController.updatecmd,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: cmdController.deletecmd,
      }
      
    ],
  };

