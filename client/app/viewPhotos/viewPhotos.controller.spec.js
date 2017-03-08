'use strict';

describe('Component: ViewPhotosComponent', function () {

  // load the controller's module
  beforeEach(module('funRoomApp'));

  var ViewPhotosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ViewPhotosComponent = $componentController('viewPhotos', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
