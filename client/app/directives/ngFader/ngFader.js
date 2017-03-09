(function () {
  'use strict';
  angular.module('funRoomApp')
    .directive('ngFader', function($interval, photoService) {

      function link(scope){

        //Set your interval time. 4000 = 4 seconds
        scope.setTime = 1500;
        if (scope.event === "stats") {
          scope.setTime = 5000;
        }
        if (scope.event === "upcoming") {
          scope.setTime = 3000;
        }
        scope.images = [];
        //List your images here.
        photoService.getPhotos(scope.event)
          .then(resp => {
            scope.images = resp.data;
            scope.numberOfImages = scope.images.length;
          });

        /*****************************************************
         STOP! NO FURTHER CODE SHOULD HAVE TO BE EDITED
         ******************************************************/

        //Pagination dots - gets number of images

        scope.dots = function(num) {
          return new Array(num);
        };

        //Pagination - click on dots and change image
        scope.selectedImage = 0;
        scope.setSelected = function (idx) {
          scope.stopSlider();
          scope.selectedImage = idx;
        };

        //Slideshow controls
        scope.sliderBack = function() {
          scope.stopSlider();
          scope.selectedImage === 0 ? scope.selectedImage = scope.numberOfImages - 1 : scope.selectedImage--;
        };

        scope.sliderForward = function() {
          scope.stopSlider();
          scope.autoSlider();
        };

        scope.autoSlider = function (){
          scope.selectedImage < scope.numberOfImages - 1 ? scope.selectedImage++ : window.history.back();
        };

        scope.stopSlider = function() {
          $interval.cancel(scope.intervalPromise);
          scope.activePause = true;
          scope.activeStart = false;
        };

        scope.toggleStartStop = function() {
          if(scope.activeStart) {
            scope.stopSlider();
          } else {
            scope.startSlider();
          }
        };

        scope.startSlider = function(){
          scope.intervalPromise = $interval(scope.autoSlider, scope.setTime);
          scope.activeStart = true;
          scope.activePause = false;
        };
        scope.startSlider();

        scope.show = function(idx){
          if (scope.selectedImage==idx) {
            return "show";
          }
        };


      }

      return {
        restrict: 'E',
        scope: {
          event: '@'
        },
        template: '<div class="ng-fader" style="height: 100%; width: auto;">'+
        //images will render here
        '<ul>' +
        '<li ng-repeat="image in images" ng-click="toggleStartStop()" ng-swipe-right="sliderBack()" ng-swipe-left="sliderForward()"><img data-ng-src="{{image.src}}" data-ng-alt="{{image.alt}}" ng-class="show($index)"/></li>' +
        '</ul>' +
        //pagination dots will render here
        '<div class="ng-fader-pagination">' +
        '<ul>' +
        '<li ng-repeat="i in dots(numberOfImages) track by $index" ng-class="{current: selectedImage==$index}" ng-click="setSelected($index)"></li>' +
        '</ul>' +
        '</div>' +
        //controls are here
        '<div class="ng-fader-controls">' +
        '<ul>' +
        '<li ng-click="sliderBack()">' +
        '<i class="ngfader-back"></i>' +
        '</li>' +
        '<li ng-click="stopSlider()">' +
        '<i class="ngfader-pause" ng-class="{\'active\': activePause}"></i>' +
        '</li>' +
        '<li ng-click="startSlider()">' +
        '<i class="ngfader-play"  ng-class="{\'active\': activeStart}"></i>' +
        '</li>' +
        '<li ng-click="sliderForward()">' +
        '<i class="ngfader-forward"></i>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>',
        link: link
      };
    });

}());
