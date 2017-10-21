"use strict";
angular.module('factories').
factory ("staticDataFactory",function () {
  var theFactory = {};

//console.log ("Settings are : " , JSON.stringify(webSettingsFactory));

theFactory.data="test data";
console.log ("returning : " , theFactory);
return theFactory;
});
