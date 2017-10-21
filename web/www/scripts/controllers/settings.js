'use strict';

/**
 * @ngdoc function
 * @name srcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the srcApp
 */
angular.module('srcApp')
  .controller('SettingsCtrl', function ($window,$scope,webSettingsFactory) {
    console.log("in Settings Controller ");
    $window.ga('send', 'pageview', "Settings");
    console.log ("Settings are : " , JSON.stringify(webSettingsFactory));
    $scope.settings = {};
    $scope.settings.host = webSettingsFactory.getHost();
    $scope.settings.port = webSettingsFactory.getPort();

    $scope.setBackend = function () {
      console.log ("setting host and port to ", $scope.settings.host +":"+$scope.settings.port);
      webSettingsFactory.setHost($scope.settings.host);
      webSettingsFactory.setPort($scope.settings.port);
    };
  });
