'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Goods = new Module('goods');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Goods.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Goods.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Goods.menus.add({
    title: '商品',
    link: 'all goods',
    roles: ['authenticated'],
    menu: 'main'
  });
    
  Goods.menus.add({
    title: '新增商品',
    link: 'create goods',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Goods.aggregateAsset('css', 'goods.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Goods.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Goods.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Goods.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Goods;
});
