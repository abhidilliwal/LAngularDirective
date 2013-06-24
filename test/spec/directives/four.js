'use strict';

describe('Directive: four', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<four></four>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the four directive');
  }));
});
