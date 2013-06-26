'use strict';

angular.module('angdirectiveApp')
.directive('sample', function () {
  return {
    replace: true,
    scope: {
      config: '=sampleConfig'
    },
    template: '<div>Something <button ng-click="changeA()">Change A</button> </div>',
    link: function (scope, e, attr, controller) {
      scope.changeA = function () {
        scope.config.a = 22;
        scope.config.b.push(34);
        scope.config.c.prop2 = "chaman";
      };
    }
  };
});
