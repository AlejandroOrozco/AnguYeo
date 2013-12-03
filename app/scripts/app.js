'use strict';

angular.module('anguYeoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Mini_Cart', {
        templateUrl: 'views/Mini_Cart.html',
        controller: 'MiniCartCtrl'
      })
      .when('/Calculator', {
        templateUrl: 'views/Calculator.html',
        controller: 'CalculatorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
