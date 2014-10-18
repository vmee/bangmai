'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Goods Schema
 */
var GoodsSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  goodsUrl: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
GoodsSchema.path('goodsUrl').validate(function(goodsUrl) {
  return !!goodsUrl;
}, 'goodsUrl cannot be blank');

/**
 * Statics
 */
GoodsSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Goods', GoodsSchema);
