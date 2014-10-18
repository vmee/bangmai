'use strict';

//Goods service used for Goods REST endpoint
angular.module('mean.goods').factory('Goods', ['$resource',
  function($resource) {
    return $resource('goods/:goodId', {
      goodId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
