'use strict';

const angular = require('angular');
const drakeApp = angular.module('drakeApp');

drakeApp.controller('HomeController', ['$rootScope', function($rootScope) {
  this.images = $rootScope.imageData;
}]);
