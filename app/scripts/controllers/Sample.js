'use strict';

angular.module('angdirectiveApp')
  .controller('SampleCtrl', function ($scope) {
    $scope.config = {
      a: 1,
      b: [1,2,3],
      c: {
        prop1: "something"
      }
    }
  });
