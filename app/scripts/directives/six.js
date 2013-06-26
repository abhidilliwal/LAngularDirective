'use strict';

// L6: understanding the scope type
// refer URL -> #/six

// USING: scope: false
// uses the parent scope as it is!
angular.module('angdirectiveApp')
  .directive('six', function () {
    return {
      template: '<div class="six">Lets understand the scope: {{name}}</div>',
      scope: false, //default value of scope is false: meaning you dont extend the scope, you are using it as it is
      link: function (scope, element, attrs, controller){
        // here we are changing the main scope 
        // this should never be done when using scope as false
        scope.name = "changed";
        console.log("when scope: false", arguments);
      }
    };
  });

// USING: scope: true
// in this we will create a inherited scope
// if you see the console for link function you will notice that 
// the scope of this directive has inherited the controller scope.
angular.module('angdirectiveApp')
  .directive('six1', function () {
    return {
      template: '<div class="six1">Inherited scope: {{name}}</div>',
      scope: true, //we will inherit the scope in this
      link: function (scope, element, attrs, controller){
        scope.name = Math.random();
        console.log("when scope: true", arguments);
      }
    };
  });


// USING: scope: {}
// this will create an isolated scope for the directive which will not be using anything from the parent scope
// so if you see the console you will find that the scope __proto__ refers to a new scope and there is no inheritance
// though they are not prototypically inherited but they have a $parent property which refers to the parent scope
angular.module('angdirectiveApp')
  .directive('six2', function () {
    return {
      template: '<div class="six2">Isolated scope: {{name}}</div>',
      scope: {},
      link: function (scope, element, attrs, controller){
        scope.name = "six2 value";
        console.log("when scope: {}", arguments);
      }
    };
  });

// using scope: {=}
// this will again create a isolated scope but this will keep sync between the attrib value and the attrib value provided
angular.module('angdirectiveApp')
  .directive('six3', function ($timeout) {
    return {
      template: '<div class="six3">Isolated scope with binded attribs: {{name}}</div>',
      scope: {
        // this will create a local scope named "name" which will be binded internally by the 
        // expression/scopeVariable provided in six-name attribute
        name: "=sixName"
      },
      link: function (scope, element, attrs, controller){
        $timeout(function (){
          scope.name = "changed by six3 directive";
        }, 1000);
        console.log("when scope: {=}", arguments);
      }
    };
  });

// using scope: {@}
// creates a isolated scope but binds the interpolated data ({{}}) via attribs
angular.module('angdirectiveApp')
  .directive('six4', function ($timeout) {
    return {
      template: '<div class="six4" style="color: blue;">Isolated scope with binded interpolated attribs: {{name}}</div>',
      scope: {
        // this will create a local scope named "name" which will be binded internally by the 
        // expression/scopeVariable provided in six-name attribute
        name: "@sixName"
      },
      link: function (scope, element, attrs, controller){
        $timeout(function (){
          scope.name = "changed by six4 directive";
        }, 3000);
        console.log("when scope: {@}", arguments);
      }
    };
  });
