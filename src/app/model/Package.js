const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


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

mongoose.plugin(slug);
Package.plugin(mongooseDelete, {
  overrideMethods: true,
  deletedAt: true,
})

module.exports = mongoose.model('Package', Package);