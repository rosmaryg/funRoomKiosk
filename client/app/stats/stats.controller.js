'use strict';

(function(){

class StatsComponent {
  constructor($location, $anchorScroll) {
    this.message = 'Hello';
    $location.hash("topOfPictures");
    $anchorScroll();
  }
}

angular.module('funRoomApp')
  .component('stats', {
    templateUrl: 'app/stats/stats.html',
    controller: StatsComponent,
    controllerAs: 'statsCtrl'
  });

})();
