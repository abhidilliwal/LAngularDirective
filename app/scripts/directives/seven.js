'use strict';

//L7: about the DOM manipulation 
// refer URL -> #/six

/**
 * Just take the element and modify the CSS dom a little bit
 */
angular.module('angdirectiveApp')
  .directive('seven', function () {
    return {
      transclude: true,
      template: '<div class=seven>This is 7th Step.<div ng-transclude></div></div>',
      controller: function Something() {
        this.some = "something here";
      },
      link: function postLink(scope, element, attrs) {
        element.css({'border': '1px solid gray'});
        console.dir(element.controller());
        console.dir(element.injector());
        console.dir(element.scope());
        element.bind('click', function (e){
          console.log("the element was clicked");
          e.stopPropagation();
        });
      }
    };
  });
