'use strict';

angular.module('funRoomApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/upcoming', {
        template: '<upcoming></upcoming>'
      });
  });
