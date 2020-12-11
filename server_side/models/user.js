const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    balance: { type: Number },
    history: { type: Array }
}, { collection: 'users' });

const User = model('User', userSchema);

module.exports = User;