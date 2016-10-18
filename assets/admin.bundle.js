webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _main = __webpack_require__(1);

	var _main2 = _interopRequireDefault(_main);

	var _reactRouter = __webpack_require__(5);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(239);

	var _configureStore = __webpack_require__(262);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _App = __webpack_require__(275);

	var _App2 = _interopRequireDefault(_App);

	var _Ads = __webpack_require__(292);

	var _Ads2 = _interopRequireDefault(_Ads);

	var _profile = __webpack_require__(518);

	var _profile2 = _interopRequireDefault(_profile);

	var _Bookmarks = __webpack_require__(521);

	var _Bookmarks2 = _interopRequireDefault(_Bookmarks);

	var _NewAds = __webpack_require__(526);

	var _NewAds2 = _interopRequireDefault(_NewAds);

	var _Shop = __webpack_require__(530);

	var _Shop2 = _interopRequireDefault(_Shop);

	var _Cargo = __webpack_require__(534);

	var _Cargo2 = _interopRequireDefault(_Cargo);

	var _Transport = __webpack_require__(536);

	var _Transport2 = _interopRequireDefault(_Transport);

	var _View = __webpack_require__(538);

	var _View2 = _interopRequireDefault(_View);

	var _Order = __webpack_require__(539);

	var _Order2 = _interopRequireDefault(_Order);

	var _ViewShop = __webpack_require__(542);

	var _ViewShop2 = _interopRequireDefault(_ViewShop);

	var _ViewCargo = __webpack_require__(546);

	var _ViewCargo2 = _interopRequireDefault(_ViewCargo);

	var _ViewTransport = __webpack_require__(547);

	var _ViewTransport2 = _interopRequireDefault(_ViewTransport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/** Создание начального Store */
	var store = (0, _configureStore2.default)();

	/** Класс-обертка для Redux */

	var Root = function (_React$Component) {
	  _inherits(Root, _React$Component);

	  function Root() {
	    _classCallCheck(this, Root);

	    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	  }

	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_App2.default, { children: this.props.children })
	      );
	    }
	  }]);

	  return Root;
	}(_react2.default.Component);

	/** Отрисовка приложения на страницу в обертке React-Router */


	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'admin', component: Root },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _profile2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'profile', component: _profile2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'bookmarks(/:type)', component: _Bookmarks2.default }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'add', component: _NewAds2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Transport2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'transport', component: _Transport2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'cargo', component: _Cargo2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'shop', component: _Shop2.default })
	    ),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: 'view', component: _View2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: 'transport/:id(/:edit)', components: { info: _ViewTransport2.default, order: _Order2.default } }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'cargo/:id(/:edit)', components: { info: _ViewCargo2.default, order: _Order2.default } }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'shop/:id(/:edit)', components: { info: _ViewShop2.default, order: _Order2.default } })
	    )
	  )
	), document.getElementById("mainApp"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Sidebar = __webpack_require__(276);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _App = __webpack_require__(290);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/** Оболочка приложения */
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _App2.default.appcontainer },
	        _react2.default.createElement(_Sidebar2.default, null),
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _User = __webpack_require__(277);

	var _User2 = _interopRequireDefault(_User);

	var _style = __webpack_require__(288);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/** Компонент бокового меню */
	var Sidebar = function (_React$Component) {
	  _inherits(Sidebar, _React$Component);

	  function Sidebar(props) {
	    _classCallCheck(this, Sidebar);

	    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

	    _this.state = {
	      hidden: false
	    };
	    return _this;
	  }

	  /** Переключение меню в закрытый/открытый вид */


	  _createClass(Sidebar, [{
	    key: 'switchView',
	    value: function switchView() {
	      this.setState({
	        hidden: !this.state.hidden
	      });
	    }

	    /** Проверка обновления компонента */

	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.state.hidden !== nextState.hidden;
	    }

	    /** Рендер компонента */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.sidebar + ' ' + (this.state.hidden ? _style2.default.hidden : '') },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.topline },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/admin' },
	            ' ',
	            _react2.default.createElement('img', { src: '/img/logo.png', alt: '\u0421\u0442\u0440\u043E\u0439\u0421\u0435\u0440\u0432\u0438\u0441' }),
	            ' '
	          ),
	          _react2.default.createElement('img', { onClick: this.switchView.bind(this), src: '/img/icons/burger.svg', alt: '' })
	        ),
	        _react2.default.createElement(_User2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.linkGroup },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/admin/add/transport', className: _style2.default.link, title: '\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u0441 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F\u043C\u0438' },
	            _react2.default.createElement(
	              'i',
	              null,
	              _react2.default.createElement('img', { src: '/img/icons/map.svg' })
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/admin/bookmarks/transport', className: _style2.default.link, title: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F' },
	          _react2.default.createElement(
	            'i',
	            null,
	            _react2.default.createElement('img', { src: '/img/icons/fav.svg' })
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438'
	          )
	        ),
	        localStorage.getItem('clientToken') ? this.renderUserLinks() : null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.aboutlinks },
	          _react2.default.createElement(
	            'a',
	            { href: '' },
	            '\u0422\u0435\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430'
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: '' },
	            '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'
	          )
	        )
	      );
	    }

	    /** Отрисовка ссылок */

	  }, {
	    key: 'renderUserLinks',
	    value: function renderUserLinks() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('hr', null),
	        this.renderUserAdsLinks()
	      );
	    }

	    /** Отрисовка ссылок на заявки */

	  }, {
	    key: 'renderOrdersPanel',
	    value: function renderOrdersPanel() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.disabled },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.subheader },
	          '\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.link, title: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0430\u0448\u0438 \u0437\u0430\u043A\u0430\u0437\u044B' },
	          _react2.default.createElement(
	            'i',
	            null,
	            _react2.default.createElement('img', { src: '/img/icons/send.svg' })
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.link, title: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B \u0434\u043B\u044F \u0432\u0430\u0441' },
	          _react2.default.createElement(
	            'i',
	            null,
	            _react2.default.createElement('img', { src: '/img/icons/income.svg' })
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435'
	          )
	        )
	      );
	    }

	    /** Отрисовка ссылок на объявления пользователя */

	  }, {
	    key: 'renderUserAdsLinks',
	    value: function renderUserAdsLinks() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/admin/ads/transport/user', className: _style2.default.link, title: '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0432\u0430\u0448\u0435\u0433\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430' },
	          _react2.default.createElement(
	            'i',
	            null,
	            _react2.default.createElement('img', { src: '/img/icons/transport.svg' })
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u041C\u043E\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442'
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/admin/ads/cargo/user', className: _style2.default.link, title: '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0432\u0430\u0448\u0438\u0445 \u0433\u0440\u0443\u0437\u043E\u0432' },
	          _react2.default.createElement(
	            'i',
	            null,
	            _react2.default.createElement('img', { src: '/img/icons/cargo.svg' })
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u041C\u043E\u0438 \u0433\u0440\u0443\u0437\u044B'
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/admin/ads/shop/user', className: _style2.default.link, title: '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0432\u0430\u0448\u0438\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432' },
	          _react2.default.createElement(
	            'i',
	            null,
	            _react2.default.createElement('img', { src: '/img/icons/shop.svg' })
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u041C\u043E\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B'
	          )
	        )
	      );
	    }
	  }]);

	  return Sidebar;
	}(_react2.default.Component);

	exports.default = Sidebar;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _AuthForm = __webpack_require__(278);

	var _AuthForm2 = _interopRequireDefault(_AuthForm);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _UserMethods = __webpack_require__(285);

	var methods = _interopRequireWildcard(_UserMethods);

	var _style = __webpack_require__(286);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/** Компонент отображения информации о пользователе */
	var User = function (_React$Component) {
	  _inherits(User, _React$Component);

	  function User(props) {
	    _classCallCheck(this, User);

	    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  /** Получение координат пользователя и проверка авторизации */


	  _createClass(User, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setClientCoordinates();
	      this.checkUserAuth();
	    }

	    /** Отрисовка компонента */

	  }, {
	    key: 'render',
	    value: function render() {
	      var token = localStorage.getItem('clientToken');

	      if (token) return _react2.default.createElement(
	        'div',
	        null,
	        this.props.user.fetching === 'fetching' ? this.renderPreloader() : this.renderUserInfo()
	      );else return _react2.default.createElement(_AuthForm2.default, null);
	    }

	    /** Отрисовка прелоадера */

	  }, {
	    key: 'renderPreloader',
	    value: function renderPreloader() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.checkUserAuth();
	      }, 10000);

	      return _react2.default.createElement('div', { className: '' + _style2.default.loading });
	    }

	    /** Отрисовка информации о пользователе */

	  }, {
	    key: 'renderUserInfo',
	    value: function renderUserInfo() {
	      return _react2.default.createElement(
	        'div',
	        { className: '' + _style2.default.user },
	        _react2.default.createElement(
	          'i',
	          { className: _style2.default.editswitcher },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/admin/profile' },
	            _react2.default.createElement('img', { src: '/img/icons/settings.svg', alt: '' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.avatar },
	          _react2.default.createElement('img', { src: this.props.user.info.avatar || "img/icons/user.svg", alt: this.props.user.info.last_name + " " + this.props.user.info.first_name })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.name },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.user.info.last_name + " " + this.props.user.info.first_name
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.email },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.user.info.email
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.phone },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.user.info.phone
	          )
	        )
	      );
	    }
	  }]);

	  return User;
	}(_react2.default.Component);

	/** Подключение компонента к глобальному Store */


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(User);


	function mapStateToProps(state) {
	  return {
	    user: state.user
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch)
	  };
	}

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _AuthFormMethods = __webpack_require__(282);

	var methods = _interopRequireWildcard(_AuthFormMethods);

	var _style = __webpack_require__(283);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs import


	// Action imports


	// Comp's methods import


	// Styles import


	//----------------------------------------------------------------------------

	var AuthForm = function (_Component) {
	  _inherits(AuthForm, _Component);

	  function AuthForm(props) {
	    _classCallCheck(this, AuthForm);

	    var _this = _possibleConstructorReturn(this, (AuthForm.__proto__ || Object.getPrototypeOf(AuthForm)).call(this, props));

	    _this.state = {
	      phone: '',
	      status: 'logging',
	      verifyCode: ''
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(AuthForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.authForm },
	        _react2.default.createElement(
	          'h3',
	          null,
	          '\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F'
	        ),
	        _react2.default.createElement('input', { type: 'text', value: this.state.phone, onChange: this.handlePhoneChange.bind(this), placeholder: '\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430', required: true }),
	        this.state.status === "verify" ? _react2.default.createElement('input', {
	          type: 'text',
	          value: this.state.verifyCode,
	          onChange: this.handleVCodeChange.bind(this),
	          placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438',
	          required: true }) : '',
	        _react2.default.createElement(
	          'button',
	          {
	            // Switch event depend on state
	            onClick: this.state.status === "verify" ? this.verifyUser : this.sendPhoneNumber },
	          this.state.status === "verify" ? "Подтвердить" : "Отправить"
	        )
	      );
	    }
	  }]);

	  return AuthForm;
	}(_react.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AuthForm);


	function mapStateToProps(state) {
	  return {
	    user: state.user
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch)
	  };
	}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setClientCoordinates = setClientCoordinates;
	exports.setUserFetch = setUserFetch;
	exports.setUserAuth = setUserAuth;
	exports.setUserData = setUserData;
	exports.userLogOut = userLogOut;
	exports.updateUserData = updateUserData;
	exports.setUserDataAsync = setUserDataAsync;
	exports.verifyUserAsync = verifyUserAsync;

	var _UserActionTypes = __webpack_require__(267);

	var actionTypes = _interopRequireWildcard(_UserActionTypes);

	var _user = __webpack_require__(280);

	var userDataActions = _interopRequireWildcard(_user);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/*
	 Отправка данных редьюсерам
	 -------------------------------------------------------------
	 */
	function setClientCoordinates(coords) {
	  return {
	    type: actionTypes.SET_USER_COORDS,
	    coords: coords
	  };
	}

	// Работа с API через AJAX
	function setUserFetch(fetch) {
	  return {
	    type: actionTypes.SET_USER_FETCH,
	    fetch: fetch
	  };
	}

	function setUserAuth(auth) {
	  return {
	    type: actionTypes.SET_USER_AUTH,
	    fetch: 'ready',
	    auth: auth
	  };
	}

	function setUserData(data) {

	  if (data != undefined && data !== null) {
	    localStorage.setItem('userInfo', JSON.stringify(data));

	    return {
	      type: actionTypes.SET_USER_DATA,
	      fetch: 'ready',
	      data: data
	    };
	  } else {
	    console.warn('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0444\u0438\u043B\u044F. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430...');
	    setUserDataAsync(localStorage.getItem('clientToken'));
	  }
	}

	function userLogOut() {
	  localStorage.removeItem('clientToken');
	  localStorage.removeItem('userInfo');

	  return {
	    type: actionTypes.USER_LOG_OUT
	  };
	}

	/*
	 Работа с данными
	 -------------------------------------------------------------
	 */
	function updateUserData(newData, id, token) {

	  var updatedData = userDataActions.updateUserData(newData, id, token);

	  localStorage.setItem('userInfo', JSON.stringify(updatedData));

	  return {
	    type: actionTypes.SET_USER_DATA,
	    data: updatedData,
	    token: token
	  };
	}

	/*
	 Асинхронные действия
	 -------------------------------------------------------------
	 */
	// Получаем данные пользователя
	function setUserDataAsync(token) {
	  console.info('[APP] Загрузка данных профиля');

	  var getIdPromise = userDataActions.getUserID,
	      getDataPromise = userDataActions.getUserData;

	  return function (dispatch) {
	    dispatch(setUserFetch('fetching'));

	    return getIdPromise(token).then(function (userId) {
	      return getDataPromise(userId);
	    }, function (error) {
	      return console.warn(error);
	    }).then(function (userData) {
	      return dispatch(setUserData(userData));
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	// Получаем токен пользователя. Верификация
	function verifyUserAsync(phone, code) {

	  var getTokenPromise = userDataActions.getUserToken,
	      getIdPromise = userDataActions.getUserID,
	      getDataPromise = userDataActions.getUserData;

	  return function (dispatch) {
	    dispatch(setUserFetch('fetching'));

	    return getTokenPromise(phone, code).then(function (token) {
	      return getIdPromise(token);
	    }, function (error) {
	      return console.warn(error);
	    }).then(function (userId) {
	      return getDataPromise(userId);
	    }, function (error) {
	      return console.warn(error);
	    }).then(function (userData) {
	      return dispatch(setUserData(userData));
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUserToken = getUserToken;
	exports.getUserID = getUserID;
	exports.getUserData = getUserData;
	exports.updateUserData = updateUserData;

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 [PROMISE] Верификация пользователя.
	 @param {string} phone    - номер телефона пользователя
	 @param {number} passcode - код верификации

	 @return {Object <number>} token - токен пользователя
	 */
	function getUserToken(phone, passcode) {
	  if (validateAuthInfo(phone, passcode)) {
	    return new Promise(function (resolve, reject) {
	      var verifyData = JSON.stringify({ phone: phone, passcode: passcode });

	      var xhr = new XMLHttpRequest();

	      xhr.open('POST', API.Accounts.verify, true);
	      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	      xhr.send(verifyData);

	      xhr.onreadystatechange = function () {
	        if (xhr.readyState !== 4) return;

	        if (xhr.status !== 200) {
	          reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0442\u043E\u043A\u0435\u043D\u0430. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	        } else {
	          var data = JSON.parse(xhr.responseText);
	          resolve(data.Token);
	        }
	      };
	    });
	  } else {
	    console.warn('[APP] Неверные данные для верификации');
	  }

	  function validateAuthInfo(phone, passcode) {
	    return phone && passcode;
	  }
	}

	/**
	 [PROMISE] Получение id пользователя по токену
	 @param {string} token - токен пользователя

	 @return {Object <number>} number - id пользователя
	 */
	function getUserID(token) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    if (token !== null) {
	      localStorage.setItem('clientToken', token);

	      xhr.open('GET', API.Accounts.user(), true);
	      xhr.setRequestHeader('Authorization', 'Token ' + token);
	      xhr.send();

	      xhr.onreadystatechange = function () {
	        if (xhr.readyState !== 4) return;

	        if (xhr.status !== 200) {
	          reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F id \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	        } else {
	          var data = JSON.parse(xhr.responseText);
	          resolve(data.current_user_id);
	        }
	      };
	    } else {
	      reject('[APP] Пользователь не авторизован.');
	    }
	  });
	}

	/**
	 [PROMISE] Получение данных пользователя по id
	 @param {number} id - id пользователя

	 @return {Object <object>} userData - данные пользователя
	 */
	function getUserData(id) {
	  return new Promise(function (resolve, reject) {
	    var token = localStorage.getItem('clientToken');

	    if (token !== null) {
	      (function () {
	        var xhr = new XMLHttpRequest();

	        xhr.open('GET', API.Accounts.user(id), true);
	        xhr.setRequestHeader('Authorization', 'Token ' + token);
	        xhr.send();

	        xhr.onreadystatechange = function () {
	          if (xhr.readyState !== 4) return;

	          if (xhr.status !== 200) reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);else resolve(JSON.parse(xhr.responseText));
	        };
	      })();
	    } else {
	      reject('[APP] Пользователь не авторизован.');
	    }
	  });
	}

	/**
	 Получение данных пользователя по id
	 @param {number} id    - id пользователя
	 @param {number} token - токен пользователя

	 @return {Object <object>} userData - обновленные данные пользователя
	 */
	function updateUserData(id, token) {
	  if (token !== null) {
	    var xhr = new XMLHttpRequest(),
	        formData = new FormData(document.forms.userEdit);

	    xhr.open('PATCH', API.Accounts.user(id), false);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(formData);

	    if (xhr.status !== 200) console.warn('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);else return JSON.parse(xhr.responseText);
	  } else {
	    console.info('[APP] Пользователь не авторизован.');
	  }
	}

/***/ },
/* 281 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransports = getTransports;
	exports.getTransport = getTransport;
	exports.getTransportParam = getTransportParam;
	exports.filterTransports = filterTransports;
	exports.getCargo = getCargo;
	exports.getCargoItem = getCargoItem;
	exports.getShopItem = getShopItem;
	exports.getShop = getShop;
	exports.getAutoComplete = getAutoComplete;
	exports.coordsToAddress = coordsToAddress;
	exports.getAd = getAd;
	var globalDomain = 'http://92.222.71.0',
	    googleAPIKey = 'AIzaSyA1l_CX9YVk3O_qywJUaVT0RIiRK49AFQw';

	function setRoute(routeString) {
	  return globalDomain + routeString;
	}

	/** Роуты для закладок */
	var Bookmarks = exports.Bookmarks = {
	  /**
	   * Получение закладки по ее id
	   * @param {number} id - id пользователя
	   */
	  item: function item(id) {
	    return setRoute('/bookmarks/' + id + '/');
	  },

	  items: setRoute('/bookmarks/')
	};

	/** Роуты для пользователей */
	var Accounts = exports.Accounts = {
	  /**
	   * Получение информации о пользователе
	   * @param {number} id - id пользователя
	   */
	  user: function user(id) {
	    return id ? setRoute('/accounts/users/' + id + '/') : setRoute('/accounts/user/');
	  },

	  verify: setRoute('/accounts/verify/')
	};

	/** Роуты для маркеров карты */
	var Markers = {
	  /**
	   * Получение списка меток
	   * @param {string} type   - тип объявления
	   * @param {array}  points - массив координат полигона для поиска
	   */
	  type: function type(_type, points) {
	    var polygon = points ? points.toString() : '';
	    var f_type = formatType(_type);
	    return setRoute('/adinstances/' + f_type + '/markers/' + polygon);
	  }
	};

	/** Роуты для транспорта */
	exports.Markers = Markers;
	var Transport = exports.Transport = {

	  /** Получение параметров транспорта */
	  types: {
	    categories: setRoute('/adinstances/transports/categories/'),
	    brands: setRoute('/adinstances/transports/brands/'),
	    models: setRoute('/adinstances/transports/models/')
	  },

	  /**
	   * Получение отдельного транспорта
	   * @param {number} id - id транспорта
	   */
	  item: function item(id) {
	    return setRoute('/adinstances/transports/' + id + '/');
	  },

	  /**
	   * Получение списка транспорта
	   * @param {number} lim - количество элементов
	   * @param {number} off - индекс отсчета
	   * @param {object} parameters - парамеры фильтрации
	   */
	  items: function items(lim, off, parameters) {
	    var limit = lim || 0,
	        offset = off || 0,
	        params = parameters ? formatFilter(parameters) : '';

	    return setRoute('/adinstances/transports/?' + params + 'limit=' + limit + '&offset=' + offset);
	  }
	};

	/** Роуты для грузов */
	var Cargo = exports.Cargo = {
	  /**
	   * Получение отдельного груза
	   * @param {number} id - id груза
	   */
	  item: function item(id) {
	    return setRoute('/adinstances/cargoes/' + id + '/');
	  }
	};

	/** Роуты для магазинов */
	var Shop = exports.Shop = {
	  /**
	   * Получение отдельного магазина
	   * @param {number} id - id магазина
	   */
	  item: function item(id) {
	    return setRoute('/adinstances/shops/' + id + '/');
	  }
	};

	/** Роуты для объявлений */
	var Ads = exports.Ads = {
	  /**
	   * Получение отдельного объявления по типу
	   * @param {string} type - тип объявления
	   * @param {number} id   - id объявления
	   */
	  item: function item(type, id) {
	    return setRoute('/adinstances/' + type + '/' + id + '/');
	  },

	  /** Роут загрузки изображений */
	  images: setRoute('/adinstances/image/')
	};

	/** Роуты для работы с API Google */
	var Google = exports.Google = {
	  /**
	   * Получение данных для автозаполнения
	   * @param {string} string - строка запроса
	   */
	  autoComplete: function autoComplete(string) {
	    return 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + string + '&key=' + googleAPIKey;
	  },

	  /**
	   * Преобразование координат в адрес
	   * @param {number} lat - широта
	   * @param {number} lng - долгота
	   */
	  coordsToAddress: function coordsToAddress(lat, lng) {
	    return 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + googleAPIKey;
	  }
	};

	/**
	 * Форматирование строки объявления
	 * @param {string} type - тип объявления
	 *
	 * @return {string} formattedType - отформатированный тип
	 */
	function formatType(type) {
	  var formattedType = type;

	  switch (type) {
	    case 'transport':
	      formattedType = 'transports';break;
	    case 'cargo':
	      formattedType = 'cargoes';break;
	    case 'shop':
	      formattedType = 'shops';break;
	    default:
	      formattedType = type;break;
	  }

	  return formattedType;
	}

	/**
	 * Форматирование строки объявления
	 * @param {object} parameters - JSON объект с параметрами для фильтрации
	 *
	 * @return {string} string - отформатированная строка фильтра
	 */
	function formatFilter(parameters) {
	  var filterString = '?';

	  for (var param in parameters) {
	    var value = parameters[param];
	    filterString += param + '=' + value + '&';
	  }

	  filterString = filterString.slice(0, -1);

	  return filterString;
	}

	// Транспорт
	// Получение списка транспорта (весь или пользователя)
	function getTransports(id) {
	  var param = id ? '?owner=' + id : '';
	  return setRoute('/adinstances/transports/' + param);
	}

	function getTransport(id) {
	  return setRoute('/adinstances/transports/' + id + '/');
	}

	// Получение списка параметров для транспорта
	function getTransportParam(param) {
	  return param ? setRoute('/adinstances/transports/' + param + '/') : setRoute('/adinstances/transports/categories/');
	}

	// Фильтр транспорта по параметрам
	function filterTransports(parameters) {
	  var filterString = '?';

	  parameters.max_price === parameters.min_price ? delete parameters.max_price : '';

	  for (var param in parameters) {
	    parameters[param] ? filterString += param + '=' + parameters[param] + '&' : '';
	  }

	  filterString = filterString.slice(0, -1);

	  return setRoute('/adinstances/transports/' + filterString);
	}

	// Грузы
	function getCargo(id) {
	  return id ? setRoute('/adinstances/cargoes/?owner=' + id) : setRoute('/adinstances/cargoes/');
	}

	function getCargoItem(id) {
	  return setRoute('/adinstances/cargoes/' + id + '/');
	}

	function getShopItem(id) {
	  return setRoute('/adinstances/shops/' + id + '/');
	}

	// Магазины
	function getShop(id) {
	  return id ? setRoute('/adinstances/shops/?owner=' + id) : setRoute('/adinstances/shops/');
	}

	// Google API
	function getAutoComplete(string) {
	  return 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + string + '&key=' + googleAPIKey;
	}

	function coordsToAddress(lat, lng) {
	  return 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + googleAPIKey;
	}

	function getAd(type, id) {
	  var formattedType = formatType(type);

	  return setRoute('/adinstances/' + formattedType + '/' + id + '/');
	}

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.verifyUser = verifyUser;
	exports.handlePhoneChange = handlePhoneChange;
	exports.handleVCodeChange = handleVCodeChange;
	exports.sendPhoneNumber = sendPhoneNumber;
	function verifyUser() {
	  var phone = this.state.phone,
	      code = this.state.verifyCode;

	  console.info('[APP] Verifying user with phone ' + phone + ' and code ' + code);

	  this.props.userActions.verifyUserAsync(phone, code);
	}

	function handlePhoneChange(event) {
	  this.setState({ phone: event.target.value });
	}

	function handleVCodeChange(event) {
	  this.setState({ verifyCode: event.target.value });
	}

	function sendPhoneNumber() {
	  // let phone = this.state.phone;
	  //
	  // let xhr = new XMLHttpRequest();
	  //
	  // let POSTData = JSON.stringify({
	  //     phone: phone
	  // });
	  //
	  // xhr.open('POST', 'http://92.222.71.0/accounts/users/', false);
	  // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	  // xhr.send(POSTData);

	  this.setState({ status: 'verify' }, function () {});
	}

/***/ },
/* 283 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"authForm":"authForm_2MLZ"};

/***/ },
/* 284 */,
/* 285 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.userLogOut = userLogOut;
	exports.checkUserAuth = checkUserAuth;
	exports.setClientCoordinates = setClientCoordinates;
	/**
	 * Вызов экшена для выхода пользователя.
	 * Удаляет токен и ставит authorized: false в store пользователя
	 */
	function userLogOut() {
	  this.props.userActions.userLogOut();
	}

	/**
	 * Проверка авторизация пользователя в системе.
	 * Проверка наличия токена и данных в localStorage
	 */
	function checkUserAuth() {
	  var token = localStorage.getItem('clientToken'),
	      user = localStorage.getItem('userInfo');

	  /** Если есть локальная информация о пользователе, используем ее */
	  if (user !== null && user !== 'undefined') {
	    this.props.userActions.setUserData(JSON.parse(user));
	    this.props.userActions.setUserAuth(true);
	  }

	  /** Иначе, если есть токен, запрашиваем данные пользователя */
	  else if (token) {
	      this.props.userActions.setUserDataAsync(token);
	    }

	    /** Иначе уведомляем, что пользовател не авторизован */
	    else {
	        console.warn('[APP] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D');
	      }
	}

	/**
	 * Установка координат пользователя
	 */
	function setClientCoordinates() {
	  var _this = this;

	  var clientLat = localStorage.getItem('clientLat'),
	      clientLon = localStorage.getItem('clientLon');

	  if (clientLat && clientLon) {
	    this.props.userActions.setClientCoordinates({
	      lat: parseFloat(clientLat),
	      lng: parseFloat(clientLon)
	    });
	  } else if ("geolocation" in navigator) {
	    navigator.geolocation.getCurrentPosition(function (position) {
	      var coords = { lat: position.coords.latitude, lng: position.coords.longitude };

	      localStorage.setItem('clientLat', position.coords.latitude);
	      localStorage.setItem('clientLon', position.coords.longitude);

	      _this.props.userActions.setClientCoordinates(coords);
	    });
	  } else {
	    // TODO: Сделать выбор города
	    console.warn('[APP] Браузер не поддерживает геолокацию');
	  }
	}

/***/ },
/* 286 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"editswitcher":"editswitcher_1lal","useredit":"useredit_qVTM","user":"user_3CyN","avatar":"avatar_2BAO","name":"name_2vtw","email":"email_2B_d","phone":"phone_1HVd","loading":"loading_1r4e"};

/***/ },
/* 287 */,
/* 288 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"sidebar":"sidebar_17dd","topline":"topline_3kmJ","linkGroup":"linkGroup_3HJ8","link":"link_3bCu","ordernum":"ordernum_2-u5","addannounce":"addannounce__9z-","subheader":"subheader_22_w","aboutlinks":"aboutlinks_37on","disabled":"disabled_Udxk","hidden":"hidden_3dqi"};

/***/ },
/* 289 */,
/* 290 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"appcontainer":"appcontainer_2orw"};

/***/ },
/* 291 */,
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Headline = __webpack_require__(293);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _AdsList = __webpack_require__(296);

	var _AdsList2 = _interopRequireDefault(_AdsList);

	var _Map = __webpack_require__(487);

	var _Map2 = _interopRequireDefault(_Map);

	var _style = __webpack_require__(516);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs import


	// Components import


	// Styles import


	//----------------------------------------------------------------------------

	// Define main view class
	var Ads = function (_React$Component) {
	  _inherits(Ads, _React$Component);

	  function Ads(props) {
	    _classCallCheck(this, Ads);

	    return _possibleConstructorReturn(this, (Ads.__proto__ || Object.getPrototypeOf(Ads)).call(this, props));
	  }

	  _createClass(Ads, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('[APP] Params - type: ' + this.props.params.type + ', user: ' + this.props.params.user);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.main },
	          _react2.default.createElement(_Headline2.default, { text: '\u041F\u043E\u0438\u0441\u043A \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439' }),
	          this.props.params.user && this.props.params.user === 'user' ? _react2.default.createElement(_AdsList2.default, { type: this.props.params.type ? this.props.params.type : 'transport', userAds: true }) : _react2.default.createElement(_AdsList2.default, { type: this.props.params.type ? this.props.params.type : 'transport' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.side },
	          _react2.default.createElement(_Map2.default, { type: this.props.params.type ? this.props.params.type : 'transport' })
	        )
	      );
	    }
	  }]);

	  return Ads;
	}(_react2.default.Component);

	exports.default = Ads;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _style = __webpack_require__(294);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Headline = function (_React$Component) {
	  _inherits(Headline, _React$Component);

	  function Headline(props) {
	    _classCallCheck(this, Headline);

	    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).call(this, props));
	  }

	  _createClass(Headline, [{
	    key: 'goBack',
	    value: function goBack() {
	      history.back();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.header },
	        this.props.back ? _react2.default.createElement(
	          'a',
	          { onClick: this.goBack.bind(this), className: _style2.default.backlink },
	          _react2.default.createElement('img', { src: '/img/icons/arrow-back.svg', alt: '' }),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.title },
	            '\u041D\u0430\u0437\u0430\u0434'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.title },
	            this.props.text
	          )
	        ) : _react2.default.createElement(
	          'div',
	          { className: _style2.default.title },
	          this.props.text
	        )
	      );
	    }
	  }]);

	  return Headline;
	}(_react2.default.Component);

	exports.default = Headline;

/***/ },
/* 294 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"header_2QXI","title":"title_317g","backlink":"backlink_2e5u","orderbutton":"orderbutton_2pRI"};

/***/ },
/* 295 */,
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _TransportPreview = __webpack_require__(297);

	var _TransportPreview2 = _interopRequireDefault(_TransportPreview);

	var _CargoPreview = __webpack_require__(327);

	var _CargoPreview2 = _interopRequireDefault(_CargoPreview);

	var _ShopPreview = __webpack_require__(332);

	var _ShopPreview2 = _interopRequireDefault(_ShopPreview);

	var _Filter = __webpack_require__(337);

	var _Filter2 = _interopRequireDefault(_Filter);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _TransportActions = __webpack_require__(323);

	var TransportActions = _interopRequireWildcard(_TransportActions);

	var _CargoActions = __webpack_require__(328);

	var CargoActions = _interopRequireWildcard(_CargoActions);

	var _ShopActions = __webpack_require__(333);

	var ShopActions = _interopRequireWildcard(_ShopActions);

	var _style = __webpack_require__(485);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs import


	// Components import


	// Action imports


	// Styles import


	//----------------------------------------------------------------------------

	// Define main view class
	var MainView = function (_React$Component) {
	  _inherits(MainView, _React$Component);

	  function MainView(props) {
	    _classCallCheck(this, MainView);

	    return _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this, props));
	  }

	  _createClass(MainView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var userID = this.props.user.info.id;

	      switch (this.props.type) {
	        case 'transport':
	          this.props.transportActions.setUserTransportAsync(userID);
	          break;

	        case 'cargo':
	          this.props.cargoActions.setUserCargoAsync(userID);
	          break;

	        case 'shop':
	          this.props.shopActions.setUserShopAsync(userID);
	          break;

	        default:
	          console.warn('[APP] Не указан тип объявления');
	          break;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.mainview },
	        this.renderListOfType(this.props.type)
	      );
	    }
	  }, {
	    key: 'renderListOfType',
	    value: function renderListOfType(type) {
	      switch (type) {
	        case 'transport':
	          return this.renderTransportsList();
	          break;

	        case 'cargo':
	          return this.renderCargoesList();
	          break;

	        case 'shop':
	          return this.renderShopsList();
	          break;

	        default:
	          return this.renderTransportsList();
	          break;
	      }
	    }
	  }, {
	    key: 'renderShopsList',
	    value: function renderShopsList() {
	      var fetching = this.props.shop.fetchingItems === "fetching";

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.content + ' ' + _style2.default.shop + ' ' + (fetching ? _style2.default.loading : '') },
	        fetching ? '' : this.props.shop.items.map(function (item) {
	          var key = 'shop-' + item.id;
	          return _react2.default.createElement(_ShopPreview2.default, { key: 'ads__' + key, id: item.id, data: item });
	        })
	      );
	    }
	  }, {
	    key: 'renderCargoesList',
	    value: function renderCargoesList() {
	      var fetching = this.props.cargo.fetchingItems === "fetching";

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.content + ' ' + _style2.default.cargo + ' ' + (fetching ? _style2.default.loading : '') },
	        fetching ? '' : this.props.cargo.items.map(function (item) {
	          var key = 'cargo-' + item.id;
	          return _react2.default.createElement(_CargoPreview2.default, { key: 'ads__' + key, id: item.id, data: item });
	        })
	      );
	    }
	  }, {
	    key: 'renderTransportsList',
	    value: function renderTransportsList() {
	      var fetching = this.props.transport.fetchingItems === "fetching";

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.content + ' ' + _style2.default.transport + ' ' + (fetching ? _style2.default.loading : '') },
	        fetching ? '' : this.props.transport.items.map(function (item) {
	          var key = 'transport-' + item.id;
	          return _react2.default.createElement(_TransportPreview2.default, { key: 'ads__' + key, id: item.id, data: item });
	        })
	      );
	    }
	  }]);

	  return MainView;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainView);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    transport: state.transport,
	    cargo: state.cargo,
	    shop: state.shop
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    transportActions: (0, _redux.bindActionCreators)(TransportActions, dispatch),
	    cargoActions: (0, _redux.bindActionCreators)(CargoActions, dispatch),
	    shopActions: (0, _redux.bindActionCreators)(ShopActions, dispatch)
	  };
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _TransportActions = __webpack_require__(323);

	var TransportActions = _interopRequireWildcard(_TransportActions);

	var _style = __webpack_require__(325);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/** Компонент превью транспорта */
	var TransportPreview = function (_React$Component) {
	  _inherits(TransportPreview, _React$Component);

	  function TransportPreview(props) {
	    _classCallCheck(this, TransportPreview);

	    return _possibleConstructorReturn(this, (TransportPreview.__proto__ || Object.getPrototypeOf(TransportPreview)).call(this, props));
	  }

	  /** Удаление транспорта из превью */


	  _createClass(TransportPreview, [{
	    key: 'handleDeleteClick',
	    value: function handleDeleteClick(e) {
	      var id = parseInt(e.target.dataset.id),
	          token = localStorage.getItem('clientToken'),
	          DOMNode = findAncestor(e.target, '.previewItem');

	      var requestParams = {
	        method: 'DELETE',
	        url: API.getTransport(id),
	        headers: {
	          'Authorization': 'Token ' + token
	        }
	      };

	      (0, _axios2.default)(requestParams).then(function (response) {
	        console.info('[APP] \u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442 \u0443\u0434\u0430\u043B\u0435\u043D');
	        console.info(response);
	        DOMNode.remove();
	      }).catch(function (error) {
	        return console.warn(error);
	      });

	      function findAncestor(el, sel) {
	        while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel)) {}
	        return el;
	      }
	    }

	    /** Рендер компонента */

	  }, {
	    key: 'render',
	    value: function render() {
	      var image = this.props.data.images[0] || { image: '/img/no-photo.png' };

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.transport + ' previewItem' },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.photo },
	          _react2.default.createElement('img', { src: image.image, alt: '' })
	        ),
	        this.renderMainInfo(),
	        this.renderAdditionalInfo()
	      );
	    }

	    /** Основная информация */

	  }, {
	    key: 'renderMainInfo',
	    value: function renderMainInfo() {
	      var isOwner = this.props.user.info && this.props.data.owner == this.props.user.info.id;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.description },
	        _react2.default.createElement(
	          'h4',
	          null,
	          this.props.data.model.category
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          this.props.data.model.name
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: _style2.default.smalltext },
	          '\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438:'
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: _style2.default.properties },
	          _react2.default.createElement(
	            'li',
	            null,
	            '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ',
	            this.props.data.state
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ',
	            this.props.data.model.brand
	          )
	        ),
	        isOwner ? this.renderOwnerActions() : null
	      );
	    }

	    /** Дополнительная информация */

	  }, {
	    key: 'renderAdditionalInfo',
	    value: function renderAdditionalInfo() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.info },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.price },
	          '\u0421\u043C\u0435\u043D\u0430 ',
	          _react2.default.createElement(
	            'b',
	            null,
	            this.props.data.price,
	            ' \u20BD'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.smalltext },
	          _react2.default.createElement('img', { src: '/img/icons/map.svg', className: _style2.default.icon, alt: '' }),
	          '\u0443\u043B. \u0413\u0430\u043C\u0437\u0430\u0442-\u0426\u0430\u0434\u0430\u0441\u044B 12 \u0441'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.actions },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/view/transport/' + this.props.data.id },
	            '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderOwnerActions',
	    value: function renderOwnerActions() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.owner },
	        _react2.default.createElement('span', {
	          'data-id': this.props.data.id,
	          onClick: this.handleDeleteClick.bind(this),
	          className: _style2.default.ownerDelete, title: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442'
	        }),
	        _react2.default.createElement(_reactRouter.Link, {
	          className: _style2.default.ownerEdit,
	          to: '/view/transport/' + this.props.data.id + '/edit',
	          title: '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442'
	        })
	      );
	    }
	  }]);

	  return TransportPreview;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TransportPreview);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    transport: state.transport
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    transportActions: (0, _redux.bindActionCreators)(TransportActions, dispatch)
	  };
	}

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(299);

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);
	var bind = __webpack_require__(301);
	var Axios = __webpack_require__(302);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance();

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return createInstance(defaultConfig);
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(320);
	axios.CancelToken = __webpack_require__(321);
	axios.isCancel = __webpack_require__(317);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(322);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var bind = __webpack_require__(301);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return typeof FormData !== 'undefined' && val instanceof FormData;
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge() /* obj1, obj2, obj3, ... */{
	  var result = {};
	  function assignValue(val, key) {
	    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};

/***/ },
/* 301 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(303);
	var utils = __webpack_require__(300);
	var InterceptorManager = __webpack_require__(314);
	var dispatchRequest = __webpack_require__(315);
	var isAbsoluteURL = __webpack_require__(318);
	var combineURLs = __webpack_require__(319);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 */
	function Axios(defaultConfig) {
	  this.defaults = utils.merge(defaults, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(300);
	var normalizeHeaderName = __webpack_require__(304);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(305);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(305);
	  }
	  return adapter;
	}

	module.exports = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) {/* Ignore */}
	    }
	    return data;
	  }],

	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(300);
	var settle = __webpack_require__(306);
	var buildURL = __webpack_require__(309);
	var parseHeaders = __webpack_require__(310);
	var isURLSameOrigin = __webpack_require__(311);
	var createError = __webpack_require__(307);
	var btoa = typeof window !== 'undefined' && window.btoa || __webpack_require__(312);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || request.readyState !== 4 && !xDomain) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(313);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(307);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
	  }
	};

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(308);

	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};

/***/ },
/* 308 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */

	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);

	function encode(val) {
	  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) {
	    return parsed;
	  }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);

	module.exports = utils.isStandardBrowserEnv() ?

	// Standard browser envs have full support of the APIs needed to test
	// whether the request URL is of the same origin as current location.
	function standardBrowserEnv() {
	  var msie = /(msie|trident)/i.test(navigator.userAgent);
	  var urlParsingNode = document.createElement('a');
	  var originURL;

	  /**
	  * Parse a URL to discover it's components
	  *
	  * @param {String} url The URL to be parsed
	  * @returns {Object}
	  */
	  function resolveURL(url) {
	    var href = url;

	    if (msie) {
	      // IE needs attribute set twice to normalize properties
	      urlParsingNode.setAttribute('href', href);
	      href = urlParsingNode.href;
	    }

	    urlParsingNode.setAttribute('href', href);

	    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	    return {
	      href: urlParsingNode.href,
	      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	      host: urlParsingNode.host,
	      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	      hostname: urlParsingNode.hostname,
	      port: urlParsingNode.port,
	      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
	    };
	  }

	  originURL = resolveURL(window.location.href);

	  /**
	  * Determine if a URL shares the same origin as the current location
	  *
	  * @param {String} requestURL The URL to test
	  * @returns {boolean} True if URL shares the same origin, otherwise false
	  */
	  return function isURLSameOrigin(requestURL) {
	    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
	    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
	  };
	}() :

	// Non standard browser envs (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return function isURLSameOrigin() {
	    return true;
	  };
	}();

/***/ },
/* 312 */
/***/ function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error();
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	  // initialize result and counter
	  var block, charCode, idx = 0, map = chars;
	  // if the next str index does not exist:
	  //   change the mapping table to "="
	  //   check if d has no fractional digits
	  str.charAt(idx | 0) || (map = '=', idx % 1);
	  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);

	module.exports = utils.isStandardBrowserEnv() ?

	// Standard browser envs support document.cookie
	function standardBrowserEnv() {
	  return {
	    write: function write(name, value, expires, path, domain, secure) {
	      var cookie = [];
	      cookie.push(name + '=' + encodeURIComponent(value));

	      if (utils.isNumber(expires)) {
	        cookie.push('expires=' + new Date(expires).toGMTString());
	      }

	      if (utils.isString(path)) {
	        cookie.push('path=' + path);
	      }

	      if (utils.isString(domain)) {
	        cookie.push('domain=' + domain);
	      }

	      if (secure === true) {
	        cookie.push('secure');
	      }

	      document.cookie = cookie.join('; ');
	    },

	    read: function read(name) {
	      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	      return match ? decodeURIComponent(match[3]) : null;
	    },

	    remove: function remove(name) {
	      this.write(name, '', Date.now() - 86400000);
	    }
	  };
	}() :

	// Non standard browser env (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return {
	    write: function write() {},
	    read: function read() {
	      return null;
	    },
	    remove: function remove() {}
	  };
	}();

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);
	var transformData = __webpack_require__(316);
	var isCancel = __webpack_require__(317);
	var defaults = __webpack_require__(303);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(config.data, config.headers, config.transformRequest);

	  // Flatten headers
	  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

	  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
	    delete config.headers[method];
	  });

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(response.data, response.headers, config.transformResponse);

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
	      }
	    }

	    return Promise.reject(reason);
	  });
	};

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(300);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};

/***/ },
/* 317 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

/***/ },
/* 318 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */

	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
	  );
	};

/***/ },
/* 319 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */

	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};

/***/ },
/* 320 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */

	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(320);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;

/***/ },
/* 322 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */

	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setTypesAsync = setTypesAsync;
	exports.setAllCurrentTransportAsync = setAllCurrentTransportAsync;
	exports.filterByParametersAsync = filterByParametersAsync;
	exports.setUserTransportAsync = setUserTransportAsync;
	exports.addItemAsync = addItemAsync;

	var _TransportActionTypes = __webpack_require__(269);

	var actionTypes = _interopRequireWildcard(_TransportActionTypes);

	var _transport = __webpack_require__(324);

	var transportDataActions = _interopRequireWildcard(_transport);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function setFetchItems(type) {
	  return {
	    type: actionTypes.SET_FETCH_ITEMS,
	    fetch: type
	  };
	}

	// XHR functions for user model


	function setFetchTypes(fetch) {
	  return {
	    type: actionTypes.SET_FETCH_TYPES,
	    fetch: fetch
	  };
	}

	function addItem(item) {
	  return {
	    type: actionTypes.ADD_ITEM,
	    fetch: "ready",
	    item: item
	  };
	}

	function setTypes(data) {
	  return {
	    type: actionTypes.SET_TYPES,
	    fetch: 'ready',
	    data: data
	  };
	}

	function setAllCurrentTransport(items) {
	  return {
	    type: actionTypes.SET_ALL_ITEMS,
	    fetch: 'ready',
	    items: items.reverse()
	  };
	}

	function setUserTransport(items) {
	  return {
	    type: actionTypes.SET_ALL_ITEMS,
	    fetch: 'ready',
	    items: items.reverse()
	  };
	}

	function setPriceRange(min, max) {
	  return {
	    type: actionTypes.SET_PRICE_RANGE,
	    min_price: min,
	    max_price: max
	  };
	}

	//-----------------------------------------------------------

	function setTypesAsync() {
	  var typesData = {};
	  var typePromise = transportDataActions.getTransportTypes;
	  var localTypes = JSON.parse(localStorage.getItem('transportTypes'));

	  return function (dispatch) {
	    if (localTypes && localTypes !== 'undefined') {
	      dispatch(setTypes(localTypes));
	    } else {
	      dispatch(setFetchTypes('fetching'));

	      return typePromise('categories').then(function (data) {
	        typesData['categories'] = data;
	        return typePromise('brands');
	      }, function (error) {
	        return console.warn(error);
	      }).then(function (data) {
	        typesData['brands'] = data;
	        return typePromise('models');
	      }, function (error) {
	        return console.warn(error);
	      }).then(function (data) {
	        typesData['models'] = data;
	        localStorage.setItem('transportTypes', JSON.stringify(typesData));
	        dispatch(setTypes(typesData));
	      }, function (error) {
	        return console.warn(error);
	      });
	    }
	  };
	}

	function setAllCurrentTransportAsync() {
	  var promise = transportDataActions.getAllCurrentTransport;

	  return function (dispatch) {
	    dispatch(setFetchItems('fetching'));

	    return promise().then(function (items) {
	      dispatch(setAllCurrentTransport(items));
	      getPriceRange(dispatch, items);
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	function filterByParametersAsync(parameters) {
	  var promise = transportDataActions.filterByParameters;

	  return function (dispatch) {
	    dispatch(setFetchItems("fetching"));

	    return promise(parameters).then(function (items) {
	      getPriceRange(dispatch, items);
	      dispatch(setAllCurrentTransport(items));
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	function setUserTransportAsync(id) {
	  var promise = transportDataActions.getUserTransport;

	  return function (dispatch) {
	    dispatch(setFetchItems("fetching"));

	    return promise(id).then(function (items) {
	      dispatch(setUserTransport(items));
	      getPriceRange(dispatch, items);
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	function addItemAsync(token, images) {
	  var promise = transportDataActions.addNewTransport;

	  return function (dispatch) {
	    dispatch(setFetchItems("fetching"));

	    return promise(token, images).then(function (item) {
	      dispatch(addItem(item));
	      browserHistory.push('/transport/' + item.id);
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	// Workers
	// ---------------------------

	function getPriceRange(dispatch, items) {
	  if (items.length) {
	    var priceArray = items.map(function (item) {
	      return item.price;
	    }),
	        max = Math.max.apply(null, priceArray),
	        min = Math.min.apply(null, priceArray);

	    dispatch(setPriceRange(min, max));
	  } else {
	    console.warn('[APP] \u041D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0440\u0430\u0441\u0441\u0447\u0435\u0442\u0430 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0446\u0435\u043D');
	  }
	}

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransportTypes = getTransportTypes;
	exports.getAllCurrentTransport = getAllCurrentTransport;
	exports.getUserTransport = getUserTransport;
	exports.filterByParameters = filterByParameters;
	exports.addNewTransport = addNewTransport;

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var PAGINATION_LIMIT = 15;

	/**
	 Получение параметров транспорта (категории, бренды, модели)
	 @param {string} type - тип параметра
	 ---
	 @return {object} promise - Промис, обрабатывающий список параметров
	 */
	function getTransportTypes(type) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.Transport.types[type], true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ' + type + '. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

	/**
	 * Получение всего транспорта из базы
	 * @return {object} promise - Промис, обрабатывающий список транспорта
	 */
	function getAllCurrentTransport(page) {
	  var pageNumber = parseInt(page),
	      page_offset = PAGINATION_LIMIT * (pageNumber - 1);

	  return new Promise(function (resolve, reject) {

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.Transport.items(PAGINATION_LIMIT, page_offset, null), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        var response = JSON.parse(xhr.responseText);
	        resolve(response.results);
	      }
	    };
	  });
	}

	/**
	 * Получение транспорта пользователя
	 * @param {number} id - id пользователя
	 *
	 * @return {object} promise - Промис, обрабатывающий список транспорта
	 */
	function getUserTransport(id) {
	  return new Promise(function (resolve, reject) {

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.Transport.items(PAGINATION_LIMIT, page_offset, { owner: id }), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        var response = JSON.parse(xhr.responseText);
	        resolve(response.results);
	      }
	    };
	  });
	}

	/**
	 * Фильтрация списка транспорта по параметрам
	 * @param {object} parameters - объект со списком параметров для фильтрации.
	 *
	 * @return {object} promise - Промис, обрабатывающий список транспорта
	 */
	function filterByParameters(parameters) {
	  return new Promise(function (resolve, reject) {

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.filterTransports(parameters), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject(xhr.responseText);
	      } else {
	        var response = JSON.parse(xhr.responseText);
	        resolve(response.results);
	      }
	    };
	  });
	}

	/**
	 * Добавление транспорта
	 * @param {number} token  - токен пользователя
	 * @param {array}  images - фотографии, прикрепленные к транспорту
	 *
	 * @return {object} promise - Промис, обрабатывающий добавленный транспорт
	 */
	function addNewTransport(token, images) {
	  return new Promise(function (resolve, reject) {

	    if (!token) reject('[APP] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D (\u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D)');

	    var xhr = new XMLHttpRequest();

	    var formData = new FormData(document.forms.newTransport);

	    images.forEach(function (image, i) {
	      formData.append('images', JSON.stringify(images[i]));
	    });

	    xhr.open('POST', API.Transport.items(), false);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(formData);

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] Ошибка добавления транспорта на сервер');
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

/***/ },
/* 325 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"transport":"transport_32-B","photo":"photo_240H","price":"price_PpXz","description":"description_3n9m","properties":"properties_1OjV","info":"info_6p9Q","smalltext":"smalltext_2cUr","actions":"actions_q-2P","owner":"owner_1Q-e","ownerDelete":"ownerDelete_3sKn","ownerEdit":"ownerEdit_S6yE","icon":"icon_xbKj"};

/***/ },
/* 326 */,
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _CargoActions = __webpack_require__(328);

	var CargoActions = _interopRequireWildcard(_CargoActions);

	var _style = __webpack_require__(330);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs import


	// Action imports


	// Styles import


	//----------------------------------------------------------------------------

	// Define Preview Class
	var CargoPreview = function (_React$Component) {
	  _inherits(CargoPreview, _React$Component);

	  function CargoPreview(props) {
	    _classCallCheck(this, CargoPreview);

	    return _possibleConstructorReturn(this, (CargoPreview.__proto__ || Object.getPrototypeOf(CargoPreview)).call(this, props));
	  }

	  _createClass(CargoPreview, [{
	    key: 'handleDeleteClick',
	    value: function handleDeleteClick(e) {
	      var id = parseInt(e.target.dataset.id);
	      var token = localStorage.getItem('clientToken');
	      var DOMNode = this.findAncestor(e.target, '.previewItem');

	      console.info('[APP] Deleting cargo with id ' + id);

	      var requestParams = {
	        method: 'DELETE',
	        url: API.getCargoItem(id),
	        headers: {
	          'Authorization': 'Token ' + token
	        }
	      };

	      (0, _axios2.default)(requestParams).then(function (response) {
	        console.info('[APP] \u0413\u0440\u0443\u0437 \u0443\u0434\u0430\u043B\u0435\u043D');
	        console.info(response);
	        DOMNode.remove();
	      }).catch(function (error) {
	        return console.warn(error);
	      });
	    }
	  }, {
	    key: 'findAncestor',
	    value: function findAncestor(el, sel) {
	      while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel)) {}
	      return el;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isOwner = this.props.user.info && this.props.data.owner == this.props.user.info.id;
	      var image = this.props.data.images.length ? this.props.data.images[0] : { image: '/img/no-photo.png' };

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.cargo + ' previewItem' },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.photo },
	          _react2.default.createElement('img', { src: image.image, alt: '\u0424\u043E\u0442\u043E \u0433\u0440\u0443\u0437\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.description },
	          _react2.default.createElement(
	            'h3',
	            null,
	            this.props.data.name
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            this.props.data.description
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: _style2.default.smalltext },
	            '\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438:'
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: _style2.default.properties },
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ',
	              this.props.data.state
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u0412\u0435\u0441: ',
	              this.props.data.weight
	            )
	          ),
	          isOwner ? this.renderOwnerActions() : null
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.info },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.price },
	            '\u0421\u043C\u0435\u043D\u0430 ',
	            _react2.default.createElement(
	              'b',
	              null,
	              this.props.data.price,
	              ' \u20BD'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.smalltext },
	            _react2.default.createElement('img', { src: '/img/icons/map.svg', className: _style2.default.icon, alt: '' }),
	            '\u0443\u043B. \u0413\u0430\u043C\u0437\u0430\u0442-\u0426\u0430\u0434\u0430\u0441\u044B 12 \u0441'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.actions },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/view/cargo/' + this.props.data.id },
	              '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderOwnerActions',
	    value: function renderOwnerActions() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.owner },
	        _react2.default.createElement('span', {
	          'data-id': this.props.data.id,
	          onClick: this.handleDeleteClick.bind(this),
	          className: _style2.default.ownerDelete, title: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u0437'
	        }),
	        _react2.default.createElement(_reactRouter.Link, {
	          className: _style2.default.ownerEdit,
	          to: '/view/cargo/' + this.props.data.id + '/edit',
	          title: '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0433\u0440\u0443\u0437'
	        })
	      );
	    }
	  }]);

	  return CargoPreview;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CargoPreview);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    cargo: state.cargo
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    cargoActions: (0, _redux.bindActionCreators)(CargoActions, dispatch)
	  };
	}

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setAllCurrentCargoAsync = setAllCurrentCargoAsync;
	exports.setUserCargoAsync = setUserCargoAsync;
	exports.addItemAsync = addItemAsync;

	var _CargoActionTypes = __webpack_require__(271);

	var actionTypes = _interopRequireWildcard(_CargoActionTypes);

	var _cargo = __webpack_require__(329);

	var cargoDataActions = _interopRequireWildcard(_cargo);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function setFetch(type) {
	  return {
	    type: actionTypes.SET_FETCH,
	    fetch: type
	  };
	}

	// XHR functions for user model


	function addItem(item) {
	  return {
	    type: actionTypes.ADD_ITEM,
	    fetch: "ready",
	    item: item
	  };
	}

	function setAllCurrentCargo(items) {
	  return {
	    type: actionTypes.SET_ITEMS,
	    fetch: "ready",
	    items: items
	  };
	}

	function setUserCargo(items) {
	  return {
	    type: actionTypes.SET_ITEMS,
	    fetch: "ready",
	    items: items
	  };
	}

	//-----------------------------------------------------------

	function setAllCurrentCargoAsync() {
	  var promise = cargoDataActions.getAllCurrentCargo;

	  return function (dispatch) {
	    dispatch(setFetch("fetching"));

	    return promise().then(function (items) {
	      dispatch(setAllCurrentCargo(items));
	    });
	  };
	}

	function setUserCargoAsync(id) {
	  var promise = cargoDataActions.getUserCargo;

	  return function (dispatch) {
	    dispatch(setFetch("fetching"));

	    return promise(id).then(function (items) {
	      dispatch(setUserCargo(items));
	    });
	  };
	}

	function addItemAsync(token, images) {
	  var promise = cargoDataActions.addNewCargo;

	  return function (dispatch) {
	    dispatch(setFetch("fetching"));

	    return promise(token, images).then(function (item) {
	      dispatch(addItem(item));
	    });
	  };
	}

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAllCurrentCargo = getAllCurrentCargo;
	exports.getUserCargo = getUserCargo;
	exports.addNewCargo = addNewCargo;

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 Получение всех грузов
	 ---
	 @return {Object <array>} cargoes - список грузов
	 */
	function getAllCurrentCargo() {
	  return new Promise(function (resolve, reject) {

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.getCargo(), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject(xhr.responseText);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

	/**
	 Получение грузов пользователя
	 @param {number} id - id пользователя
	 ---
	 @return {Object <array>} cargoes - список грузов
	 */
	function getUserCargo(id) {
	  return new Promise(function (resolve, reject) {

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.getCargo(id), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject(xhr.responseText);
	      } else {
	        var response = JSON.parse(xhr.responseText);
	        resolve(response.results);
	      }
	    };
	  });
	}

	/**
	 Добавление груза
	 @param {number} token - токен пользователя
	 @param {array} images - фотографии, прикрепленные к грузу
	 ---
	 @return {Object <object>} cargo - груз
	 */
	function addNewCargo(token, images) {
	  return new Promise(function (resolve, reject) {

	    if (!token) reject('[APP] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D (\u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439  \u0442\u043E\u043A\u0435\u043D)');

	    var xhr = new XMLHttpRequest();
	    var formData = new FormData(document.forms.newCargo);

	    images.forEach(function (image, i) {
	      formData.append('images', JSON.stringify(images[i]));
	    });

	    xhr.open('POST', API.getCargo(), false);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(formData);

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0440\u0443\u0437\u0430. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

/***/ },
/* 330 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"cargo":"cargo_2L8U","photo":"photo_1D1N","price":"price_3rb0","description":"description_2vuO","properties":"properties_3IQa","info":"info_1R2v","smalltext":"smalltext_1IVN","actions":"actions_xG4g","owner":"owner_3DRx","ownerDelete":"ownerDelete_2LlO","ownerEdit":"ownerEdit_3sBO","icon":"icon_3uZJ"};

/***/ },
/* 331 */,
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _ShopActions = __webpack_require__(333);

	var ShopActions = _interopRequireWildcard(_ShopActions);

	var _style = __webpack_require__(335);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs import


	// Action imports


	// Styles import


	//----------------------------------------------------------------------------

	// Define Preview Class
	var ShopPreview = function (_React$Component) {
	  _inherits(ShopPreview, _React$Component);

	  function ShopPreview(props) {
	    _classCallCheck(this, ShopPreview);

	    return _possibleConstructorReturn(this, (ShopPreview.__proto__ || Object.getPrototypeOf(ShopPreview)).call(this, props));
	  }

	  _createClass(ShopPreview, [{
	    key: 'handleDeleteClick',
	    value: function handleDeleteClick(e) {
	      var id = parseInt(e.target.dataset.id);
	      var token = localStorage.getItem('clientToken');
	      var DOMNode = this.findAncestor(e.target, '.previewItem');

	      console.info('[APP] Deleting shop with id ' + id);

	      var requestParams = {
	        method: 'DELETE',
	        url: API.getShopItem(id),
	        headers: {
	          'Authorization': 'Token ' + token
	        }
	      };

	      (0, _axios2.default)(requestParams).then(function (response) {
	        console.info('[APP] \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0443\u0434\u0430\u043B\u0435\u043D');
	        console.info(response);
	        DOMNode.remove();
	      }).catch(function (error) {
	        return console.warn(error);
	      });
	    }
	  }, {
	    key: 'findAncestor',
	    value: function findAncestor(el, sel) {
	      while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel)) {}
	      return el;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isOwner = this.props.user.info && this.props.data.owner == this.props.user.info.id;
	      var image = this.props.data.images.length ? this.props.data.images[0] : { image: '/img/no-photo.png' };

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.shop + ' previewItem' },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.photo },
	          _react2.default.createElement('img', { src: image.image, alt: '\u0424\u043E\u0442\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.description },
	          _react2.default.createElement(
	            'h3',
	            null,
	            this.props.data.name
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            this.props.data.description
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: _style2.default.smalltext },
	            '\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438:'
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: _style2.default.properties },
	            _react2.default.createElement(
	              'li',
	              null,
	              '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ',
	              this.props.data.state
	            )
	          ),
	          isOwner ? this.renderOwnerActions() : null
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.info },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.smalltext },
	            _react2.default.createElement('img', { src: '/img/icons/map.svg', className: _style2.default.icon, alt: '' }),
	            '\u0443\u043B. \u0413\u0430\u043C\u0437\u0430\u0442-\u0426\u0430\u0434\u0430\u0441\u044B 12 \u0441'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.actions },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/view/shop/' + this.props.data.id },
	              '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderOwnerActions',
	    value: function renderOwnerActions() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.owner },
	        _react2.default.createElement('span', {
	          'data-id': this.props.data.id,
	          onClick: this.handleDeleteClick.bind(this),
	          className: _style2.default.ownerDelete, title: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D'
	        }),
	        _react2.default.createElement(_reactRouter.Link, {
	          className: _style2.default.ownerEdit,
	          to: '/view/shop/' + this.props.data.id + '/edit',
	          title: '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D'
	        })
	      );
	    }
	  }]);

	  return ShopPreview;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShopPreview);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    shop: state.shop
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    shopActions: (0, _redux.bindActionCreators)(ShopActions, dispatch)
	  };
	}

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setAllCurrentShopAsync = setAllCurrentShopAsync;
	exports.setUserShopAsync = setUserShopAsync;
	exports.addItemAsync = addItemAsync;

	var _ShopActionTypes = __webpack_require__(273);

	var actionTypes = _interopRequireWildcard(_ShopActionTypes);

	var _shop = __webpack_require__(334);

	var shopDataActions = _interopRequireWildcard(_shop);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function setFetch(type) {
	  return {
	    type: actionTypes.SET_FETCH,
	    fetch: type
	  };
	}

	// XHR functions for user model


	function addItem(item) {
	  return {
	    type: actionTypes.ADD_ITEM,
	    fetch: "ready",
	    item: item
	  };
	}

	function setAllCurrentShop(items) {
	  return {
	    type: actionTypes.SET_ITEMS,
	    fetch: "ready",
	    items: items
	  };
	}

	function setUserShop(items) {
	  return {
	    type: actionTypes.SET_ITEMS,
	    fetch: "ready",
	    items: items
	  };
	}

	//-----------------------------------------------------------

	function setAllCurrentShopAsync() {
	  var promise = shopDataActions.getAllCurrentShop;

	  return function (dispatch) {
	    dispatch(setFetch("fetching"));

	    return promise().then(function (items) {
	      dispatch(setAllCurrentShop(items));
	    });
	  };
	}

	function setUserShopAsync(id) {
	  console.info('[APP] Загрузка магазинов пользователя');
	  var promise = shopDataActions.getUserShop;

	  return function (dispatch) {
	    dispatch(setFetch("fetching"));

	    return promise(id).then(function (items) {
	      return dispatch(setUserShop(items), function (error) {
	        return console.warn(error);
	      });
	    });
	  };
	}

	function addItemAsync(token, images) {
	  var promise = shopDataActions.addNewShop;

	  return function (dispatch) {
	    dispatch(setFetch("fetching"));

	    return promise(token, images).then(function (item) {
	      return dispatch(addItem(item), function (error) {
	        return console.warn(error);
	      });
	    });
	  };
	}

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAllCurrentShop = getAllCurrentShop;
	exports.getUserShop = getUserShop;
	exports.addNewShop = addNewShop;

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 Получение всех магазинов в базе данных
	 ---
	 @return {object} promise - Промис, обрабатывающий добавленный груз
	 */
	function getAllCurrentShop() {
	  return new Promise(function (resolve, reject) {

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.getShop(), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        var response = JSON.parse(xhr.responseText);
	        resolve(response.results);
	      }
	    };
	  });
	}

	/**
	 Получение магазинов пользователя
	 @param {number} id - id пользователя
	 ---
	 @return {object} promise - Промис, обрабатывающий список магазинов
	 */
	function getUserShop(id) {
	  console.info('[APP] Calling user shops');
	  return new Promise(function (resolve, reject) {

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.getShop(id), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        var response = JSON.parse(xhr.responseText);
	        resolve(response.results);
	      }
	    };
	  });
	}

	/**
	 Добавление нового магазина
	 @param {number} token - токен пользователя
	 @param {array} images - фотографии, прикрепленные к грузу
	 ---
	 @return {object} promise - Промис, обрабатывающий добавленный магазин
	 */
	function addNewShop(token, images) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    var formData = new FormData(document.forms.newShop);

	    images.forEach(function (image, i) {
	      formData.append('images', JSON.stringify(images[i]));
	    });

	    xhr.open('POST', API.getShop(), false);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(formData);

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

/***/ },
/* 335 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"shop":"shop_35Un","photo":"photo_2cZA","price":"price_23NT","description":"description_2DQi","properties":"properties_3PO5","info":"info_3Uwv","smalltext":"smalltext_2K4B","actions":"actions_1m0-","owner":"owner_3LJ-","ownerDelete":"ownerDelete_oeoD","ownerEdit":"ownerEdit_2E0B","icon":"icon_1rTj"};

/***/ },
/* 336 */,
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _rcSlider = __webpack_require__(338);

	var _rcSlider2 = _interopRequireDefault(_rcSlider);

	var _TransportActions = __webpack_require__(323);

	var TransportActions = _interopRequireWildcard(_TransportActions);

	var _methods = __webpack_require__(480);

	var methods = _interopRequireWildcard(_methods);

	var _style = __webpack_require__(481);

	var _style2 = _interopRequireDefault(_style);

	var _index = __webpack_require__(483);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----------------------------------------------------------------------------
	// Подключение зависимостей
	// ----------------------------------------------------------------------------


	// Action imports


	// Extend


	// Styles import


	// ----------------------------------------------------------------------------


	// ----------------------------------------------------------------------------
	// Определение классса компонента
	// ----------------------------------------------------------------------------
	var Filter = function (_React$Component) {
	  _inherits(Filter, _React$Component);

	  function Filter(props) {
	    _classCallCheck(this, Filter);

	    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

	    _this.state = {
	      filterParameters: {
	        min_price: _this.props.transport.min_price,
	        max_price: _this.props.transport.max_price,
	        owner: _this.props.userID || ''
	      }
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(Filter, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.transportActions.setTypesAsync();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.filter },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          this.renderCategoryFilter()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          this.renderPriceFilter(),
	          this.renderExtraParams()
	        )
	      );
	    }

	    // ----------------------------------------------------------------------------
	    // Отрисовка отдельных частей шаблона
	    // ----------------------------------------------------------------------------
	    // Отрисовка выбора категориии

	  }, {
	    key: 'renderCategoryFilter',
	    value: function renderCategoryFilter() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.parameter },
	        _react2.default.createElement(
	          'select',
	          {
	            onChange: this.handleCategoryChange.bind(this),
	            name: 'category', id: 'type'
	          },
	          this.props.transport.fetchingTypes === 'ready' ? this.props.transport.params.categories.map(function (item) {
	            return _react2.default.createElement(
	              'option',
	              { key: item.name + '_' + item.id, value: item.id },
	              item.name
	            );
	          }) : _react2.default.createElement(
	            'option',
	            { value: '0' },
	            '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439...'
	          )
	        )
	      );
	    }

	    // Отрисовка диапазона цен

	  }, {
	    key: 'renderPriceFilter',
	    value: function renderPriceFilter() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.price },
	        _react2.default.createElement(
	          'span',
	          null,
	          '\u043E\u0442',
	          _react2.default.createElement(
	            'strong',
	            null,
	            this.props.transport.min_price
	          ),
	          '\u0434\u043E',
	          _react2.default.createElement(
	            'strong',
	            null,
	            this.props.transport.max_price
	          ),
	          '\u0437\u0430 \u0441\u043C\u0435\u043D\u0443'
	        ),
	        this.props.transport.fetchingItems === 'ready' ? _react2.default.createElement(_rcSlider2.default, {
	          min: this.props.transport.min_price,
	          max: this.props.transport.max_price,
	          pushable: true,
	          onAfterChange: this.handlePriceChange.bind(this),
	          range: true,
	          defaultValue: [this.props.transport.min_price, this.props.transport.max_price]
	        }) : '',
	        _react2.default.createElement('input', {
	          type: 'hidden', placeholder: '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430',
	          onChange: this.handleMinPriceChange.bind(this),
	          value: this.props.transport.min_price
	        }),
	        _react2.default.createElement('input', {
	          type: 'hidden', placeholder: '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430',
	          onChange: this.handleMaxPriceChange.bind(this),
	          value: this.props.transport.min_price
	        })
	      );
	    }

	    // Отрисовка дополнительных параметров

	  }, {
	    key: 'renderExtraParams',
	    value: function renderExtraParams() {
	      var count = this.props.transport.items.length;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.extra },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.number },
	          '\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432: ' + count
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.paramsButton },
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E\u0438\u0441\u043A\u0430'
	          )
	        )
	      );
	    }
	  }]);

	  return Filter;
	}(_react2.default.Component);
	// ----------------------------------------------------------------------------


	// ----------------------------------------------------------------------------
	// Подключение Redux Store к компоненту
	// ----------------------------------------------------------------------------


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Filter);

	// Запись полей store в properties компонента

	function mapStateToProps(state) {
	  return {
	    transport: state.transport
	  };
	}

	// Запись actions в properties компонента
	function mapDispatchToProps(dispatch) {
	  return {
	    transportActions: (0, _redux.bindActionCreators)(TransportActions, dispatch)
	  };
	}

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(339);

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(340);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _toConsumableArray2 = __webpack_require__(359);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _extends2 = __webpack_require__(398);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(405);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(406);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(429);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _reactDom = __webpack_require__(101);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _addEventListener = __webpack_require__(437);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _classnames = __webpack_require__(441);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Track = __webpack_require__(443);

	var _Track2 = _interopRequireDefault(_Track);

	var _Handle = __webpack_require__(444);

	var _Handle2 = _interopRequireDefault(_Handle);

	var _Steps = __webpack_require__(478);

	var _Steps2 = _interopRequireDefault(_Steps);

	var _Marks = __webpack_require__(479);

	var _Marks2 = _interopRequireDefault(_Marks);

	var _warning = __webpack_require__(43);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function noop() {}

	function isNotTouchEvent(e) {
	  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
	}

	function getTouchPosition(vertical, e) {
	  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
	}

	function getMousePosition(vertical, e) {
	  return vertical ? e.clientY : e.pageX;
	}

	function getHandleCenterPosition(vertical, handle) {
	  var coords = handle.getBoundingClientRect();
	  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
	}

	function pauseEvent(e) {
	  e.stopPropagation();
	  e.preventDefault();
	}

	var Slider = function (_React$Component) {
	  (0, _inherits3["default"])(Slider, _React$Component);

	  function Slider(props) {
	    (0, _classCallCheck3["default"])(this, Slider);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	    var range = props.range;
	    var min = props.min;
	    var max = props.max;
	    var step = props.step;

	    var initialValue = range ? Array.apply(null, Array(range + 1)).map(function () {
	      return min;
	    }) : min;
	    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
	    var value = props.value !== undefined ? props.value : defaultValue;

	    var bounds = (range ? value : [min, value]).map(function (v) {
	      return _this.trimAlignValue(v);
	    });

	    var recent = void 0;
	    if (range && bounds[0] === bounds[bounds.length - 1] && bounds[0] === max) {
	      recent = 0;
	    } else {
	      recent = bounds.length - 1;
	    }

	    if (process.env.NODE_ENV !== 'production' && step && Math.floor(step) === step && (max - min) % step !== 0) {
	      (0, _warning2["default"])(false, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
	    }

	    _this.state = {
	      handle: null,
	      recent: recent,
	      bounds: bounds
	    };
	    return _this;
	  }

	  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

	    var bounds = this.state.bounds;

	    if (nextProps.range) {
	      var value = nextProps.value || bounds;
	      var nextBounds = value.map(function (v) {
	        return _this2.trimAlignValue(v, nextProps);
	      });
	      if (nextBounds.every(function (v, i) {
	        return v === bounds[i];
	      })) return;

	      this.setState({ bounds: nextBounds });
	      if (bounds.some(function (v) {
	        return _this2.isValueOutOfBounds(v, nextProps);
	      })) {
	        this.props.onChange(nextBounds);
	      }
	    } else {
	      var _value = nextProps.value !== undefined ? nextProps.value : bounds[1];
	      var nextValue = this.trimAlignValue(_value, nextProps);
	      if (nextValue === bounds[1] && bounds[0] === nextProps.min) return;

	      this.setState({ bounds: [nextProps.min, nextValue] });
	      if (this.isValueOutOfBounds(bounds[1], nextProps)) {
	        this.props.onChange(nextValue);
	      }
	    }
	  };

	  Slider.prototype.onChange = function onChange(state) {
	    var props = this.props;
	    var isNotControlled = !('value' in props);
	    if (isNotControlled) {
	      this.setState(state);
	    } else if (state.handle) {
	      this.setState({ handle: state.handle });
	    }

	    var data = (0, _extends3["default"])({}, this.state, state);
	    var changedValue = props.range ? data.bounds : data.bounds[1];
	    props.onChange(changedValue);
	  };

	  Slider.prototype.onMouseMove = function onMouseMove(e) {
	    var position = getMousePosition(this.props.vertical, e);
	    this.onMove(e, position - this.dragOffset);
	  };

	  Slider.prototype.onTouchMove = function onTouchMove(e) {
	    if (isNotTouchEvent(e)) {
	      this.end('touch');
	      return;
	    }

	    var position = getTouchPosition(this.props.vertical, e);
	    this.onMove(e, position - this.dragOffset);
	  };

	  Slider.prototype.onMove = function onMove(e, position) {
	    pauseEvent(e);
	    var props = this.props;
	    var state = this.state;

	    var diffPosition = position - this.startPosition;
	    diffPosition = this.props.vertical ? -diffPosition : diffPosition;
	    var diffValue = diffPosition / this.getSliderLength() * (props.max - props.min);

	    var value = this.trimAlignValue(this.startValue + diffValue);
	    var oldValue = state.bounds[state.handle];
	    if (value === oldValue) return;

	    var nextBounds = [].concat((0, _toConsumableArray3["default"])(state.bounds));
	    nextBounds[state.handle] = value;
	    var nextHandle = state.handle;
	    if (props.pushable !== false) {
	      var originalValue = state.bounds[nextHandle];
	      this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
	    } else if (props.allowCross) {
	      nextBounds.sort(function (a, b) {
	        return a - b;
	      });
	      nextHandle = nextBounds.indexOf(value);
	    }
	    this.onChange({
	      handle: nextHandle,
	      bounds: nextBounds
	    });
	  };

	  Slider.prototype.onTouchStart = function onTouchStart(e) {
	    if (isNotTouchEvent(e)) return;

	    var position = getTouchPosition(this.props.vertical, e);
	    if (!this.isEventFromHandle(e)) {
	      this.dragOffset = 0;
	    } else {
	      var handlePosition = getHandleCenterPosition(this.props.vertical, e.target);
	      this.dragOffset = position - handlePosition;
	      position = handlePosition;
	    }
	    this.onStart(position);
	    this.addDocumentEvents('touch');
	    pauseEvent(e);
	  };

	  Slider.prototype.onMouseDown = function onMouseDown(e) {
	    if (e.button !== 0) {
	      return;
	    }

	    var position = getMousePosition(this.props.vertical, e);
	    if (!this.isEventFromHandle(e)) {
	      this.dragOffset = 0;
	    } else {
	      var handlePosition = getHandleCenterPosition(this.props.vertical, e.target);
	      this.dragOffset = position - handlePosition;
	      position = handlePosition;
	    }
	    this.onStart(position);
	    this.addDocumentEvents('mouse');
	    pauseEvent(e);
	  };

	  Slider.prototype.onStart = function onStart(position) {
	    var props = this.props;
	    props.onBeforeChange(this.getValue());

	    var value = this.calcValueByPos(position);
	    this.startValue = value;
	    this.startPosition = position;

	    var state = this.state;
	    var bounds = state.bounds;

	    var valueNeedChanging = 1;
	    if (this.props.range) {
	      var closestBound = 0;
	      for (var i = 1; i < bounds.length - 1; ++i) {
	        if (value > bounds[i]) {
	          closestBound = i;
	        }
	      }
	      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
	        closestBound = closestBound + 1;
	      }
	      valueNeedChanging = closestBound;

	      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];
	      if (isAtTheSamePoint) {
	        valueNeedChanging = state.recent;
	      }

	      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
	        valueNeedChanging = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
	      }
	    }

	    this.setState({
	      handle: valueNeedChanging,
	      recent: valueNeedChanging
	    });

	    var oldValue = state.bounds[valueNeedChanging];
	    if (value === oldValue) return;

	    var nextBounds = [].concat((0, _toConsumableArray3["default"])(state.bounds));
	    nextBounds[valueNeedChanging] = value;
	    this.onChange({ bounds: nextBounds });
	  };

	  Slider.prototype.getValue = function getValue() {
	    var bounds = this.state.bounds;

	    return this.props.range ? bounds : bounds[1];
	  };

	  Slider.prototype.getSliderLength = function getSliderLength() {
	    var slider = this.refs.slider;
	    if (!slider) {
	      return 0;
	    }

	    return this.props.vertical ? slider.clientHeight : slider.clientWidth;
	  };

	  Slider.prototype.getSliderStart = function getSliderStart() {
	    var slider = this.refs.slider;
	    var rect = slider.getBoundingClientRect();

	    return this.props.vertical ? rect.top : rect.left;
	  };

	  Slider.prototype.getPrecision = function getPrecision(step) {
	    var stepString = step.toString();
	    var precision = 0;
	    if (stepString.indexOf('.') >= 0) {
	      precision = stepString.length - stepString.indexOf('.') - 1;
	    }
	    return precision;
	  };

	  /**
	   * Returns an array of possible slider points, taking into account both
	   * `marks` and `step`. The result is cached.
	   */

	  Slider.prototype.getPoints = function getPoints() {
	    var _props = this.props;
	    var marks = _props.marks;
	    var step = _props.step;
	    var min = _props.min;
	    var max = _props.max;

	    var cache = this._getPointsCache;
	    if (!cache || cache.marks !== marks || cache.step !== step) {
	      var pointsObject = (0, _extends3["default"])({}, marks);
	      if (step !== null) {
	        for (var point = min; point <= max; point += step) {
	          pointsObject[point] = point;
	        }
	      }
	      var points = Object.keys(pointsObject).map(parseFloat);
	      points.sort(function (a, b) {
	        return a - b;
	      });
	      this._getPointsCache = { marks: marks, step: step, points: points };
	    }
	    return this._getPointsCache.points;
	  };

	  Slider.prototype.isEventFromHandle = function isEventFromHandle(e) {
	    var _this3 = this;

	    return this.state.bounds.some(function (x, i) {
	      return _this3.refs['handle-' + i] && e.target === (0, _reactDom.findDOMNode)(_this3.refs['handle-' + i]);
	    });
	  };

	  Slider.prototype.isValueOutOfBounds = function isValueOutOfBounds(value, props) {
	    return value < props.min || value > props.max;
	  };

	  Slider.prototype.trimAlignValue = function trimAlignValue(v, nextProps) {
	    var state = this.state || {};
	    var handle = state.handle;
	    var bounds = state.bounds;

	    var _props2 = (0, _extends3["default"])({}, this.props, nextProps || {});

	    var marks = _props2.marks;
	    var step = _props2.step;
	    var min = _props2.min;
	    var max = _props2.max;
	    var allowCross = _props2.allowCross;

	    var val = v;
	    if (val <= min) {
	      val = min;
	    }
	    if (val >= max) {
	      val = max;
	    }
	    /* eslint-disable eqeqeq */
	    if (!allowCross && handle != null && handle > 0 && val <= bounds[handle - 1]) {
	      val = bounds[handle - 1];
	    }
	    if (!allowCross && handle != null && handle < bounds.length - 1 && val >= bounds[handle + 1]) {
	      val = bounds[handle + 1];
	    }
	    /* eslint-enable eqeqeq */

	    var points = Object.keys(marks).map(parseFloat);
	    if (step !== null) {
	      var closestStep = Math.round((val - min) / step) * step + min;
	      points.push(closestStep);
	    }

	    var diffs = points.map(function (point) {
	      return Math.abs(val - point);
	    });
	    var closestPoint = points[diffs.indexOf(Math.min.apply(Math, diffs))];

	    return step !== null ? parseFloat(closestPoint.toFixed(this.getPrecision(step))) : closestPoint;
	  };

	  Slider.prototype.pushHandleOnePoint = function pushHandleOnePoint(bounds, handle, direction) {
	    var points = this.getPoints();
	    var pointIndex = points.indexOf(bounds[handle]);
	    var nextPointIndex = pointIndex + direction;
	    if (nextPointIndex >= points.length || nextPointIndex < 0) {
	      // reached the minimum or maximum available point, can't push anymore
	      return false;
	    }
	    var nextHandle = handle + direction;
	    var nextValue = points[nextPointIndex];
	    var threshold = this.props.pushable;

	    var diffToNext = direction * (bounds[nextHandle] - nextValue);
	    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
	      // couldn't push next handle, so we won't push this one either
	      return false;
	    }
	    // push the handle
	    bounds[handle] = nextValue;
	    return true;
	  };

	  Slider.prototype.pushHandle = function pushHandle(bounds, handle, direction, amount) {
	    var originalValue = bounds[handle];
	    var currentValue = bounds[handle];
	    while (direction * (currentValue - originalValue) < amount) {
	      if (!this.pushHandleOnePoint(bounds, handle, direction)) {
	        // can't push handle enough to create the needed `amount` gap, so we
	        // revert its position to the original value
	        bounds[handle] = originalValue;
	        return false;
	      }
	      currentValue = bounds[handle];
	    }
	    // the handle was pushed enough to create the needed `amount` gap
	    return true;
	  };

	  Slider.prototype.pushSurroundingHandles = function pushSurroundingHandles(bounds, handle, originalValue) {
	    var threshold = this.props.pushable;

	    var value = bounds[handle];

	    var direction = 0;
	    if (bounds[handle + 1] - value < threshold) {
	      direction = +1;
	    } else if (value - bounds[handle - 1] < threshold) {
	      direction = -1;
	    }

	    if (direction === 0) {
	      return;
	    }

	    var nextHandle = handle + direction;
	    var diffToNext = direction * (bounds[nextHandle] - value);
	    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
	      // revert to original value if pushing is impossible
	      bounds[handle] = originalValue;
	    }
	  };

	  Slider.prototype.calcOffset = function calcOffset(value) {
	    var _props3 = this.props;
	    var min = _props3.min;
	    var max = _props3.max;

	    var ratio = (value - min) / (max - min);
	    return ratio * 100;
	  };

	  Slider.prototype.calcValue = function calcValue(offset) {
	    var _props4 = this.props;
	    var vertical = _props4.vertical;
	    var min = _props4.min;
	    var max = _props4.max;

	    var ratio = Math.abs(offset / this.getSliderLength());
	    var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
	    return value;
	  };

	  Slider.prototype.calcValueByPos = function calcValueByPos(position) {
	    var pixelOffset = position - this.getSliderStart();
	    var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
	    return nextValue;
	  };

	  Slider.prototype.addDocumentEvents = function addDocumentEvents(type) {
	    if (type === 'touch') {
	      // just work for chrome iOS Safari and Android Browser
	      this.onTouchMoveListener = (0, _addEventListener2["default"])(document, 'touchmove', this.onTouchMove.bind(this));
	      this.onTouchUpListener = (0, _addEventListener2["default"])(document, 'touchend', this.end.bind(this, 'touch'));
	    } else if (type === 'mouse') {
	      this.onMouseMoveListener = (0, _addEventListener2["default"])(document, 'mousemove', this.onMouseMove.bind(this));
	      this.onMouseUpListener = (0, _addEventListener2["default"])(document, 'mouseup', this.end.bind(this, 'mouse'));
	    }
	  };

	  Slider.prototype.removeEvents = function removeEvents(type) {
	    if (type === 'touch') {
	      this.onTouchMoveListener.remove();
	      this.onTouchUpListener.remove();
	    } else if (type === 'mouse') {
	      this.onMouseMoveListener.remove();
	      this.onMouseUpListener.remove();
	    }
	  };

	  Slider.prototype.end = function end(type) {
	    this.removeEvents(type);
	    this.props.onAfterChange(this.getValue());
	    this.setState({ handle: null });
	  };

	  Slider.prototype.render = function render() {
	    var _this4 = this,
	        _classNames3;

	    var _state = this.state;
	    var handle = _state.handle;
	    var bounds = _state.bounds;
	    var _props5 = this.props;
	    var className = _props5.className;
	    var prefixCls = _props5.prefixCls;
	    var tooltipPrefixCls = _props5.tooltipPrefixCls;
	    var disabled = _props5.disabled;
	    var vertical = _props5.vertical;
	    var dots = _props5.dots;
	    var included = _props5.included;
	    var range = _props5.range;
	    var step = _props5.step;
	    var marks = _props5.marks;
	    var max = _props5.max;
	    var min = _props5.min;
	    var tipTransitionName = _props5.tipTransitionName;
	    var tipFormatter = _props5.tipFormatter;
	    var children = _props5.children;

	    var customHandle = this.props.handle;

	    var offsets = bounds.map(function (v) {
	      return _this4.calcOffset(v);
	    });

	    var handleClassName = prefixCls + '-handle';

	    var handlesClassNames = bounds.map(function (v, i) {
	      var _classNames;

	      return (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, handleClassName, true), (0, _defineProperty3["default"])(_classNames, handleClassName + '-' + (i + 1), true), (0, _defineProperty3["default"])(_classNames, handleClassName + '-lower', i === 0), (0, _defineProperty3["default"])(_classNames, handleClassName + '-upper', i === bounds.length - 1), _classNames));
	    });

	    var isNoTip = step === null || tipFormatter === null;

	    var commonHandleProps = {
	      prefixCls: prefixCls,
	      tooltipPrefixCls: tooltipPrefixCls,
	      noTip: isNoTip,
	      tipTransitionName: tipTransitionName,
	      tipFormatter: tipFormatter,
	      vertical: vertical
	    };

	    var handles = bounds.map(function (v, i) {
	      return (0, _react.cloneElement)(customHandle, (0, _extends3["default"])({}, commonHandleProps, {
	        className: handlesClassNames[i],
	        value: v,
	        offset: offsets[i],
	        dragging: handle === i,
	        key: i,
	        ref: 'handle-' + i
	      }));
	    });
	    if (!range) {
	      handles.shift();
	    }

	    var isIncluded = included || range;

	    var tracks = [];
	    for (var i = 1; i < bounds.length; ++i) {
	      var _classNames2;

	      var trackClassName = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-track', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
	      tracks.push(_react2["default"].createElement(_Track2["default"], { className: trackClassName, vertical: vertical, included: isIncluded,
	        offset: offsets[i - 1], length: offsets[i] - offsets[i - 1], key: i
	      }));
	    }

	    var sliderClassName = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, prefixCls, true), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames3, className, !!className), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-vertical', this.props.vertical), _classNames3));

	    return _react2["default"].createElement('div', { ref: 'slider', className: sliderClassName,
	      onTouchStart: disabled ? noop : this.onTouchStart.bind(this),
	      onMouseDown: disabled ? noop : this.onMouseDown.bind(this)
	    }, tracks, _react2["default"].createElement(_Steps2["default"], { prefixCls: prefixCls, vertical: vertical, marks: marks, dots: dots, step: step,
	      included: isIncluded, lowerBound: bounds[0],
	      upperBound: bounds[bounds.length - 1], max: max, min: min
	    }), handles, _react2["default"].createElement(_Marks2["default"], { className: prefixCls + '-mark', vertical: vertical, marks: marks,
	      included: isIncluded, lowerBound: bounds[0],
	      upperBound: bounds[bounds.length - 1], max: max, min: min
	    }), children);
	  };

	  return Slider;
	}(_react2["default"].Component);

	Slider.propTypes = {
	  min: _react2["default"].PropTypes.number,
	  max: _react2["default"].PropTypes.number,
	  step: _react2["default"].PropTypes.number,
	  defaultValue: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.number)]),
	  value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.number)]),
	  marks: _react2["default"].PropTypes.object,
	  included: _react2["default"].PropTypes.bool,
	  className: _react2["default"].PropTypes.string,
	  prefixCls: _react2["default"].PropTypes.string,
	  tooltipPrefixCls: _react2["default"].PropTypes.string,
	  disabled: _react2["default"].PropTypes.bool,
	  children: _react2["default"].PropTypes.any,
	  onBeforeChange: _react2["default"].PropTypes.func,
	  onChange: _react2["default"].PropTypes.func,
	  onAfterChange: _react2["default"].PropTypes.func,
	  handle: _react2["default"].PropTypes.element,
	  tipTransitionName: _react2["default"].PropTypes.string,
	  tipFormatter: _react2["default"].PropTypes.func,
	  dots: _react2["default"].PropTypes.bool,
	  range: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.bool, _react2["default"].PropTypes.number]),
	  vertical: _react2["default"].PropTypes.bool,
	  allowCross: _react2["default"].PropTypes.bool,
	  pushable: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.bool, _react2["default"].PropTypes.number])
	};

	Slider.defaultProps = {
	  prefixCls: 'rc-slider',
	  className: '',
	  tipTransitionName: '',
	  min: 0,
	  max: 100,
	  step: 1,
	  marks: {},
	  handle: _react2["default"].createElement(_Handle2["default"], null),
	  onBeforeChange: noop,
	  onChange: noop,
	  onAfterChange: noop,
	  tipFormatter: function tipFormatter(value) {
	    return value;
	  },
	  included: true,
	  disabled: false,
	  dots: false,
	  range: false,
	  vertical: false,
	  allowCross: true,
	  pushable: false
	};

	exports["default"] = Slider;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(341);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(342), __esModule: true };

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(343);
	var $Object = __webpack_require__(346).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(344);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(354), 'Object', { defineProperty: __webpack_require__(350).f });

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(345),
	    core = __webpack_require__(346),
	    ctx = __webpack_require__(347),
	    hide = __webpack_require__(349),
	    PROTOTYPE = 'prototype';

	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE],
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 345 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 346 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(348);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 348 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(350),
	    createDesc = __webpack_require__(358);
	module.exports = __webpack_require__(354) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(351),
	    IE8_DOM_DEFINE = __webpack_require__(353),
	    toPrimitive = __webpack_require__(357),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(354) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(352);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 352 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(354) && !__webpack_require__(355)(function () {
	  return Object.defineProperty(__webpack_require__(356)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(355)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 355 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(352),
	    document = __webpack_require__(345).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(352);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 358 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(360);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(361), __esModule: true };

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(362);
	__webpack_require__(391);
	module.exports = __webpack_require__(346).Array.from;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $at = __webpack_require__(363)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(366)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(364),
	    defined = __webpack_require__(365);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 364 */
/***/ function(module, exports) {

	"use strict";

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 365 */
/***/ function(module, exports) {

	"use strict";

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(367),
	    $export = __webpack_require__(344),
	    redefine = __webpack_require__(368),
	    hide = __webpack_require__(349),
	    has = __webpack_require__(369),
	    Iterators = __webpack_require__(370),
	    $iterCreate = __webpack_require__(371),
	    setToStringTag = __webpack_require__(387),
	    getPrototypeOf = __webpack_require__(389),
	    ITERATOR = __webpack_require__(388)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';

	var returnThis = function returnThis() {
	  return this;
	};

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 367 */
/***/ function(module, exports) {

	"use strict";

	module.exports = true;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(349);

/***/ },
/* 369 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 370 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var create = __webpack_require__(372),
	    descriptor = __webpack_require__(358),
	    setToStringTag = __webpack_require__(387),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(349)(IteratorPrototype, __webpack_require__(388)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(351),
	    dPs = __webpack_require__(373),
	    enumBugKeys = __webpack_require__(385),
	    IE_PROTO = __webpack_require__(382)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(356)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(386).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(350),
	    anObject = __webpack_require__(351),
	    getKeys = __webpack_require__(374);

	module.exports = __webpack_require__(354) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(375),
	    enumBugKeys = __webpack_require__(385);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(369),
	    toIObject = __webpack_require__(376),
	    arrayIndexOf = __webpack_require__(379)(false),
	    IE_PROTO = __webpack_require__(382)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(377),
	    defined = __webpack_require__(365);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(378);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 378 */
/***/ function(module, exports) {

	"use strict";

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(376),
	    toLength = __webpack_require__(380),
	    toIndex = __webpack_require__(381);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(364),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(364),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shared = __webpack_require__(383)('keys'),
	    uid = __webpack_require__(384);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(345),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 384 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 385 */
/***/ function(module, exports) {

	'use strict';

	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(345).document && document.documentElement;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var def = __webpack_require__(350).f,
	    has = __webpack_require__(369),
	    TAG = __webpack_require__(388)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(383)('wks'),
	    uid = __webpack_require__(384),
	    _Symbol = __webpack_require__(345).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(369),
	    toObject = __webpack_require__(390),
	    IE_PROTO = __webpack_require__(382)('IE_PROTO'),
	    ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(365);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(347),
	    $export = __webpack_require__(344),
	    toObject = __webpack_require__(390),
	    call = __webpack_require__(392),
	    isArrayIter = __webpack_require__(393),
	    toLength = __webpack_require__(380),
	    createProperty = __webpack_require__(394),
	    getIterFn = __webpack_require__(395);

	$export($export.S + $export.F * !__webpack_require__(397)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(351);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// check on default Array iterator
	var Iterators = __webpack_require__(370),
	    ITERATOR = __webpack_require__(388)('iterator'),
	    ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $defineProperty = __webpack_require__(350),
	    createDesc = __webpack_require__(358);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(396),
	    ITERATOR = __webpack_require__(388)('iterator'),
	    Iterators = __webpack_require__(370);
	module.exports = __webpack_require__(346).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(378),
	    TAG = __webpack_require__(388)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ITERATOR = __webpack_require__(388)('iterator'),
	    SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(399);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(400), __esModule: true };

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(401);
	module.exports = __webpack_require__(346).Object.assign;

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(344);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(402) });

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)

	var getKeys = __webpack_require__(374),
	    gOPS = __webpack_require__(403),
	    pIE = __webpack_require__(404),
	    toObject = __webpack_require__(390),
	    IObject = __webpack_require__(377),
	    $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(355)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 403 */
/***/ function(module, exports) {

	"use strict";

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 404 */
/***/ function(module, exports) {

	"use strict";

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 405 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(407);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _iterator = __webpack_require__(408);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(415);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(409), __esModule: true };

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(362);
	__webpack_require__(410);
	module.exports = __webpack_require__(414).f('iterator');

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(411);
	var global = __webpack_require__(345),
	    hide = __webpack_require__(349),
	    Iterators = __webpack_require__(370),
	    TO_STRING_TAG = __webpack_require__(388)('toStringTag');

	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var addToUnscopables = __webpack_require__(412),
	    step = __webpack_require__(413),
	    Iterators = __webpack_require__(370),
	    toIObject = __webpack_require__(376);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(366)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 412 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {/* empty */};

/***/ },
/* 413 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.f = __webpack_require__(388);

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(416), __esModule: true };

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(417);
	__webpack_require__(426);
	__webpack_require__(427);
	__webpack_require__(428);
	module.exports = __webpack_require__(346).Symbol;

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var global = __webpack_require__(345),
	    has = __webpack_require__(369),
	    DESCRIPTORS = __webpack_require__(354),
	    $export = __webpack_require__(344),
	    redefine = __webpack_require__(368),
	    META = __webpack_require__(418).KEY,
	    $fails = __webpack_require__(355),
	    shared = __webpack_require__(383),
	    setToStringTag = __webpack_require__(387),
	    uid = __webpack_require__(384),
	    wks = __webpack_require__(388),
	    wksExt = __webpack_require__(414),
	    wksDefine = __webpack_require__(419),
	    keyOf = __webpack_require__(420),
	    enumKeys = __webpack_require__(421),
	    isArray = __webpack_require__(422),
	    anObject = __webpack_require__(351),
	    toIObject = __webpack_require__(376),
	    toPrimitive = __webpack_require__(357),
	    createDesc = __webpack_require__(358),
	    _create = __webpack_require__(372),
	    gOPNExt = __webpack_require__(423),
	    $GOPD = __webpack_require__(425),
	    $DP = __webpack_require__(350),
	    $keys = __webpack_require__(374),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(424).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(404).f = $propertyIsEnumerable;
	  __webpack_require__(403).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(367)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	  wks(symbols[i++]);
	}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	  wksDefine(symbols[i++]);
	}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(349)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var META = __webpack_require__(384)('meta'),
	    isObject = __webpack_require__(352),
	    has = __webpack_require__(369),
	    setDesc = __webpack_require__(350).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(355)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(345),
	    core = __webpack_require__(346),
	    LIBRARY = __webpack_require__(367),
	    wksExt = __webpack_require__(414),
	    defineProperty = __webpack_require__(350).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getKeys = __webpack_require__(374),
	    toIObject = __webpack_require__(376);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(374),
	    gOPS = __webpack_require__(403),
	    pIE = __webpack_require__(404);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(378);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(376),
	    gOPN = __webpack_require__(424).f,
	    toString = {}.toString;

	var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(375),
	    hiddenKeys = __webpack_require__(385).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pIE = __webpack_require__(404),
	    createDesc = __webpack_require__(358),
	    toIObject = __webpack_require__(376),
	    toPrimitive = __webpack_require__(357),
	    has = __webpack_require__(369),
	    IE8_DOM_DEFINE = __webpack_require__(353),
	    gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(354) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 426 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(419)('asyncIterator');

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(419)('observable');

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(430);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(434);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(407);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(431), __esModule: true };

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(432);
	module.exports = __webpack_require__(346).Object.setPrototypeOf;

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(344);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(433).set });

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(352),
	    anObject = __webpack_require__(351);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(347)(Function.call, __webpack_require__(425).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(435), __esModule: true };

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(436);
	var $Object = __webpack_require__(346).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(344);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(372) });

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(438);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2["default"].unstable_batchedUpdates ? function run(e) {
	    _reactDom2["default"].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2["default"])(target, eventType, callback);
	}
	module.exports = exports['default'];

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _EventObject = __webpack_require__(439);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _EventBaseObject = __webpack_require__(440);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 440 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(442)) === 'object' && __webpack_require__(442)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 442 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var Track = function Track(_ref) {
	  var className = _ref.className;
	  var included = _ref.included;
	  var vertical = _ref.vertical;
	  var offset = _ref.offset;
	  var length = _ref.length;

	  var style = {
	    visibility: included ? 'visible' : 'hidden'
	  };
	  if (vertical) {
	    style.bottom = offset + '%';
	    style.height = length + '%';
	  } else {
	    style.left = offset + '%';
	    style.width = length + '%';
	  }
	  return _react2["default"].createElement('div', { className: className, style: style });
	};

	exports["default"] = Track;
	module.exports = exports['default'];

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(405);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(406);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(429);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _rcTooltip = __webpack_require__(445);

	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var Handle = function (_React$Component) {
	  (0, _inherits3["default"])(Handle, _React$Component);

	  function Handle(props) {
	    (0, _classCallCheck3["default"])(this, Handle);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	    _this.state = {
	      isTooltipVisible: false
	    };
	    return _this;
	  }

	  Handle.prototype.showTooltip = function showTooltip() {
	    this.setState({
	      isTooltipVisible: true
	    });
	  };

	  Handle.prototype.hideTooltip = function hideTooltip() {
	    this.setState({
	      isTooltipVisible: false
	    });
	  };

	  Handle.prototype.render = function render() {
	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var tooltipPrefixCls = _props.tooltipPrefixCls;
	    var className = _props.className;
	    var tipTransitionName = _props.tipTransitionName;
	    var tipFormatter = _props.tipFormatter;
	    var vertical = _props.vertical;
	    var offset = _props.offset;
	    var value = _props.value;
	    var dragging = _props.dragging;
	    var noTip = _props.noTip;

	    var style = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
	    var handle = _react2["default"].createElement('div', { className: className, style: style,
	      onMouseUp: this.showTooltip.bind(this),
	      onMouseEnter: this.showTooltip.bind(this),
	      onMouseLeave: this.hideTooltip.bind(this)
	    });

	    if (noTip) {
	      return handle;
	    }

	    var isTooltipVisible = dragging || this.state.isTooltipVisible;
	    return _react2["default"].createElement(_rcTooltip2["default"], {
	      prefixCls: tooltipPrefixCls || prefixCls + '-tooltip',
	      placement: 'top',
	      visible: isTooltipVisible,
	      overlay: _react2["default"].createElement('span', null, tipFormatter(value)),
	      delay: 0,
	      transitionName: tipTransitionName
	    }, handle);
	  };

	  return Handle;
	}(_react2["default"].Component);

	exports["default"] = Handle;

	Handle.propTypes = {
	  prefixCls: _react2["default"].PropTypes.string,
	  tooltipPrefixCls: _react2["default"].PropTypes.string,
	  className: _react2["default"].PropTypes.string,
	  vertical: _react2["default"].PropTypes.bool,
	  offset: _react2["default"].PropTypes.number,
	  tipTransitionName: _react2["default"].PropTypes.string,
	  tipFormatter: _react2["default"].PropTypes.func,
	  value: _react2["default"].PropTypes.number,
	  dragging: _react2["default"].PropTypes.bool,
	  noTip: _react2["default"].PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(446);

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _placements = __webpack_require__(447);

	var _rcTrigger = __webpack_require__(448);

	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var Tooltip = _react2["default"].createClass({
	  displayName: 'Tooltip',

	  propTypes: {
	    trigger: _react.PropTypes.any,
	    children: _react.PropTypes.any,
	    defaultVisible: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    placement: _react.PropTypes.string,
	    transitionName: _react.PropTypes.string,
	    animation: _react.PropTypes.any,
	    onVisibleChange: _react.PropTypes.func,
	    afterVisibleChange: _react.PropTypes.func,
	    overlay: _react.PropTypes.oneOfType([_react2["default"].PropTypes.node, _react2["default"].PropTypes.func]).isRequired,
	    overlayStyle: _react.PropTypes.object,
	    overlayClassName: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    getTooltipContainer: _react.PropTypes.func,
	    destroyTooltipOnHide: _react.PropTypes.bool,
	    align: _react.PropTypes.object,
	    arrowContent: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-tooltip',
	      mouseEnterDelay: 0,
	      destroyTooltipOnHide: false,
	      mouseLeaveDelay: 0.1,
	      align: {},
	      placement: 'right',
	      trigger: ['hover'],
	      arrowContent: null
	    };
	  },
	  getPopupElement: function getPopupElement() {
	    var _props = this.props;
	    var arrowContent = _props.arrowContent;
	    var overlay = _props.overlay;
	    var prefixCls = _props.prefixCls;

	    return [_react2["default"].createElement('div', { className: prefixCls + '-arrow', key: 'arrow' }, arrowContent), _react2["default"].createElement('div', { className: prefixCls + '-inner', key: 'content' }, typeof overlay === 'function' ? overlay() : overlay)];
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    return this.refs.trigger.getPopupDomNode();
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var overlayClassName = _props2.overlayClassName;
	    var trigger = _props2.trigger;
	    var mouseEnterDelay = _props2.mouseEnterDelay;
	    var mouseLeaveDelay = _props2.mouseLeaveDelay;
	    var overlayStyle = _props2.overlayStyle;
	    var prefixCls = _props2.prefixCls;
	    var children = _props2.children;
	    var onVisibleChange = _props2.onVisibleChange;
	    var transitionName = _props2.transitionName;
	    var animation = _props2.animation;
	    var placement = _props2.placement;
	    var align = _props2.align;
	    var destroyTooltipOnHide = _props2.destroyTooltipOnHide;
	    var defaultVisible = _props2.defaultVisible;
	    var getTooltipContainer = _props2.getTooltipContainer;

	    var restProps = _objectWithoutProperties(_props2, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

	    var extraProps = _extends({}, restProps);
	    if ('visible' in this.props) {
	      extraProps.popupVisible = this.props.visible;
	    }
	    return _react2["default"].createElement(_rcTrigger2["default"], _extends({
	      popupClassName: overlayClassName,
	      ref: 'trigger',
	      prefixCls: prefixCls,
	      popup: this.getPopupElement,
	      action: trigger,
	      builtinPlacements: _placements.placements,
	      popupPlacement: placement,
	      popupAlign: align,
	      getPopupContainer: getTooltipContainer,
	      onPopupVisibleChange: onVisibleChange,
	      popupTransitionName: transitionName,
	      popupAnimation: animation,
	      defaultPopupVisible: defaultVisible,
	      destroyPopupOnHide: destroyTooltipOnHide,
	      mouseLeaveDelay: mouseLeaveDelay,
	      popupStyle: overlayStyle,
	      mouseEnterDelay: mouseEnterDelay
	    }, extraProps), children);
	  }
	});

	exports["default"] = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 447 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};

	var targetOffset = [0, 0];

	var placements = exports.placements = {
	  left: {
	    points: ['cr', 'cl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  },
	  right: {
	    points: ['cl', 'cr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  top: {
	    points: ['bc', 'tc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  bottom: {
	    points: ['tc', 'bc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  leftTop: {
	    points: ['tr', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  rightTop: {
	    points: ['tl', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  rightBottom: {
	    points: ['bl', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  leftBottom: {
	    points: ['br', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  }
	};

	exports["default"] = placements;

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(449);

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(398);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _contains = __webpack_require__(450);

	var _contains2 = _interopRequireDefault(_contains);

	var _addEventListener = __webpack_require__(437);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _Popup = __webpack_require__(451);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _utils = __webpack_require__(476);

	var _getContainerRenderMixin = __webpack_require__(477);

	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function noop() {}

	function returnEmptyString() {
	  return '';
	}

	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

	var Trigger = _react2["default"].createClass({
	  displayName: 'Trigger',

	  propTypes: {
	    children: _react.PropTypes.any,
	    action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
	    showAction: _react.PropTypes.any,
	    hideAction: _react.PropTypes.any,
	    getPopupClassNameFromAlign: _react.PropTypes.any,
	    onPopupVisibleChange: _react.PropTypes.func,
	    afterPopupVisibleChange: _react.PropTypes.func,
	    popup: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]).isRequired,
	    popupStyle: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    popupClassName: _react.PropTypes.string,
	    popupPlacement: _react.PropTypes.string,
	    builtinPlacements: _react.PropTypes.object,
	    popupTransitionName: _react.PropTypes.string,
	    popupAnimation: _react.PropTypes.any,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    zIndex: _react.PropTypes.number,
	    focusDelay: _react.PropTypes.number,
	    blurDelay: _react.PropTypes.number,
	    getPopupContainer: _react.PropTypes.func,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    mask: _react.PropTypes.bool,
	    maskClosable: _react.PropTypes.bool,
	    onPopupAlign: _react.PropTypes.func,
	    popupAlign: _react.PropTypes.object,
	    popupVisible: _react.PropTypes.bool,
	    maskTransitionName: _react.PropTypes.string,
	    maskAnimation: _react.PropTypes.string
	  },

	  mixins: [(0, _getContainerRenderMixin2["default"])({
	    autoMount: false,

	    isVisible: function isVisible(instance) {
	      return instance.state.popupVisible;
	    },
	    getContainer: function getContainer(instance) {
	      var popupContainer = document.createElement('div');
	      var mountNode = instance.props.getPopupContainer ? instance.props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : document.body;
	      mountNode.appendChild(popupContainer);
	      return popupContainer;
	    },
	    getComponent: function getComponent(instance) {
	      var props = instance.props;
	      var state = instance.state;

	      var mouseProps = {};
	      if (instance.isMouseEnterToShow()) {
	        mouseProps.onMouseEnter = instance.onPopupMouseEnter;
	      }
	      if (instance.isMouseLeaveToHide()) {
	        mouseProps.onMouseLeave = instance.onPopupMouseLeave;
	      }
	      return _react2["default"].createElement(_Popup2["default"], (0, _extends3["default"])({
	        prefixCls: props.prefixCls,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: instance.getPopupAlign(),
	        onAlign: props.onPopupAlign,
	        animation: props.popupAnimation,
	        getClassNameFromAlign: instance.getPopupClassNameFromAlign
	      }, mouseProps, {
	        getRootDomNode: instance.getRootDomNode,
	        style: props.popupStyle,
	        mask: props.mask,
	        zIndex: props.zIndex,
	        transitionName: props.popupTransitionName,
	        maskAnimation: props.maskAnimation,
	        maskTransitionName: props.maskTransitionName
	      }), typeof props.popup === 'function' ? props.popup() : props.popup);
	    }
	  })],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-trigger-popup',
	      getPopupClassNameFromAlign: returnEmptyString,
	      onPopupVisibleChange: noop,
	      afterPopupVisibleChange: noop,
	      onPopupAlign: noop,
	      popupClassName: '',
	      mouseEnterDelay: 0,
	      mouseLeaveDelay: 0.1,
	      focusDelay: 0,
	      blurDelay: 0.15,
	      popupStyle: {},
	      destroyPopupOnHide: false,
	      popupAlign: {},
	      defaultPopupVisible: false,
	      mask: false,
	      maskClosable: true,
	      action: [],
	      showAction: [],
	      hideAction: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }
	    return {
	      popupVisible: popupVisible
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    ALL_HANDLERS.forEach(function (h) {
	      _this['fire' + h] = function (e) {
	        _this.fireEvents(h, e);
	      };
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;

	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    this.renderComponent(null, function () {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    });
	    if (this.isClickToHide()) {
	      if (state.popupVisible) {
	        if (!this.clickOutsideHandler) {
	          this.clickOutsideHandler = (0, _addEventListener2["default"])(document, 'mousedown', this.onDocumentClick);
	          this.touchOutsideHandler = (0, _addEventListener2["default"])(document, 'touchstart', this.onDocumentClick);
	        }
	        return;
	      }
	    }
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.clearDelayTimer();
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    this.fireEvents('onMouseEnter', e);
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    this.fireEvents('onMouseLeave', e);
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onPopupMouseEnter: function onPopupMouseEnter() {
	    this.clearDelayTimer();
	  },
	  onPopupMouseLeave: function onPopupMouseLeave(e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && (0, _contains2["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onFocus: function onFocus(e) {
	    this.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    this.clearDelayTimer();
	    if (this.isFocusToShow()) {
	      this.focusTime = Date.now();
	      this.delaySetPopupVisible(true, this.props.focusDelay);
	    }
	  },
	  onMouseDown: function onMouseDown(e) {
	    this.fireEvents('onMouseDown', e);
	    this.preClickTime = Date.now();
	  },
	  onTouchStart: function onTouchStart(e) {
	    this.fireEvents('onTouchStart', e);
	    this.preTouchTime = Date.now();
	  },
	  onBlur: function onBlur(e) {
	    this.fireEvents('onBlur', e);
	    this.clearDelayTimer();
	    if (this.isBlurToHide()) {
	      this.delaySetPopupVisible(false, this.props.blurDelay);
	    }
	  },
	  onClick: function onClick(event) {
	    this.fireEvents('onClick', event);
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  },
	  onDocumentClick: function onDocumentClick(event) {
	    if (this.props.mask && !this.props.maskClosable) {
	      return;
	    }
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!(0, _contains2["default"])(root, target) && !(0, _contains2["default"])(popupNode, target)) {
	      this.close();
	    }
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    // for test
	    if (this._component) {
	      return this._component.isMounted() ? this._component.getPopupDomNode() : null;
	    }
	    return null;
	  },
	  getRootDomNode: function getRootDomNode() {
	    return _reactDom2["default"].findDOMNode(this);
	  },
	  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var builtinPlacements = props.builtinPlacements;
	    var prefixCls = props.prefixCls;

	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  },
	  getPopupAlign: function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var popupAlign = props.popupAlign;
	    var builtinPlacements = props.builtinPlacements;

	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  },
	  setPopupVisible: function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  },
	  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
	    var _this2 = this;

	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this2.setPopupVisible(visible);
	        _this2.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  },
	  clearDelayTimer: function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  },
	  createTwoChains: function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  },
	  isClickToShow: function isClickToShow() {
	    var _props = this.props;
	    var action = _props.action;
	    var showAction = _props.showAction;

	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  },
	  isClickToHide: function isClickToHide() {
	    var _props2 = this.props;
	    var action = _props2.action;
	    var hideAction = _props2.hideAction;

	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  },
	  isMouseEnterToShow: function isMouseEnterToShow() {
	    var _props3 = this.props;
	    var action = _props3.action;
	    var showAction = _props3.showAction;

	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  },
	  isMouseLeaveToHide: function isMouseLeaveToHide() {
	    var _props4 = this.props;
	    var action = _props4.action;
	    var hideAction = _props4.hideAction;

	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  },
	  isFocusToShow: function isFocusToShow() {
	    var _props5 = this.props;
	    var action = _props5.action;
	    var showAction = _props5.showAction;

	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  },
	  isBlurToHide: function isBlurToHide() {
	    var _props6 = this.props;
	    var action = _props6.action;
	    var hideAction = _props6.hideAction;

	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  },
	  forcePopupAlign: function forcePopupAlign() {
	    if (this.state.popupVisible && this.popupInstance && this.popupInstance.alignInstance) {
	      this.popupInstance.alignInstance.forceAlign();
	    }
	  },
	  fireEvents: function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  },
	  close: function close() {
	    this.setPopupVisible(false);
	  },
	  render: function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2["default"].Children.only(children);
	    var newChildProps = {};

	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }

	    return _react2["default"].cloneElement(child, newChildProps);
	  }
	});

	exports["default"] = Trigger;
	module.exports = exports['default'];

/***/ },
/* 450 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	};

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(398);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _rcAlign = __webpack_require__(452);

	var _rcAlign2 = _interopRequireDefault(_rcAlign);

	var _rcAnimate = __webpack_require__(464);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _PopupInner = __webpack_require__(473);

	var _PopupInner2 = _interopRequireDefault(_PopupInner);

	var _LazyRenderBox = __webpack_require__(474);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var Popup = _react2["default"].createClass({
	  displayName: 'Popup',

	  propTypes: {
	    visible: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    getClassNameFromAlign: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    getRootDomNode: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    align: _react.PropTypes.any,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseLeave: _react.PropTypes.func
	  },

	  componentDidMount: function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  },
	  onAlign: function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    return _reactDom2["default"].findDOMNode(this.refs.popup);
	  },
	  getTarget: function getTarget() {
	    return this.props.getRootDomNode();
	  },
	  getMaskTransitionName: function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	  getClassName: function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  },
	  getPopupElement: function getPopupElement() {
	    var props = this.props;
	    var align = props.align;
	    var style = props.style;
	    var visible = props.visible;
	    var prefixCls = props.prefixCls;
	    var destroyPopupOnHide = props.destroyPopupOnHide;

	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    var newStyle = (0, _extends3["default"])({}, style, this.getZIndexStyle());
	    var popupInnerProps = {
	      className: className,
	      prefixCls: prefixCls,
	      ref: 'popup',
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2["default"].createElement(_rcAnimate2["default"], {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName()
	      }, visible ? _react2["default"].createElement(_rcAlign2["default"], {
	        target: this.getTarget,
	        key: 'popup',
	        ref: this.saveAlign,
	        monitorWindowResize: true,
	        align: align,
	        onAlign: this.onAlign
	      }, _react2["default"].createElement(_PopupInner2["default"], (0, _extends3["default"])({
	        visible: true
	      }, popupInnerProps), props.children)) : null);
	    }
	    return _react2["default"].createElement(_rcAnimate2["default"], {
	      component: '',
	      exclusive: true,
	      transitionAppear: true,
	      transitionName: this.getTransitionName(),
	      showProp: 'xVisible'
	    }, _react2["default"].createElement(_rcAlign2["default"], {
	      target: this.getTarget,
	      key: 'popup',
	      ref: this.saveAlign,
	      monitorWindowResize: true,
	      xVisible: visible,
	      childrenProps: { visible: 'xVisible' },
	      disabled: !visible,
	      align: align,
	      onAlign: this.onAlign
	    }, _react2["default"].createElement(_PopupInner2["default"], (0, _extends3["default"])({
	      hiddenClassName: hiddenClassName
	    }, popupInnerProps), props.children)));
	  },
	  getZIndexStyle: function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  },
	  getMaskElement: function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(_rcAnimate2["default"], {
	          key: 'mask',
	          showProp: 'visible',
	          transitionAppear: true,
	          component: '',
	          transitionName: maskTransition
	        }, maskElement);
	      }
	    }
	    return maskElement;
	  },
	  saveAlign: function saveAlign(align) {
	    this.alignInstance = align;
	  },
	  render: function render() {
	    return _react2["default"].createElement('div', null, this.getMaskElement(), this.getPopupElement());
	  }
	});

	exports["default"] = Popup;
	module.exports = exports['default'];

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Align = __webpack_require__(453);

	var _Align2 = _interopRequireDefault(_Align);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports["default"] = _Align2["default"]; // export this package's api

	module.exports = exports['default'];

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(454);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(437);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _isWindow = __webpack_require__(463);

	var _isWindow2 = _interopRequireDefault(_isWindow);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function buffer(fn, ms) {
	  var timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
	}

	var Align = _react2["default"].createClass({
	  displayName: 'Align',

	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},

	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;

	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if ((0, _isWindow2["default"])(lastTarget) && (0, _isWindow2["default"])(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2["default"])(window, 'resize', this.bufferMonitor);
	    }
	  },
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	  forceAlign: function forceAlign() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2["default"].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2["default"])(source, props.target(), props.align));
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var childrenProps = _props.childrenProps;
	    var children = _props.children;

	    var child = _react2["default"].Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2["default"].cloneElement(child, newProps);
	    }
	    return child;
	  }
	});

	exports["default"] = Align;
	module.exports = exports['default'];

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(455);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(457);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(458);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(459);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(460);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(461);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	// http://yiminghe.iteye.com/blog/1124720

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}

	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2["default"].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};

	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2["default"])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2["default"])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2["default"])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2["default"].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2["default"].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2["default"].css(source, 'width', _utils2["default"].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2["default"].css(source, 'height', _utils2["default"].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2["default"].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}

	domAlign.__getOffsetParent = _getOffsetParent2["default"];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2["default"];

	exports["default"] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _propertyUtils = __webpack_require__(456);

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = void 0;

	function force(x, y) {
	  return x + y;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}

	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}

	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	exports["default"] = utils;
	module.exports = exports['default'];

/***/ },
/* 456 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;

	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};

	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}

	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}

	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}

	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}

	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}

	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}

	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}

	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;

	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(455);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2["default"].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2["default"].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports["default"] = getOffsetParent;
	module.exports = exports['default'];

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(455);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(457);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2["default"])(element);
	  var scrollX = void 0;
	  var scrollY = void 0;
	  var winSize = void 0;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2["default"].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2["default"].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2["default"])(el);
	  }

	  // Clip by window's viewport.
	  scrollX = _utils2["default"].getWindowScrollLeft(win);
	  scrollY = _utils2["default"].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2["default"].viewportWidth(win),
	    height: _utils2["default"].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports["default"] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(455);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2["default"].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2["default"].mix(pos, size);
	}

	exports["default"] = adjustForViewport;
	module.exports = exports['default'];

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(455);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2["default"].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2["default"].offset(node);
	    w = _utils2["default"].outerWidth(node);
	    h = _utils2["default"].outerHeight(node);
	  } else {
	    var win = _utils2["default"].getWindow(node);
	    offset = {
	      left: _utils2["default"].getWindowScrollLeft(win),
	      top: _utils2["default"].getWindowScrollTop(win)
	    };
	    w = _utils2["default"].viewportWidth(win);
	    h = _utils2["default"].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports["default"] = getRegion;
	module.exports = exports['default'];

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(462);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = void 0;
	  var diff = void 0;
	  var p1 = void 0;
	  var p2 = void 0;

	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };

	  p1 = (0, _getAlignOffset2["default"])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2["default"])(elRegion, points[0]);

	  diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports["default"] = getElFuturePos;
	module.exports = exports['default'];

/***/ },
/* 462 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = void 0;
	  var y = void 0;

	  x = region.left;
	  y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	exports["default"] = getAlignOffset;
	module.exports = exports['default'];

/***/ },
/* 463 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWindow;
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	module.exports = exports['default'];

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// export this package's api

	module.exports = __webpack_require__(465);

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _ChildrenUtils = __webpack_require__(466);

	var _AnimateChild = __webpack_require__(467);

	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

	var _util = __webpack_require__(472);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var defaultKey = 'rc_animate_' + Date.now();

	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}

	function noop() {}

	var Animate = _react2["default"].createClass({
	  displayName: 'Animate',

	  propTypes: {
	    component: _react2["default"].PropTypes.any,
	    animation: _react2["default"].PropTypes.object,
	    transitionName: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.object]),
	    transitionEnter: _react2["default"].PropTypes.bool,
	    transitionAppear: _react2["default"].PropTypes.bool,
	    exclusive: _react2["default"].PropTypes.bool,
	    transitionLeave: _react2["default"].PropTypes.bool,
	    onEnd: _react2["default"].PropTypes.func,
	    onEnter: _react2["default"].PropTypes.func,
	    onLeave: _react2["default"].PropTypes.func,
	    onAppear: _react2["default"].PropTypes.func,
	    showProp: _react2["default"].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this.performAppear(child.key);
	      }
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }

	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });

	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });

	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  },
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(_AnimateChild2["default"], {
	          key: child.key,
	          ref: child.key,
	          animation: props.animation,
	          transitionName: props.transitionName,
	          transitionEnter: props.transitionEnter,
	          transitionAppear: props.transitionAppear,
	          transitionLeave: props.transitionLeave
	        }, child);
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(Component, passedProps, children);
	    }
	    return children[0] || null;
	  }
	});

	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}

	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}

	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}

	function mergeChildren(prev, next) {
	  var ret = [];

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });

	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });

	  ret = ret.concat(pendingChildren);

	  return ret;
	}

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _cssAnimation = __webpack_require__(468);

	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

	var _util = __webpack_require__(472);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};

	var AnimateChild = _react2["default"].createClass({
	  displayName: 'AnimateChild',

	  propTypes: {
	    children: _react2["default"].PropTypes.any
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  },
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;

	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _cssAnimation2["default"])(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	  render: function render() {
	    return this.props.children;
	  }
	});

	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _Event = __webpack_require__(469);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(470);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;

	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);

	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2["default"])(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports["default"] = cssAnimation;
	module.exports = exports['default'];

/***/ },
/* 469 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports["default"] = TransitionEvents;
	module.exports = exports['default'];

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(471);
	} catch (err) {
	  var index = __webpack_require__(471);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function (el) {
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function (name) {
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function (name) {
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function (re) {
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function (name, force) {
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function () {
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has = ClassList.prototype.contains = function (name) {
	  return this.list ? this.list.contains(name) : !!~index(this.array(), name);
	};

/***/ },
/* 471 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (arr, obj) {
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 472 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports['default'];

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _LazyRenderBox = __webpack_require__(474);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var PopupInner = _react2["default"].createClass({
	  displayName: 'PopupInner',

	  propTypes: {
	    hiddenClassName: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    children: _react.PropTypes.any
	  },
	  render: function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2["default"].createElement('div', {
	      className: className,
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: props.style
	    }, _react2["default"].createElement(_LazyRenderBox2["default"], { className: props.prefixCls + '-content', visible: props.visible }, props.children));
	  }
	});

	exports["default"] = PopupInner;
	module.exports = exports['default'];

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _objectWithoutProperties2 = __webpack_require__(475);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var LazyRenderBox = _react2["default"].createClass({
	  displayName: 'LazyRenderBox',

	  propTypes: {
	    children: _react.PropTypes.any,
	    className: _react.PropTypes.string,
	    visible: _react.PropTypes.bool,
	    hiddenClassName: _react.PropTypes.string
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  },
	  render: function render() {
	    var _props = this.props;
	    var hiddenClassName = _props.hiddenClassName;
	    var visible = _props.visible;
	    var props = (0, _objectWithoutProperties3["default"])(_props, ['hiddenClassName', 'visible']);

	    if (hiddenClassName || _react2["default"].Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return _react2["default"].createElement('div', props);
	    }

	    return _react2["default"].Children.only(props.children);
	  }
	});

	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },
/* 475 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(398);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}

	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return (0, _extends3["default"])({}, baseAlign, align);
	}

	function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports["default"] = getContainerRenderMixin;

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function defaultGetContainer() {
	  var container = document.createElement('div');
	  document.body.appendChild(container);
	  return container;
	}

	function getContainerRenderMixin(config) {
	  var _config$autoMount = config.autoMount;
	  var autoMount = _config$autoMount === undefined ? true : _config$autoMount;
	  var _config$autoDestroy = config.autoDestroy;
	  var autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy;
	  var isVisible = config.isVisible;
	  var getComponent = config.getComponent;
	  var _config$getContainer = config.getContainer;
	  var getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;

	  var mixin = void 0;

	  function _renderComponent(instance, componentArg, ready) {
	    if (!isVisible || instance._component || isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = getContainer(instance);
	      }
	      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, getComponent(instance, componentArg), instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  }

	  if (autoMount) {
	    mixin = _extends({}, mixin, {
	      componentDidMount: function componentDidMount() {
	        _renderComponent(this);
	      },
	      componentDidUpdate: function componentDidUpdate() {
	        _renderComponent(this);
	      }
	    });
	  }

	  if (!autoMount || !autoDestroy) {
	    mixin = _extends({}, mixin, {
	      renderComponent: function renderComponent(componentArg, ready) {
	        _renderComponent(this, componentArg, ready);
	      }
	    });
	  }

	  function _removeContainer(instance) {
	    if (instance._container) {
	      var container = instance._container;
	      _reactDom2["default"].unmountComponentAtNode(container);
	      container.parentNode.removeChild(container);
	      instance._container = null;
	    }
	  }

	  if (autoDestroy) {
	    mixin = _extends({}, mixin, {
	      componentWillUnmount: function componentWillUnmount() {
	        _removeContainer(this);
	      }
	    });
	  } else {
	    mixin = _extends({}, mixin, {
	      removeContainer: function removeContainer() {
	        _removeContainer(this);
	      }
	    });
	  }

	  return mixin;
	}
	module.exports = exports['default'];

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(340);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(441);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _warning = __webpack_require__(43);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function calcPoints(vertical, marks, dots, step, min, max) {
	  (0, _warning2["default"])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
	  var points = Object.keys(marks).map(parseFloat);
	  if (dots) {
	    for (var i = min; i <= max; i = i + step) {
	      if (points.indexOf(i) >= 0) continue;
	      points.push(i);
	    }
	  }
	  return points;
	}

	var Steps = function Steps(_ref) {
	  var prefixCls = _ref.prefixCls;
	  var vertical = _ref.vertical;
	  var marks = _ref.marks;
	  var dots = _ref.dots;
	  var step = _ref.step;
	  var included = _ref.included;
	  var lowerBound = _ref.lowerBound;
	  var upperBound = _ref.upperBound;
	  var max = _ref.max;
	  var min = _ref.min;

	  var range = max - min;
	  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
	    var _classNames;

	    var offset = Math.abs(point - min) / range * 100 + '%';
	    var style = vertical ? { bottom: offset } : { left: offset };

	    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
	    var pointClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-dot', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-dot-active', isActived), _classNames));

	    return _react2["default"].createElement('span', { className: pointClassName, style: style, key: point });
	  });

	  return _react2["default"].createElement('div', { className: prefixCls + '-step' }, elements);
	};

	exports["default"] = Steps;
	module.exports = exports['default'];

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(398);

	var _extends3 = _interopRequireDefault(_extends2);

	var _typeof2 = __webpack_require__(407);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _defineProperty2 = __webpack_require__(340);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(441);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var Marks = function Marks(_ref) {
	  var className = _ref.className;
	  var vertical = _ref.vertical;
	  var marks = _ref.marks;
	  var included = _ref.included;
	  var upperBound = _ref.upperBound;
	  var lowerBound = _ref.lowerBound;
	  var max = _ref.max;
	  var min = _ref.min;

	  var marksKeys = Object.keys(marks);
	  var marksCount = marksKeys.length;
	  var unit = 100 / (marksCount - 1);
	  var markWidth = unit * 0.9;

	  var range = max - min;
	  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
	    return a - b;
	  }).map(function (point) {
	    var _classNames;

	    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
	    var markClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className + '-text', true), (0, _defineProperty3["default"])(_classNames, className + '-text-active', isActived), _classNames));

	    var bottomStyle = {
	      // height: markWidth + '%',
	      marginBottom: '-200%',
	      bottom: (point - min) / range * 100 + '%'
	    };

	    var leftStyle = {
	      width: markWidth + '%',
	      marginLeft: -markWidth / 2 + '%',
	      left: (point - min) / range * 100 + '%'
	    };

	    var style = vertical ? bottomStyle : leftStyle;

	    var markPoint = marks[point];
	    var markPointIsObject = (typeof markPoint === 'undefined' ? 'undefined' : (0, _typeof3["default"])(markPoint)) === 'object' && !_react2["default"].isValidElement(markPoint);
	    var markLabel = markPointIsObject ? markPoint.label : markPoint;
	    var markStyle = markPointIsObject ? (0, _extends3["default"])({}, style, markPoint.style) : style;
	    return _react2["default"].createElement('span', { className: markClassName, style: markStyle, key: point }, markLabel);
	  });

	  return _react2["default"].createElement('div', { className: className }, elements);
	};

	exports["default"] = Marks;
	module.exports = exports['default'];

/***/ },
/* 480 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.filterItems = filterItems;
	exports.setFilterParams = setFilterParams;
	exports.handleCategoryChange = handleCategoryChange;
	exports.handleMinPriceChange = handleMinPriceChange;
	exports.handleMaxPriceChange = handleMaxPriceChange;
	exports.setPriceRange = setPriceRange;
	exports.handlePriceChange = handlePriceChange;
	// ----------------------------------------------------------------------------
	// Методы компонента
	// ----------------------------------------------------------------------------

	// Фильтрация объявлений по параметрам
	function filterItems(parameters) {
	  this.props.transportActions.filterByParametersAsync(parameters);
	}

	// Установка параметров фильтра
	function setFilterParams(newParams) {
	  var _this = this;

	  this.setState({
	    filterParameters: newParams
	  }, function () {
	    _this.filterItems(_this.state.filterParameters);
	  });
	}

	// Обработка смены категории
	function handleCategoryChange(e) {
	  var newParams = Object.assign({}, this.state.filterParameters, {
	    category: e.target.value
	  });

	  this.setFilterParams(newParams);
	}

	// Обработка смены минимальной цены
	function handleMinPriceChange(e) {
	  var newParams = Object.assign({}, this.state.filterParameters, {
	    min_price: e.target.value
	  });

	  this.setFilterParams(newParams);
	}

	// Обработка смены максимальной цены
	function handleMaxPriceChange(e) {
	  var newParams = Object.assign({}, this.state.filterParameters, {
	    max_price: e.target.value
	  });

	  this.setFilterParams(newParams);
	}

	function setPriceRange(min, max) {
	  this.setState({
	    priceRangeMin: min,
	    priceRangeMax: max
	  });
	}

	function handlePriceChange(range) {
	  var newParams = Object.assign({}, this.state.filterParameters, {
	    min_price: range[0],
	    max_price: range[1]
	  });

	  this.setFilterParams(newParams);
	}

/***/ },
/* 481 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"filter":"filter_z5bX","parameters":"parameters_G8qY","parameter":"parameter_3Gag","price":"price_3ngF","extra":"extra_aa57","number":"number_3scW","paramsButton":"paramsButton_3peu"};

/***/ },
/* 482 */,
/* 483 */
1,
/* 484 */,
/* 485 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainview":"mainview_3Bha","content":"content_15bS","loading":"loading_25Ap","scroll":"scroll_cdlU"};

/***/ },
/* 486 */,
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(239);

	var _googleMapReact = __webpack_require__(488);

	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _Placemark = __webpack_require__(511);

	var _Placemark2 = _interopRequireDefault(_Placemark);

	var _API = __webpack_require__(281);

	var _style = __webpack_require__(514);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/** Компонент карты */
	var Map = function (_React$Component) {
	  _inherits(Map, _React$Component);

	  function Map(props) {
	    _classCallCheck(this, Map);

	    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

	    _this.state = {
	      mapParameters: {
	        key: 'AIzaSyA1l_CX9YVk3O_qywJUaVT0RIiRK49AFQw',
	        language: 'ru'
	      },
	      center: { lat: 42, lng: 42 },
	      fetching: 'fetching',
	      labels: []
	    };
	    return _this;
	  }

	  _createClass(Map, [{
	    key: 'loadMarkers',


	    /** Загрузка маркеров с сервера */
	    value: function loadMarkers(type) {
	      var _this2 = this;

	      _axios2.default.get(_API.Markers.type(type)).then(function (response) {
	        _this2.setState({
	          labels: response.data,
	          fetching: 'ready'
	        });
	      }).catch(function (error) {
	        return console.warn(error);
	      });
	    }

	    /** Установка локальных координат */

	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var lat = localStorage.getItem('clientLat') || 42,
	          lng = localStorage.getItem('clientLon') || 47;

	      this.setState({
	        center: {
	          lat: parseFloat(lat),
	          lng: parseFloat(lng)
	        }
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadMarkers(this.props.type);
	    }

	    /** Отрисовка компонента */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.mainMap },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.header },
	          _react2.default.createElement('img', { src: '/img/icons/map.svg', alt: '' }),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u041D\u0430 \u043A\u0430\u0440\u0442\u0435'
	          )
	        ),
	        _react2.default.createElement(
	          _googleMapReact2.default,
	          {
	            center: this.state.center,
	            zoom: 14,
	            bootstrapURLKeys: this.state.mapParameters },
	          this.state.fetching === "ready" ? this.state.labels.map(function (item) {
	            return _this3.renderPlacemark(_this3.props.type, item);
	          }) : ''
	        )
	      );
	    }

	    /** Отрисовка точки на карте */

	  }, {
	    key: 'renderPlacemark',
	    value: function renderPlacemark(type, item) {
	      var key = type + '_' + item.id,
	          lat = parseFloat(item.location.lat),
	          lng = parseFloat(item.location.lon);

	      if (lat && lng && -180 < lat < 180 && -180 < lng < 180) return _react2.default.createElement(_Placemark2.default, { type: type, key: key, lat: lat, lng: lng });else {
	        console.warn('[APP] Coordinates in ' + type + ' ' + item.id + ' are out of range. They should be [-180,180]');
	        return false;
	      }
	    }
	  }]);

	  return Map;
	}(_react2.default.Component);

	exports.default = Map;

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _google_map = __webpack_require__(489);

	var _google_map2 = _interopRequireDefault(_google_map);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _google_map2.default;

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(101);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(191);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _marker_dispatcher = __webpack_require__(490);

	var _marker_dispatcher2 = _interopRequireDefault(_marker_dispatcher);

	var _google_map_map = __webpack_require__(492);

	var _google_map_map2 = _interopRequireDefault(_google_map_map);

	var _google_map_markers = __webpack_require__(493);

	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

	var _google_map_markers_prerender = __webpack_require__(495);

	var _google_map_markers_prerender2 = _interopRequireDefault(_google_map_markers_prerender);

	var _google_map_loader = __webpack_require__(496);

	var _google_map_loader2 = _interopRequireDefault(_google_map_loader);

	var _detect = __webpack_require__(498);

	var _detect2 = _interopRequireDefault(_detect);

	var _geo = __webpack_require__(499);

	var _geo2 = _interopRequireDefault(_geo);

	var _array_helper = __webpack_require__(504);

	var _array_helper2 = _interopRequireDefault(_array_helper);

	var _is_plain_object = __webpack_require__(505);

	var _is_plain_object2 = _interopRequireDefault(_is_plain_object);

	var _pick = __webpack_require__(506);

	var _pick2 = _interopRequireDefault(_pick);

	var _raf = __webpack_require__(507);

	var _raf2 = _interopRequireDefault(_raf);

	var _log = __webpack_require__(508);

	var _log2 = _interopRequireDefault(_log);

	var _isNumber = __webpack_require__(509);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _omit = __webpack_require__(494);

	var _omit2 = _interopRequireDefault(_omit);

	var _detectElementResize = __webpack_require__(510);

	var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var kEPS = 0.00001;
	var K_GOOGLE_TILE_SIZE = 256;
	// real minZoom calculated here _getMinZoom
	var K_IDLE_TIMEOUT = 100;
	var K_IDLE_CLICK_TIMEOUT = 300;
	var DEFAULT_MIN_ZOOM = 3;

	function defaultOptions_() /* maps */{
	  return {
	    overviewMapControl: false,
	    streetViewControl: false,
	    rotateControl: true,
	    mapTypeControl: false,
	    // disable poi
	    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
	    minZoom: DEFAULT_MIN_ZOOM };
	}

	var latLng2Obj = function latLng2Obj(latLng) {
	  return (0, _is_plain_object2.default)(latLng) ? latLng : { lat: latLng[0], lng: latLng[1] };
	};

	var GoogleMap = function (_Component) {
	  _inherits(GoogleMap, _Component);

	  // eslint-disable-line

	  function GoogleMap(props) {
	    _classCallCheck(this, GoogleMap);

	    var _this = _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).call(this, props));

	    _this._getMinZoom = function () {
	      if (_this.geoService_.getWidth() > 0 || _this.geoService_.getHeight() > 0) {
	        var tilesPerWidth = Math.ceil(_this.geoService_.getWidth() / K_GOOGLE_TILE_SIZE) + 2;
	        var tilesPerHeight = Math.ceil(_this.geoService_.getHeight() / K_GOOGLE_TILE_SIZE) + 2;
	        var maxTilesPerDim = Math.max(tilesPerWidth, tilesPerHeight);
	        return Math.ceil((0, _log2.default)(maxTilesPerDim));
	      }
	      return DEFAULT_MIN_ZOOM;
	    };

	    _this._computeMinZoom = function (minZoomOverride, minZoom) {
	      if (minZoomOverride) {
	        return minZoom || DEFAULT_MIN_ZOOM;
	      }
	      return _this._getMinZoom();
	    };

	    _this._mapDomResizeCallback = function () {
	      _this.resetSizeOnIdle_ = true;
	      if (_this.maps_) {
	        _this.maps_.event.trigger(_this.map_, 'resize');
	      }
	    };

	    _this._initMap = function () {
	      // only initialize the map once
	      if (_this.initialized_) {
	        return;
	      }
	      _this.initialized_ = true;

	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);

	      _this._onBoundsChanged(); // now we can calculate map bounds center etc...

	      var bootstrapURLKeys = _extends({}, _this.props.apiKey && { key: _this.props.apiKey }, _this.props.bootstrapURLKeys);

	      _this.props.googleMapLoader(bootstrapURLKeys).then(function (maps) {
	        if (!_this.mounted_) {
	          return;
	        }

	        var centerLatLng = _this.geoService_.getCenter();

	        var propsOptions = {
	          zoom: _this.props.zoom || _this.props.defaultZoom,
	          center: new maps.LatLng(centerLatLng.lat, centerLatLng.lng)
	        };

	        // prevent to exapose full api
	        // next props must be exposed (console.log(Object.keys(pick(maps, isPlainObject))))
	        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
	        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition",
	        // "SymbolPath", "ZoomControlStyle",
	        // "event", "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem",
	        // "DistanceMatrixStatus",
	        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType",
	        // "GeocoderStatus", "KmlLayerStatus",
	        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference",
	        // "TravelMode", "UnitSystem"
	        var mapPlainObjects = (0, _pick2.default)(maps, _is_plain_object2.default);
	        var options = typeof _this.props.options === 'function' ? _this.props.options(mapPlainObjects) : _this.props.options;
	        var defaultOptions = defaultOptions_(mapPlainObjects);

	        var draggableOptions = _this.props.draggable !== undefined && { draggable: _this.props.draggable };

	        var minZoom = _this._computeMinZoom(options.minZoomOverride, options.minZoom);
	        _this.minZoom_ = minZoom;

	        var preMapOptions = _extends({}, defaultOptions, {
	          minZoom: minZoom
	        }, options, propsOptions);

	        _this.defaultDraggableOption_ = preMapOptions.draggable !== undefined ? preMapOptions.draggable : _this.defaultDraggableOption_;

	        var mapOptions = _extends({}, preMapOptions, draggableOptions);

	        mapOptions.minZoom = _this._checkMinZoom(mapOptions.minZoom, minZoom);

	        var map = new maps.Map(_reactDom2.default.findDOMNode(_this.refs.google_map_dom), mapOptions);
	        _this.map_ = map;
	        _this.maps_ = maps;

	        // render in overlay
	        var this_ = _this;
	        var overlay = _this.overlay_ = Object.assign(new maps.OverlayView(), {
	          onAdd: function onAdd() {
	            var K_MAX_WIDTH = typeof screen !== 'undefined' ? screen.width + 'px' : '2000px';
	            var K_MAX_HEIGHT = typeof screen !== 'undefined' ? screen.height + 'px' : '2000px';

	            var div = document.createElement('div');
	            this.div = div;
	            div.style.backgroundColor = 'transparent';
	            div.style.position = 'absolute';
	            div.style.left = '0px';
	            div.style.top = '0px';
	            div.style.width = K_MAX_WIDTH; // prevents some chrome draw defects
	            div.style.height = K_MAX_HEIGHT;

	            var panes = this.getPanes();
	            panes.overlayMouseTarget.appendChild(div);

	            _reactDom2.default.unstable_renderSubtreeIntoContainer(this_, _react2.default.createElement(_google_map_markers2.default, {
	              experimental: this_.props.experimental,
	              onChildClick: this_._onChildClick,
	              onChildMouseDown: this_._onChildMouseDown,
	              onChildMouseEnter: this_._onChildMouseEnter,
	              onChildMouseLeave: this_._onChildMouseLeave,
	              geoService: this_.geoService_,
	              projectFromLeftTop: true,
	              distanceToMouse: this_.props.distanceToMouse,
	              getHoverDistance: this_._getHoverDistance,
	              dispatcher: this_.markersDispatcher_
	            }), div,
	            // remove prerendered markers
	            function () {
	              return this_.setState({ overlayCreated: true });
	            });
	          },
	          onRemove: function onRemove() {
	            _reactDom2.default.unmountComponentAtNode(this.div);
	          },
	          draw: function draw() {
	            var div = overlay.div;
	            var overlayProjection = overlay.getProjection();
	            var bounds = map.getBounds();
	            var ne = bounds.getNorthEast();
	            var sw = bounds.getSouthWest();
	            var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));

	            // need round for safari still can't find what need for firefox
	            var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

	            this_.updateCounter_++;
	            this_._onBoundsChanged(map, maps, !this_.props.debounced);

	            if (!this_.googleApiLoadedCalled_) {
	              this_._onGoogleApiLoaded({ map: map, maps: maps });
	              this_.googleApiLoadedCalled_ = true;
	            }

	            div.style.left = ptxRounded.x + 'px';
	            div.style.top = ptxRounded.y + 'px';
	            if (this_.markersDispatcher_) {
	              this_.markersDispatcher_.emit('kON_CHANGE');
	            }
	          }
	        });

	        overlay.setMap(map);

	        maps.event.addListener(map, 'zoom_changed', function () {
	          // recalc position at zoom start
	          if (this_.geoService_.getZoom() !== map.getZoom()) {
	            if (!this_.zoomAnimationInProgress_) {
	              this_.zoomAnimationInProgress_ = true;
	              this_._onZoomAnimationStart();
	            }

	            var TIMEOUT_ZOOM = 300;

	            if (new Date().getTime() - _this.zoomControlClickTime_ < TIMEOUT_ZOOM) {
	              // there is strange Google Map Api behavior in chrome when zoom animation of map
	              // is started only on second raf call, if was click on zoom control
	              // or +- keys pressed, so i wait for two rafs before change state

	              // this does not fully prevent animation jump
	              // but reduce it's occurence probability
	              (0, _raf2.default)(function () {
	                return (0, _raf2.default)(function () {
	                  this_.updateCounter_++;
	                  this_._onBoundsChanged(map, maps);
	                });
	              });
	            } else {
	              this_.updateCounter_++;
	              this_._onBoundsChanged(map, maps);
	            }
	          }
	        });

	        maps.event.addListener(map, 'idle', function () {
	          if (_this.resetSizeOnIdle_) {
	            _this._setViewSize();
	            var currMinZoom = _this._computeMinZoom(_this.props.options.minZoomOverride, _this.props.options.minZoom);

	            if (currMinZoom !== _this.minZoom_) {
	              _this.minZoom_ = currMinZoom;
	              map.setOptions({ minZoom: currMinZoom });
	            }

	            _this.resetSizeOnIdle_ = false;
	          }

	          if (this_.zoomAnimationInProgress_) {
	            this_.zoomAnimationInProgress_ = false;
	            this_._onZoomAnimationEnd();
	          }

	          var div = overlay.div;
	          var overlayProjection = overlay.getProjection();
	          var bounds = map.getBounds();
	          var ne = bounds.getNorthEast();
	          var sw = bounds.getSouthWest();
	          var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));
	          // need round for safari still can't find what need for firefox
	          var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

	          this_.updateCounter_++;
	          this_._onBoundsChanged(map, maps);

	          if (_this.mouse_) {
	            var latLng = _this.geoService_.unproject(_this.mouse_, true);
	            _this.mouse_.lat = latLng.lat;
	            _this.mouse_.lng = latLng.lng;
	          }

	          _this._onChildMouseMove();

	          this_.dragTime_ = 0;
	          div.style.left = ptxRounded.x + 'px';
	          div.style.top = ptxRounded.y + 'px';
	          if (this_.markersDispatcher_) {
	            this_.markersDispatcher_.emit('kON_CHANGE');
	            if (this_.fireMouseEventOnIdle_) {
	              this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	            }
	          }
	        });

	        maps.event.addListener(map, 'mouseover', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = true;
	        });

	        maps.event.addListener(map, 'mouseout', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = false;
	          this_.mouse_ = null;
	          this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        });

	        maps.event.addListener(map, 'drag', function () {
	          this_.dragTime_ = new Date().getTime();
	          this_._onDrag();
	        });
	      }).catch(function (e) {
	        console.error(e); // eslint-disable-line no-console
	        throw e;
	      });
	    };

	    _this._onGoogleApiLoaded = function () {
	      if (_this.props.onGoogleApiLoaded) {
	        var _this$props;

	        if (process.env.NODE_ENV !== 'production' && _this.props.yesIWantToUseGoogleMapApiInternals !== true) {
	          console.warn('GoogleMap: ' + // eslint-disable-line
	          'Usage of internal api objects is dangerous ' + 'and can cause a lot of issues.\n' + 'To hide this warning add yesIWantToUseGoogleMapApiInternals={true} ' + 'to <GoogleMap instance');
	        }

	        (_this$props = _this.props).onGoogleApiLoaded.apply(_this$props, arguments);
	      }
	    };

	    _this._getHoverDistance = function () {
	      return _this.props.hoverDistance;
	    };

	    _this._onDrag = function () {
	      var _this$props2;

	      return _this.props.onDrag && (_this$props2 = _this.props).onDrag.apply(_this$props2, arguments);
	    };

	    _this._onZoomAnimationStart = function () {
	      var _this$props3;

	      return _this.props.onZoomAnimationStart && (_this$props3 = _this.props).onZoomAnimationStart.apply(_this$props3, arguments);
	    };

	    _this._onZoomAnimationEnd = function () {
	      var _this$props4;

	      return _this.props.onZoomAnimationEnd && (_this$props4 = _this.props).onZoomAnimationEnd.apply(_this$props4, arguments);
	    };

	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        var _this$props5;

	        return (_this$props5 = _this.props).onChildClick.apply(_this$props5, arguments);
	      }
	      return undefined;
	    };

	    _this._onChildMouseDown = function (hoverKey, childProps) {
	      _this.childMouseDownArgs_ = [hoverKey, childProps];
	      if (_this.props.onChildMouseDown) {
	        _this.props.onChildMouseDown(hoverKey, childProps, _extends({}, _this.mouse_));
	      }
	    };

	    _this._onChildMouseUp = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseUp) {
	          var _this$props6;

	          (_this$props6 = _this.props).onChildMouseUp.apply(_this$props6, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	        _this.childMouseDownArgs_ = null;
	        _this.childMouseUpTime_ = new Date().getTime();
	      }
	    };

	    _this._onChildMouseMove = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseMove) {
	          var _this$props7;

	          (_this$props7 = _this.props).onChildMouseMove.apply(_this$props7, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	      }
	    };

	    _this._onChildMouseEnter = function () {
	      if (_this.props.onChildMouseEnter) {
	        var _this$props8;

	        return (_this$props8 = _this.props).onChildMouseEnter.apply(_this$props8, arguments);
	      }
	      return undefined;
	    };

	    _this._onChildMouseLeave = function () {
	      if (_this.props.onChildMouseLeave) {
	        var _this$props9;

	        return (_this$props9 = _this.props).onChildMouseLeave.apply(_this$props9, arguments);
	      }
	      return undefined;
	    };

	    _this._setViewSize = function () {
	      if (!_this.mounted_) return;

	      var mapDom = _reactDom2.default.findDOMNode(_this.refs.google_map_dom);
	      _this.geoService_.setViewSize(mapDom.clientWidth, mapDom.clientHeight);
	      _this._onBoundsChanged();
	    };

	    _this._onWindowResize = function () {
	      _this.resetSizeOnIdle_ = true;
	    };

	    _this._onMapMouseMove = function (e) {
	      if (!_this.mouseInMap_) return;

	      var currTime = new Date().getTime();
	      var K_RECALC_CLIENT_RECT_MS = 50;

	      if (currTime - _this.mouseMoveTime_ > K_RECALC_CLIENT_RECT_MS) {
	        _this.boundingRect_ = e.currentTarget.getBoundingClientRect();
	      }
	      _this.mouseMoveTime_ = currTime;

	      var mousePosX = e.clientX - _this.boundingRect_.left;
	      var mousePosY = e.clientY - _this.boundingRect_.top;

	      if (!_this.mouse_) {
	        _this.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 };
	      }

	      _this.mouse_.x = mousePosX;
	      _this.mouse_.y = mousePosY;

	      var latLng = _this.geoService_.unproject(_this.mouse_, true);
	      _this.mouse_.lat = latLng.lat;
	      _this.mouse_.lng = latLng.lng;

	      _this._onChildMouseMove();

	      if (currTime - _this.dragTime_ < K_IDLE_TIMEOUT) {
	        _this.fireMouseEventOnIdle_ = true;
	      } else {
	        _this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        _this.fireMouseEventOnIdle_ = false;
	      }
	    };

	    _this._onClick = function () {
	      var _this$props10;

	      return _this.props.onClick && !_this.childMouseDownArgs_ && new Date().getTime() - _this.childMouseUpTime_ > K_IDLE_CLICK_TIMEOUT && _this.dragTime_ === 0 && (_this$props10 = _this.props).onClick.apply(_this$props10, arguments);
	    };

	    _this._onMapClick = function (event) {
	      if (_this.markersDispatcher_) {
	        // support touch events and recalculate mouse position on click
	        _this._onMapMouseMove(event);
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          if (_this.mouse_) {
	            _this._onClick(_extends({}, _this.mouse_, {
	              event: event
	            }));
	          }

	          _this.markersDispatcher_.emit('kON_CLICK', event);
	        }
	      }
	    };

	    _this._onMapMouseDownNative = function (event) {
	      if (!_this.mouseInMap_) return;

	      _this._onMapMouseDown(event);
	    };

	    _this._onMapMouseDown = function (event) {
	      if (_this.markersDispatcher_) {
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          // Hovered marker detected at mouse move could be deleted at mouse down time
	          // so it will be good to force hovered marker recalculation
	          _this._onMapMouseMove(event);
	          _this.markersDispatcher_.emit('kON_MDOWN', event);
	        }
	      }
	    };

	    _this._onMapMouseDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        // to fix strange zoom in chrome
	        if (!_this.mouse_) {
	          _this.zoomControlClickTime_ = new Date().getTime();
	        }
	      }
	    };

	    _this._onKeyDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        _this.zoomControlClickTime_ = new Date().getTime();
	      }
	    };

	    _this._onTouchMove = function (event) {
	      if (_this.refs.google_map_dom) {
	        var mapDom = _reactDom2.default.findDOMNode(_this.refs.google_map_dom);
	        if (mapDom.contains(event.target)) {
	          event.preventDefault();
	        }
	      }
	    };

	    _this._isCenterDefined = function (center) {
	      return center && ((0, _is_plain_object2.default)(center) && (0, _isNumber2.default)(center.lat) && (0, _isNumber2.default)(center.lng) || center.length === 2 && (0, _isNumber2.default)(center[0]) && (0, _isNumber2.default)(center[1]));
	    };

	    _this._onBoundsChanged = function (map, maps, callExtBoundsChange) {
	      if (map) {
	        var gmC = map.getCenter();
	        _this.geoService_.setView([gmC.lat(), gmC.lng()], map.getZoom(), 0);
	      }

	      if ((_this.props.onChange || _this.props.onBoundsChange) && _this.geoService_.canProject()) {
	        var zoom = _this.geoService_.getZoom();
	        var bounds = _this.geoService_.getBounds();
	        var centerLatLng = _this.geoService_.getCenter();

	        if (!(0, _array_helper2.default)(bounds, _this.prevBounds_, kEPS)) {
	          if (callExtBoundsChange !== false) {
	            var marginBounds = _this.geoService_.getBounds(_this.props.margin);
	            if (_this.props.onBoundsChange) {
	              _this.props.onBoundsChange(_this.centerIsObject_ ? _extends({}, centerLatLng) : [centerLatLng.lat, centerLatLng.lng], zoom, bounds, marginBounds);
	            }

	            if (_this.props.onChange) {
	              _this.props.onChange({
	                center: _extends({}, centerLatLng),
	                zoom: zoom,
	                bounds: {
	                  nw: {
	                    lat: bounds[0],
	                    lng: bounds[1]
	                  },
	                  se: {
	                    lat: bounds[2],
	                    lng: bounds[3]
	                  }
	                },
	                marginBounds: {
	                  nw: {
	                    lat: marginBounds[0],
	                    lng: marginBounds[1]
	                  },
	                  se: {
	                    lat: marginBounds[2],
	                    lng: marginBounds[3]
	                  }
	                },

	                size: _this.geoService_.hasSize() ? {
	                  width: _this.geoService_.getWidth(),
	                  height: _this.geoService_.getHeight()
	                } : {
	                  width: 0,
	                  height: 0
	                }
	              });
	            }

	            _this.prevBounds_ = bounds;
	          }
	        }
	        // uncomment for strange bugs
	        if (process.env.NODE_ENV !== 'production') {
	          // compare with google calculations
	          if (map) {
	            var locBounds = map.getBounds();
	            var ne = locBounds.getNorthEast();
	            var sw = locBounds.getSouthWest();

	            var _gmC = map.getCenter();
	            // compare with google map

	            if (!(0, _array_helper2.default)([centerLatLng.lat, centerLatLng.lng], [_gmC.lat(), _gmC.lng()], kEPS)) {
	              console.info('GoogleMap center not eq:', // eslint-disable-line no-console
	              [centerLatLng.lat, centerLatLng.lng], [_gmC.lat(), _gmC.lng()]);
	            }

	            if (!(0, _array_helper2.default)(bounds, // eslint-disable-line
	            [ne.lat(), sw.lng(), sw.lat(), ne.lng()], kEPS // eslint-disable-line no-console
	            ) && !_this.props.resetBoundsOnResize) {
	              // eslint-disable-line no-console
	              // this is normal if this message occured on resize
	              console.info('GoogleMap bounds not eq:', '\n', // eslint-disable-line no-console
	              bounds, '\n', [ne.lat(), sw.lng(), sw.lat(), ne.lng()]);
	            }
	          }
	        }
	      }
	    };

	    _this.mounted_ = false;
	    _this.initialized_ = false;
	    _this.googleApiLoadedCalled_ = false;

	    _this.map_ = null;
	    _this.maps_ = null;
	    _this.prevBounds_ = null;

	    _this.mouse_ = null;
	    _this.mouseMoveTime_ = 0;
	    _this.boundingRect_ = null;
	    _this.mouseInMap_ = true;

	    _this.dragTime_ = 0;
	    _this.fireMouseEventOnIdle_ = false;
	    _this.updateCounter_ = 0;

	    _this.markersDispatcher_ = new _marker_dispatcher2.default(_this);
	    _this.geoService_ = new _geo2.default(K_GOOGLE_TILE_SIZE);
	    _this.centerIsObject_ = (0, _is_plain_object2.default)(_this.props.center);

	    _this.minZoom_ = DEFAULT_MIN_ZOOM;
	    _this.defaultDraggableOption_ = true;

	    _this.zoomControlClickTime_ = 0;

	    _this.childMouseDownArgs_ = null;
	    _this.childMouseUpTime_ = 0;

	    if (process.env.NODE_ENV !== 'production') {
	      if (_this.props.apiKey) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'apiKey is deprecated, use ' + 'bootstrapURLKeys={{key: YOUR_API_KEY}} instead.');
	      }

	      if (_this.props.onBoundsChange) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'onBoundsChange is deprecated, use ' + 'onChange({center, zoom, bounds, ...other}) instead.');
	      }

	      if (_this.props.center === undefined && _this.props.defaultCenter === undefined) {
	        console.warn('GoogleMap: center or defaultCenter' + // eslint-disable-line no-console
	        'property must be defined');
	      }

	      if (_this.props.zoom === undefined && _this.props.defaultZoom === undefined) {
	        console.warn('GoogleMap: zoom or defaultZoom' + // eslint-disable-line no-console
	        'property must be defined');
	      }
	    }

	    if (_this._isCenterDefined(_this.props.center || _this.props.defaultCenter)) {
	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
	    }

	    _this.zoomAnimationInProgress_ = false;

	    _this.state = {
	      overlayCreated: false
	    };
	    return _this;
	  }

	  _createClass(GoogleMap, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.mounted_ = true;
	      window.addEventListener('resize', this._onWindowResize);
	      window.addEventListener('keydown', this._onKeyDownCapture, true);

	      // prevent touch devices from moving the entire browser window on drag
	      window.addEventListener('touchmove', this._onTouchMove);

	      var mapDom = _reactDom2.default.findDOMNode(this.refs.google_map_dom);
	      // gmap can't prevent map drag if mousedown event already occured
	      // the only workaround I find is prevent mousedown native browser event
	      _reactDom2.default.findDOMNode(this.refs.google_map_dom).addEventListener('mousedown', this._onMapMouseDownNative, true);

	      window.addEventListener('mouseup', this._onChildMouseUp, false);

	      var bootstrapURLKeys = _extends({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);

	      this.props.googleMapLoader(bootstrapURLKeys); // we can start load immediatly

	      setTimeout(function () {
	        // to detect size
	        _this2._setViewSize();
	        if (_this2._isCenterDefined(_this2.props.center || _this2.props.defaultCenter)) {
	          _this2._initMap();
	        }
	      }, 0, this);
	      if (this.props.resetBoundsOnResize) {
	        var that = this;
	        _detectElementResize2.default.addResizeListener(mapDom, that._mapDomResizeCallback);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      if (process.env.NODE_ENV !== 'production') {
	        if (this.props.defaultCenter !== nextProps.defaultCenter) {
	          console.warn('GoogleMap: defaultCenter prop changed. ' + // eslint-disable-line
	          'You can\'t change default props.');
	        }

	        if (this.props.defaultZoom !== nextProps.defaultZoom) {
	          console.warn('GoogleMap: defaultZoom prop changed. ' + // eslint-disable-line
	          'You can\'t change default props.');
	        }
	      }

	      if (!this._isCenterDefined(this.props.center) && this._isCenterDefined(nextProps.center)) {
	        setTimeout(function () {
	          return _this3._initMap();
	        }, 0);
	      }

	      if (this.map_) {
	        var centerLatLng = this.geoService_.getCenter();
	        if (this._isCenterDefined(nextProps.center)) {
	          var nextPropsCenter = latLng2Obj(nextProps.center);
	          var currCenter = this._isCenterDefined(this.props.center) ? latLng2Obj(this.props.center) : null;

	          if (!currCenter || Math.abs(nextPropsCenter.lat - currCenter.lat) + Math.abs(nextPropsCenter.lng - currCenter.lng) > kEPS) {
	            if (Math.abs(nextPropsCenter.lat - centerLatLng.lat) + Math.abs(nextPropsCenter.lng - centerLatLng.lng) > kEPS) {
	              this.map_.panTo({ lat: nextPropsCenter.lat, lng: nextPropsCenter.lng });
	            }
	          }
	        }

	        if (nextProps.zoom !== undefined) {
	          // if zoom chaged by user
	          if (Math.abs(nextProps.zoom - this.props.zoom) > 0) {
	            this.map_.setZoom(nextProps.zoom);
	          }
	        }

	        if (this.props.draggable !== undefined && nextProps.draggable === undefined) {
	          // reset to default
	          this.map_.setOptions({ draggable: this.defaultDraggableOption_ });
	        } else if (this.props.draggable !== nextProps.draggable) {
	          // also prevent this on window 'mousedown' event to prevent map move
	          this.map_.setOptions({ draggable: nextProps.draggable });
	        }

	        // use shallowEqual to try avoid calling map._setOptions if only the ref changes
	        if (nextProps.options !== undefined && !(0, _shallowEqual2.default)(this.props.options, nextProps.options)) {
	          var mapPlainObjects = (0, _pick2.default)(this.maps_, _is_plain_object2.default);
	          var options = typeof nextProps.options === 'function' ? nextProps.options(mapPlainObjects) : nextProps.options;
	          // remove zoom, center and draggable options as these are managed by google-maps-react
	          options = (0, _omit2.default)(nextProps.options, ['zoom', 'center', 'draggable']);

	          if (options.hasOwnProperty('minZoom')) {
	            var minZoom = this._computeMinZoom(options.minZoomOverride, options.minZoom);
	            options.minZoom = this._checkMinZoom(options.minZoom, minZoom);
	          }

	          this.map_.setOptions(options);
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      // draggable does not affect inner components
	      return !(0, _shallowEqual2.default)((0, _omit2.default)(this.props, ['draggable']), (0, _omit2.default)(nextProps, ['draggable'])) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.markersDispatcher_.emit('kON_CHANGE');

	      if (this.props.hoverDistance !== prevProps.hoverDistance) {
	        this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mounted_ = false;
	      var that = this;
	      var mapDom = _reactDom2.default.findDOMNode(this.refs.google_map_dom);
	      window.removeEventListener('resize', this._onWindowResize);
	      window.removeEventListener('keydown', this._onKeyDownCapture);
	      mapDom.removeEventListener('mousedown', this._onMapMouseDownNative, true);
	      window.removeEventListener('mouseup', this._onChildMouseUp, false);
	      window.removeEventListener('touchmove', this._onTouchMove);
	      _detectElementResize2.default.addResizeListener(mapDom, that._mapDomResizeCallback);

	      if (this.overlay_) {
	        // this triggers overlay_.onRemove(), which will unmount the <GoogleMapMarkers/>
	        this.overlay_.setMap(null);
	      }

	      if (this.maps_ && this.map_) {
	        this.maps_.event.clearInstanceListeners(this.map_);
	      }

	      this.map_ = null;
	      this.maps_ = null;
	      this.markersDispatcher_.dispose();

	      this.resetSizeOnIdle_ = false;

	      delete this.map_;
	      delete this.markersDispatcher_;
	    }
	    // calc minZoom if map size available
	    // it's better to not set minZoom less than this calculation gives
	    // otherwise there is no homeomorphism between screen coordinates and map
	    // (one map coordinate can have different screen coordinates)

	  }, {
	    key: '_checkMinZoom',
	    value: function _checkMinZoom(zoom, minZoom) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (zoom < minZoom) {
	          console.warn('GoogleMap: ' + // eslint-disable-line
	          'minZoom option is less than recommended ' + 'minZoom option for your map sizes.\n' + 'overrided to value ' + minZoom);
	        }
	      }

	      if (minZoom < zoom) {
	        return zoom;
	      }
	      return minZoom;
	    }

	    // this method works only if this.props.onChildMouseDown was called


	    // this method works only if this.props.onChildMouseDown was called


	    // K_IDLE_CLICK_TIMEOUT - looks like 300 is enough


	    // gmap can't prevent map drag if mousedown event already occured
	    // the only workaround I find is prevent mousedown native browser event

	  }, {
	    key: 'render',
	    value: function render() {
	      var mapMarkerPrerender = !this.state.overlayCreated ? _react2.default.createElement(_google_map_markers_prerender2.default, {
	        experimental: this.props.experimental,
	        onChildClick: this._onChildClick,
	        onChildMouseDown: this._onChildMouseDown,
	        onChildMouseEnter: this._onChildMouseEnter,
	        onChildMouseLeave: this._onChildMouseLeave,
	        geoService: this.geoService_,
	        projectFromLeftTop: false,
	        distanceToMouse: this.props.distanceToMouse,
	        getHoverDistance: this._getHoverDistance,
	        dispatcher: this.markersDispatcher_
	      }) : null;

	      return _react2.default.createElement('div', {
	        style: this.props.style,
	        onMouseMove: this._onMapMouseMove,
	        onMouseDownCapture: this._onMapMouseDownCapture,
	        onClick: this._onMapClick
	      }, _react2.default.createElement(_google_map_map2.default, { ref: 'google_map_dom' }), mapMarkerPrerender);
	    }
	  }]);

	  return GoogleMap;
	}(_react.Component);

	GoogleMap.propTypes = {
	  apiKey: _react.PropTypes.string,
	  bootstrapURLKeys: _react.PropTypes.any,

	  defaultCenter: _react2.default.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.shape({
	    lat: _react.PropTypes.number,
	    lng: _react.PropTypes.number
	  })]),
	  center: _react2.default.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.shape({
	    lat: _react.PropTypes.number,
	    lng: _react.PropTypes.number
	  })]),
	  defaultZoom: _react.PropTypes.number,
	  zoom: _react.PropTypes.number,
	  onBoundsChange: _react.PropTypes.func,
	  onChange: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onChildClick: _react.PropTypes.func,
	  onChildMouseDown: _react.PropTypes.func,
	  onChildMouseUp: _react.PropTypes.func,
	  onChildMouseMove: _react.PropTypes.func,
	  onChildMouseEnter: _react.PropTypes.func,
	  onChildMouseLeave: _react.PropTypes.func,
	  onZoomAnimationStart: _react.PropTypes.func,
	  onZoomAnimationEnd: _react.PropTypes.func,
	  onDrag: _react.PropTypes.func,
	  options: _react.PropTypes.any,
	  distanceToMouse: _react.PropTypes.func,
	  hoverDistance: _react.PropTypes.number,
	  debounced: _react.PropTypes.bool,
	  margin: _react.PropTypes.array,
	  googleMapLoader: _react.PropTypes.any,
	  onGoogleApiLoaded: _react.PropTypes.func,
	  yesIWantToUseGoogleMapApiInternals: _react.PropTypes.bool,
	  draggable: _react.PropTypes.bool,
	  style: _react.PropTypes.any,
	  resetBoundsOnResize: _react.PropTypes.bool
	};
	GoogleMap.defaultProps = {
	  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps */) {
	    return Math.sqrt((pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y));
	  },

	  hoverDistance: 30,
	  debounced: true,
	  options: defaultOptions_,
	  googleMapLoader: _google_map_loader2.default,
	  yesIWantToUseGoogleMapApiInternals: false,
	  style: {
	    width: '100%',
	    height: '100%',
	    margin: 0,
	    padding: 0,
	    position: 'relative'
	  }
	};
	GoogleMap.googleMapLoader = _google_map_loader2.default;
	exports.default = GoogleMap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _eventemitter = __webpack_require__(491);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var MarkerDispatcher = function (_EventEmitter) {
	  _inherits(MarkerDispatcher, _EventEmitter);

	  function MarkerDispatcher(gmapInstance) {
	    _classCallCheck(this, MarkerDispatcher);

	    var _this = _possibleConstructorReturn(this, (MarkerDispatcher.__proto__ || Object.getPrototypeOf(MarkerDispatcher)).call(this));

	    _this.gmapInstance = gmapInstance;
	    return _this;
	  }

	  _createClass(MarkerDispatcher, [{
	    key: 'getChildren',
	    value: function getChildren() {
	      return this.gmapInstance.props.children;
	    }
	  }, {
	    key: 'getMousePosition',
	    value: function getMousePosition() {
	      return this.gmapInstance.mouse_;
	    }
	  }, {
	    key: 'getUpdateCounter',
	    value: function getUpdateCounter() {
	      return this.gmapInstance.updateCounter_;
	    }
	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      this.gmapInstance = null;
	      this.removeAllListeners();
	    }
	  }]);

	  return MarkerDispatcher;
	}(_eventemitter2.default);

	exports.default = MarkerDispatcher;

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {} /* Nothing to set */

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events,
	      names = [],
	      name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event,
	      available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt],
	      len = arguments.length,
	      args,
	      i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1:
	        return listeners.fn.call(listeners.context), true;
	      case 2:
	        return listeners.fn.call(listeners.context, a1), true;
	      case 3:
	        return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4:
	        return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5:
	        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6:
	        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len - 1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length,
	        j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1:
	          listeners[i].fn.call(listeners[i].context);break;
	        case 2:
	          listeners[i].fn.call(listeners[i].context, a1);break;
	        case 3:
	          listeners[i].fn.call(listeners[i].context, a1, a2);break;
	        default:
	          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt],
	      events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var style = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

	var GoogleMapMap = function (_Component) {
	  _inherits(GoogleMapMap, _Component);

	  function GoogleMapMap() {
	    _classCallCheck(this, GoogleMapMap);

	    return _possibleConstructorReturn(this, (GoogleMapMap.__proto__ || Object.getPrototypeOf(GoogleMapMap)).apply(this, arguments));
	  }

	  _createClass(GoogleMapMap, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false; // disable react on this div
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { style: style });
	    }
	  }]);

	  return GoogleMapMap;
	}(_react.Component);

	exports.default = GoogleMapMap;

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _shallowEqual = __webpack_require__(191);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _omit = __webpack_require__(494);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var mainStyle = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

	var style = {
	  width: 0,
	  height: 0,
	  left: 0,
	  top: 0,
	  backgroundColor: 'transparent',
	  position: 'absolute'
	};

	var GoogleMapMarkers = function (_Component) {
	  _inherits(GoogleMapMarkers, _Component);

	  function GoogleMapMarkers(props) {
	    _classCallCheck(this, GoogleMapMarkers);

	    var _this = _possibleConstructorReturn(this, (GoogleMapMarkers.__proto__ || Object.getPrototypeOf(GoogleMapMarkers)).call(this, props));

	    _this._getState = function () {
	      return {
	        children: _this.props.dispatcher.getChildren(),
	        updateCounter: _this.props.dispatcher.getUpdateCounter()
	      };
	    };

	    _this._onChangeHandler = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var prevChildCount = (_this.state.children || []).length;
	      var state = _this._getState();

	      _this.setState(state, function () {
	        return (state.children || []).length !== prevChildCount && _this._onMouseChangeHandler();
	      });
	    };

	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // click works only on hovered item
	          _this.props.onChildClick(hoverKey, childProps);
	        }
	      }
	    };

	    _this._onChildMouseDown = function () {
	      if (_this.props.onChildMouseDown) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // works only on hovered item
	          _this.props.onChildMouseDown(hoverKey, childProps);
	        }
	      }
	    };

	    _this._onChildMouseEnter = function (hoverKey, childProps) {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      if (_this.props.onChildMouseEnter) {
	        _this.props.onChildMouseEnter(hoverKey, childProps);
	      }

	      _this.hoverChildProps_ = childProps;
	      _this.hoverKey_ = hoverKey;
	      _this.setState({ hoverKey: hoverKey });
	    };

	    _this._onChildMouseLeave = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var hoverKey = _this.hoverKey_;
	      var childProps = _this.hoverChildProps_;

	      if (hoverKey !== undefined && hoverKey !== null) {
	        if (_this.props.onChildMouseLeave) {
	          _this.props.onChildMouseLeave(hoverKey, childProps);
	        }

	        _this.hoverKey_ = null;
	        _this.hoverChildProps_ = null;
	        _this.setState({ hoverKey: null });
	      }
	    };

	    _this._onMouseAllow = function (value) {
	      if (!value) {
	        _this._onChildMouseLeave();
	      }

	      _this.allowMouse_ = value;
	    };

	    _this._onMouseChangeHandler = function () {
	      if (_this.allowMouse_) {
	        _this._onMouseChangeHandler_raf();
	      }
	    };

	    _this._onMouseChangeHandler_raf = function () {
	      // eslint-disable-line
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var mp = _this.props.dispatcher.getMousePosition();

	      if (mp) {
	        (function () {
	          var distances = [];
	          var hoverDistance = _this.props.getHoverDistance();

	          _react2.default.Children.forEach(_this.state.children, function (child, childIndex) {
	            if (!child) return;
	            // layers
	            if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	              return;
	            }

	            var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
	            var dist = _this.props.distanceToMouse(_this.dimesionsCache_[childKey], mp, child.props);
	            if (dist < hoverDistance) {
	              distances.push({
	                key: childKey,
	                dist: dist,
	                props: child.props
	              });
	            }
	          });

	          if (distances.length) {
	            distances.sort(function (a, b) {
	              return a.dist - b.dist;
	            });
	            var hoverKey = distances[0].key;
	            var childProps = distances[0].props;

	            if (_this.hoverKey_ !== hoverKey) {
	              _this._onChildMouseLeave();

	              _this._onChildMouseEnter(hoverKey, childProps);
	            }
	          } else {
	            _this._onChildMouseLeave();
	          }
	        })();
	      } else {
	        _this._onChildMouseLeave();
	      }
	    };

	    _this._getDimensions = function (key) {
	      var childKey = key;
	      return _this.dimesionsCache_[childKey];
	    };

	    _this.props.dispatcher.on('kON_CHANGE', _this._onChangeHandler);
	    _this.props.dispatcher.on('kON_MOUSE_POSITION_CHANGE', _this._onMouseChangeHandler);
	    _this.props.dispatcher.on('kON_CLICK', _this._onChildClick);
	    _this.props.dispatcher.on('kON_MDOWN', _this._onChildMouseDown);

	    _this.dimesionsCache_ = {};
	    _this.hoverKey_ = null;
	    _this.hoverChildProps_ = null;
	    _this.allowMouse_ = true;

	    _this.state = _extends({}, _this._getState(), { hoverKey: null });
	    return _this;
	  }

	  _createClass(GoogleMapMarkers, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.props.experimental === true) {
	        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)((0, _omit2.default)(this.state, ['hoverKey']), (0, _omit2.default)(nextState, ['hoverKey']));
	      }

	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.dispatcher.removeListener('kON_CHANGE', this._onChangeHandler);
	      this.props.dispatcher.removeListener('kON_MOUSE_POSITION_CHANGE', this._onMouseChangeHandler);
	      this.props.dispatcher.removeListener('kON_CLICK', this._onChildClick);
	      this.props.dispatcher.removeListener('kON_MDOWN', this._onChildMouseDown);

	      this.dimesionsCache_ = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var mainElementStyle = this.props.style || mainStyle;
	      this.dimesionsCache_ = {};

	      var markers = _react2.default.Children.map(this.state.children, function (child, childIndex) {
	        if (!child) return undefined;
	        if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	          return _react2.default.cloneElement(child, {
	            $geoService: _this2.props.geoService,
	            $onMouseAllow: _this2._onMouseAllow,
	            $prerender: _this2.props.prerender
	          });
	        }

	        var latLng = child.props.latLng !== undefined ? child.props.latLng : { lat: child.props.lat, lng: child.props.lng };

	        var pt = _this2.props.geoService.project(latLng, _this2.props.projectFromLeftTop);

	        var stylePtPos = {
	          left: pt.x,
	          top: pt.y
	        };

	        var dx = 0;
	        var dy = 0;

	        if (!_this2.props.projectFromLeftTop) {
	          // center projection
	          if (_this2.props.geoService.hasSize()) {
	            dx = _this2.props.geoService.getWidth() / 2;
	            dy = _this2.props.geoService.getHeight() / 2;
	          }
	        }

	        // to prevent rerender on child element i need to pass
	        // const params $getDimensions and $dimensionKey instead of dimension object
	        var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;

	        _this2.dimesionsCache_[childKey] = _extends({
	          x: pt.x + dx,
	          y: pt.y + dy
	        }, latLng);

	        return _react2.default.createElement('div', {
	          key: childKey,
	          style: _extends({}, style, stylePtPos),
	          className: child.props.$markerHolderClassName
	        }, _react2.default.cloneElement(child, {
	          $hover: childKey === _this2.state.hoverKey,
	          $getDimensions: _this2._getDimensions,
	          $dimensionKey: childKey,
	          $geoService: _this2.props.geoService,
	          $onMouseAllow: _this2._onMouseAllow,
	          $prerender: _this2.props.prerender
	        }));
	      });

	      return _react2.default.createElement('div', { style: mainElementStyle }, markers);
	    }
	  }]);

	  return GoogleMapMarkers;
	}(_react.Component);

	GoogleMapMarkers.propTypes = {
	  geoService: _react.PropTypes.any,
	  style: _react.PropTypes.any,
	  distanceToMouse: _react.PropTypes.func,
	  dispatcher: _react.PropTypes.any,
	  onChildClick: _react.PropTypes.func,
	  onChildMouseDown: _react.PropTypes.func,
	  onChildMouseLeave: _react.PropTypes.func,
	  onChildMouseEnter: _react.PropTypes.func,
	  getHoverDistance: _react.PropTypes.func,
	  projectFromLeftTop: _react.PropTypes.bool,
	  prerender: _react.PropTypes.bool
	};
	GoogleMapMarkers.defaultProps = {
	  projectFromLeftTop: false,
	  prerender: false
	};
	exports.default = GoogleMapMarkers;

/***/ },
/* 494 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/omit.js
	var omit = function omit(obj, keys) {
	  var rest = _objectWithoutProperties(obj, []);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (rest.hasOwnProperty(key)) {
	      delete rest[key];
	    }
	  }
	  return rest;
	};

	exports.default = omit;

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.default = function (props) {
	  return _react2.default.createElement('div', { style: style }, _react2.default.createElement(_google_map_markers2.default, _extends({}, props, { prerender: true })));
	};

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _google_map_markers = __webpack_require__(493);

	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var style = {
	  width: '50%',
	  height: '50%',
	  left: '50%',
	  top: '50%',
	  // backgroundColor: 'red',
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = googleMapLoader;
	var $script_ = null;

	var loadPromise_ = void 0;

	var resolveCustomPromise_ = void 0;
	var _customPromise = new Promise(function (resolve) {
	  resolveCustomPromise_ = resolve;
	});

	// TODO add libraries language and other map options
	function googleMapLoader(bootstrapURLKeys) {
	  if (!$script_) {
	    $script_ = __webpack_require__(497); // eslint-disable-line
	  }

	  // call from outside google-map-react
	  // will be as soon as loadPromise_ resolved
	  if (!bootstrapURLKeys) {
	    return _customPromise;
	  }

	  if (loadPromise_) {
	    return loadPromise_;
	  }

	  loadPromise_ = new Promise(function (resolve, reject) {
	    if (typeof window === 'undefined') {
	      reject(new Error('google map cannot be loaded outside browser env'));
	      return;
	    }

	    if (window.google && window.google.maps) {
	      resolve(window.google.maps);
	      return;
	    }

	    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
	      reject(new Error('google map initialization error'));
	    }

	    window._$_google_map_initialize_$_ = function () {
	      delete window._$_google_map_initialize_$_;
	      resolve(window.google.maps);
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
	        console.error('"callback" key in bootstrapURLKeys is not allowed, ' + // eslint-disable-line
	        'use onGoogleApiLoaded property instead');
	        throw new Error('"callback" key in bootstrapURLKeys is not allowed, ' + 'use onGoogleApiLoaded property instead');
	      }
	    }

	    var queryString = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
	      return r + '&' + key + '=' + bootstrapURLKeys[key];
	    }, '');

	    $script_('https://maps.googleapis.com/maps/api/js?callback=_$_google_map_initialize_$_' + queryString, function () {
	      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
	    });
	  });

	  resolveCustomPromise_(loadPromise_);

	  return loadPromise_;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */

	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition();else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else this[name] = definition();
	})('$script', function () {
	  var doc = document,
	      head = doc.getElementsByTagName('head')[0],
	      s = 'string',
	      f = false,
	      push = 'push',
	      readyState = 'readyState',
	      onreadystatechange = 'onreadystatechange',
	      list = {},
	      ids = {},
	      delay = {},
	      scripts = {},
	      scriptpath,
	      urlArgs;

	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) {
	      if (!fn(ar[i])) return f;
	    }return 1;
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el);
	    });
	  }

	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths];
	    var idOrDoneIsDone = idOrDone && idOrDone.call,
	        done = idOrDoneIsDone ? idOrDone : optDone,
	        id = idOrDoneIsDone ? paths.join('') : idOrDone,
	        queue = paths.length;
	    function loopFn(item) {
	      return item.call ? item() : list[item];
	    }
	    function callback() {
	      if (! --queue) {
	        list[id] = 1;
	        done && done();
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback();

	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = path.indexOf('.js') === -1 ? scriptpath + path + '.js' : scriptpath + path;
	        }

	        if (scripts[path]) {
	          if (id) ids[id] = 1;
	          return scripts[path] == 2 ? callback() : setTimeout(function () {
	            loading(path, true);
	          }, 0);
	        }

	        scripts[path] = 1;
	        if (id) ids[id] = 1;
	        create(path, callback);
	      });
	    }, 0);
	    return $script;
	  }

	  function create(path, fn) {
	    var el = doc.createElement('script'),
	        loaded;
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if (el[readyState] && !/^c|loade/.test(el[readyState]) || loaded) return;
	      el.onload = el[onreadystatechange] = null;
	      loaded = 1;
	      scripts[path] = 2;
	      fn();
	    };
	    el.async = 1;
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild);
	  }

	  $script.get = create;

	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift();
	      !scripts.length ? $script(s, id, done) : $script(s, callback);
	    })();
	  };

	  $script.path = function (p) {
	    scriptpath = p;
	  };
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  };
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps];
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {
	      return list[dep];
	    }) ? ready() : !function (key) {
	      delay[key] = delay[key] || [];
	      delay[key][push](ready);
	      req && req(missing);
	    }(deps.join('|'));
	    return $script;
	  };

	  $script.done = function (idOrDone) {
	    $script([null], idOrDone);
	  };

	  return $script;
	});

/***/ },
/* 498 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = detectBrowser;
	// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
	var detectBrowserResult_ = null;

	function detectBrowser() {
	  if (detectBrowserResult_) {
	    return detectBrowserResult_;
	  }

	  if (typeof navigator !== 'undefined') {
	    var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
	    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
	    var isOpera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

	    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
	    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

	    if (isChrome && isSafari) {
	      isSafari = false;
	    }

	    if (isChrome && isOpera) {
	      isChrome = false;
	    }

	    detectBrowserResult_ = { isExplorer: isExplorer, isFirefox: isFirefox, isOpera: isOpera, isChrome: isChrome, isSafari: isSafari };
	    return detectBrowserResult_;
	  }

	  detectBrowserResult_ = {
	    isChrome: true,
	    isExplorer: false,
	    isFirefox: false,
	    isOpera: false,
	    isSafari: false
	  };

	  return detectBrowserResult_;
	}

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _lat_lng = __webpack_require__(500);

	var _lat_lng2 = _interopRequireDefault(_lat_lng);

	var _pointGeometry = __webpack_require__(502);

	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

	var _transform = __webpack_require__(503);

	var _transform2 = _interopRequireDefault(_transform);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var Geo = function () {
	  function Geo(tileSize) {
	    _classCallCheck(this, Geo);

	    // left_top view пользует гугл
	    // super();
	    this.hasSize_ = false;
	    this.hasView_ = false;
	    this.transform_ = new _transform2.default(tileSize || 512);
	  }

	  _createClass(Geo, [{
	    key: 'setView',
	    value: function setView(center, zoom, bearing) {
	      this.transform_.center = _lat_lng2.default.convert(center);
	      this.transform_.zoom = +zoom;
	      this.transform_.bearing = +bearing;
	      this.hasView_ = true;
	    }
	  }, {
	    key: 'setViewSize',
	    value: function setViewSize(width, height) {
	      this.transform_.width = width;
	      this.transform_.height = height;
	      this.hasSize_ = true;
	    }
	  }, {
	    key: 'canProject',
	    value: function canProject() {
	      return this.hasSize_ && this.hasView_;
	    }
	  }, {
	    key: 'hasSize',
	    value: function hasSize() {
	      return this.hasSize_;
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(ptXY, viewFromLeftTop) {
	      var ptRes = void 0;
	      if (viewFromLeftTop) {
	        var ptxy = _extends({}, ptXY);
	        ptxy.x -= this.transform_.width / 2;
	        ptxy.y -= this.transform_.height / 2;
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptxy));
	      } else {
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptXY));
	      }

	      ptRes.lng -= 360 * Math.round(ptRes.lng / 360); // convert 2 google format
	      return ptRes;
	    }
	  }, {
	    key: 'project',
	    value: function project(ptLatLng, viewFromLeftTop) {
	      if (viewFromLeftTop) {
	        var pt = this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	        pt.x -= this.transform_.worldSize * Math.round(pt.x / this.transform_.worldSize);

	        pt.x += this.transform_.width / 2;
	        pt.y += this.transform_.height / 2;

	        return pt;
	      }

	      return this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.transform_.width;
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return this.transform_.height;
	    }
	  }, {
	    key: 'getZoom',
	    value: function getZoom() {
	      return this.transform_.zoom;
	    }
	  }, {
	    key: 'getCenter',
	    value: function getCenter() {
	      var ptRes = this.transform_.pointLocation({ x: 0, y: 0 });

	      return ptRes;
	    }
	  }, {
	    key: 'getBounds',
	    value: function getBounds(margins, roundFactor) {
	      var bndT = margins && margins[0] || 0;
	      var bndR = margins && margins[1] || 0;
	      var bndB = margins && margins[2] || 0;
	      var bndL = margins && margins[3] || 0;

	      if (this.getWidth() - bndR - bndL > 0 && this.getHeight() - bndT - bndB > 0) {
	        var topLeftCorner = this.unproject({
	          x: bndL - this.getWidth() / 2,
	          y: bndT - this.getHeight() / 2
	        });
	        var bottomRightCorner = this.unproject({
	          x: this.getWidth() / 2 - bndR,
	          y: this.getHeight() / 2 - bndB
	        });

	        var res = [topLeftCorner.lat, topLeftCorner.lng, bottomRightCorner.lat, bottomRightCorner.lng];

	        if (roundFactor) {
	          res = res.map(function (r) {
	            return Math.round(r * roundFactor) / roundFactor;
	          });
	        }
	        return res;
	      }

	      return [0, 0, 0, 0];
	    }
	  }]);

	  return Geo;
	}();

	exports.default = Geo;

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _wrap2 = __webpack_require__(501);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var LatLng = function () {
	  function LatLng(lat, lng) {
	    _classCallCheck(this, LatLng);

	    if (isNaN(lat) || isNaN(lng)) {
	      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	    }
	    this.lat = +lat;
	    this.lng = +lng;
	  }

	  _createClass(LatLng, [{
	    key: 'wrap',
	    value: function wrap() {
	      return new LatLng(this.lat, (0, _wrap2.wrap)(this.lng, -180, 180));
	    }
	  }]);

	  return LatLng;
	}();

	LatLng.convert = function (a) {
	  if (a instanceof LatLng) {
	    return a;
	  }

	  if (Array.isArray(a)) {
	    return new LatLng(a[0], a[1]);
	  }

	  if ('lng' in a && 'lat' in a) {
	    return new LatLng(a.lat, a.lng);
	  }

	  return a;
	};

	exports.default = LatLng;

/***/ },
/* 501 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrap = wrap;
	function wrap(n, min, max) {
	  var d = max - min;
	  return n === max ? n : ((n - min) % d + d) % d + min;
	}

/***/ },
/* 502 */
/***/ function(module, exports) {

	'use strict';

	module.exports = Point;

	function Point(x, y) {
	    this.x = x;
	    this.y = y;
	}

	Point.prototype = {
	    clone: function clone() {
	        return new Point(this.x, this.y);
	    },

	    add: function add(p) {
	        return this.clone()._add(p);
	    },
	    sub: function sub(p) {
	        return this.clone()._sub(p);
	    },
	    mult: function mult(k) {
	        return this.clone()._mult(k);
	    },
	    div: function div(k) {
	        return this.clone()._div(k);
	    },
	    rotate: function rotate(a) {
	        return this.clone()._rotate(a);
	    },
	    matMult: function matMult(m) {
	        return this.clone()._matMult(m);
	    },
	    unit: function unit() {
	        return this.clone()._unit();
	    },
	    perp: function perp() {
	        return this.clone()._perp();
	    },
	    round: function round() {
	        return this.clone()._round();
	    },

	    mag: function mag() {
	        return Math.sqrt(this.x * this.x + this.y * this.y);
	    },

	    equals: function equals(p) {
	        return this.x === p.x && this.y === p.y;
	    },

	    dist: function dist(p) {
	        return Math.sqrt(this.distSqr(p));
	    },

	    distSqr: function distSqr(p) {
	        var dx = p.x - this.x,
	            dy = p.y - this.y;
	        return dx * dx + dy * dy;
	    },

	    angle: function angle() {
	        return Math.atan2(this.y, this.x);
	    },

	    angleTo: function angleTo(b) {
	        return Math.atan2(this.y - b.y, this.x - b.x);
	    },

	    angleWith: function angleWith(b) {
	        return this.angleWithSep(b.x, b.y);
	    },

	    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
	    angleWithSep: function angleWithSep(x, y) {
	        return Math.atan2(this.x * y - this.y * x, this.x * x + this.y * y);
	    },

	    _matMult: function _matMult(m) {
	        var x = m[0] * this.x + m[1] * this.y,
	            y = m[2] * this.x + m[3] * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },

	    _add: function _add(p) {
	        this.x += p.x;
	        this.y += p.y;
	        return this;
	    },

	    _sub: function _sub(p) {
	        this.x -= p.x;
	        this.y -= p.y;
	        return this;
	    },

	    _mult: function _mult(k) {
	        this.x *= k;
	        this.y *= k;
	        return this;
	    },

	    _div: function _div(k) {
	        this.x /= k;
	        this.y /= k;
	        return this;
	    },

	    _unit: function _unit() {
	        this._div(this.mag());
	        return this;
	    },

	    _perp: function _perp() {
	        var y = this.y;
	        this.y = this.x;
	        this.x = -y;
	        return this;
	    },

	    _rotate: function _rotate(angle) {
	        var cos = Math.cos(angle),
	            sin = Math.sin(angle),
	            x = cos * this.x - sin * this.y,
	            y = sin * this.x + cos * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },

	    _round: function _round() {
	        this.x = Math.round(this.x);
	        this.y = Math.round(this.y);
	        return this;
	    }
	};

	// constructs Point from an array if necessary
	Point.convert = function (a) {
	    if (a instanceof Point) {
	        return a;
	    }
	    if (Array.isArray(a)) {
	        return new Point(a[0], a[1]);
	    }
	    return a;
	};

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _lat_lng = __webpack_require__(500);

	var _lat_lng2 = _interopRequireDefault(_lat_lng);

	var _pointGeometry = __webpack_require__(502);

	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

	var _wrap = __webpack_require__(501);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	// A single transform, generally used for a single tile to be scaled, rotated, and zoomed.
	var Transform = function () {
	  function Transform(tileSize, minZoom, maxZoom) {
	    _classCallCheck(this, Transform);

	    this.tileSize = tileSize || 512; // constant

	    this._minZoom = minZoom || 0;
	    this._maxZoom = maxZoom || 52;

	    this.latRange = [-85.05113, 85.05113];

	    this.width = 0;
	    this.height = 0;
	    this.zoom = 0;
	    this.center = new _lat_lng2.default(0, 0);
	    this.angle = 0;
	  }

	  _createClass(Transform, [{
	    key: 'zoomScale',
	    value: function zoomScale(zoom) {
	      return Math.pow(2, zoom);
	    }
	  }, {
	    key: 'scaleZoom',
	    value: function scaleZoom(scale) {
	      return Math.log(scale) / Math.LN2;
	    }
	  }, {
	    key: 'project',
	    value: function project(latlng, worldSize) {
	      return new _pointGeometry2.default(this.lngX(latlng.lng, worldSize), this.latY(latlng.lat, worldSize));
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(point, worldSize) {
	      return new _lat_lng2.default(this.yLat(point.y, worldSize), this.xLng(point.x, worldSize));
	    }
	  }, {
	    key: 'lngX',

	    // lat/lon <-> absolute pixel coords convertion
	    value: function lngX(lon, worldSize) {
	      return (180 + lon) * (worldSize || this.worldSize) / 360;
	    }

	    // latitude to absolute y coord

	  }, {
	    key: 'latY',
	    value: function latY(lat, worldSize) {
	      var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
	      return (180 - y) * (worldSize || this.worldSize) / 360;
	    }
	  }, {
	    key: 'xLng',
	    value: function xLng(x, worldSize) {
	      return x * 360 / (worldSize || this.worldSize) - 180;
	    }
	  }, {
	    key: 'yLat',
	    value: function yLat(y, worldSize) {
	      var y2 = 180 - y * 360 / (worldSize || this.worldSize);
	      return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
	    }
	  }, {
	    key: 'locationPoint',
	    value: function locationPoint(latlng) {
	      var p = this.project(latlng);
	      return this.centerPoint._sub(this.point._sub(p)._rotate(this.angle));
	    }
	  }, {
	    key: 'pointLocation',
	    value: function pointLocation(p) {
	      var p2 = this.centerPoint._sub(p)._rotate(-this.angle);
	      return this.unproject(this.point.sub(p2));
	    }
	  }, {
	    key: 'minZoom',
	    get: function get() {
	      return this._minZoom;
	    },
	    set: function set(zoom) {
	      this._minZoom = zoom;
	      this.zoom = Math.max(this.zoom, zoom);
	    }
	  }, {
	    key: 'maxZoom',
	    get: function get() {
	      return this._maxZoom;
	    },
	    set: function set(zoom) {
	      this._maxZoom = zoom;
	      this.zoom = Math.min(this.zoom, zoom);
	    }
	  }, {
	    key: 'worldSize',
	    get: function get() {
	      return this.tileSize * this.scale;
	    }
	  }, {
	    key: 'centerPoint',
	    get: function get() {
	      return new _pointGeometry2.default(0, 0); // this.size._div(2);
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return new _pointGeometry2.default(this.width, this.height);
	    }
	  }, {
	    key: 'bearing',
	    get: function get() {
	      return -this.angle / Math.PI * 180;
	    },
	    set: function set(bearing) {
	      this.angle = -(0, _wrap.wrap)(bearing, -180, 180) * Math.PI / 180;
	    }
	  }, {
	    key: 'zoom',
	    get: function get() {
	      return this._zoom;
	    },
	    set: function set(zoom) {
	      var zoomV = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
	      this._zoom = zoomV;
	      this.scale = this.zoomScale(zoomV);
	      this.tileZoom = Math.floor(zoomV);
	      this.zoomFraction = zoomV - this.tileZoom;
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this.lngX(this.center.lng);
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this.latY(this.center.lat);
	    }
	  }, {
	    key: 'point',
	    get: function get() {
	      return new _pointGeometry2.default(this.x, this.y);
	    }
	  }]);

	  return Transform;
	}();

	exports.default = Transform;

/***/ },
/* 504 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isArraysEqualEps;
	function isArraysEqualEps(arrayA, arrayB, eps) {
	  if (arrayA && arrayB) {
	    for (var i = 0; i !== arrayA.length; ++i) {
	      if (Math.abs(arrayA[i] - arrayB[i]) > eps) {
	        return false;
	      }
	    }
	    return true;
	  }
	  return false;
	}

/***/ },
/* 505 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = isPlainObject;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/isPlainObject.js
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

/***/ },
/* 506 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pick;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/pick.js

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key]; // eslint-disable-line
	    }
	    return result;
	  }, {});
	}

/***/ },
/* 507 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = raf;
	function raf(callback) {
	  if (window.requestAnimationFrame) {
	    return window.requestAnimationFrame(callback);
	  }

	  var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

	  return nativeRaf ? nativeRaf(callback) : window.setTimeout(callback, 1e3 / 60);
	}

/***/ },
/* 508 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var log2 = Math.log2 ? Math.log2 : function (x) {
	  return Math.log(x) / Math.LN2;
	};

	exports.default = log2;

/***/ },
/* 509 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = isNumber;

	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	}

	var objectToString = Object.prototype.toString;

	function isNumber(value) {
	  var numberTag = '[object Number]';
	  return typeof value === 'number' || isObjectLike(value) && objectToString.call(value) === numberTag;
	}

/***/ },
/* 510 */
/***/ function(module, exports) {

	'use strict';

	/* eslint-disable */
	/**
	* Detect Element Resize.
	* Forked in order to guard against unsafe 'window' and 'document' references.
	*
	* https://github.com/sdecima/javascript-detect-element-resize
	* Sebastian Decima
	*
	* version: 0.5.3
	**/

	// Reliable `window` and `document` detection

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	// Check `document` and `window` in case of server-side rendering
	var _window;
	if (canUseDOM) {
	  _window = window;
	} else if (typeof self !== 'undefined') {
	  _window = self;
	} else {
	  _window = undefined;
	}

	var attachEvent = typeof document !== 'undefined' && document.attachEvent;
	var stylesCreated = false;

	if (canUseDOM && !attachEvent) {
	  var requestFrame = function () {
	    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
	      return _window.setTimeout(fn, 20);
	    };
	    return function (fn) {
	      return raf(fn);
	    };
	  }();

	  var cancelFrame = function () {
	    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
	    return function (id) {
	      return cancel(id);
	    };
	  }();

	  var resetTriggers = function resetTriggers(element) {
	    var triggers = element.__resizeTriggers__,
	        expand = triggers.firstElementChild,
	        contract = triggers.lastElementChild,
	        expandChild = expand.firstElementChild;
	    contract.scrollLeft = contract.scrollWidth;
	    contract.scrollTop = contract.scrollHeight;
	    expandChild.style.width = expand.offsetWidth + 1 + 'px';
	    expandChild.style.height = expand.offsetHeight + 1 + 'px';
	    expand.scrollLeft = expand.scrollWidth;
	    expand.scrollTop = expand.scrollHeight;
	  };

	  var checkTriggers = function checkTriggers(element) {
	    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
	  };

	  var scrollListener = function scrollListener(e) {
	    var element = this;
	    resetTriggers(this);
	    if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	    this.__resizeRAF__ = requestFrame(function () {
	      if (checkTriggers(element)) {
	        element.__resizeLast__.width = element.offsetWidth;
	        element.__resizeLast__.height = element.offsetHeight;
	        element.__resizeListeners__.forEach(function (fn) {
	          fn.call(element, e);
	        });
	      }
	    });
	  };

	  /* Detect CSS Animations support to detect element display/re-attach */
	  var animation = false,
	      animationstring = 'animation',
	      keyframeprefix = '',
	      animationstartevent = 'animationstart',
	      domPrefixes = 'Webkit Moz O ms'.split(' '),
	      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
	      pfx = '';

	  if (canUseDOM) {
	    var elm = document.createElement('fakeelement');
	    if (elm.style.animationName !== undefined) {
	      animation = true;
	    }

	    if (animation === false) {
	      for (var i = 0; i < domPrefixes.length; i++) {
	        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	          pfx = domPrefixes[i];
	          animationstring = pfx + 'Animation';
	          keyframeprefix = '-' + pfx.toLowerCase() + '-';
	          animationstartevent = startEvents[i];
	          animation = true;
	          break;
	        }
	      }
	    }
	  }

	  var animationName = 'resizeanim';
	  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
	  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	}

	var createStyles = function createStyles() {
	  if (!stylesCreated) {
	    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
	    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
	        head = document.head || document.getElementsByTagName('head')[0],
	        style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }

	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};

	var addResizeListener = function addResizeListener(element, fn) {
	  if (element.parentNode === undefined) {
	    var tempParentDiv = document.createElement('div');
	    element.parentNode = tempParentDiv;
	  }
	  element = element.parentNode;
	  if (attachEvent) element.attachEvent('onresize', fn);else {
	    if (!element.__resizeTriggers__) {
	      if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];
	      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
	      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
	      element.appendChild(element.__resizeTriggers__);
	      resetTriggers(element);
	      element.addEventListener('scroll', scrollListener, true);

	      /* Listen for a css animation to detect element display/re-attach */
	      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
	        if (e.animationName == animationName) resetTriggers(element);
	      });
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};

	var removeResizeListener = function removeResizeListener(element, fn) {
	  element = element.parentNode;
	  if (attachEvent) element.detachEvent('onresize', fn);else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener);
	      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
	    }
	  }
	};

	module.exports = {
	  addResizeListener: addResizeListener,
	  removeResizeListener: removeResizeListener
	};

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(512);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Placemark = function (_React$Component) {
	  _inherits(Placemark, _React$Component);

	  function Placemark(props) {
	    _classCallCheck(this, Placemark);

	    return _possibleConstructorReturn(this, (Placemark.__proto__ || Object.getPrototypeOf(Placemark)).call(this, props));
	  }

	  _createClass(Placemark, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('span', { className: _style2.default.placemark + ' ' + _style2.default[this.props.type] });
	    }
	  }]);

	  return Placemark;
	}(_react2.default.Component);

	exports.default = Placemark;

/***/ },
/* 512 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"placemark":"placemark_BNLd","transport":"transport_E795","cargo":"cargo_1oCO","shop":"shop_3JMS"};

/***/ },
/* 513 */,
/* 514 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainMap":"mainMap_zaei","active":"active_144y","maplabel":"maplabel_2738","header":"header_21qM"};

/***/ },
/* 515 */,
/* 516 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container_2ftq","main":"main_387g","side":"side_1PfW"};

/***/ },
/* 517 */,
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _Headline = __webpack_require__(293);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _style = __webpack_require__(519);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Components imports


	// Action imports


	//Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);

	  function Profile(props) {
	    _classCallCheck(this, Profile);

	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
	  }

	  _createClass(Profile, [{
	    key: 'updateUserInfo',
	    value: function updateUserInfo(e) {
	      e.preventDefault();

	      this.props.userActions.updateUserData(this.props.user.info.id, localStorage.getItem('clientToken'));
	    }
	  }, {
	    key: 'logOut',
	    value: function logOut() {
	      this.props.userActions.userLogOut();
	    }
	  }, {
	    key: 'handlePhotoSelect',
	    value: function handlePhotoSelect(e) {
	      var reader = new FileReader();

	      reader.onload = function () {
	        var output = document.getElementById('profileImage');
	        output.src = reader.result;
	      };

	      reader.readAsDataURL(e.target.files[0]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (localStorage.getItem('clientToken') !== null) return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        _react2.default.createElement(_Headline2.default, { back: true }),
	        _react2.default.createElement(
	          'section',
	          { className: _style2.default.content },
	          _react2.default.createElement(
	            'form',
	            { className: _style2.default.userForm, name: 'userEdit' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F'
	            ),
	            this.renderAvatar(),
	            this.renderInfo(),
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.buttons },
	              _react2.default.createElement(
	                'button',
	                { className: _style2.default.buttonAccent, onClick: this.updateUserInfo.bind(this) },
	                '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'form',
	            { className: _style2.default.phoneForm, name: 'phoneEdit' },
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u0421\u043C\u0435\u043D\u0430 \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0434\u0435\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u0421\u041C\u0421-\u043A\u043E\u0434'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.group },
	              _react2.default.createElement(
	                'label',
	                null,
	                '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D'
	              ),
	              _react2.default.createElement('input', { placeholder: '+7 (____) ___-__-__', type: 'text', name: 'new_phone' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.group },
	              _react2.default.createElement(
	                'label',
	                null,
	                '\u0421\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u043A\u043E\u0434'
	              ),
	              _react2.default.createElement('input', { type: 'text', name: 'code' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.buttons },
	              _react2.default.createElement(
	                'button',
	                { className: _style2.default.buttonAccent, onClick: this.updateUserInfo.bind(this) },
	                '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
	              )
	            )
	          )
	        )
	      );else {
	        return _react2.default.createElement(
	          'div',
	          null,
	          '\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C'
	        );
	      }
	    }
	  }, {
	    key: 'renderAvatar',
	    value: function renderAvatar() {
	      var src = this.props.user.info.avatar || '/img/no-photo.png';
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.avatar },
	        _react2.default.createElement(
	          'picture',
	          null,
	          _react2.default.createElement('img', { id: 'profileImage', src: src, alt: '' })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            '\u0412\u0430\u0448\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F'
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0430\u0448\u0443 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.buttonGray },
	            '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E',
	            _react2.default.createElement('input', { onChange: this.handlePhotoSelect.bind(this), type: 'file', name: 'avatar' })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderInfo',
	    value: function renderInfo() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.info },
	        _react2.default.createElement(
	          'h3',
	          null,
	          '\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.inputs },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.group },
	            _react2.default.createElement(
	              'label',
	              null,
	              '\u0424\u0430\u043C\u0438\u043B\u0438\u044F'
	            ),
	            _react2.default.createElement('input', { value: '', type: 'text', name: 'last_name' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.group },
	            _react2.default.createElement(
	              'label',
	              null,
	              '\u0418\u043C\u044F'
	            ),
	            _react2.default.createElement('input', { value: '', type: 'text', name: 'first_name' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.group },
	            _react2.default.createElement(
	              'label',
	              null,
	              'E-Mail \u0430\u0434\u0440\u0435\u0441'
	            ),
	            _react2.default.createElement('input', { value: '', type: 'text', name: 'email', placeholder: 'E-Mail' })
	          )
	        )
	      );
	    }
	  }]);

	  return Profile;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Profile);


	function mapStateToProps(state) {
	  return {
	    user: state.user
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch)
	  };
	}

/***/ },
/* 519 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container_1XK4","content":"content_gdM2","userForm":"userForm_1-Q8","phoneForm":"phoneForm_2WXI","group":"group_20SG","buttons":"buttons_3dGG","avatar":"avatar_3_9k","buttonGray":"buttonGray_3SIj","info":"info_1Rol","inputs":"inputs_39Ii","button":"button_3iCx","buttonAccent":"buttonAccent_2Akw"};

/***/ },
/* 520 */,
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _Headline = __webpack_require__(293);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _TransportPreview = __webpack_require__(297);

	var _TransportPreview2 = _interopRequireDefault(_TransportPreview);

	var _CargoPreview = __webpack_require__(327);

	var _CargoPreview2 = _interopRequireDefault(_CargoPreview);

	var _BookmarksActions = __webpack_require__(522);

	var BmActions = _interopRequireWildcard(_BookmarksActions);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _TransportActions = __webpack_require__(323);

	var TransportActions = _interopRequireWildcard(_TransportActions);

	var _CargoActions = __webpack_require__(328);

	var CargoActions = _interopRequireWildcard(_CargoActions);

	var _ShopActions = __webpack_require__(333);

	var ShopActions = _interopRequireWildcard(_ShopActions);

	var _style = __webpack_require__(524);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----------------------------------------------------------------------------
	// Подключение зависимостей
	// ----------------------------------------------------------------------------


	// Components imports


	// Action imports


	//Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var Bookmarks = function (_React$Component) {
	  _inherits(Bookmarks, _React$Component);

	  function Bookmarks(props) {
	    _classCallCheck(this, Bookmarks);

	    return _possibleConstructorReturn(this, (Bookmarks.__proto__ || Object.getPrototypeOf(Bookmarks)).call(this, props));
	  }

	  _createClass(Bookmarks, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        _react2.default.createElement(_Headline2.default, { back: true }),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.renderTypeTabs(),
	          this.props.bookmarks.fetching === 'ready' ? this.renderBookmarks() : _react2.default.createElement(
	            'div',
	            null,
	            'Loading data...'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var localBookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	      if (Array.isArray(localBookmarks) && localBookmarks.length) {
	        console.log(this);
	        this.props.bmActions.setBookmarksFetch('fetching');

	        for (var key in localBookmarks) {
	          this.props.bmActions.setBookmarks(key, localBookmarks[key]);
	        }

	        this.props.bmActions.setBookmarksFetch('ready');
	      } else {
	        this.props.bmActions.setBookmarksAsync();
	      }
	    }

	    // Render partials
	    //---------------------------

	  }, {
	    key: 'renderTypeTabs',
	    value: function renderTypeTabs() {
	      return _react2.default.createElement(
	        'ul',
	        { className: _style2.default.types },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { activeStyle: { color: 'red' }, to: '/bookmarks/transport' },
	            '\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { activeStyle: { color: 'red' }, to: '/bookmarks/cargo' },
	            '\u0413\u0440\u0443\u0437'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { activeStyle: { color: 'red' }, to: '/bookmarks/shop' },
	            '\u041C\u0430\u0433\u0430\u0437\u0438\u043D'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderBookmarks',
	    value: function renderBookmarks() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'list' },
	        this.props.params.type === undefined || this.props.params.type === 'transport' ? this.renderTransportBookmarks() : this.props.params.type === 'cargo' ? this.renderCargoBookmarks() : this.props.params.type === 'shop' ? this.renderShopBookmarks() : ''
	      );
	    }
	  }, {
	    key: 'renderTransportBookmarks',
	    value: function renderTransportBookmarks() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.bookmarks.transportItems.length === 0 ? _react2.default.createElement(
	          'div',
	          { className: 'noBookmarks' },
	          '\u041D\u0435\u0442 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A'
	        ) : this.props.bookmarks.transportItems.map(function (bm) {
	          bm.ad !== null ? _react2.default.createElement(_TransportPreview2.default, {
	            key: 'bm_transport_' + bm.ad.id,
	            bookmarkId: bm.id,
	            inBookmarks: true,
	            id: bm.ad.id,
	            data: bm.ad
	          }) : _react2.default.createElement(_TransportPreview2.default, {
	            key: 'bm_transport_' + bm.id,
	            bookmarkId: bm.id,
	            inBookmarks: true,
	            deleted: true
	          });
	        })
	      );
	    }
	  }, {
	    key: 'renderCargoBookmarks',
	    value: function renderCargoBookmarks() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.bookmarks.cargoItems.length === 0 ? _react2.default.createElement(
	          'div',
	          { className: 'noBookmarks' },
	          '\u041D\u0435\u0442 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A'
	        ) : this.props.bookmarks.transportItems.map(function (bm) {
	          bm.ad !== null ? _react2.default.createElement(_CargoPreview2.default, {
	            key: 'bm_cargo_' + bm.ad.id,
	            bookmarkId: bm.id,
	            inBookmarks: true,
	            id: bm.ad.id,
	            data: bm.ad
	          }) : '';
	        })
	      );
	    }
	  }, {
	    key: 'renderShopBookmarks',
	    value: function renderShopBookmarks() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.bookmarks.shopItems.length === 0 ? _react2.default.createElement(
	          'div',
	          { className: 'noBookmarks' },
	          '\u041D\u0435\u0442 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A'
	        ) : this.props.bookmarks.transportItems.map(function (bm) {
	          bm.ad !== null ? _react2.default.createElement(ShopPreview, {
	            key: 'bm_shop_' + bm.ad.id,
	            bookmarkId: bm.id,
	            inBookmarks: true,
	            id: bm.ad.id,
	            data: bm.ad
	          }) : '';
	        })
	      );
	    }
	  }]);

	  return Bookmarks;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Bookmarks);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    bookmarks: state.bookmarks,
	    transport: state.transport,
	    cargo: state.cargo,
	    shop: state.shop
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    transportActions: (0, _redux.bindActionCreators)(TransportActions, dispatch),
	    cargoActions: (0, _redux.bindActionCreators)(CargoActions, dispatch),
	    shopActions: (0, _redux.bindActionCreators)(ShopActions, dispatch),
	    bmActions: (0, _redux.bindActionCreators)(BmActions, dispatch)
	  };
	}

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setBookmarksFetch = setBookmarksFetch;
	exports.setBookmarks = setBookmarks;
	exports.setBookmarksAsync = setBookmarksAsync;
	exports.addBookmarkAsync = addBookmarkAsync;
	exports.removeBookmarkAsync = removeBookmarkAsync;

	var _BookmarksActionTypes = __webpack_require__(265);

	var actionTypes = _interopRequireWildcard(_BookmarksActionTypes);

	var _bookmarks = __webpack_require__(523);

	var bmDataActions = _interopRequireWildcard(_bookmarks);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/** Чистые функции для store */

	/**
	 Установка статуса загрузки данных с сервера
	 ---
	 @param {string} type - статус загрузки
	 @return {Object <string, string>} - экшн для редьюсера
	 */
	function setBookmarksFetch(type) {
	  return {
	    type: actionTypes.SET_BM_FETCH,
	    fetch: type
	  };
	}

	function setBookmarks(type, items) {
	  var ActionType = type === 'transport' ? actionTypes.SET_TRANSPORT_ITEMS : type === 'cargo' ? actionTypes.SET_CARGO_ITEMS : type === 'shop' ? actionTypes.SET_SHOP_ITEMS : false;

	  return {
	    type: ActionType,
	    fetch: 'fetching',
	    items: items
	  };
	}

	/**
	 Запись закладок в store.bookmarks
	 */
	function setBookmarksAsync() {
	  var token = localStorage.getItem('clientToken');
	  var promise = bmDataActions.getBookmarks;

	  return function (dispatch) {
	    dispatch(setBookmarksFetch('fetching'));

	    console.info('[APP] \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A...');

	    promise(token).then(function (items) {
	      var bookmarks = { transport: [], cargo: [], shop: [] };

	      // Распределяем закладки по типам
	      items.forEach(function (item) {
	        var type = item.ad_type;

	        bookmarks[type].push(item);
	      });

	      // Сохраняем загруженные закладки локлаьно
	      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	      // Грузим каждый тип в store приложения
	      for (var key in bookmarks) {
	        dispatch(setBookmarks(key, bookmarks[key]));
	      }

	      dispatch(setBookmarksFetch('ready'));
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	/**
	 Добавляем закладку c id объявления
	 ---
	 @param {string} type - тип объявления
	 @param {number} id   - id объявления
	 @param {array} array - текущий массив закладок из категории
	 */
	function addBookmarkAsync(type, id, array) {
	  var token = localStorage.getItem('clientToken');
	  var promise = bmDataActions.addBookmark;

	  return function (dispatch) {
	    dispatch(setBookmarksFetch('fetching'));

	    console.info('[APP] \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0441 \u0442\u0438\u043F\u043E\u043C \'' + type + '\' \u0438 id \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \'' + id + '\'');

	    promise(type, id, token).then(function (item) {
	      var items = array.concat(item);

	      setLocalBookmarksOfType(type, items);

	      dispatch(setBookmarks(type, items));

	      dispatch(setBookmarksFetch('ready'));
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	/**
	 Удаляем закладку
	 ---
	 @param {string} type - тип объявления
	 @param {number} id   - id закладки
	 @param {array} array - текущий массив закладок из категории
	 */
	function removeBookmarkAsync(type, id, array) {
	  var token = localStorage.getItem('clientToken');
	  var promise = bmDataActions.removeBookmark;

	  return function (dispatch) {
	    dispatch(setBookmarksFetch('fetching'));

	    console.info('[APP] \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0441 \u0442\u0438\u043F\u043E\u043C \'' + type + '\' \u0438 id \'' + id + '\'');

	    promise(id, token).then(function () {
	      var newItems = array.filter(function (deletedItem) {
	        return deletedItem.id !== id;
	      });

	      setLocalBookmarksOfType(type, newItems);

	      dispatch(setBookmarks(type, newItems));

	      dispatch(setBookmarksFetch('ready'));
	    }, function (error) {
	      return console.warn(error);
	    });
	  };
	}

	/**
	 Обновление локальных закладок в localStorage
	 ---
	 @param {string} type - тип объявления
	 @param {array} items - новый массив закладок
	 */
	function setLocalBookmarksOfType(type, items) {
	  var localBookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	  if (Array.isArray(localBookmarks) && localBookmarks.length) {
	    localBookmarks[type] = items;
	  }

	  localStorage.setItem('bookmarks', JSON.stringify(localBookmarks));
	}

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBookmarks = getBookmarks;
	exports.addBookmark = addBookmark;
	exports.removeBookmark = removeBookmark;

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Получение списка закладок по категориям
	 * @param {string} token - Токен пользователя
	 *
	 * @return {Object <array>} bookmarks - список закладок
	 */
	function getBookmarks(token) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.Bookmarks.items, true);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState !== 4) return;

	      if (xhr.status !== 200) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        console.info('[APP] \u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B');
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

	/**
	 * Добавление закладки в категорию
	 * @param {string} type  - тип объявления
	 * @param {number} id    - id объявления
	 * @param {string} token - Токен пользователя
	 *
	 * @return {Object <object>} bookmark - добавленная закладка
	 */
	function addBookmark(type, id, token) {
	  return new Promise(function (resolve, reject) {

	    if (!token) reject('[APP] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D (\u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 token)');

	    var xhr = new XMLHttpRequest();
	    var data = new FormData();

	    data.append('ad_type', type);
	    data.append('ad_id', id);

	    xhr.open('POST', API.Bookmarks.items, true);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(data);

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState !== 4) return;

	      if (xhr.status !== 201) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

	/**
	 * Удаление закладки из категории
	 * @param {number} id    - id объявления
	 * @param {string} token - Токен пользователя
	 *
	 * @return {Object} promise - Промис, обрабатывающий результат удаления закладки
	 */
	function removeBookmark(id, token) {
	  return new Promise(function (resolve, reject) {

	    if (!token) reject('[APP] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D (\u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 token)');

	    var xhr = new XMLHttpRequest();

	    xhr.open('DELETE', API.Bookmarks.item(id), true);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState !== 4) return;

	      if (xhr.status !== 204) {
	        reject('[APP] \u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 ' + id + '. \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438: ' + xhr.status);
	      } else {
	        resolve();
	      }
	    };
	  });
	}

/***/ },
/* 524 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container_3H0P"};

/***/ },
/* 525 */,
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _reactRouter = __webpack_require__(5);

	var _Headline = __webpack_require__(293);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _AppActions = __webpack_require__(527);

	var AppActions = _interopRequireWildcard(_AppActions);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _TransportActions = __webpack_require__(323);

	var TransportActions = _interopRequireWildcard(_TransportActions);

	var _style = __webpack_require__(528);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Components imports


	// Action imports


	//Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var NewAds = function (_React$Component) {
	  _inherits(NewAds, _React$Component);

	  function NewAds(props) {
	    _classCallCheck(this, NewAds);

	    return _possibleConstructorReturn(this, (NewAds.__proto__ || Object.getPrototypeOf(NewAds)).call(this, props));
	  }

	  _createClass(NewAds, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.transportActions.setTypesAsync();
	      this.props.transportActions.setAllCurrentTransportAsync();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        _react2.default.createElement(_Headline2.default, { text: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F', nobutton: true }),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.content },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.tabs },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { activeClassName: _style2.default.active, to: '/admin/add' },
	              '\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { activeClassName: _style2.default.active, to: '/admin/add/cargo' },
	              '\u0413\u0440\u0443\u0437'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { activeClassName: _style2.default.active, to: '/admin/add/shop' },
	              '\u041C\u0430\u0433\u0430\u0437\u0438\u043D'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.formContainer },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return NewAds;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewAds);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    app: state.app,
	    user: state.user,
	    transport: state.transport
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    appActions: (0, _redux.bindActionCreators)(AppActions, dispatch),
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    transportActions: (0, _redux.bindActionCreators)(TransportActions, dispatch)
	  };
	}

/***/ },
/* 527 */
426,
/* 528 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container_1yim","formContainer":"formContainer_6uDt","tabs":"tabs_3W9K","active":"active_sA-Q"};

/***/ },
/* 529 */,
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _googleMapReact = __webpack_require__(488);

	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	var _ShopActions = __webpack_require__(333);

	var ShopActions = _interopRequireWildcard(_ShopActions);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _Placemark = __webpack_require__(511);

	var _Placemark2 = _interopRequireDefault(_Placemark);

	var _ShopMethods = __webpack_require__(531);

	var methods = _interopRequireWildcard(_ShopMethods);

	var _style = __webpack_require__(532);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Action imports


	// Components


	// Comp's methods import


	// Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var AddFormShop = function (_React$Component) {
	  _inherits(AddFormShop, _React$Component);

	  function AddFormShop(props) {
	    _classCallCheck(this, AddFormShop);

	    var _this = _possibleConstructorReturn(this, (AddFormShop.__proto__ || Object.getPrototypeOf(AddFormShop)).call(this, props));

	    _this.state = {
	      editId: null,

	      photos: [],
	      photosIDs: [],

	      currentAddress: '',
	      currentLocation: { lat: 42, lng: 42 }
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(AddFormShop, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      if (this.props.edit) {
	        console.log(this.props.edit, this.props.adID);

	        this.setState({
	          editId: this.props.adID
	        });

	        _axios2.default.get(API.getAd('shop', this.props.adID)).then(function (response) {
	          _this2.fillFormWithData(response.data);
	        }).catch(function (error) {
	          return console.warn(error);
	        });
	      }

	      var location = {
	        lat: parseFloat(localStorage.getItem('clientLat')),
	        lng: parseFloat(localStorage.getItem('clientLon'))
	      };

	      this.setState({
	        currentLocation: location
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handler = this.props.edit ? this.handleUpdateData.bind(this) : this.handleSubmitForm.bind(this);

	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.addForm },
	        this.renderShopForm(),
	        this.renderImagesForm(),
	        _react2.default.createElement(
	          'button',
	          { onClick: handler },
	          '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
	        )
	      );
	    }

	    // Форма заполенения данных магазина

	  }, {
	    key: 'renderShopForm',
	    value: function renderShopForm() {
	      return _react2.default.createElement(
	        'form',
	        { name: 'newShop' },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.container },
	          _react2.default.createElement(
	            'div',
	            null,
	            this.renderParameters(),
	            this.renderHiddenValues()
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.addressSelect },
	            this.renderAddressSelect()
	          )
	        )
	      );
	    }

	    // Простые параметры

	  }, {
	    key: 'renderParameters',
	    value: function renderParameters() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
	          ),
	          _react2.default.createElement('input', { id: 'shopTitle', type: 'text', name: 'name', placeholder: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
	          ),
	          _react2.default.createElement('textarea', { id: 'shopDescription', type: 'text', name: 'description', placeholder: '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430'
	          ),
	          _react2.default.createElement(
	            'select',
	            { id: 'shopState', name: 'state' },
	            _react2.default.createElement(
	              'option',
	              { value: 'state_1' },
	              '\u041E\u0442\u043A\u0440\u044B\u0442'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'state_2' },
	              '\u0417\u0430\u043A\u0440\u044B\u0442'
	            )
	          )
	        )
	      );
	    }

	    // Карта и выбор адреса

	  }, {
	    key: 'renderAddressSelect',
	    value: function renderAddressSelect() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.parameters },
	        _react2.default.createElement(
	          'label',
	          null,
	          '\u0410\u0434\u0440\u0435\u0441 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.mapField },
	          _react2.default.createElement('input', {
	            value: this.state.currentAddress,
	            type: 'text', placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u0447\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435', readOnly: 'true'
	          }),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.map },
	            _react2.default.createElement(
	              _googleMapReact2.default,
	              {
	                onClick: this.handleMapClick.bind(this),
	                center: this.state.currentLocation,
	                zoom: 10,
	                bootstrapURLKeys: {
	                  key: "AIzaSyA1l_CX9YVk3O_qywJUaVT0RIiRK49AFQw",
	                  language: 'ru'
	                }
	              },
	              _react2.default.createElement(_Placemark2.default, {
	                type: 'shop',
	                lat: this.state.currentLocation.lat,
	                lng: this.state.currentLocation.lng
	              })
	            )
	          )
	        )
	      );
	    }

	    // Скрытые поля

	  }, {
	    key: 'renderHiddenValues',
	    value: function renderHiddenValues() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { type: 'hidden', readOnly: 'true', name: 'location.lat', value: this.state.currentLocation.lat.toFixed(6) }),
	        _react2.default.createElement('input', { type: 'hidden', readOnly: 'true', name: 'location.lon', value: this.state.currentLocation.lng.toFixed(6) })
	      );
	    }

	    // Загрузка фотографий

	  }, {
	    key: 'renderImagesForm',
	    value: function renderImagesForm() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.photos + ' ' + _style2.default.parameters },
	        _react2.default.createElement(
	          'label',
	          null,
	          '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.photoList },
	          this.state.photos.map(function (photo) {
	            return _this3.renderPhoto(photo);
	          }),
	          this.state.photos.length < 5 ? _react2.default.createElement(
	            'form',
	            { name: 'addPhoto' },
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.addPhoto },
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
	                _react2.default.createElement('br', null),
	                '\u0424\u043E\u0442\u043E'
	              ),
	              _react2.default.createElement('input', {
	                type: 'file', name: 'image',
	                onDragOver: this.handlePhotoDrag.bind(this),
	                onDrop: this.handlePhotoDrop.bind(this),
	                onChange: this.uploadPhoto.bind(this)
	              })
	            )
	          ) : ''
	        )
	      );
	    }
	  }, {
	    key: 'renderPhoto',
	    value: function renderPhoto(photo) {
	      return _react2.default.createElement(
	        'div',
	        { key: photo.id, className: _style2.default.photoItem },
	        _react2.default.createElement('img', { src: photo.image }),
	        _react2.default.createElement('span', { 'data-id': photo.id, onClick: this.deleteTempPhoto.bind(this), className: _style2.default.delPhoto })
	      );
	    }
	  }]);

	  return AddFormShop;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddFormShop);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    shop: state.shop
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    shopActions: (0, _redux.bindActionCreators)(ShopActions, dispatch)
	  };
	}

/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handlePhotoDrag = handlePhotoDrag;
	exports.handlePhotoDrop = handlePhotoDrop;
	exports.uploadPhoto = uploadPhoto;
	exports.addPhotoToPostForm = addPhotoToPostForm;
	exports.deleteTempPhoto = deleteTempPhoto;
	exports.handleMapClick = handleMapClick;
	exports.handleSubmitForm = handleSubmitForm;
	exports.handleUpdateData = handleUpdateData;
	exports.fillFormWithData = fillFormWithData;

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Отключение событий мыши при перетаскивании фотографии
	 */
	function handlePhotoDrag(e) {
	  e.preventDefault();
	}

	/**
	 * Сброс фотографий в область загрузки
	 */
	function handlePhotoDrop(e) {
	  e.preventDefault();
	  var files = e.dataTransfer.files;
	  var count = files.length;

	  for (var i = 0; i < count; i++) {
	    var fileFormData = new FormData();
	    fileFormData.append('image', files[i]);

	    var sendPhoto = uploadPhoto.bind(this, e, fileFormData, true);
	    sendPhoto();
	  }
	}

	/**
	 * Загрузка фотографии на сервер
	 *
	 * @param {object} e - event listener
	 * @param {object} fileFormData - formData с фотографиями из Drag'n'Drop
	 * @param {boolean} isDrop - способ загрузки фотографий
	 */
	function uploadPhoto(e, fileFormData, isDrop) {

	  var token = localStorage.getItem('clientToken');

	  if (token !== null) {

	    var xhr = new XMLHttpRequest();

	    var formData = isDrop ? fileFormData : new FormData(document.forms.addPhoto);

	    xhr.open('POST', API.Ads.images, false);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(formData);

	    if (xhr.status !== 201) {
	      console.warn('[APP]: XHR connection error in \'uploadPhoto\' method');
	      console.warn(xhr.statusText);
	    } else {
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	      this.addPhotoToPostForm(data);
	    }
	  } else {
	    console.groupEnd();
	    console.info('[APP] User not authorised');
	  }
	}

	/**
	 * Добавление загруженной фотографии в область просмотра
	 *
	 * @param {object} data - объект фотографии, возвращаемый сервером
	 */
	function addPhotoToPostForm(data) {
	  var imgObject = { id: data.id },
	      newPhotosIDs = this.state.photosIDs.concat(imgObject),
	      newPhotos = this.state.photos.concat(data);

	  this.setState({
	    photosIDs: newPhotosIDs,
	    photos: newPhotos
	  });
	}

	/**
	 * Удаление фотографии
	 */
	function deleteTempPhoto(e) {
	  var id = parseInt(e.target.dataset.id);

	  var newPhotos = this.state.photos.filter(function (photo) {
	    return photo.id !== id;
	  }),
	      newPhotosIDs = newPhotos.map(function (item) {
	    return { id: item.id };
	  });

	  this.setState({
	    photos: newPhotos,
	    photosIDs: newPhotosIDs
	  });
	}

	/**
	 * Клик по карте
	 *
	 * @coords {object} объект с координатами точки клика
	 */
	function handleMapClick(coords) {
	  var _this = this;

	  var lat = coords.lat,
	      lng = coords.lng;

	  getCoordInfo(lat, lng).then(function (data) {
	    _this.setState({
	      currentAddress: data.results[0].formatted_address,
	      currentLocation: { lat: lat, lng: lng }
	    }, function () {
	      console.log('[APP] Current location');
	      console.log(_this.state.currentLocation);
	    });
	  }, function (error) {
	    return console.warn(error);
	  });
	}

	/**
	 * Преобразование координат в адрес
	 *
	 * @param {float} lat - широта
	 * @param {float} lng - долгота
	 */
	function getCoordInfo(lat, lng) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.coordsToAddress(lat, lng), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject(xhr);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

	/**
	 * Сохранение нового магазина
	 */
	function handleSubmitForm(e) {
	  e.preventDefault();

	  var token = localStorage.getItem('clientToken');
	  this.props.shopActions.addItemAsync(token, this.state.photosIDs);
	}

	/**
	 * обновление груза
	 */
	function handleUpdateData(e) {
	  e.preventDefault();

	  var token = localStorage.getItem('clientToken'),
	      itemId = this.state.editId,
	      newData = new FormData(document.forms.newShop),
	      images = this.state.photosIDs;

	  images.forEach(function (image, i) {
	    newData.append('images', JSON.stringify(images[i]));
	  });

	  if (itemId && token) {
	    (0, _axios2.default)({
	      method: 'patch',
	      url: API.getAd('shop', itemId),
	      headers: {
	        'Authorization': 'Token ' + token
	      },
	      data: newData
	    }).then(function (response) {
	      console.log(response);
	    }).catch(function (error) {
	      return console.warn(error);
	    });
	  } else {
	    console.warn('[APP] Item id (' + itemId + ') is wrong');
	  }
	}

	/**
	 * Установка значений по умолчанию из переданного объекта
	 */
	function fillFormWithData(item) {
	  var _this2 = this;

	  /** Установка координат и адреса */
	  this.handleMapClick({
	    lat: parseFloat(item.location.lat),
	    lng: parseFloat(item.location.lon)
	  });

	  /** Установка фотографий */
	  item.images.forEach(function (photo) {
	    _this2.addPhotoToPostForm(photo);
	  });

	  /** Установка состояния */
	  var select = document.querySelector('#shopState'),
	      options = [].slice.call(select.options);

	  options.forEach(function (option) {
	    if (option.value === item.state) select.value = item.state;
	  });

	  /** Установка параметров */
	  var descriptionInput = document.querySelector('#shopDescription');
	  descriptionInput.value = item.description;

	  var titleInput = document.querySelector('#shopTitle');
	  titleInput.value = item.name;
	}

/***/ },
/* 532 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"addForm":"addForm_lXrL","parameters":"parameters_qwfj","linegroup":"linegroup_265a","container":"container_2uO4","photos":"photos_mCFy","photoList":"photoList_5ASI","photoItem":"photoItem_5ZQT","delPhoto":"delPhoto_3K8-","addPhoto":"addPhoto_1IDg","mapField":"mapField_2BkD"};

/***/ },
/* 533 */,
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _googleMapReact = __webpack_require__(488);

	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	var _CargoActions = __webpack_require__(328);

	var CargoActions = _interopRequireWildcard(_CargoActions);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _Placemark = __webpack_require__(511);

	var _Placemark2 = _interopRequireDefault(_Placemark);

	var _CargoMethods = __webpack_require__(535);

	var methods = _interopRequireWildcard(_CargoMethods);

	var _style = __webpack_require__(532);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Action imports


	// Components


	// Comp's methods import


	// Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var AddFormCargo = function (_React$Component) {
	  _inherits(AddFormCargo, _React$Component);

	  function AddFormCargo(props) {
	    _classCallCheck(this, AddFormCargo);

	    var _this = _possibleConstructorReturn(this, (AddFormCargo.__proto__ || Object.getPrototypeOf(AddFormCargo)).call(this, props));

	    _this.state = {
	      editId: null,

	      photos: [],
	      photosIDs: [],

	      currentAddress: '',
	      currentLocation: { lat: 42, lng: 42 }
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(AddFormCargo, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      if (this.props.edit) {
	        console.log(this.props.edit, this.props.adID);

	        this.setState({
	          editId: this.props.adID
	        });

	        _axios2.default.get(API.getAd('cargo', this.props.adID)).then(function (response) {
	          _this2.fillFormWithData(response.data);
	        }).catch(function (error) {
	          return console.warn(error);
	        });
	      }

	      var location = {
	        lat: parseFloat(localStorage.getItem('clientLat')),
	        lng: parseFloat(localStorage.getItem('clientLon'))
	      };

	      this.setState({
	        currentLocation: location
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handler = this.props.edit ? this.handleUpdateData.bind(this) : this.handleSubmitForm.bind(this);

	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.addForm },
	        this.renderCargoForm(),
	        this.renderImagesForm(),
	        _react2.default.createElement(
	          'button',
	          { onClick: handler },
	          '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
	        )
	      );
	    }

	    // Форма заполенения данных груза

	  }, {
	    key: 'renderCargoForm',
	    value: function renderCargoForm() {
	      return _react2.default.createElement(
	        'form',
	        { name: 'newCargo' },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.container },
	          _react2.default.createElement(
	            'div',
	            null,
	            this.renderParameters(),
	            this.renderHiddenValues()
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.addressSelect },
	            this.renderAddressSelect()
	          )
	        )
	      );
	    }

	    // Простые параметры

	  }, {
	    key: 'renderParameters',
	    value: function renderParameters() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
	          ),
	          _react2.default.createElement('input', { id: 'cargoTitle', type: 'text', name: 'name', placeholder: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
	          ),
	          _react2.default.createElement('textarea', { id: 'cargoDescription', type: 'text', name: 'description', placeholder: '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u0412\u0435\u0441 (\u043A\u0433)'
	          ),
	          _react2.default.createElement('input', { id: 'cargoWeight', type: 'text', name: 'weight', placeholder: '\u0412\u0435\u0441 \u0433\u0440\u0443\u0437\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u0426\u0435\u043D\u0430 \u0440\u0443\u0431.\u0447\u0430\u0441'
	          ),
	          _react2.default.createElement('input', { id: 'cargoPrice', type: 'text', name: 'price', placeholder: '\u0446\u0435\u043D\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430'
	          ),
	          _react2.default.createElement(
	            'select',
	            { id: 'cargoState', name: 'state' },
	            _react2.default.createElement(
	              'option',
	              { value: 'state_1' },
	              '\u0425\u0440\u0443\u043F\u043A\u0438\u0439 \u0433\u0440\u0443\u0437'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'state_2' },
	              '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 2'
	            )
	          )
	        )
	      );
	    }

	    // Карта и выбор адреса

	  }, {
	    key: 'renderAddressSelect',
	    value: function renderAddressSelect() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.parameters },
	        _react2.default.createElement(
	          'label',
	          null,
	          '\u0410\u0434\u0440\u0435\u0441 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.mapField },
	          _react2.default.createElement('input', {
	            value: this.state.currentAddress,
	            type: 'text', placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u0447\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435', readOnly: 'true'
	          }),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.map },
	            _react2.default.createElement(
	              _googleMapReact2.default,
	              {
	                onClick: this.handleMapClick.bind(this),
	                center: this.state.currentLocation,
	                zoom: 10,
	                bootstrapURLKeys: {
	                  key: "AIzaSyA1l_CX9YVk3O_qywJUaVT0RIiRK49AFQw",
	                  language: 'ru'
	                } },
	              _react2.default.createElement(_Placemark2.default, {
	                type: 'cargo',
	                lat: this.state.currentLocation.lat,
	                lng: this.state.currentLocation.lng
	              })
	            )
	          )
	        )
	      );
	    }

	    // Скрытые поля

	  }, {
	    key: 'renderHiddenValues',
	    value: function renderHiddenValues() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { type: 'hidden', readOnly: 'true', name: 'location.lat', value: this.state.currentLocation.lat.toFixed(6) }),
	        _react2.default.createElement('input', { type: 'hidden', readOnly: 'true', name: 'location.lon', value: this.state.currentLocation.lng.toFixed(6) })
	      );
	    }

	    // Загрузка фотографий

	  }, {
	    key: 'renderImagesForm',
	    value: function renderImagesForm() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.photos + ' ' + _style2.default.parameters },
	        _react2.default.createElement(
	          'label',
	          null,
	          '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.photoList },
	          this.state.photos.map(function (photo) {
	            return _this3.renderPhoto(photo);
	          }),
	          this.state.photos.length < 5 ? _react2.default.createElement(
	            'form',
	            { name: 'addPhoto' },
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.addPhoto },
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
	                _react2.default.createElement('br', null),
	                '\u0424\u043E\u0442\u043E'
	              ),
	              _react2.default.createElement('input', {
	                type: 'file', name: 'image',
	                onDragOver: this.handlePhotoDrag.bind(this),
	                onDrop: this.handlePhotoDrop.bind(this),
	                onChange: this.uploadPhoto.bind(this)
	              })
	            )
	          ) : ''
	        )
	      );
	    }
	  }, {
	    key: 'renderPhoto',
	    value: function renderPhoto(photo) {
	      return _react2.default.createElement(
	        'div',
	        { key: photo.id, className: _style2.default.photoItem },
	        _react2.default.createElement('img', { src: photo.image }),
	        _react2.default.createElement('span', { 'data-id': photo.id, onClick: this.deleteTempPhoto.bind(this), className: _style2.default.delPhoto })
	      );
	    }
	  }]);

	  return AddFormCargo;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddFormCargo);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    cargo: state.cargo
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    cargoActions: (0, _redux.bindActionCreators)(CargoActions, dispatch)
	  };
	}

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handlePhotoDrag = handlePhotoDrag;
	exports.handlePhotoDrop = handlePhotoDrop;
	exports.uploadPhoto = uploadPhoto;
	exports.addPhotoToPostForm = addPhotoToPostForm;
	exports.deleteTempPhoto = deleteTempPhoto;
	exports.handleMapClick = handleMapClick;
	exports.handleSubmitForm = handleSubmitForm;
	exports.handleUpdateData = handleUpdateData;
	exports.fillFormWithData = fillFormWithData;

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Отключение событий мыши при перетаскивании фотографии
	 */
	function handlePhotoDrag(e) {
	  e.preventDefault();
	}

	/**
	 * Сброс фотографий в область загрузки
	 */
	function handlePhotoDrop(e) {
	  e.preventDefault();
	  var files = e.dataTransfer.files;
	  var count = files.length;

	  for (var i = 0; i < count; i++) {
	    var fileFormData = new FormData();
	    fileFormData.append('image', files[i]);

	    var sendPhoto = uploadPhoto.bind(this, e, fileFormData, true);
	    sendPhoto();
	  }
	}

	/**
	 * Загрузка фотографии на сервер
	 *
	 * @param {object} e - event listener
	 * @param {object} fileFormData - formData с фотографиями из Drag'n'Drop
	 * @param {boolean} isDrop - способ загрузки фотографий
	 */
	function uploadPhoto(e, fileFormData, isDrop) {

	  var token = localStorage.getItem('clientToken');

	  if (token !== null) {

	    var xhr = new XMLHttpRequest();

	    var formData = isDrop ? fileFormData : new FormData(document.forms.addPhoto);

	    xhr.open('POST', API.Ads.images, false);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(formData);

	    if (xhr.status !== 201) {
	      console.warn('[APP]: XHR connection error in \'uploadPhoto\' method');
	      console.warn(xhr.statusText);
	    } else {
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	      this.addPhotoToPostForm(data);
	    }
	  } else {
	    console.info('[APP] User not authorised');
	  }
	}

	/**
	 * Добавление загруженной фотографии в облатсь просмотра
	 *
	 * @param {object} data - объект фотографии, возвращаемый сервером
	 */
	function addPhotoToPostForm(data) {
	  var imgObject = { id: data.id },
	      newPhotosIDs = this.state.photosIDs.concat(imgObject),
	      newPhotos = this.state.photos.concat(data);

	  this.setState({
	    photosIDs: newPhotosIDs,
	    photos: newPhotos
	  });
	}

	/**
	 * Удаление фотографии
	 */
	function deleteTempPhoto(e) {
	  var id = parseInt(e.target.dataset.id);

	  var newPhotos = this.state.photos.filter(function (photo) {
	    return photo.id !== id;
	  }),
	      newPhotosIDs = newPhotos.map(function (item) {
	    return { id: item.id };
	  });

	  this.setState({
	    photos: newPhotos,
	    photosIDs: newPhotosIDs
	  });
	}

	/**
	 * Клик по карте
	 *
	 * @coords {object} объект с координатами точки клика
	 */
	function handleMapClick(coords) {
	  var _this = this;

	  var lat = coords.lat,
	      lng = coords.lng;

	  getCoordInfo(lat, lng).then(function (data) {
	    _this.setState({
	      currentAddress: data.results[0].formatted_address,
	      currentLocation: { lat: lat, lng: lng }
	    }, function () {
	      console.log('[APP] Current location');
	      console.log(_this.state.currentLocation);
	    });
	  }, function (error) {
	    return console.warn(error);
	  });
	}

	/**
	 * Преобразование координат в адрес
	 *
	 * @param {float} lat - широта
	 * @param {float} lng - долгота
	 */
	function getCoordInfo(lat, lng) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.coordsToAddress(lat, lng), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject(xhr);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

	/**
	 * Сохранение нового груза
	 */
	function handleSubmitForm(e) {
	  e.preventDefault();

	  var token = localStorage.getItem('clientToken');
	  this.props.cargoActions.addItemAsync(token, this.state.photosIDs);
	}

	/**
	 * обновление груза
	 */
	function handleUpdateData(e) {
	  e.preventDefault();

	  var token = localStorage.getItem('clientToken'),
	      itemId = this.state.editId,
	      newData = new FormData(document.forms.newCargo),
	      images = this.state.photosIDs;

	  images.forEach(function (image, i) {
	    newData.append('images', JSON.stringify(images[i]));
	  });

	  if (itemId && token) {
	    (0, _axios2.default)({
	      method: 'patch',
	      url: API.getAd('cargo', itemId),
	      headers: {
	        'Authorization': 'Token ' + token
	      },
	      data: newData
	    }).then(function (response) {
	      console.log(response);
	    }).catch(function (error) {
	      return console.warn(error);
	    });
	  } else {
	    console.warn('[APP] Item id (' + itemId + ') is wrong');
	  }
	}

	/**
	 * Установка значений по умолчанию из переданного объекта
	 */
	function fillFormWithData(item) {
	  var _this2 = this;

	  /** Установка координат и адреса */
	  this.handleMapClick({
	    lat: parseFloat(item.location.lat),
	    lng: parseFloat(item.location.lon)
	  });

	  /** Установка фотографий */
	  item.images.forEach(function (photo) {
	    _this2.addPhotoToPostForm(photo);
	  });

	  /** Установка состояния */
	  var select = document.querySelector('#cargoState'),
	      options = [].slice.call(select.options);

	  options.forEach(function (option) {
	    if (option.value === item.state) select.value = item.state;
	  });

	  /** Установка параметров */
	  var priceInput = document.querySelector('#cargoPrice');
	  priceInput.value = item.price;

	  var weightInput = document.querySelector('#cargoWeight');
	  weightInput.value = item.weight;

	  var descriptionInput = document.querySelector('#cargoDescription');
	  descriptionInput.value = item.description;

	  var titleInput = document.querySelector('#cargoTitle');
	  titleInput.value = item.name;
	}

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _googleMapReact = __webpack_require__(488);

	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	var _TransportActions = __webpack_require__(323);

	var TransportActions = _interopRequireWildcard(_TransportActions);

	var _UserActions = __webpack_require__(279);

	var UserActions = _interopRequireWildcard(_UserActions);

	var _Placemark = __webpack_require__(511);

	var _Placemark2 = _interopRequireDefault(_Placemark);

	var _TransportMethods = __webpack_require__(537);

	var methods = _interopRequireWildcard(_TransportMethods);

	var _style = __webpack_require__(532);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Action imports


	// Components


	// Comp's methods import


	// Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var AddFormTransport = function (_React$Component) {
	  _inherits(AddFormTransport, _React$Component);

	  function AddFormTransport(props) {
	    _classCallCheck(this, AddFormTransport);

	    var _this = _possibleConstructorReturn(this, (AddFormTransport.__proto__ || Object.getPrototypeOf(AddFormTransport)).call(this, props));

	    _this.state = {
	      editId: null,

	      currentCategory: '',
	      currentBrands: [],
	      currentModels: [],

	      photos: [],
	      photosIDs: [],
	      model: {},

	      currentAddress: '',
	      currentLocation: { lat: 42, lng: 42 }
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(AddFormTransport, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      if (this.props.edit) {
	        console.log(this.props.edit, this.props.adID);

	        this.setState({
	          editId: this.props.adID
	        });

	        _axios2.default.get(API.getAd('transport', this.props.adID)).then(function (response) {
	          _this2.fillFormWithData(response.data);
	        }).catch(function (error) {
	          return console.warn(error);
	        });
	      }

	      var location = {
	        lat: parseFloat(localStorage.getItem('clientLat')),
	        lng: parseFloat(localStorage.getItem('clientLon'))
	      };

	      this.setState({
	        currentLocation: location
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.transportActions.setTypesAsync();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handler = this.props.edit ? this.handleUpdateData.bind(this) : this.handleSubmitForm.bind(this);

	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.addForm },
	        this.renderTransportForm(),
	        this.renderImagesForm(),
	        _react2.default.createElement(
	          'button',
	          { onClick: handler },
	          '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
	        )
	      );
	    }

	    // Форма заполенения данных транспорта

	  }, {
	    key: 'renderTransportForm',
	    value: function renderTransportForm() {
	      return _react2.default.createElement(
	        'form',
	        { name: 'newTransport' },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.container },
	          _react2.default.createElement(
	            'div',
	            null,
	            this.props.transport.fetchingTypes === 'ready' ? this.renderTypeSelect() : 'Loading',
	            this.renderParameters(),
	            this.renderHiddenValues()
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.addressSelect },
	            this.renderAddressSelect()
	          )
	        )
	      );
	    }

	    // Простые параметры

	  }, {
	    key: 'renderParameters',
	    value: function renderParameters() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u0426\u0435\u043D\u0430 \u0440\u0443\u0431.\u0447\u0430\u0441'
	          ),
	          _react2.default.createElement('input', { id: 'transportPrice', type: 'text', name: 'price', placeholder: '\u0446\u0435\u043D\u0430' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.parameters },
	          _react2.default.createElement(
	            'label',
	            null,
	            '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430'
	          ),
	          _react2.default.createElement(
	            'select',
	            { id: 'transportState', name: 'state' },
	            _react2.default.createElement(
	              'option',
	              { value: 'state_1' },
	              '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 1'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'state_2' },
	              '\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 2'
	            )
	          )
	        )
	      );
	    }

	    // Карта и выбор адреса

	  }, {
	    key: 'renderAddressSelect',
	    value: function renderAddressSelect() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.parameters },
	        _react2.default.createElement(
	          'label',
	          null,
	          '\u0410\u0434\u0440\u0435\u0441 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.mapField },
	          _react2.default.createElement('input', {
	            value: this.state.currentAddress,
	            type: 'text', placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u0447\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435', readOnly: 'true'
	          }),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.map },
	            _react2.default.createElement(
	              _googleMapReact2.default,
	              {
	                onClick: this.handleMapClick.bind(this),
	                center: this.state.currentLocation,
	                zoom: 10,
	                bootstrapURLKeys: {
	                  key: "AIzaSyA1l_CX9YVk3O_qywJUaVT0RIiRK49AFQw",
	                  language: 'ru'
	                } },
	              _react2.default.createElement(_Placemark2.default, {
	                type: 'transport',
	                lat: this.state.currentLocation.lat,
	                lng: this.state.currentLocation.lng
	              })
	            )
	          )
	        )
	      );
	    }

	    // Скрытые поля

	  }, {
	    key: 'renderHiddenValues',
	    value: function renderHiddenValues() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { type: 'hidden', readOnly: 'true', name: 'model', value: JSON.stringify(this.state.model) }),
	        _react2.default.createElement('input', { type: 'hidden', readOnly: 'true', name: 'location.lat', value: this.state.currentLocation.lat.toFixed(6) }),
	        _react2.default.createElement('input', { type: 'hidden', readOnly: 'true', name: 'location.lon', value: this.state.currentLocation.lng.toFixed(6) })
	      );
	    }

	    // Выбор модели

	  }, {
	    key: 'renderTypeSelect',
	    value: function renderTypeSelect() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.parameters },
	        _react2.default.createElement(
	          'label',
	          null,
	          '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.linegroup },
	          _react2.default.createElement(
	            'select',
	            { onChange: this.handleCategoryChange.bind(this), name: 'categorytemp' },
	            this.props.transport.fetchingTypes === 'ready' ? this.props.transport.params.categories.map(function (item) {
	              return _react2.default.createElement(
	                'option',
	                { key: item.name + '_' + item.id, defaultValue: item.name },
	                item.name
	              );
	            }) : ''
	          ),
	          this.state.currentBrands.length || this.props.edit ? _react2.default.createElement(
	            'select',
	            { onChange: this.handleBrandChange.bind(this), name: 'brandtemp' },
	            this.state.currentBrands.map(function (item) {
	              return _react2.default.createElement(
	                'option',
	                { key: item.name + '_' + item.id, defaultValue: item.name },
	                item.name
	              );
	            })
	          ) : '',
	          this.state.currentModels.length || this.props.edit ? _react2.default.createElement(
	            'select',
	            { onChange: this.handleModelChange.bind(this), name: 'modeltemp' },
	            this.state.currentModels.map(function (item) {
	              return _react2.default.createElement(
	                'option',
	                { key: item.name + '_' + item.id, defaultValue: item.name },
	                item.name
	              );
	            })
	          ) : ''
	        )
	      );
	    }

	    // Загрузка фотографий

	  }, {
	    key: 'renderImagesForm',
	    value: function renderImagesForm() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.photos + ' ' + _style2.default.parameters },
	        _react2.default.createElement(
	          'label',
	          null,
	          '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.photoList },
	          this.state.photos.map(function (photo) {
	            return _this3.renderPhoto(photo);
	          }),
	          this.state.photos.length < 5 ? _react2.default.createElement(
	            'form',
	            { name: 'addPhoto' },
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.addPhoto },
	              _react2.default.createElement(
	                'span',
	                null,
	                '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
	                _react2.default.createElement('br', null),
	                '\u0424\u043E\u0442\u043E'
	              ),
	              _react2.default.createElement('input', {
	                type: 'file', name: 'image',
	                onDragOver: this.handlePhotoDrag.bind(this),
	                onDrop: this.handlePhotoDrop.bind(this),
	                onChange: this.uploadPhoto.bind(this)
	              })
	            )
	          ) : ''
	        )
	      );
	    }
	  }, {
	    key: 'renderPhoto',
	    value: function renderPhoto(photo) {
	      return _react2.default.createElement(
	        'div',
	        { key: photo.id, className: _style2.default.photoItem },
	        _react2.default.createElement('img', { src: photo.image }),
	        _react2.default.createElement('span', { 'data-id': photo.id, onClick: this.deleteTempPhoto.bind(this), className: _style2.default.delPhoto })
	      );
	    }
	  }]);

	  return AddFormTransport;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddFormTransport);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    user: state.user,
	    transport: state.transport
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    userActions: (0, _redux.bindActionCreators)(UserActions, dispatch),
	    transportActions: (0, _redux.bindActionCreators)(TransportActions, dispatch)
	  };
	}

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleCategoryChange = handleCategoryChange;
	exports.handleBrandChange = handleBrandChange;
	exports.handleModelChange = handleModelChange;
	exports.handlePhotoDrag = handlePhotoDrag;
	exports.handlePhotoDrop = handlePhotoDrop;
	exports.handleSubmitForm = handleSubmitForm;
	exports.handleUpdateData = handleUpdateData;
	exports.handleMapClick = handleMapClick;
	exports.recountParams = recountParams;
	exports.addPhotoToPostForm = addPhotoToPostForm;
	exports.uploadPhoto = uploadPhoto;
	exports.deleteTempPhoto = deleteTempPhoto;
	exports.fillFormWithData = fillFormWithData;

	var _API = __webpack_require__(281);

	var API = _interopRequireWildcard(_API);

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/** Действия пользователя
	 *
	 * Смена категории транспорта
	 */
	function handleCategoryChange(e) {
	  var categoryNames = this.props.transport.params.categories.map(function (item) {
	    return item.name;
	  });
	  var category = this.props.transport.params.categories[categoryNames.indexOf(e.target.value)];

	  this.recountParams(category);
	}

	/**
	 * Смена бренда транспорта
	 */
	function handleBrandChange(e) {
	  var models = this.props.transport.params.models.filter(function (item) {
	    return item.brand === e.target.value;
	  });

	  this.setState({
	    currentModels: models,
	    model: models[0] || null
	  });
	}

	/**
	 * Смена модели транспорта
	 */
	function handleModelChange(e) {
	  var currentModel = this.state.currentModels.filter(function (item) {
	    return item.name === e.target.value;
	  });

	  this.setState({
	    model: currentModel[0]
	  });

	  console.log(JSON.stringify(currentModel));
	}

	/**
	 * Отключение событий мыши при перетаскивании транспорта
	 */
	function handlePhotoDrag(e) {
	  e.preventDefault();
	}

	/**
	 * Сброс фотографий в область загрузки
	 */
	function handlePhotoDrop(e) {
	  e.preventDefault();
	  var files = e.dataTransfer.files;
	  var count = files.length;

	  for (var i = 0; i < count; i++) {
	    var fileFormData = new FormData();
	    fileFormData.append('image', files[i]);

	    var sendPhoto = uploadPhoto.bind(this, e, fileFormData, true);
	    sendPhoto();
	  }
	}

	/**
	 * Сохранение нового транспорта
	 */
	function handleSubmitForm(e) {
	  e.preventDefault();

	  var token = localStorage.getItem('clientToken');
	  this.props.transportActions.addItemAsync(token, this.state.photosIDs);
	}

	/**
	 * обновление транспорта
	 */
	function handleUpdateData(e) {
	  e.preventDefault();

	  var token = localStorage.getItem('clientToken'),
	      itemId = this.state.editId,
	      newData = new FormData(document.forms.newTransport),
	      images = this.state.photosIDs;

	  images.forEach(function (image, i) {
	    newData.append('images', JSON.stringify(images[i]));
	  });

	  if (itemId && token) {
	    (0, _axios2.default)({
	      method: 'patch',
	      url: API.getTransport(itemId),
	      headers: {
	        'Authorization': 'Token ' + token
	      },
	      data: newData
	    }).then(function (response) {
	      console.log(response);
	    }).catch(function (error) {
	      return console.warn(error);
	    });
	  } else {
	    console.warn('[APP] Item id (' + itemId + ') is wrong');
	  }
	}

	/**
	 * Клик по карте
	 *
	 * @coords {object} объект с координатами точки клика
	 */
	function handleMapClick(coords) {
	  var _this = this;

	  var lat = coords.lat,
	      lng = coords.lng;

	  getCoordInfo(lat, lng).then(function (data) {
	    _this.setState({
	      currentAddress: data.results[0].formatted_address,
	      currentLocation: { lat: lat, lng: lng }
	    });
	  }, function (error) {
	    return console.warn(error);
	  });
	}

	/**
	 * Преобразование координат в адрес
	 *
	 * @param {float} lat - широта
	 * @param {float} lng - долгота
	 */
	function getCoordInfo(lat, lng) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', API.coordsToAddress(lat, lng), true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status !== 200) {
	        reject(xhr);
	      } else {
	        resolve(JSON.parse(xhr.responseText));
	      }
	    };
	  });
	}

	/**
	 * Перерассчет параметров модели при выборе категории
	 *
	 * @param {object} category - название категории
	 */
	function recountParams(category) {
	  var brands = void 0,
	      brandNames = void 0,
	      models = void 0;

	  brands = this.props.transport.params.brands.filter(function (item) {
	    return item.category.includes(category.id);
	  });

	  brandNames = brands.map(function (item) {
	    return item.name;
	  });

	  models = this.props.transport.params.models.filter(function (item) {
	    return brandNames.includes(item.brand);
	  });

	  this.setState({
	    currentCategory: category,
	    currentBrands: brands,
	    currentModels: models,

	    model: models[0] || null
	  });
	}

	/**
	 * Добавление загруженной фотографии в облатсь просмотра
	 *
	 * @param {object} data - объект фотографии, возвращаемый сервером
	 */
	function addPhotoToPostForm(data) {

	  var imgObject = { id: data.id },
	      newPhotosIDs = this.state.photosIDs.concat(imgObject),
	      newPhotos = this.state.photos.concat(data);

	  this.setState({
	    photosIDs: newPhotosIDs,
	    photos: newPhotos
	  });
	}

	/**
	 * Загрузка фотографии на сервер
	 *
	 * @param {object}  e            - event listener
	 * @param {object}  fileFormData - formData с фотографиями из Drag'n'Drop
	 * @param {boolean} isDrop       - способ загрузки фотографий
	 */
	function uploadPhoto(e, fileFormData, isDrop) {

	  var token = localStorage.getItem('clientToken');

	  if (token !== null) {

	    var xhr = new XMLHttpRequest();

	    var formData = isDrop ? fileFormData : new FormData(document.forms.addPhoto);

	    xhr.open('POST', API.Ads.images(), false);
	    xhr.setRequestHeader('Authorization', 'Token ' + token);
	    xhr.send(formData);

	    if (xhr.status !== 201) {
	      console.warn('[APP]: XHR connection error in \'uploadPhoto\' method');
	      console.warn(xhr.statusText);
	    } else {
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	      this.addPhotoToPostForm(data);
	    }
	  } else {
	    console.groupEnd();
	    console.info('[APP] User not authorised');
	  }
	}

	/**
	 * Удаление фотографии
	 */
	function deleteTempPhoto(e) {
	  var id = parseInt(e.target.dataset.id);

	  var newPhotos = this.state.photos.filter(function (photo) {
	    return photo.id !== id;
	  }),
	      newPhotosIDs = newPhotos.map(function (item) {
	    return { id: item.id };
	  });

	  this.setState({
	    photos: newPhotos,
	    photosIDs: newPhotosIDs
	  });
	}

	/**
	 * Установка значений по умолчанию из переданного объекта
	 */
	function fillFormWithData(item) {
	  var _this2 = this;

	  /** Установка координат и адреса */
	  this.handleMapClick({
	    lat: parseFloat(item.location.lat),
	    lng: parseFloat(item.location.lon)
	  });

	  /** Установка фотографий */
	  item.images.forEach(function (photo) {
	    _this2.addPhotoToPostForm(photo);
	  });

	  /** Установка состояния */
	  var select = document.querySelector('#transportState'),
	      options = [].slice.call(select.options);

	  options.forEach(function (option) {
	    if (option.value === item.state) select.value = item.state;
	  });

	  /** Установка параметров */
	  var priceInput = document.querySelector('#transportPrice');
	  priceInput.value = item.price;

	  /** Установка модели (параметр) */
	  this.setState({
	    model: JSON.stringify(item.model)
	  });

	  /** Установка модели (отображение)*/
	  this.handleCategoryChange({ target: { value: item.model.category } });
	  this.handleBrandChange({ target: { value: item.model.brand } });
	  this.handleModelChange({ target: { value: item.model.name } });
	}

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Headline = __webpack_require__(293);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _Order = __webpack_require__(539);

	var _Order2 = _interopRequireDefault(_Order);

	var _style = __webpack_require__(540);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Components import


	// Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var View = function (_React$Component) {
	  _inherits(View, _React$Component);

	  function View(props) {
	    _classCallCheck(this, View);

	    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));
	  }

	  _createClass(View, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        _react2.default.createElement(_Headline2.default, { back: true }),
	        _react2.default.createElement(
	          'section',
	          { className: _style2.default.view },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.info },
	            this.props.info
	          )
	        )
	      );
	    }
	  }]);

	  return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Order = function (_React$Component) {
	  _inherits(Order, _React$Component);

	  function Order(props) {
	    _classCallCheck(this, Order);

	    return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, props));
	  }

	  _createClass(Order, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        '\u0424\u043E\u0440\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430'
	      );
	    }
	  }]);

	  return Order;
	}(_react2.default.Component);

	exports.default = Order;

/***/ },
/* 540 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container_3bgG","view":"view_3QsF","info":"info_KPLI","side":"side_3Iqu"};

/***/ },
/* 541 */,
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _Shop = __webpack_require__(530);

	var _Shop2 = _interopRequireDefault(_Shop);

	var _BookmarksActions = __webpack_require__(522);

	var BookmarksActions = _interopRequireWildcard(_BookmarksActions);

	var _style = __webpack_require__(543);

	var _style2 = _interopRequireDefault(_style);

	var _methods = __webpack_require__(545);

	var methods = _interopRequireWildcard(_methods);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Components import


	// Action imports


	//Styles import


	//----------------------------------------------------------------------------

	// Define class
	var ViewShop = function (_React$Component) {
	  _inherits(ViewShop, _React$Component);

	  function ViewShop(props) {
	    _classCallCheck(this, ViewShop);

	    var _this = _possibleConstructorReturn(this, (ViewShop.__proto__ || Object.getPrototypeOf(ViewShop)).call(this, props));

	    _this.state = {
	      inBookmarks: false,
	      item: {},
	      owner: {}
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(ViewShop, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.checkBookmark('shop', parseInt(this.props.params.id));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setCurrentItem('shop', this.props.params.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        this.props.params.edit !== 'edit' ? this.renderShopInfo() : this.renderShopEdit()
	      );
	    }

	    //-------

	  }, {
	    key: 'renderShopInfo',
	    value: function renderShopInfo() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.view },
	        _react2.default.createElement(
	          'span',
	          null,
	          '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 ' + this.props.params.id
	        ),
	        this.renderBookmarkButton()
	      );
	    }
	  }, {
	    key: 'renderBookmarkButton',
	    value: function renderBookmarkButton() {
	      return _react2.default.createElement(
	        'div',
	        { onClick: this.handleBookmarkClick.bind(this), className: _style2.default.bookmarkButton + ' ' + (this.state.inBookmarks ? _style2.default.inBookmarks : '') },
	        this.state.loading ? 'Loading...' : this.state.inBookmarks ? 'Удалить из закладок' : 'Добавить в закладки'
	      );
	    }
	  }, {
	    key: 'renderShopEdit',
	    value: function renderShopEdit() {
	      return _react2.default.createElement(_Shop2.default, { edit: this.props.params.edit, adID: this.props.params.id });
	    }
	  }]);

	  return ViewShop;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ViewShop);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    bookmarks: state.bookmarks
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    bmActions: (0, _redux.bindActionCreators)(BookmarksActions, dispatch)
	  };
	}

/***/ },
/* 543 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container_3ayT","layout":"layout_10O6","info":"info_3GOp","photo":"photo_2g-2","bookmarkButton":"bookmarkButton_3ULB","inBookmark":"inBookmark_C9GS","owner":"owner_1BOl"};

/***/ },
/* 544 */,
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleBookmarkClick = handleBookmarkClick;
	exports.checkBookmark = checkBookmark;
	exports.setCurrentItem = setCurrentItem;
	exports.setCurrentOwner = setCurrentOwner;

	var _axios = __webpack_require__(298);

	var _axios2 = _interopRequireDefault(_axios);

	var _API = __webpack_require__(281);

	var Api = _interopRequireWildcard(_API);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Клик по кнопке "добавить в закладки"
	 * */
	function handleBookmarkClick(e) {
	  e.preventDefault();

	  var type = e.target.dataset.type;

	  var adId = parseInt(this.props.params.id),
	      bookmarks = void 0,
	      bookmark = void 0;

	  /** Получение списка текущих закладок по типу */
	  switch (type) {
	    case 'transport':
	      bookmarks = this.props.bookmarks.transportItems;
	      break;

	    case 'cargo':
	      bookmarks = this.props.bookmarks.cargoItems;
	      break;

	    case 'shop':
	      bookmarks = this.props.bookmarks.shopItems;
	      break;

	    default:
	      bookmarks = this.props.bookmarks.transportItems;
	  }

	  /** Получение объекта закладки */
	  bookmark = bookmarks.filter(function (item) {
	    return item.ad.id === adId;
	  });

	  /** Удаление закладки */
	  if (this.state.inBookmarks) {
	    this.props.bmActions.removeBookmarkAsync(type, bookmark[0].id, bookmarks);
	  }

	  /** Создание закладки */
	  else {
	      this.props.bmActions.addBookmarkAsync(type, this.props.params.id, bookmarks);
	    }

	  this.setState({
	    inBookmarks: !this.state.inBookmarks
	  });
	}

	/**
	 Проверка наличия объявления в закладках пользователя

	 @param {string} type - тип объявления
	 @param {number} id   - id объявления
	 */
	function checkBookmark(type, id) {
	  var items = void 0;

	  switch (type) {
	    case 'transport':
	      items = this.props.bookmarks.transportItems;break;
	    case 'cargo':
	      items = this.props.bookmarks.cargoItems;break;
	    case 'shop':
	      items = this.props.bookmarks.shopItems;break;
	    default:
	      items = this.props.bookmarks.transportItems;break;
	  }

	  var bm = items.filter(function (bmk) {
	    return bmk.ad.id === id;
	  });

	  this.setState({
	    inBookmarks: bm.length === 1
	  });
	}

	/**
	 Полуечние объекта просматриваемого объявления

	 @param {string} type - тип объявления
	 @param {number} id   - id объявления
	 */
	function setCurrentItem(type, id) {
	  var _this = this;

	  _axios2.default.get(Api.getAd(type, id)).then(function (response) {
	    _this.setState({ item: response.data }, function () {
	      _this.setCurrentOwner(_this.state.item.owner);
	    });
	  }).catch(function (error) {
	    return console.warn(error);
	  });
	}

	/**
	 Получение объекта владельца просматриваемого объявления

	 @param {number} id - id владельца
	 */
	function setCurrentOwner(id) {
	  var _this2 = this;

	  _axios2.default.get(Api.getUserInfo(id)).then(function (response) {
	    return _this2.setState({ owner: response.data });
	  }).catch(function (error) {
	    return console.warn(error);
	  });
	}

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _Cargo = __webpack_require__(534);

	var _Cargo2 = _interopRequireDefault(_Cargo);

	var _BookmarksActions = __webpack_require__(522);

	var BookmarksActions = _interopRequireWildcard(_BookmarksActions);

	var _style = __webpack_require__(543);

	var _style2 = _interopRequireDefault(_style);

	var _methods = __webpack_require__(545);

	var methods = _interopRequireWildcard(_methods);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Components import


	// Action imports


	//Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var ViewTransport = function (_React$Component) {
	  _inherits(ViewTransport, _React$Component);

	  function ViewTransport(props) {
	    _classCallCheck(this, ViewTransport);

	    var _this = _possibleConstructorReturn(this, (ViewTransport.__proto__ || Object.getPrototypeOf(ViewTransport)).call(this, props));

	    _this.state = {
	      inBookmarks: false,
	      item: {},
	      owner: {}
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(ViewTransport, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.checkBookmark('cargo', parseInt(this.props.params.id));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setCurrentItem('cargo', this.props.params.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        this.props.params.edit !== 'edit' ? this.renderCargoInfo() : this.renderCargoEdit()
	      );
	    }

	    //---------------------------

	  }, {
	    key: 'renderCargoInfo',
	    value: function renderCargoInfo() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.view },
	        _react2.default.createElement(
	          'span',
	          null,
	          '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0433\u0440\u0443\u0437\u0430 ' + this.props.params.id
	        ),
	        this.renderBookmarkButton()
	      );
	    }
	  }, {
	    key: 'renderBookmarkButton',
	    value: function renderBookmarkButton() {
	      return _react2.default.createElement('div', {
	        'data-type': 'cargo',
	        onClick: this.handleBookmarkClick.bind(this),
	        className: _style2.default.bookmarkButton + ' ' + (this.state.inBookmarks ? _style2.default.inBookmarks : '')
	      });
	    }
	  }, {
	    key: 'renderCargoEdit',
	    value: function renderCargoEdit() {
	      return _react2.default.createElement(_Cargo2.default, { edit: this.props.params.edit, adID: this.props.params.id });
	    }
	  }]);

	  return ViewTransport;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ViewTransport);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    bookmarks: state.bookmarks
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    bmActions: (0, _redux.bindActionCreators)(BookmarksActions, dispatch)
	  };
	}

/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(246);

	var _reactRedux = __webpack_require__(239);

	var _Transport = __webpack_require__(536);

	var _Transport2 = _interopRequireDefault(_Transport);

	var _BookmarksActions = __webpack_require__(522);

	var BookmarksActions = _interopRequireWildcard(_BookmarksActions);

	var _style = __webpack_require__(543);

	var _style2 = _interopRequireDefault(_style);

	var _methods = __webpack_require__(545);

	var methods = _interopRequireWildcard(_methods);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Lib imports


	// Components import


	// Action imports


	// Styles import


	//----------------------------------------------------------------------------

	// Define app class
	var ViewTransport = function (_React$Component) {
	  _inherits(ViewTransport, _React$Component);

	  function ViewTransport(props) {
	    _classCallCheck(this, ViewTransport);

	    var _this = _possibleConstructorReturn(this, (ViewTransport.__proto__ || Object.getPrototypeOf(ViewTransport)).call(this, props));

	    _this.state = {
	      inBookmarks: false,
	      item: {},
	      owner: {}
	    };

	    for (var method in methods) {
	      _this[method] = methods[method].bind(_this);
	    }
	    return _this;
	  }

	  _createClass(ViewTransport, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.checkBookmark('transport', parseInt(this.props.params.id));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setCurrentItem('transport', this.props.params.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.container },
	        this.props.params.edit !== 'edit' && this.state.item.model ? this.renderTransportInfo() : this.renderTransportEdit()
	      );
	    }
	  }, {
	    key: 'renderTransportInfo',
	    value: function renderTransportInfo() {
	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.layout },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.info },
	          this.renderMainInfo(),
	          this.renderParameters()
	        ),
	        _react2.default.createElement('div', { className: _style2.default.owner })
	      );
	    }
	  }, {
	    key: 'renderMainInfo',
	    value: function renderMainInfo() {
	      return _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.photo },
	          _react2.default.createElement('img', { src: this.state.item.images[0].thumbnail, alt: '' })
	        ),
	        _react2.default.createElement(
	          'h1',
	          null,
	          this.state.item.model.category,
	          ' ',
	          _react2.default.createElement('br', null),
	          this.state.item.model.brand,
	          ' ',
	          this.state.item.model.name
	        ),
	        this.renderBookmarkButton()
	      );
	    }
	  }, {
	    key: 'renderBookmarkButton',
	    value: function renderBookmarkButton() {
	      return _react2.default.createElement('div', {
	        'data-type': 'transport',
	        onClick: this.handleBookmarkClick.bind(this),
	        className: _style2.default.bookmarkButton + ' ' + (this.state.inBookmarks ? _style2.default.inBookmarks : '')
	      });
	    }
	  }, {
	    key: 'renderParameters',
	    value: function renderParameters() {
	      return _react2.default.createElement('div', { className: _style2.default.parameters });
	    }

	    /** Отрисовка компонента редактирования транспорта */

	  }, {
	    key: 'renderTransportEdit',
	    value: function renderTransportEdit() {
	      return _react2.default.createElement(_Transport2.default, { edit: this.props.params.edit, adID: this.props.params.id });
	    }
	  }]);

	  return ViewTransport;
	}(_react2.default.Component);

	//----------------------------------------------------------------------------

	// Connect component to store


	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ViewTransport);

	// Write user field from global state to component's props

	function mapStateToProps(state) {
	  return {
	    bookmarks: state.bookmarks
	  };
	}

	// Bind user actions to store's dispatcher in component's props
	function mapDispatchToProps(dispatch) {
	  return {
	    bmActions: (0, _redux.bindActionCreators)(BookmarksActions, dispatch)
	  };
	}

/***/ }
]);