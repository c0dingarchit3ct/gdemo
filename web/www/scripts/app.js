'use strict';

/**
 * @ngdoc overview
 * @name srcApp
 * @description
 * # srcApp
 *
 * Main module of the application.
 */
angular
  .module('srcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'factories',
    'infinite-autocomplete',
    'ngMaterial',
    'ngMessages'
  ])
  .config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/ac', {
        templateUrl: 'views/autocomplete.html',
        controller: 'AutoCompleteCtrl',
        controllerAs: 'about'
      })
     .when('/exceptions', {
        templateUrl: 'views/exceptions.html',
        controller: 'AnalyticsCtrl',
        controllerAs: 'about'
      })
     .when('/hystrix', {
        templateUrl: 'views/hystrix.html',
        controller: 'AnalyticsCtrl',
        controllerAs: 'about'
      })
     .when('/settings',{
        templateUrl:'views/settings.html',
        controller : 'SettingsCtrl',
        controllerAs:'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.run(function ($rootScope, $location, $window) {
        // initialise google analytics
        $window.ga('create', 'UA-96558638-1', 'auto');
        console.log (" I am in the fun function and just did ga ");
        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
            console.log (" I am working with ga to send " + $location.path());
            $window.ga('send', 'pageview', $location.path());
        });
  });
