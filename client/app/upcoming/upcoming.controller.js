'use strict';

(function(){

class UpcomingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('funRoomApp')
  .component('upcoming', {
    templateUrl: 'app/upcoming/upcoming.html',
    controller: UpcomingComponent,
    controllerAs: 'upcomingCtrl'
  });

})();
