const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const Package = new Schema({
   destination: { type: String },
   continent: { type: String },
   aim: { type: String },
   comment: { type: String },
   price: {type: Number},
   image: {type: String},
   color: {type: String},
   slug: {type: String, slug: "destination", unique: true},
  },  {
    timestamps: true
},);

module.exports = mongoose.model('Package', Package);