const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    contact: {
        type: String,
    },
    DOB: {
        type: Date,
    },
    token:{
        type:String,
    }
}, {
    timestamps: true // Enable timestamps
});

const User = mongoose.model('User', userSchema);

module.exports = User;

