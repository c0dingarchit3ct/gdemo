'use strict';

/**
 * @ngdoc function
 * @name srcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the srcApp
 */
angular.module('srcApp')
  .controller('AutoCompleteCtrl', function ($window,dataFactory,$scope,$http,$q,$location,$resource) {
    $window.ga('send', 'pageview', "Analytics");
    console.log("we got data factory ", dataFactory.data);
    console.log (" we are in the Auto Complete!x");

    $scope.autoComplete= function() {
      console.log("text : " + JSON.stringify($scope.product));
    }

    $scope.productlist = function ($text,$page,$fetchSize) {
      console.log (" In Fetch");
      console.log(" text "+ $text + "Page " + $page + "Fetch " + $fetchSize);
   }
   $scope.data =[];

   $scope.query = function(searchText) {
     if (!searchText) {
       console.log("empty string");
       return [];
     }
    var url =  $location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/products?name=";
    console.log(url);
    return $http
      .get(url + escape(searchText))
      .then(function(result) {
        // Map the response object to the data object.
        console.log("data ----> \n", result);
        return result.data;
      });
  };


  function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(product) {
        return (product.indexOf(lowercaseQuery) === 0);
      };

    }
  });
