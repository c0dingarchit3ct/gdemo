(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(/*! angular */ 1);
	//Don't use InfiniteAutocomplete, use InfiniteAutocompleteCore instead
	var infinite_autocomplete_1 = __webpack_require__(/*! infinite-autocomplete */ 2);
	angular.module("infinite-autocomplete", [])
	    .constant("InfiniteAutocompleteCore", infinite_autocomplete_1.InfiniteAutocomplete)
	    .directive("ngInfiniteAutocomplete", ['InfiniteAutocompleteCore', function (InfiniteAutocompleteCore) {
	        return {
	            restrict: 'EA',
	            scope: {
	                data: '=',
	                fetchSize: '=',
	                maxHeight: '=',
	                onSelect: '&',
	                getDataFromApi: '&',
	                customizedInput: '=',
	                customizedOptions: '='
	            },
	            link: function (scope, element, attrs) {
	                scope.mutable = attrs['immutable'] === undefined;
	                var inifinityAutocomplete = new InfiniteAutocompleteCore(element[0]);
	                if (attrs['onSelect'] !== undefined) {
	                    inifinityAutocomplete.setConfig({
	                        onSelect: function (element, data) {
	                            scope.onSelect({
	                                $element: element,
	                                $data: data
	                            });
	                            scope.$apply();
	                        }
	                    });
	                }
	                if (attrs['getDataFromApi'] !== undefined) {
	                    inifinityAutocomplete.setConfig({
	                        getDataFromApi: function (text, page, fetchSize) {
	                            return scope.getDataFromApi({
	                                $text: text,
	                                $page: page,
	                                $fetchSize: fetchSize
	                            });
	                        }
	                    });
	                }
	                var fetchSizeWatchListener = scope.$watch("fetchSize", function (newFetchSize) {
	                    if (newFetchSize) {
	                        inifinityAutocomplete.setConfig({
	                            fetchSize: newFetchSize
	                        });
	                    }
	                });
	                var maxHeightWatchListener = scope.$watch("maxHeight", function (newMaxHeight) {
	                    if (newMaxHeight) {
	                        inifinityAutocomplete.setConfig({
	                            maxHeight: newMaxHeight
	                        });
	                    }
	                });
	                var dataWatchListener = scope.$watch("data", function (newData) {
	                    if (newData) {
	                        inifinityAutocomplete.setConfig({
	                            data: newData
	                        });
	                    }
	                }, scope.mutable);
	                var customInputWatchListener = scope.$watch("customizedInput", function (newCustomizedInput) {
	                    if (newCustomizedInput) {
	                        inifinityAutocomplete.setConfig({
	                            customizedInput: newCustomizedInput
	                        });
	                    }
	                });
	                var customizedOptionsListener = scope.$watch("customizedOptions", function (newCustomizedOptions) {
	                    if (newCustomizedOptions) {
	                        inifinityAutocomplete.setConfig({
	                            customizedOptions: newCustomizedOptions
	                        });
	                    }
	                });
	                scope.$on("$destroy", function () {
	                    fetchSizeWatchListener();
	                    maxHeightWatchListener();
	                    dataWatchListener();
	                    customInputWatchListener();
	                    customizedOptionsListener();
	                    inifinityAutocomplete.destroy();
	                });
	            }
	        };
	    }]);


/***/ },
/* 1 */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!***********************************************!*\
  !*** ./~/infinite-autocomplete/dist/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{a(i.next(t))}catch(t){r(t)}}function c(t){try{a(i.throw(t))}catch(t){r(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,r=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}},s=n(3),c=n(4),a=n(1),u=n(6),l=n(5);e.InputComponent=s.InputComponent,e.OptionsComponent=c.OptionsComponent;var p=function(){function t(t,e){this.page=1,this.preventMoreRequests=!1,this.fetchingData=!1,this.defaultConfig={fetchSize:10,maxHeight:"160px",customizedInput:s.InputComponent,customizedOptions:c.OptionsComponent},this.element=t,this.config=i({},this.defaultConfig,e),this.inputComponent=new this.config.customizedInput,this.optionsComponent=new this.config.customizedOptions,this.init()}return t.prototype.init=function(){this.bindScope(),this.applyStylesRules(),this.appendInfiniteAutocompleteWrapperClass(),this.linkInputComponent(),this.linkOptionsComponent(),this.bindScrollReachBottomEvent(),this.bindEscapeEvent(),this.bindOutSideClickEvent()},t.prototype.bindScope=function(){this.onDocumentClickHandler=this.onDocumentClickHandler.bind(this),this.onEscapeEventHandler=this.onEscapeEventHandler.bind(this),this.onInputChange=this.onInputChange.bind(this),this.scrollReachedBottomHandler=this.scrollReachedBottomHandler.bind(this),this.onOptionClickEvent=this.onOptionClickEvent.bind(this),this.onKeyPressed=this.onKeyPressed.bind(this),this.onDocumentClickHandler=this.onDocumentClickHandler.bind(this),this.onEscapeEventHandler=this.onEscapeEventHandler.bind(this),this.onOptionHoverEvent=this.onOptionHoverEvent.bind(this)},t.prototype.bindOutSideClickEvent=function(){document.addEventListener("click",this.onDocumentClickHandler)},t.prototype.onDocumentClickHandler=function(t){if(!this.isOptionsHidden()){var e=this.checkIfClickedOutSideTheAutocompleteComponents(t.target);e&&this.clearOptions()}},t.prototype.checkIfClickedOutSideTheAutocompleteComponents=function(t){return null===t||t!==this.element&&this.checkIfClickedOutSideTheAutocompleteComponents(t.parentElement)},t.prototype.bindEscapeEvent=function(){document.addEventListener("keydown",this.onEscapeEventHandler)},t.prototype.onEscapeEventHandler=function(t){27!==t.keyCode||this.isOptionsHidden()||this.clearOptions()},t.prototype.appendInfiniteAutocompleteWrapperClass=function(){this.element.className&&this.element.className.indexOf("infinite-autocomplete-wrapper")!==-1||(this.element.className=this.element.className.split(" ").concat(["infinite-autocomplete-wrapper"]).filter(function(t){return t}).join(" "))},t.prototype.resetCurrentPage=function(){this.page=1},t.prototype.linkInputComponent=function(){var t=new Error("Customized input should contain input element <input />"),e=document.createElement("div");e.className="infinite-autocomplete-input-wrapper",e.innerHTML=this.inputComponent.render();var n=e.querySelector("input");if(!n)throw u.Utils.throwErrorInConsole(t),t;n.addEventListener("input",this.onInputChange),n.addEventListener("click",this.onInputChange),n.addEventListener("keydown",this.onKeyPressed),this.element.appendChild(e)},t.prototype.onKeyPressed=function(t){if(!this.isOptionsHidden()){var e=this.getNavigationIndex();if(e===-1)t.keyCode===l.KEY_PRESS_STATES.DOWN&&this.toggleHoveredState(0,t);else switch(t.keyCode){case l.KEY_PRESS_STATES.DOWN:this.toggleHoveredState(e+1,t);break;case l.KEY_PRESS_STATES.UP:this.toggleHoveredState(e-1,t);break;case l.KEY_PRESS_STATES.ENTER:this.clickOnHovered()}}},t.prototype.clickOnHovered=function(){var t=this.getOptionsBaseElement(),e=t.querySelector("."+l.HOVERED);e&&e.click()},t.prototype.simulateScrollToBottom=function(){var t=this.getOptionsBaseElement(),e=new Event("scroll",{bubbles:!0});t.scrollTop=1e4,t.dispatchEvent(e)},t.prototype.toggleHoveredState=function(t,e){var n=this.getOptionsBaseElement();if(t===n.children.length&&this.simulateScrollToBottom(),t>=0&&t<n.children.length){var i=n.querySelector("."+l.HOVERED);i&&(i.className=i.className.split(" ").filter(function(t){return t!==l.HOVERED}).join(" ").trim());var o=n.children[t];if(o.className+=" "+l.HOVERED,o.offsetTop<n.scrollTop||o.offsetTop-n.scrollTop>n.clientHeight)switch(e.keyCode){case l.KEY_PRESS_STATES.UP:o.scrollIntoView(!0);break;case l.KEY_PRESS_STATES.DOWN:o.scrollIntoView(!1)}}},t.prototype.getNavigationIndex=function(){for(var t=this.getOptionsBaseElement(),e=0;e<t.children.length;e++){var n=t.children[e];if(n.className.indexOf(l.HOVERED)!==-1)return e}return-1},t.prototype.onInputChange=function(t){var e=t.currentTarget;this.inputComponent.onInputChange&&this.inputComponent.onInputChange(e,e.value),("input"===t.type||"click"===t.type&&this.isOptionsHidden())&&this.buildOptions(e.value,!0)},t.prototype.setConfig=function(t){this.destroy(),this.config=i({},this.config,t),this.inputComponent=new this.config.customizedInput,this.optionsComponent=new this.config.customizedOptions,this.init()},t.prototype.destroy=function(){this.isOptionsHidden()||this.clearOptions();var t=this.getOptionsBaseElement();t.removeEventListener("scroll",this.scrollReachedBottomHandler);var e=this.getInputElement();e.removeEventListener("input",this.onInputChange),e.removeEventListener("click",this.onInputChange),e.removeEventListener("keydown",this.onKeyPressed),document.removeEventListener("click",this.onDocumentClickHandler),document.removeEventListener("keydown",this.onEscapeEventHandler),this.element.innerHTML=""},t.prototype.linkOptionsComponent=function(){var t=document.createElement("div");t.className="infinite-autocomplete-options-wrapper",t.innerHTML=this.optionsComponent.render();var e=t.querySelector(this.optionsComponent.listElementSelector);this.setElementVisiblity(t,!1),e.style.overflow="scroll",e.style.overflowX="hidden",e.style.border="1px solid #bcbcbc",e.style.paddingBottom="5px",e.style.maxHeight=this.config.maxHeight||null,this.element.appendChild(t)},t.prototype.isOptionsHidden=function(){var t=this.element.querySelector(".infinite-autocomplete-options-wrapper");return t.className.indexOf("infinite-autocomplete-hidden-element")>-1},t.prototype.applyStylesRules=function(){var t=document.head.querySelector("#infinite-autocomplete-wrapper-style");if(!t){var e=document.createElement("style");e.id="infinite-autocomplete-wrapper-style",e.innerHTML="\n                .infinite-autocomplete-wrapper {\n                    position: relative;\n                }\n            ",document.head.appendChild(e)}var n=document.head.querySelector("#infinite-autocomplete-hidden-style");if(!n){var i=document.createElement("style");i.id="infinite-autocomplete-hidden-style",i.innerHTML="\n                .infinite-autocomplete-hidden-element {\n                    visibility: hidden;\n                    z-index: -1;\n                }\n            ",document.head.appendChild(i)}var o=document.head.querySelector("#infinite-autocomplete-defaults-style");if(!o){var r=document.createElement("style");r.id="infinite-autocomplete-defaults-style",r.innerHTML="\n                .infinite-autocomplete-input-wrapper .infinite-autocomplete-default-input {\n                    height: 28px;\n                    border-radius: 8px;\n                    box-shadow: inset 0px 0px 15px -4px transparent;\n                }\n                .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options {\n                    list-style-type: none;\n                    margin-top: 0;\n                    padding-left: 0;\n                }\n                .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li {\n                    padding: 5px 10px 10px 10px;\n                }\n                .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li.hovered {\n                    background: #d5ebff;\n                    color: black;\n                    cursor: pointer;\n                }\n            ",document.head.appendChild(r)}var s=document.head.querySelector("#infinite-autocomplete-input-style");if(!s){var c=document.createElement("style");c.id="infinite-autocomplete-input-style",c.innerHTML="\n                .infinite-autocomplete-input-wrapper input {\n                    width: 100%;\n                }\n            ",document.head.appendChild(c)}var a=document.head.querySelector("#infinite-autocomplete-options-style");if(!a){var u=document.createElement("style");u.id="infinite-autocomplete-options-style",u.innerHTML="\n                .infinite-autocomplete-options-wrapper {\n                    position: absolute;\n                    z-index: 10;\n                    background: white;\n                }\n            ",document.head.appendChild(u)}var l=document.head.querySelector("#infinite-autocomplete-scrollbar-style");if(!l){var p=document.createElement("style");p.id="infinite-autocomplete-scrollbar-style",p.innerHTML="\n                .infinite-autocomplete-wrapper ::-webkit-scrollbar {\n                        width: 4px;\n                    }\n                    \n                    .infinite-autocomplete-wrapper ::-webkit-scrollbar-track {\n                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n                        -webkit-border-radius: 10px;\n                        border-radius: 10px;\n                    }\n                    \n                    .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb {\n                        -webkit-border-radius: 10px;\n                        border-radius: 10px;\n                        background: rgba(128, 128, 128, 0.8); \n                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n                    }\n                    .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb:window-inactive {\n                        background: rgba(255,0,0,0.4); \n                    }\n            ",document.head.appendChild(p)}},t.prototype.bindScrollReachBottomEvent=function(){var t=this.getOptionsBaseElement();t.addEventListener("scroll",this.scrollReachedBottomHandler)},t.prototype.scrollReachedBottomHandler=function(t){var e=t.currentTarget;this.fetchingData||this.preventMoreRequests||this.isOptionsHidden()||e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.page++,this.buildOptions(this.getInputElement().value,!1))},t.prototype.clearOptions=function(){this.detachOptionEventHandlers(this.getOptionsBaseElement().querySelectorAll("[infinite-clickable]")),this.resetCurrentPage(),this.preventMoreRequests=!1;var t=this.getOptionsBaseElement();this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"),!1),t.innerHTML=""},t.prototype.setElementVisiblity=function(t,e){e?t.className=t.className.split(" ").filter(function(t){return"infinite-autocomplete-hidden-element"!==t}).join(" "):t.className.indexOf("infinite-autocomplete-hidden-element")===-1&&(t.className+=" infinite-autocomplete-hidden-element")},t.prototype.getOptionsBaseElement=function(){var t=new Error("Couldn't get the options base element.");if(this.element){var e=this.element.querySelector(".infinite-autocomplete-options-wrapper");if(e)return e.querySelector(this.optionsComponent.listElementSelector);throw u.Utils.throwErrorInConsole(t),t}throw u.Utils.throwErrorInConsole(t),t},t.prototype.detachOptionEventHandlers=function(t){for(var e=0;e<t.length;e++)t[e].removeEventListener("click",this.onOptionClickEvent),t[e].removeEventListener("mouseover",this.onOptionHoverEvent)},t.prototype.onOptionClickEvent=function(t){this.config.onSelect&&this.config.onSelect(t.currentTarget,t.currentTarget.data),this.clearOptions(),this.setInput(t.currentTarget.data.text)},t.prototype.getInputElement=function(){var t=new Error("Couldn't get the input element.");if(this.element){var e=this.element.querySelector(".infinite-autocomplete-input-wrapper");if(e)return e.querySelector("input");throw u.Utils.throwErrorInConsole(t),t}throw u.Utils.throwErrorInConsole(t),t},t.prototype.setInput=function(t){this.getInputElement().value=t},t.prototype.getData=function(t){return o(this,void 0,a.Promise,function(){var e,n,i,o;return r(this,function(r){switch(r.label){case 0:return e=new Error("You must pass data or getDataFromApi function via config"),this.config.data?(this.fetchingData=!0,n=(this.page-1)*this.config.fetchSize,i=this.config.fetchSize*(this.page-1)+this.config.fetchSize,this.fetchingData=!1,[2,this.config.data.filter(function(e){return e.text.toLowerCase().indexOf(t.toLowerCase())!==-1}).slice(n,i)]):[3,1];case 1:return this.config.getDataFromApi?(this.fetchingData=!0,[4,this.config.getDataFromApi(t,this.page,this.config.fetchSize)]):[3,3];case 2:return o=r.sent(),this.fetchingData=!1,[2,o];case 3:throw u.Utils.throwErrorInConsole(e),e}})})},t.prototype.onOptionHoverEvent=function(t){var e=this.getOptionsBaseElement(),n=e.querySelector("."+l.HOVERED);n&&(n.className=n.className.split(" ").filter(function(t){return t!==l.HOVERED}).join(" ").trim());var i=t.currentTarget;i.className+=" "+l.HOVERED},t.prototype.buildOptions=function(t,e){return void 0===e&&(e=!0),o(this,void 0,a.Promise,function(){var n,i,o,s,c,a,l,p=this;return r(this,function(r){switch(r.label){case 0:return n=new Error("fetchSize must be overriden with correct numeric value"),i=this.getOptionsBaseElement(),e&&this.clearOptions(),this.config.fetchSize?[4,this.getData(t)]:[3,2];case 1:return o=r.sent(),o.length<this.config.fetchSize&&(this.preventMoreRequests=!0),o.forEach(function(t){var e=p.optionsComponent.renderOption(t),n=document.createElement("div");n.innerHTML=e;var o=n.childNodes[0];o.data={text:t.text,value:t.value},o.setAttribute("infinite-clickable",""),o.addEventListener("click",p.onOptionClickEvent),o.addEventListener("mouseover",p.onOptionHoverEvent),i.appendChild(o)}),s=i.children[0].clientHeight,this.config.maxHeight&&(c=parseInt(this.config.maxHeight),c>=s*this.config.fetchSize&&(this.config.maxHeight=s*this.config.fetchSize-5+"px",a=this.element.querySelector(".infinite-autocomplete-options-wrapper"),l=a.querySelector(this.optionsComponent.listElementSelector),l.style.maxHeight=this.config.maxHeight)),""!==i.innerHTML?this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"),!0):this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"),!1),[3,3];case 2:throw u.Utils.throwErrorInConsole(n),n;case 3:return[2]}})})},t}();e.InfiniteAutocomplete=p,Object.defineProperty(e,"__esModule",{value:!0}),e.default=p},function(t,e,n){(function(e,i){/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   4.0.5
		 */
	!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function r(t){X=t}function s(t){J=t}function c(){return function(){return e.nextTick(h)}}function a(){return"undefined"!=typeof G?function(){G(h)}:p()}function u(){var t=0,e=new $(h),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function l(){var t=new MessageChannel;return t.port1.onmessage=h,function(){return t.port2.postMessage(0)}}function p(){var t=setTimeout;return function(){return t(h,1)}}function h(){for(var t=0;t<F;t+=2){var e=nt[t],n=nt[t+1];e(n),nt[t]=void 0,nt[t+1]=void 0}F=0}function f(){try{var t=n(7);return G=t.runOnLoop||t.runOnContext,a()}catch(t){return p()}}function d(t,e){var n=arguments,i=this,o=new this.constructor(v);void 0===o[ot]&&N(o);var r=i._state;return r?!function(){var t=n[r-1];J(function(){return L(r,o,t,i._result)})}():k(i,o,t,e),o}function m(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(v);return _(n,t),n}function v(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function E(t){try{return t.then}catch(t){return at.error=t,at}}function w(t,e,n,i){try{t.call(e,n,i)}catch(t){return t}}function b(t,e,n){J(function(t){var i=!1,o=w(n,e,function(n){i||(i=!0,e!==n?_(t,n):H(t,n))},function(e){i||(i=!0,T(t,e))},"Settle: "+(t._label||" unknown promise"));!i&&o&&(i=!0,T(t,o))},t)}function S(t,e){e._state===st?H(t,e._result):e._state===ct?T(t,e._result):k(e,void 0,function(e){return _(t,e)},function(e){return T(t,e)})}function C(t,e,n){e.constructor===t.constructor&&n===d&&e.constructor.resolve===m?S(t,e):n===at?T(t,at.error):void 0===n?H(t,e):o(n)?b(t,e,n):H(t,e)}function _(e,n){e===n?T(e,y()):t(n)?C(e,n,E(n)):H(e,n)}function O(t){t._onerror&&t._onerror(t._result),x(t)}function H(t,e){t._state===rt&&(t._result=e,t._state=st,0!==t._subscribers.length&&J(x,t))}function T(t,e){t._state===rt&&(t._state=ct,t._result=e,J(O,t))}function k(t,e,n,i){var o=t._subscribers,r=o.length;t._onerror=null,o[r]=e,o[r+st]=n,o[r+ct]=i,0===r&&t._state&&J(x,t)}function x(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var i=void 0,o=void 0,r=t._result,s=0;s<e.length;s+=3)i=e[s],o=e[s+n],i?L(n,i,o,r):o(r);t._subscribers.length=0}}function I(){this.error=null}function A(t,e){try{return t(e)}catch(t){return ut.error=t,ut}}function L(t,e,n,i){var r=o(n),s=void 0,c=void 0,a=void 0,u=void 0;if(r){if(s=A(n,i),s===ut?(u=!0,c=s.error,s=null):a=!0,e===s)return void T(e,g())}else s=i,a=!0;e._state!==rt||(r&&a?_(e,s):u?T(e,c):t===st?H(e,s):t===ct&&T(e,s))}function D(t,e){try{e(function(e){_(t,e)},function(e){T(t,e)})}catch(e){T(t,e)}}function R(){return lt++}function N(t){t[ot]=lt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function P(t,e){this._instanceConstructor=t,this.promise=new t(v),this.promise[ot]||N(this.promise),W(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?H(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&H(this.promise,this._result))):T(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function M(t){return new P(this,t).promise}function B(t){var e=this;return new e(W(t)?function(n,i){for(var o=t.length,r=0;r<o;r++)e.resolve(t[r]).then(n,i)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function j(t){var e=this,n=new e(v);return T(n,t),n}function z(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function V(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function K(t){this[ot]=R(),this._result=this._state=void 0,this._subscribers=[],v!==t&&("function"!=typeof t&&z(),this instanceof K?D(this,t):V())}function U(){var t=void 0;if("undefined"!=typeof i)t=i;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=K}var Y=void 0;Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var W=Y,F=0,G=void 0,X=void 0,J=function(t,e){nt[F]=t,nt[F+1]=e,F+=2,2===F&&(X?X(h):it())},Q="undefined"!=typeof window?window:void 0,Z=Q||{},$=Z.MutationObserver||Z.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),it=void 0;it=tt?c():$?u():et?l():void 0===Q?f():p();var ot=Math.random().toString(36).substring(16),rt=void 0,st=1,ct=2,at=new I,ut=new I,lt=0;return P.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===rt&&n<t;n++)this._eachEntry(e[n],n)},P.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,i=n.resolve;if(i===m){var o=E(t);if(o===d&&t._state!==rt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===K){var r=new n(v);C(r,t,o),this._willSettleAt(r,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(i(t),e)},P.prototype._settledAt=function(t,e,n){var i=this.promise;i._state===rt&&(this._remaining--,t===ct?T(i,n):this._result[e]=n),0===this._remaining&&H(i,this._result)},P.prototype._willSettleAt=function(t,e){var n=this;k(t,void 0,function(t){return n._settledAt(st,e,t)},function(t){return n._settledAt(ct,e,t)})},K.all=M,K.race=B,K.resolve=m,K.reject=j,K._setScheduler=r,K._setAsap=s,K._asap=J,K.prototype={constructor:K,then:d,catch:function(t){return this.then(null,t)}},K.polyfill=U,K.Promise=K,K})}).call(e,n(2),function(){return this}())},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(p===clearTimeout)return clearTimeout(t);if((p===i||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){m&&f&&(m=!1,f.length?d=f.concat(d):v=-1,d.length&&c())}function c(){if(!m){var t=o(s);m=!0;for(var e=d.length;e;){for(f=d,d=[];++v<e;)f&&f[v].run();v=-1,e=d.length}f=null,m=!1,r(t)}}function a(t,e){this.fun=t,this.array=e}function u(){}var l,p,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{p="function"==typeof clearTimeout?clearTimeout:i}catch(t){p=i}}();var f,d=[],m=!1,v=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new a(t,e)),1!==d.length||m||o(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e){"use strict";var n=function(){function t(){}return t.prototype.render=function(){return'<input class="infinite-autocomplete-default-input" type="text" />'},t}();e.InputComponent=n},function(t,e){"use strict";var n=function(){function t(){this.listElementSelector="ul"}return t.prototype.render=function(){return"<"+this.listElementSelector+' class="infinite-autocomplete-default-options"></'+this.listElementSelector+">"},t.prototype.renderOption=function(t){return"<li>\n                    "+t.text+"\n                </li>"},t}();e.OptionsComponent=n},function(t,e){"use strict";e.HOVERED="hovered",e.KEY_PRESS_STATES={UP:38,DOWN:40,ENTER:13}},function(t,e){"use strict";var n=function(){function t(){}return t.throwErrorInConsole=function(t){console.error(t)},t}();e.Utils=n},function(t,e){}])});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.debug.js.map