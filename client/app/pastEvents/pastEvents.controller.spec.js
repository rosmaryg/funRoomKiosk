'use strict';

describe('Component: PastEventsComponent', function () {

  // load the controller's module
  beforeEach(module('funRoomApp'));

  var PastEventsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PastEventsComponent = $componentController('pastEvents', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
