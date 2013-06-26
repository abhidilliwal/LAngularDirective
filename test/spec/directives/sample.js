'use strict';

describe('Directive: sample', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<sample></sample>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the sample directive');
  }));
});
