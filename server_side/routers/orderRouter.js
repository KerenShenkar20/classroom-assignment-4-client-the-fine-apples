const { Router } = require('express');
const { orderController } = require('../controller/order.ctrl')

const router = new Router();

router.get('/', orderController.getOrders);           
router.get('/:id', orderController.getOrder);
router.post('/', orderController.addOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = { router }