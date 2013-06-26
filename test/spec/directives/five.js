'use strict';

describe('Directive: five', function () {
  beforeEach(module('angdirectiveApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<five></five>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the five directive');
  }));
});
