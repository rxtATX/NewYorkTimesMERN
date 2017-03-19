var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NewYorkSchema = new Schema ({
    title: {
        type:String
    },
    date: {
        type:String
    },
    url: {
        type:Date 
    }
});

module.exports = NewYorkSchema;