'use strict';

(function(){

class ViewPhotosComponent {
  constructor($routeParams) {
    this.message = 'Hello';
    this.event = $routeParams.event;
  }
}

angular.module('funRoomApp')
  .component('viewPhotos', {
    templateUrl: 'app/viewPhotos/viewPhotos.html',
    controller: ViewPhotosComponent,
    controllerAs: 'viewPhotosCtrl'
  });

})();
