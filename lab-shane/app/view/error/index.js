'use strict';

const angular = require('angular');
const drakeApp = angular.module('drakeApp');

drakeApp.controller('ErrorController', ['$rootScope', function($rootScope){
  this.errorMessage = $rootScope.errorMessage;
}]);
