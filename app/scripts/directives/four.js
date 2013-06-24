'use strict';

// L4: using transclude
angular.module('angdirectiveApp')
  .directive('four', function () {
    return {
      replace: true,
      // we are keeping the transclude ON which will make the content inside the tag go inside ng-transclude tag
      transclude: true,

      // NOTE: the ng-transclude
      template: '<div class="four"><h1>A good heading</h1><p ng-transclude></p></div>'
    };
  });
