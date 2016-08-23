'use strict';
require('./error.scss');

const angular = require('angular');
const drakeApp = angular.module('drakeApp');

drakeApp.controller('ErrorController', ['$rootScope', function($rootScope){
  this.errorMessage = $rootScope.errorMessage;
}]);
