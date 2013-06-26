'use strict';

angular.module('angdirectiveApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/five', {
        templateUrl: 'views/five.html',
        controller: 'MainCtrl'
      })
      .when('/six', {
        templateUrl: 'views/six.html',
        controller: 'MainCtrl'
      })
      .when('/seven', {
        templateUrl: 'views/seven.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('angdirectiveApp').run(['$templateCache', function (tc){
  tc.put("two.html", "<p>Me coming from template chache</p>");
}]);
