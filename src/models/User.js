const mongoose = require('mongoose');
const brcypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password is too short!'],
    }
});

userSchema.pre('save', function(){
     brcypt.hash(this.password, 10)
     .then (hash => {
        this.password = hash;
        next();
     });
});
const User = mongoose.model('User', userSchema);

module.exports= User;