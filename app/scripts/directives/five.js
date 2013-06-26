'use strict';

// L5: understanding the compiler and linker
// refer URL -> #/five
angular.module('angdirectiveApp').directive('five', function () {

    console.log('[A] five: init');

    return {
      /**
       * if you make the transclude true you will see that
       */
      transclude: true,
      template: '<div class="five">See the console <div ng-transclude></div></div>',
      compile: function (tElement, tAttrs, transclude) {
        debugger;
        console.log('[B] compiling: tElement, tAttrs, transclude ::', arguments);
        return {
          pre: function preLink(scope, iElement, iAttrs, controller){
            console.log('[C] compiling prelink: scope, iElement, iAttrs, controller :: ', arguments);
          },
          post: function postLink(scope, iElement, iAttrs, controller){
            console.log('[D] compiling postlink: scope, iElement, iAttrs, controller :: ', arguments);
          }
        };
      },
      link: function postLink(scope, element, attrs) {
        // if the [D] is provided this code will never be executed
        console.log('[E] link: scope, element, attrs :: ', arguments);
      }
    };
  });


angular.module('angdirectiveApp').directive('five1', function () {

    console.log('[A1] five: init');

    return {
      transclude: true,
      template: '<div class="five">See the console for1 <div ng-transclude></div></div>',
      compile: function (tElement, tAttrs, transclude) {
        console.log('[B1] compiling: tElement, tAttrs, transclude ::', arguments);
        return {
          pre: function preLink(scope, iElement, iAttrs, controller){
            console.log('[C1] compiling prelink: scope, iElement, iAttrs, controller :: ', arguments);
          },
          post: function postLink(scope, iElement, iAttrs, controller){
            console.log('[D1] compiling postlink: scope, iElement, iAttrs, controller :: ', arguments);
          }
        }
      },
      link: function postLink(scope, element, attrs) {
        console.log('[E1] link: scope, element, attrs :: ', arguments);
      }
    };
  });