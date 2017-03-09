'use strict';

(function(){

class UpcomingComponent {
  constructor($location, $anchorScroll) {
    this.message = 'Hello';
    $location.hash("topOfPictures");
    $anchorScroll();
  }
}

angular.module('funRoomApp')
  .component('upcoming', {
    templateUrl: 'app/upcoming/upcoming.html',
    controller: UpcomingComponent,
    controllerAs: 'upcomingCtrl'
  });

})();
