'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Goods = mongoose.model('Goods');
//,
 // _ = require('lodash');

/**
 * Find good by id
 */
exports.good = function(req, res, next, id) {
  Goods.load(id, function(err, good) {
    if (err) return next(err);
    if (!good) return next(new Error('Failed to load good ' + id));
    req.good = good;
    next();
  });
};


/**
 * Create an good
 */
exports.create = function(req, res) {
  var good = new Goods(req.body);
  good.user = req.user;

  good.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the good'
      });
    }
    res.json(good);

  });
};

/**
 * List of goods
 */
exports.all = function(req, res) {
  Goods.find().sort('-created').populate('user', 'name username').exec(function(err, goods) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the goods'
      });
    }
    res.json(goods);

  });
};

/**
 * Show an good
 */
exports.show = function(req, res) {
  res.json(req.good);
};
