const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    id: { type: Number },
    price: { type: Number },
    dishId: { type: String},
    restaurantId: { type: Number}
}, { collection: 'orders' });

const Order = model('Order', orderSchema);

module.exports = Order;