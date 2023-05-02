//dependencies
const mongoose = require('mongoose')
const {Schema} = mongoose

//schema
const breadSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  hasGluten: Boolean,
  image: {
    type: String,
    default: '/images/default-bread.jpg'
  },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

//helper method
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread