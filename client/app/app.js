'use strict';

angular.module('funRoomApp', ['funRoomApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ngRoute', 'ngMaterial', 'ngAnimate'
  ])
  .config(function($routeProvider, $locationProvider, $mdIconProvider, $mdThemingProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);


    $mdIconProvider
      .iconSet('action', '../assets/iconsets/action-icons.svg', 24)
      .iconSet('alert', '../assets/iconsets/alert-icons.svg', 24)
      .iconSet('av', '../assets/iconsets/av-icons.svg', 24)
      .iconSet('communication', '../assets/iconsets/communication-icons.svg', 24)
      .iconSet('content', '../assets/iconsets/content-icons.svg', 24)
      .iconSet('device', '../assets/iconsets/device-icons.svg', 24)
      .iconSet('editor', '../assets/iconsets/editor-icons.svg', 24)
      .iconSet('file', '../assets/iconsets/file-icons.svg', 24)
      .iconSet('hardware', '../assets/iconsets/hardware-icons.svg', 24)
      .iconSet('icons', '../assets/iconsets/icons-icons.svg', 24)
      .iconSet('image', '../assets/iconsets/image-icons.svg', 24)
      .iconSet('maps', '../assets/iconsets/maps-icons.svg', 24)
      .iconSet('navigation', '../assets/iconsets/navigation-icons.svg', 24)
      .iconSet('notification', '../assets/iconsets/notification-icons.svg', 24)
      .iconSet('social', '../assets/iconsets/social-icons.svg', 24)
      .iconSet('toggle', '../assets/iconsets/toggle-icons.svg', 24)
      // non-default
      .iconSet('avatar', '../assets/iconsets/avatar.svg', 128);

    $mdThemingProvider.definePalette('Att-Blue', {'50':'#c6ebfd','100':'#7cd0fb','200':'#46bdf9','300':'#08a2ef','400':'#078ed2','500':'#067ab4','600':'#056696','700':'#045279','800':'#033e5b','900':'#022a3e','A100':'#c6ebfd','A200':'#7cd0fb','A400':'#078ed2','A700':'#045279', 'contrastDefaultColor': 'light'});
    $mdThemingProvider.definePalette('Att-Orange', {'50':'#ffffff','100':'#ffdabd','200':'#ffbb85','300':'#ff943d','400':'#ff831f','500':'#ff7200','600':'#e06400','700':'#c25700','800':'#a34900','900':'#853b00','A100':'#ffffff','A200':'#ffdabd','A400':'#ff831f','A700':'#c25700', 'contrastDefaultColor': 'light'});
    $mdThemingProvider.theme('default')
        .primaryPalette('Att-Blue')
        .accentPalette('Att-Orange');

    $mdThemingProvider.theme('dark')
        .primaryPalette('Att-Orange')
        .accentPalette('Att-Blue')
        .dark();
  });
