'use strict';

/**
 * @ngdoc function
 * @name srcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the srcApp
 */
angular.module('srcApp')
  .controller('AutoCompleteCtrl', function ($window,dataFactory,$scope,$http,$q,$location) {
    $window.ga('send', 'pageview', "Analytics");
    console.log("we got data factory ", dataFactory.data);
    console.log (" we are in the Auto Complete!x");

    $scope.autoComplete= function() {
      console.log("text : " + JSON.stringify($scope.product));
    };

    $scope.productlist = function ($text,$page,$fetchSize) {
      console.log (" In Fetch");
      console.log(" text "+ $text + "Page " + $page + "Fetch " + $fetchSize);
   };
   $scope.data =[];

   $scope.query = function(searchText) {
     if (!searchText) {
       console.log("empty string");
       return [];
     }
    var hoststr = $location.host();
    //var trimmed_host_str = hoststr.substring(0,hoststr.length-1);
    //console.log (" trimmed host " , trimmed_host_str)
    var url =  $location.protocol() + "://"+ hoststr+":"+ $location.port()+"/products/?name="+searchText;

    //var url = "products?name=";
    console.log(" URL => ", url);
    var encodedurl = encodeURI(url);
    console.log ("encoded URL xxx ->", encodedurl);

     return $http
      .get(encodedurl)
      .then(function(result) {
        // Map the response object to the data object.
        console.log("MY data ----> \n", result);
        console.log(" returning data now!!");
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
