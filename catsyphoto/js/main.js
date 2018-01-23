/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mainSlider = __webpack_require__(1);

var _mainSlider2 = _interopRequireDefault(_mainSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//endregion


//region Setup
var mainSlider = new _mainSlider2.default(); //region Dependencies


document.querySelector('.js-show-photos').addEventListener('click', function (e) {
  document.body.classList.add('show-photos');
});

document.querySelector('.js-show-contacts').addEventListener('click', function (e) {
  document.body.classList.remove('show-photos');
});

window.addEventListener('load', function () {
  window.setTimeout(function () {
    document.body.classList.add('loaded');
  }, 200);
});
//endregion


//region Functions
function init() {
  mainSlider.init();
}
//endregion


init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _photoinfo = __webpack_require__(2);

var _photoinfo2 = _interopRequireDefault(_photoinfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var photoInfo = new _photoinfo2.default();

var MainSlider = function () {
  function MainSlider() {
    _classCallCheck(this, MainSlider);

    this.slider = null;
    this.navSlider = null;
    this.sliderNode = document.querySelector('.js-main-slider');
    this.navSliderNode = document.querySelector('.js-main-slider-nav');
    this.options = {
      main: {
        autoPlay: 6000,
        cellSelector: '.main-slider__slide',
        prevNextButtons: false,
        pageDots: false,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        draggable: true
      },

      nav: {
        cellSelector: '.main-slider__slide-nav',
        cellAlign: 'left',
        asNavFor: '.js-main-slider',
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        contain: true
      }
    };
  }

  _createClass(MainSlider, [{
    key: 'initFlickity',
    value: function initFlickity() {
      if (!this.slider && this.sliderNode) this.slider = new Flickity(this.sliderNode, this.options.main);

      if (!this.navSlider && this.navSliderNode) this.navSlider = new Flickity(this.navSliderNode, this.options.nav);
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      var _this = this;

      if (this.slider) {
        this.slider.on('select', function () {
          var photoData = _this.slider.selectedElement.dataset.info;

          try {
            photoInfo.update(JSON.parse(photoData));
          } catch (error) {
            console.warn(error);
          }
        });
      }
    }
  }, {
    key: 'init',
    value: function init() {
      this.initFlickity();
      this.initEvents();
    }
  }]);

  return MainSlider;
}();

exports.default = MainSlider;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhotoInfo = function PhotoInfo() {
  var _this = this;

  _classCallCheck(this, PhotoInfo);

  this.containerNode = document.querySelector('.photoinfo');

  this.update = function (photoInfo) {
    _this.containerNode.classList.add('hidden');

    window.setTimeout(function (_) {
      for (var key in photoInfo) {
        var row = document.querySelector('[data-' + key + ']');

        row.querySelector('span.info').innerHTML = photoInfo[key];
      }

      _this.containerNode.classList.remove('hidden');
    }, 700);
  };
};

exports.default = PhotoInfo;

/***/ })
/******/ ]);