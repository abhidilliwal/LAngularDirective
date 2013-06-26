'use strict';

describe('Directive: seven', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<seven></seven>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the seven directive');
  }));
});
