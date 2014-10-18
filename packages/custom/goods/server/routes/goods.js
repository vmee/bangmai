'use strict';

var goods = require('../controllers/goods');

// Article authorization helpers

var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.good.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};


module.exports = function(Goods, app, auth) {

  app.route('/goods')
    .get(goods.all)
    .post(auth.requiresLogin, goods.create);
   
  app.route('/goods/:goodId')
    .get(goods.show);
    //.put(auth.requiresLogin, hasAuthorization, goods.update)
    //.delete(auth.requiresLogin, hasAuthorization, goods.destroy);
    
  // Finish with setting up the articleId param
  app.param('goodId', goods.good);
};


/**
// The Package is past automatically as first parameter
module.exports = function(Goods, app, auth, database) {

    app.get('/goods', function(req, res, next) {
    res.send('goods success');
  });

  
    app.get('/goods/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/goods/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/goods/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/goods/example/render', function(req, res, next) {
    Goods.render('index', {
      package: 'goods'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};**/
