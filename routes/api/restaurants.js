import restaurantController from '../../controller/restaurants-controller.js';

export default {

    group: {
      prefix: '/restaurants',
    },
    routes: [
      {
        method: 'get',
        path: '/',
        handler: restaurantController.getrestaurants,
      },
      {
        method: 'get',
        path: '/:id',
        handler: restaurantController.getrestaurant,
      },
      {
        method: 'post',
        path: '/',
        handler: restaurantController.createrestaurants,
      },
      {
        method: 'put',
        path: '/:id',
        handler: restaurantController.updaterestaurants,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: restaurantController.deleterestaurants,
      },
    ],
  };

