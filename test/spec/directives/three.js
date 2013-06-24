'use strict';

describe('Directive: three', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<three></three>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the three directive');
  }));
});
