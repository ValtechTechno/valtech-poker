'use strict';

/* Controllers */

var shakeEventDidOccur;

angular.module('valtechPokerApp.controllers', [])
	.controller('CardListController', ['$scope', '$location', '$window', 'cardList',
		function($scope, $location, $window, cardList) {
			$scope.cards = cardList;
			$scope.showCard = function($index){
				$location.path("/card/" + $index);
			};
			$scope.goToValtech = function(){
				$window.location.href = "http://valtech.com/";
			};
		}
	])
	.controller('CardDetailController', ['$scope', '$location', '$window', '$routeParams', 'cardList',
		function($scope, $location, $window, $routeParams, cardList) {
			$scope.card = cardList[$routeParams.cardIndex];
			$scope.isSelected = false;
			$scope.showBackSide = function(){
				window.removeEventListener('shake', shakeEventDidOccur, false);
				if (navigator.appName && navigator.appName == 'Microsoft Internet Explorer'){
					$location.path("/card/" + $routeParams.cardIndex + "/back");
				}
				$scope.isSelected = true;
			};
			$scope.gotoCardList = function(){
				$location.path("/cards");
			};
			shakeEventDidOccur = function(){
				var scope = angular.element(document.getElementById("poker")).scope();
				scope.$apply(function(){
					scope.showBackSide();
				});
			}
			window.addEventListener('shake', shakeEventDidOccur, false);
		}
	])
	.controller('CardDetailBackController', ['$scope', '$location', '$routeParams', 'cardList',
		function($scope, $location, $routeParams, cardList) {
			$scope.card = cardList[$routeParams.cardIndex];
			$scope.gotoCardList = function(){
				$location.path("/cards");
			};
		}
	]);