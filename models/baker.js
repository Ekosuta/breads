//dependencies
const mongoose = require('mongoose')
const {Schema} = mongoose
const Bread = require('./bread')
const breads = require('../controllers/breads_controller')

//schema
const bakerSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        enum: ['Rachel', 'Monica', 'Chandler', 'Joey', 'Ross', 'Pheobe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
}, {toJSON: {virtuals: true}})

//virtual
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

//model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker