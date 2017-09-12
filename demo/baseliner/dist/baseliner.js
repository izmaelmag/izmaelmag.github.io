var baseliner =
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


var _grid = __webpack_require__(1);

var _grid2 = _interopRequireDefault(_grid);

var _panel = __webpack_require__(2);

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  className: "baseliner-canvas",
  fontSize: 16,
  lineHeight: 24
};

var grid = new _grid2.default(options);
var panel = new _panel2.default(options);

panel.create(grid);
panel.setLineHeight(options.lineHeight);
grid.generate();

function setSelectorNameHandle() {
  var selectorInputs = [].slice.call(document.querySelectorAll('.bsl-elem-class'));

  selectorInputs.forEach(function (input) {
    input.addEventListener('change', function (e) {
      var input = e.target;
      var selector = input.value;
      var lh = input.nextSibling.nextSibling;

      lh.dataset.selector = selector;

      console.log(lh.dataset.selector);
    });
  });
}

function setSelectorLhHandle() {
  var _this = this;

  var lhInputs = [].slice.call(document.querySelectorAll('.bsl-elem-lh'));

  lhInputs.forEach(function (input) {
    input.addEventListener('input', function (e) {
      var input = e.target;
      var offset = input.value;
      var selector = input.dataset.selector;

      var style = '\n        ' + selector + ' {\n          position: relative;\n          top: ' + offset + 'px;\n          text-shadow: 0 -' + offset + 'px 0 rgba(0,0,0,.3);\n        }\n      ';

      _this.setStyle(style);
    });
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
  function Grid(options) {
    var _this = this;

    _classCallCheck(this, Grid);

    this.createCanvasNode("baseliner-canvas");
    this.canvasSelector = "." + options.className;

    this.canvasNode = document.querySelector(this.canvasSelector);
    this.ctx = this.canvasNode.getContext('2d');

    this.fontSize = options.fontSize || 16;
    this.lineHeight = options.lineHeight || 24;

    window.addEventListener('resize', function () {
      _this.generate();
    });
  }

  _createClass(Grid, [{
    key: "setLineHeight",
    value: function setLineHeight(lh) {
      this.lineHeight = lh;
      this.generate();
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize() {
      this.canvasNode.style.height = document.body.offsetHeight;

      this.ctx.canvas.width = this.canvasNode.offsetWidth;
      this.ctx.canvas.height = this.canvasNode.offsetHeight;
    }
  }, {
    key: "createCanvasNode",
    value: function createCanvasNode(className) {
      var canvasNode = document.createElement('canvas');
      document.body.style.margin = 0;
      canvasNode.className = className;
      document.body.appendChild(canvasNode);
    }
  }, {
    key: "drawLine",
    value: function drawLine(x1, y1, x2, y2) {
      var ctx = this.ctx;

      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }, {
    key: "createLines",
    value: function createLines() {
      var linesNum = Math.floor(this.canvasNode.offsetHeight / this.lineHeight);
      var cw = this.canvasNode.offsetWidth;

      for (var i = 1; i <= linesNum; i++) {
        var stepY = this.lineHeight * i + 0.25;

        this.ctx.save();

        this.ctx.globalAlpha = 0.7;
        this.ctx.strokeStyle = '#00f';
        this.drawLine(0, stepY, cw, stepY);

        this.ctx.restore();
      }
    }
  }, {
    key: "generate",
    value: function generate() {
      this.setCanvasSize();
      this.createLines();
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Panel = function () {
  function Panel(options) {
    _classCallCheck(this, Panel);
  }

  _createClass(Panel, [{
    key: 'init',
    value: function init() {
      var panel = document.querySelector('.baseliner-panel');
      var panelExpander = panel.querySelector('.baseliner-panel__expand');

      panelExpander.addEventListener('click', function (e) {
        panel.classList.toggle('expanded');
      });

      this.setLineHeightHandler();
      this.setSelectorNameHandle();
      this.setSelectorLhHandle();
    }
  }, {
    key: 'setLineHeightHandler',
    value: function setLineHeightHandler() {
      var _this = this;

      document.querySelector('#bsl-lh').addEventListener('input', function (e) {
        _this.setLineHeight(e.target.value);
      });
    }
  }, {
    key: 'setSelectorNameHandle',
    value: function setSelectorNameHandle() {
      var selectorInputs = [].slice.call(document.querySelectorAll('.bsl-elem-class'));

      selectorInputs.forEach(function (input) {
        input.addEventListener('change', function (e) {
          var input = e.target;
          var selector = input.value;
          var lh = input.nextSibling.nextSibling;

          lh.dataset.selector = selector;

          console.log(lh.dataset.selector);
        });
      });
    }
  }, {
    key: 'setSelectorLhHandle',
    value: function setSelectorLhHandle() {
      var _this2 = this;

      var lhInputs = [].slice.call(document.querySelectorAll('.bsl-elem-lh'));

      lhInputs.forEach(function (input) {
        input.addEventListener('input', function (e) {
          var input = e.target;
          var offset = input.value;
          var selector = input.dataset.selector;

          var style = '\n          ' + selector + ' {\n            position: relative;\n            top: ' + offset + 'px;\n            text-shadow: 0 -' + offset + 'px 0 rgba(0,0,0,.3);\n          }\n        ';

          _this2.setStyle(style);
        });
      });
    }
  }, {
    key: 'setStyle',
    value: function setStyle(content) {
      console.log(content);
      document.querySelector('#bsl-style').innerHTML = content;
    }
  }, {
    key: 'setLineHeight',
    value: function setLineHeight(lh) {
      document.querySelector('#bsl-lh').value = lh;
      this.gridObject.setLineHeight(lh);
    }
  }, {
    key: 'create',
    value: function create(gridObject) {
      this.gridObject = gridObject;

      this.init();
    }
  }]);

  return Panel;
}();

exports.default = Panel;

/***/ })
/******/ ]);