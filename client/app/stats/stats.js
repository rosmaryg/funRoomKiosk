'use strict';

angular.module('funRoomApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stats', {
        template: '<stats></stats>'
      });
  });
