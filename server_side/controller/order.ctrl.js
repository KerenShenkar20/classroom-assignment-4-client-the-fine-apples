const Order = require('../models/order');

exports.orderController = { 
    getOrders(req, res) {
        Order.find({})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
    },
    getOrder(req, res) {
        Order.find({ id: req.params.id })
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
    },
    addOrder(req, res){
        const { body } = req
        const order = new Order();
        order.id = body.id
        order.price = body.price
        order.dishId = body.dishId
        order.restaurantId = body.restaurantId

        order.save()
            .then(res.send(`New order was added`))
            .catch(err => console.log(err))
    }, 
    updateOrder(req, res){ 
        const { body } = req
        const order = {};
        order.id = body.id
        order.price = body.price
        order.dishId = body.dishId
        order.restaurantId = body.restaurantId
        
        const query = {id: req.params.id}

        Order.updateOne(query, order)
            .then(res.send(`Order was updated`))
            .catch(err => console.log(err))
    },
    deleteOrder(req, res){  
        const query = {id: req.params.id}
        
        Order.deleteOne(query)
            .then(res.send(`Order was deleted`))
            .catch(err => console.log(err))
    }
}