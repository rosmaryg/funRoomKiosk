'use strict';

describe('Component: StatsComponent', function () {

  // load the controller's module
  beforeEach(module('funRoomApp'));

  var StatsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    StatsComponent = $componentController('stats', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
