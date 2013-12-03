'use strict';

angular.module('anguYeoApp')
  .controller('CalculatorCtrl', function ($scope) {
 	$scope.press =function  (key) {
 		if (key!='+' && key!='*' && key!='-' && key!='/' && key!='=' && key!='cc') {
 			$scope.output += ''+key;   
 		}else{
 			switch(key){
 				case "+":
 					$scope.reserved = $scope.output;
 					$scope.operation = "+";
 					$scope.output = '';
 				break;
 				case "*":
 					$scope.reserved = $scope.output;
 					$scope.operation = "*";
 					$scope.output = '';
 				break;
 				case "/":
 					$scope.reserved = $scope.output;
 					$scope.operation = "/";
 					$scope.output = '';
 				break;
 				case "-":
 					$scope.reserved = $scope.output;
 					$scope.operation = "-";
 					$scope.output = '';
 				break;
 				case "cc":
 					$scope.reserved = "";
 					$scope.operation = "";
 					$scope.output = '';
 				break;
 				case "=":
 					switch($scope.operation){
 						case "+":
 							$scope.output = parseInt($scope.reserved) + parseInt($scope.output);
 						break;
 						case "*":
 							$scope.output = parseInt($scope.reserved) * parseInt($scope.output);
 						break;
 						case "-":
 							$scope.output = parseInt($scope.reserved) - parseInt($scope.output);
 						break;
 						case "/":
 							$scope.output = parseInt($scope.reserved) / parseInt($scope.output) ;
 						break;
 					}
 				break;
 			}
 		}
 	}



  });
