'use strict';

/**
 * @ngdoc function
 * @name srcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the srcApp
 */
angular.module('srcApp')
  .controller('MainCtrl', function ($window) {
    console.log("in that strange space now !");
$window.ga('send', 'pageview', "Main");
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
