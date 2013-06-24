'use strict';

// L3: loading from inline template
angular.module('angdirectiveApp')
  .directive('three', function () {
    return {
      templateUrl: 'three.html' // see index.html file
    };
  });
