'use strict';

angular.module('angdirectiveApp').controller('MainCtrl', function ($scope) {
  $scope.things = ["bank", "goo", "parents"];
  $scope.name = "Abhishek Dilliwal";

  $scope.btnClick = function (){
    $scope.name = "This is changed from controller";
  }
});
