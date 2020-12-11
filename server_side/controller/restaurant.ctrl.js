const Restaurant = require('../models/restaurant');

exports.restaurantController = {
    getRestaurants(req, res) {
        Restaurant.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    },
    getRestaurant(req, res) {
        Restaurant.find({ id: req.params.id })
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    },
    addRestaurant(req, res) {
        const { body } = req
        const restaurant = new Restaurant();
        restaurant.id = body.id
        restaurant.name = body.name
        restaurant.location = body.location
        restaurant.stars = body.stars

        restaurant.save()
            .then(res.send(`New restaurant was added`))
            .catch(err => console.log(err))
    },
    updateRestaurant(req, res){ 
        const { body } = req
        const restaurant = {};
        restaurant.id = body.id
        restaurant.name = body.name
        restaurant.location = body.location
        restaurant.stars = body.stars

        const query = {id: req.params.id}

        Restaurant.updateOne(query, restaurant)
            .then(res.send(`Restaurant was updated`))
            .catch(err => console.log(err))
    },
    deleteRestauran(req, res){
        const query = {id: req.params.id}
        
        Restaurant.deleteOne(query)
            .then(res.send(`Restaurant was deleted`))
            .catch(err => console.log(err))
    }
}