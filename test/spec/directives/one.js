'use strict';

describe('Directive: one', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<one></one>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the one directive');
  }));
});
