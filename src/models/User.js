const mongoose = require('mongoose');
const brcypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        unique: true,
        
        validate: {
            validator: function(value) {
                return /^[a-zA-Z0-9]+$/.test(value);
                
            },
            message: 'Username should consist only of latin letters and digits!'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password is too short!'],
        validate: /^[a-zA-Z0-9]+$/,
    },
    
});

userSchema.pre('save', function(next){
  brcypt.hash(this.password, 10)
     .then (hash => {
        this.password = hash;
        next();
     });
    // return isSaved;
});

userSchema.method('validatePassword', function(password){
    return brcypt.compare(password, this.password);
})

const User = mongoose.model('User', userSchema);

module.exports= User;