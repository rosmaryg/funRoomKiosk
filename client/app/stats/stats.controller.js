'use strict';

(function(){

class StatsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('funRoomApp')
  .component('stats', {
    templateUrl: 'app/stats/stats.html',
    controller: StatsComponent,
    controllerAs: 'statsCtrl'
  });

})();
