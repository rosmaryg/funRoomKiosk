'use strict';

angular.module('funRoomApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pastEvents', {
        template: '<past-events></past-events>'
      });
  });
