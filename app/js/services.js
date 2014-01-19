'use strict';

/* Services */

var valtechPokerAppServices = angular.module('valtechPokerApp.services', []);

valtechPokerAppServices.value('version', '0.1');

valtechPokerAppServices.factory('cardList', function(){
    return ['0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', 'question', 'break'];
});