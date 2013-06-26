'use strict';

describe('Directive: six', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<six></six>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the six directive');
  }));
});
