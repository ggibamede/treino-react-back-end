const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required  : true
    },
    login : {
        type : String,
        required  : true
    },
    senha : {
        type : String,
        required  : true
    }
});


module.exports = mongoose.model('Users', UserSchema);
