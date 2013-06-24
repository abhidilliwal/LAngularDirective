'use strict';

angular.module('angdirectiveApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('angdirectiveApp').run(['$templateCache', function (tc){
  tc.put("two.html", "<p>Me coming from template chache</p>");
}]);
