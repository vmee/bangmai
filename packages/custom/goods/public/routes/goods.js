'use strict';

angular.module('mean.goods').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('all goods', {
      url: '/goods',
      templateUrl: 'goods/views/list.html'
    });
    
    $stateProvider.state('create goods', {
      url: '/goods/create',
      templateUrl: 'goods/views/create.html'
    });
      
    $stateProvider.state('goods by id', {
        url:'/goods/:goodId',
        templateUrl: 'goods/views/view.html'
    });
  }
]);
