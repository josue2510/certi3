const mongoose = require('mongoose')
const {Schema} = mongoose
const personSchema = new Schema({
    name : {type : String, require:"true"},
    lastName : {type : String, require:"true"},
    date : {type : Date, default : Date.now}


})
module.exports = mongoose.model('users', personSchema)