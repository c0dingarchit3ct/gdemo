angular.module('factories',[]).
factory ("appSettingsFactory",["$window",function ($window) {

    "use strict";
  var theFactory = {};
//  theFactory.URL ="http://localhost:9080/petstore/PetStore/api/";

  theFactory.keyHost = "HostName";
  theFactory.keyPort = "PortNumber";
  theFactory.defaultHost = "localhost";
  theFactory.defaultPort = "9080";

  // intialize  the URL
  if(! $window.localStorage[this.keyhost] ) {
   $window.localStorage[this.keyHost] = this.defaultHost;
    $window.localStorage[this.keyPort] = this.defaultPort;
  }

  theFactory.getURL= function () {
    var url = "http://"+this.getHost()+":"+this.getPort()+"/cmscontent/";
    console.log ("current host : " + url );
    return  url;
  };
  theFactory.setHost = function (host) {
     $window.localStorage[this.keyHost] = host;
  };
  theFactory.setPort = function (port) {
     $window.localStorage[this.keyPort] = port;
  };
  theFactory.getHost = function () {
     return $window.localStorage[this.keyHost];
  };
  theFactory.getPort = function () {
     return $window.localStorage[this.keyPort];
  };

  console.log ("keyhost : " +$window.localStorage[theFactory.keyHost] );
  if ( $window.localStorage[theFactory.keyHost] == 'undefined') {
    theFactory.setHost(theFactory.defaultHost);
    theFactory.setPort(theFactory.defaultPort);
    console.log("setting variables to" + theFactory.getURL()) ;
  }
   else {
     console.log (" we got values already ");
   }
  return theFactory;
}]).
factory ("webSettingsFactory",function () {
  "use strict";
  var theFactory = {};
//  theFactory.URL ="http://localhost:9080/petstore/PetStore/api/";

  theFactory.keyHost = "HostName";
  theFactory.keyPort = "PortNumber";
  theFactory.defaultHost = "localhost";
  theFactory.defaultPort = "9080";
  theFactory.host= this.defaultHost;
  theFactory.port=this.defaultPort;

  theFactory.getURL= function () {
    var url = "http://"+this.getHost()+":"+this.getPort()+"/cmscontent/";
    console.log ("current host : " + url );
    return  url;
  };

  theFactory.setHost = function (host) {
     this.host = host;
  };
  theFactory.setPort = function (port) {
     this.port = port;
  };
  theFactory.getHost = function () {
     return this.host;
  };
  theFactory.getPort = function () {
     return this.port;
  };

  return theFactory;
});
