'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('drakeApp', [angular_route]);

app.run(['$rootScope', function($rootScope){
  $rootScope.imageData = require('./data/images.js');
  $rootScope.errorMessage = 'Cannot access unknown page';
}]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/view/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/thumbnail', {
      templateUrl: '/app/view/thumbnail/thumbnail.html',
      controller: 'ThumbnailController',
      controllerAs: 'thumb'
    })
    .when('/full/:id', {
      templateUrl: '/app/view/full/full.html',
      controller: 'FullController',
      controllerAs: 'full'
    })
    .when('/error', {
      templateUrl: '/app/view/error/error.html',
      controller: 'ErrorController',
      controllerAs: 'error'
    })
    .when('/sample', {
      templateUrl: '/app/view/sample/sample.html',
      controller: 'SampleController',
      controllerAs: 'sample'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);

// angular components
require('./view/home');
require('./view/thumbnail');
require('./view/full');
require('./view/error');
