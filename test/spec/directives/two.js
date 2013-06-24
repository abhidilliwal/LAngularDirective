'use strict';

describe('Directive: two', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<two></two>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the two directive');
  }));
});
