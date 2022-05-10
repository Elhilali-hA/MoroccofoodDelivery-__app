import cmdController from '../../controller/cmd-controller.js';
import authrization from '../../middlewares/authorization.js'
import auth from '../../middlewares/authentification.js'

export default {

    group: {
      prefix: '/assigned_commandes',
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
        path: '/:id',
        handler: cmdController.getone_assignedcmd,
      },
      {
        method: 'get',
        path: '/',
        handler: cmdController.get_assignedcmd,
      },
      {
        method: 'post',
        path: '/',
        handler: cmdController.create_assignedcmd,
      },
      {
        method: 'put',
        path: '/:id',
        handler: cmdController.update_assignedcmd,
      },
    
      
    ],
  };

