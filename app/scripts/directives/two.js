'use strict';

// L2: fetching the template from the cache see app.js run block
angular.module('angdirectiveApp')
  .directive('two', function () {
    return {
      templateUrl: 'two.html', // see the app.js run block
    };
  });
