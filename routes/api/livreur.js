import livreurController from '../../controller/livreur-controller.js';

export default {

    group: {
      prefix: '/livreurs',
    },
    routes: [
      {
        method: 'get',
        path: '/',
        handler: livreurController.getlivreurs,
      },
      {
        method: 'get',
        path: '/:id',
        handler: livreurController.getlivreur,
      },
      {
        method: 'post',
        path: '/',
        handler: livreurController.createlivreur,
      },
      {
        method: 'put',
        path: '/:id',
        handler: livreurController.updatelivreur,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: livreurController.deletelivreur,
      },
    ],
  };

