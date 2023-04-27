//require
const mongoose = require('mongoose')
//shorthand for schema constructor
const {Schema} = mongoose

//schema
const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'http://placehold.it/500x500.png'}
})

//model
const Bread = mongoose.model('Bread', breadSchema)
//export
module.exports = Bread