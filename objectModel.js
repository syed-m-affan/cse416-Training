const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Object = new Schema({

    objectText: {
        type: String
    },

    objectColor:{
        type: String
    },

    objectSize:{
        type: String
    }
});

module.exports = mongoose.model('Object', Object);