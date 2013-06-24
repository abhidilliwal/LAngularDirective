'use strict';

// L1: basic directive using replace, and using a HTML file as template which is in this same folder
angular.module('angdirectiveApp').directive('one', function () {
    return {
      restrict: 'EA',
      /**
       * You must know that when you using the external template using templateUrl and replace as true
       * the template must have a SINGLE NODE
       * VALID: 
       * <div>
       *   <p>child node 1</p>
       *   <span>another child node</span>
       * </div>
       * INVALID: 
       * <p>child node 1</p>
       * <span>another child node</span>
       */
      replace: true,
      templateUrl: 'scripts/directives/one.html'
      // template: '<div>Hello this is a simple directive</div>'
    };
});
