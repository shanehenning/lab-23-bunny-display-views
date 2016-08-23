'use strict';

const angular = require('angular');
const drakeApp = angular.module('drakeApp');

drakeApp.controller('SampleController', ['$rootScope', function($rootScope){
  this.images = $rootScope.imageData;
}]);
