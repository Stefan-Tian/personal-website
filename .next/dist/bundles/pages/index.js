module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/About.js";


var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "about-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "about-page__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "I'm..."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card__side about-page-grid__card__side--front about-page-grid__card--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card--1--pic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "about-page-grid__card--1--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "A western TV series enthusiast"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card__side about-page-grid__card__side--back about-page-grid__card__side--back--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "I watch all kinds of TV series. When I was in middle school, I stumbled upon this series called charmed, it's about 3 witch sisters fighting demons. I know the plot sounds cheesy but I love that show anymay. Recently I discovered this show called Killing Eve, it's so great that BBC America even renewed it for season 2 before the show's scheduled premiere.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card__side about-page-grid__card__side--front about-page-grid__card--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card--2--pic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "about-page-grid__card--2--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "A self-taught developer"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card__side about-page-grid__card__side--back about-page-grid__card__side--back--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Before college, I've always thought that programming is only for math geniuses, and since I suck at math, I'd probably suck at programming too. But in my sophomore year of college, I thought to myself, why not give it a shot and see how it goes. At first, I subscribed to datacamp in an attempt to learn more about data science. It's a great resource, but It wasn't what I expected. I learned a lot about how to analyze data and build predictive models, but deep down what I really want is to build apps that people can actually see in app stores or online. My friend suggested that I should check out web development if I want to get my hands dirty with actually building stuff, so I looked around the internet and purchased The Complete Web Development Bootcamp taught by Colt Steele. After that course, I just can't stop digging deeper into the web field.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card__side about-page-grid__card__side--front about-page-grid__card--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card--3--pic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "about-page-grid__card--3--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "An introverted person"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-page-grid__card__side about-page-grid__card__side--back about-page-grid__card__side--back--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "People always confuse being introverted with being shy. Well, that's not the case, at least not for me. Being an introvert basically means that I gain energy from being alone, and when I'm alone, I mostly spend time watching online courses to improve myself, or watch TV series to relax a bit. Being an introvert also does not mean that I don't like to talk to people. I only dislike small talks since I consider them to be meaningless. I love to talk about cool technologies and new software development trends with other people who share the same passion. I love to learn from people with different backgrounds to gain a brand new perspective or people with more experience to solve problems more elegantly."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "hover-me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "size3 hover-me__notice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "hover over the cards to see more", "   ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "hover-me__hearts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, " \u2665"))));
};

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/Footer.js";


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "size1 footer__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "footer__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    className: "footer__info--icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
    xlinkHref: "/static/symbols.svg#icon-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "footer__info--word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "stefanwork@gmail.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "footer__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    className: "footer__info--icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
    xlinkHref: "/static/symbols.svg#icon-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "footer__info--word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "+886 916 097 962")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "footer--copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "\xA9Copyright 2018 by Stefan Tian"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navbar__ = __webpack_require__("./components/Navbar.js");
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/Header.js";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "head-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "center__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "I'm a web developer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "center__portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Portfolio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "center__resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "R\xE9sum\xE9"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "scrollToMiddle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return window.scrollTo({
          top: 720,
          behavior: "smooth"
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "scrollToBottom", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return window.scrollTo({
          top: 3000,
          behavior: "smooth"
        });
      }
    }), _temp));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "head-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "stefan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Stefan Tian")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Portfolio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "about",
        onClick: function onClick() {
          return _this2.scrollToMiddle();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/resume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "resume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "R\xE9sum\xE9")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "contact",
        onClick: function onClick() {
          return _this2.scrollToBottom();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Contact"));
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // const Navbar = () => (
//   <nav className="head-nav">
//     <Link href="/">
//       <button className="stefan">Stefan Tian</button>
//     </Link>
//     <Link href="/">
//       <button className="home">Home</button>
//     </Link>
//     <Link>
//       <button className="portfolio">Portfolio</button>
//     </Link>
//     <Link>
//       <button className="about">About</button>
//     </Link>
//     <Link href="/resume">
//       <button className="resume">Résumé</button>
//     </Link>
//     <Link>
//       <button className="contact">Contact</button>
//     </Link>
//   </nav>
// );


/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_About__ = __webpack_require__("./components/About.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_styles_scss__ = __webpack_require__("./styles/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_styles_scss__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/pages/index.js";






var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_About__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/styles.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map