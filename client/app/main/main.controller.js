'use strict';

(function() {

  class MainController {
    constructor() {


    }

    $onInit() {

    }

    goTo(state) {
      location.href = state;
    }
  }

  angular.module('funRoomApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'main'
    });
})();
