'use strict';

(function(){

class PastEventsComponent {

  constructor(photoService) {
    this.message = 'Hello';
    this.folders = [];
    this.photoService = photoService;
    this.photoService.getEvents()
      .then(resp => {
        this.folders = resp.data;
      });
  }

  goTo(state) {
    location.href = "viewPhotos/" + state;
  }
}

angular.module('funRoomApp')
  .component('pastEvents', {
    templateUrl: 'app/pastEvents/pastEvents.html',
    controller: PastEventsComponent,
    controllerAs: 'pastEventsCtrl'
  });

})();
