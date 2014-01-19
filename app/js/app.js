'use strict';


// Declare app level module which depends on filters, and services
angular.module('valtechPokerApp', [
  'ngRoute',
  'valtechPokerApp.filters',
  'valtechPokerApp.services',
  'valtechPokerApp.directives',
  'valtechPokerApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cards', {templateUrl: 'partials/card-list.html', controller: 'CardListController'});
  $routeProvider.when('/card/:cardIndex', {templateUrl: 'partials/card-detail.html', controller: 'CardDetailController'});
  $routeProvider.when('/card/:cardIndex/back', {templateUrl: 'partials/card-detail-back.html', controller: 'CardDetailBackController'});
  $routeProvider.otherwise({redirectTo: '/cards'});
}]);
