'use strict';

angular.module('funRoomApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewPhotos/:event', {
        template: '<view-photos></view-photos>'
      });
  });
