'use strict';

function photoService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  var urlBase = 'api/photos';

  function getEvents(){
    return $http.get(urlBase);
  }

  function getPhotos(event){
    return $http.get(urlBase + "/" + event);
  }
  return {
    getEvents: getEvents,
    getPhotos: getPhotos
  };
}

angular.module('funRoomApp')
  .service('photoService', photoService);
