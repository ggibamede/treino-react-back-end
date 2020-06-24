const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    titulo : {
        type : String,
        required : true
    },
    descricao : {
        type : String,
        required  : true
    },
    id_user : {
        type : String,
        required  : true
    }
});


module.exports = mongoose.model('Posts', postSchema);
