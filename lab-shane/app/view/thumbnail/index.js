'use strict';

const angular = require('angular');
const drakeApp = angular.module('drakeApp');

drakeApp.controller('ThumbnailController', ['$rootScope', function($rootScope){
  this.images = $rootScope.imageData;
}]);
