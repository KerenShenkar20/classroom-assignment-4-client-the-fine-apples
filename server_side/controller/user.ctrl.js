const User = require('../models/user');

exports.userController = { 
    getUsers(req, res) {
        User.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    },
    getUser(req, res) {
        User.find({ id: req.params.id })
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    },
    addUser(req, res){
        const { body } = req
        const user = new User();
        user.id = user.id
        user.firstName = body.firstName
        user.lastName = body.lastName
        user.email = body.email
        user.balance = body.balance
        user.history = body.history

        user.save()
            .then(res.send(`New user was added`))
            .catch(err => console.log(err))
    }, 
    updateUser(req, res){ 
        const { body } = req
        const user = {};
        user.id = user.id
        user.firstName = body.firstName
        user.lastName = body.lastName
        user.email = body.email
        user.balance = body.balance
        user.history = body.history
        
        const query = {id: req.params.id}

        User.updateOne(query, user)
            .then(res.send(`User was updated`))
            .catch(err => console.log(err))
    },
    deleteUser(req, res){  
        const query = {id: req.params.id}
        
        User.deleteOne(query)
            .then(res.send(`User was deleted`))
            .catch(err => console.log(err))
    }
}