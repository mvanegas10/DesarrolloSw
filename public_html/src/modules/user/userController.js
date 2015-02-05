/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
	var app = angular.module('userModule', []);
        
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                                var date = new Date($scope.user.bornDate.valueOf());
                         
				alert("Guardado: " + $scope.user.firstName + " " + $scope.user.lastName + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getYear());

                        };
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();

