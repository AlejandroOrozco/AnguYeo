'use strict';

describe('Controller: MiniCartCtrl', function () {

  // load the controller's module
  beforeEach(module('anguYeoApp'));

  var MiniCartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiniCartCtrl = $controller('MiniCartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
