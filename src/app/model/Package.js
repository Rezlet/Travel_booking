const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Package = new Schema({
   destination: { type: String },
   continent: { type: String },
   aim: { type: String },
   comment: { type: String },
   price: {type: Number},
   image: {type: String},
   color: {type: String}
  },  {
    timestamps: true
},);

module.exports = mongoose.model('Package', Package);