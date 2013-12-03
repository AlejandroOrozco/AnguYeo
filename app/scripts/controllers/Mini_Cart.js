'use strict';

angular.module('anguYeoApp')
  .controller('MiniCartCtrl', function ($scope) {
    $scope.alimentos = [
    	{
    		name: 'Pan',
    		price: 2000,
    		active:true
    	},
    	{
    		name: 'Coca cola',
    		price: 1200,
    		active:false

    	},{
    		name: 'Buñuelos x 10',
    		price: 2000,
    		active:false

    	},{
    		name: 'Empanada',
    		price: 500,
    		active:false
    	},{
    		name: 'Papa',
    		price: 800,
    		active:false
    	},
    ];

    $scope.toggle = function  (s) {
    	s.active = !s.active;
    }

    $scope.total = function () {
    	var total = 0;

    	angular.forEach($scope.alimentos, function(s){
    		if (s.active) {
    			total+= s.price;
    		};
    	});

    	return total;
    }
  });
