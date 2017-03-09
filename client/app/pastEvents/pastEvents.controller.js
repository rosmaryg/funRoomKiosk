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
        for (var key in this.folders) {
          this.photoService.getPhotos(this.folders[key].name)
            .then(resp => {
              for (var key in this.folders) {
                if (this.folders[key].name === resp.data[0].src.split('/')[4]) {
                  this.folders[key].image = resp.data[0].src;
                }
              }
            });
        }
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
