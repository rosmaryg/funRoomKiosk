'use strict';

(function(){

class ViewPhotosComponent {
  constructor($routeParams, $location, $anchorScroll) {
    this.message = 'Hello';
    this.event = $routeParams.event;
    $location.hash("topOfPictures");
    $anchorScroll();
  }
}

angular.module('funRoomApp')
  .component('viewPhotos', {
    templateUrl: 'app/viewPhotos/viewPhotos.html',
    controller: ViewPhotosComponent,
    controllerAs: 'viewPhotosCtrl'
  });

})();
