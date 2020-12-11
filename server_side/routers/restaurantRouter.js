const { Router } = require('express');
const { restaurantController } = require('../controller/restaurant.ctrl')

const router = new Router();

router.get('/', restaurantController.getRestaurants);           
router.get('/:id', restaurantController.getRestaurant);         
router.post('/', restaurantController.addRestaurant);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestauran);

module.exports = { router }