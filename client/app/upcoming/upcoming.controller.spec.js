'use strict';

describe('Component: UpcomingComponent', function () {

  // load the controller's module
  beforeEach(module('funRoomApp'));

  var UpcomingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UpcomingComponent = $componentController('upcoming', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
