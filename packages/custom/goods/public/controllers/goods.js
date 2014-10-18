'use strict';

angular.module('mean.goods').controller('GoodsController', ['$scope', '$stateParams','Global', 'Goods', '$location',
  function($scope, $stateParams, Global, Goods, $location) {
    $scope.global = Global;
    $scope.package = {
      name: 'goods'
    };
      
    $scope.hasAuthorization = function(good) {
      if (!good || !good.user) return false;
      return $scope.global.isAdmin || good.user._id === $scope.global.user._id;
    };
    
    $scope.create = function(isValid) {
      if (isValid) {
        var goods = new Goods({
          goodsUrl: this.goodsUrl
        });
        goods.$save(function(response) {
          $location.path('goods/' + response._id);
        });

        this.goodsUrl = '';
      } else {
        $scope.submitted = true;
      }
    };
      
    $scope.find = function() {
      Goods.query(function(goods) {
        $scope.goods = goods;
      });
    };
    
    $scope.findOne = function(){
      Goods.get({
        goodId: $stateParams.goodId
      }, function(good) {
        $scope.good = good;
      });  
    };
}
]);
