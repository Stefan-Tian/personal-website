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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/resume/ResumeCoursework.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/resume/ResumeCoursework.js";


var ResumeCoursework = function ResumeCoursework() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "resume__coursework",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "size2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Coursework"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "The Web Developer Bootcamp", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "- taught by Colt Steele on Udemy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "The Complete React Web Developer Course(with Redux)", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "- taught by Andrew Mead on Udemy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "The Complete Node.js Developer Course", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "- taught by Andrew Mead on Udemy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Node with React - Fullstack Web Development", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "- taught by Stephen Grider on Udemy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Server Side Rendering with React and Redux", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "- taught by Stephen Grider on Udemy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "NodeJS - Advanced concepts", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "- taught by Stephen Grider on Udemy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Ethereum and Solidity - The Complete Developer's Guide", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "- taught by Stephen Grider on Udemy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5 coursework__course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Advanced CSS and SASS - Flex, Grid, Animations and More", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "coursework__instructor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "- taught by Jonas Schmedtmann on Udemy")));
};

/* harmony default export */ __webpack_exports__["a"] = (ResumeCoursework);

/***/ }),

/***/ "./components/resume/ResumeEducation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/resume/ResumeEducation.js";


var ResumeEducation = function ResumeEducation() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "resume__education",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "size2 education",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Education & Experiences"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "size4 education__school",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "NCCU - psychology major, currently in my junior year"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "size4 consulting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "NCCU - consulting group"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "consulting__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Participated in lectures taught by professional consultants every week to strengthen analytical skills"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "consulting__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Learned how to work as a team, and improve problem solving skills"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "size4 quantlab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "NCCU - Psychometries & Quantitative Methods Lab"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "quantlab__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Work as a research assistant to help automate repetitive tasks such as using Google apps script to build out complex forms with", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "expertise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Javascript")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "quantlab__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Run statistics and analyze data from experiments using", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "expertise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "R")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "quantlab__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Created a brand new website for the lab with", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "expertise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Next.js")));
};

/* harmony default export */ __webpack_exports__["a"] = (ResumeEducation);

/***/ }),

/***/ "./components/resume/ResumeHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./components/Navbar.js");
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/resume/ResumeHeader.js";




var ResumeHeader = function ResumeHeader() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "resume__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "resume__header--nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "resume__header--nav--btn-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Stefan Tian")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "resume__header--nav--btn-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "resume__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "head-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "headshot",
    src: "/static/headshot.jpg",
    alt: "head shot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "size2 intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Hi, I'm Stefan Tian, a web developer !")));
};

/* harmony default export */ __webpack_exports__["a"] = (ResumeHeader);

/***/ }),

/***/ "./components/resume/ResumeLanguage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/resume/ResumeLanguage.js";


var ResumeLanguage = function ResumeLanguage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "resume__languages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "size2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Language Skills"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Mandarin - mother tongue"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "English - TOEIC 970"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "size5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "French - passed DELF B1"));
};

/* harmony default export */ __webpack_exports__["a"] = (ResumeLanguage);

/***/ }),

/***/ "./components/resume/ResumeProject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/components/resume/ResumeProject.js";


var ResumeProject = function ResumeProject() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "resume__project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "size2 projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Projects"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "size4 projects__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Donezo", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "brief-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, " - a slightly advanced todo app")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Developped with", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "expertise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Node.js + Express.js + React.js + Redux + MondoDB + SCSS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Support Google and Facebook oauth"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Have basic CRUD function and it shows completion rate"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Support keyword searching"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "size4 projects__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Emaily", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "brief-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, " - a feedback gathering app")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Gained more in depth knowledge of", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "expertise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Node.js and React.js")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Used SendGrid to send out massive emails and record user responses"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Used Stripe to facilitate credit card transaction"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "size4 projects__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "CrowdCoin", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "brief-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, " - a safer alternative to Kickstarter")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Used ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "expertise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Solidity"), " to write smart contracts so that every expense needs to be approved by at least 50% of the project investors"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "projects__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Used ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "expertise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Next.js"), " to build the front-end interface for users to communicate with the smart contracts I built more easily"));
};

/* harmony default export */ __webpack_exports__["a"] = (ResumeProject);

/***/ }),

/***/ "./pages/resume.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_resume_ResumeHeader__ = __webpack_require__("./components/resume/ResumeHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_resume_ResumeEducation__ = __webpack_require__("./components/resume/ResumeEducation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_resume_ResumeProject__ = __webpack_require__("./components/resume/ResumeProject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_resume_ResumeLanguage__ = __webpack_require__("./components/resume/ResumeLanguage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_resume_ResumeCoursework__ = __webpack_require__("./components/resume/ResumeCoursework.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_styles_scss__ = __webpack_require__("./styles/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_styles_scss__);
var _jsxFileName = "/Users/shenghongtian/Documents/stefan-personal-website/pages/resume.js";








var resume = function resume() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "resume-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_resume_ResumeHeader__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_resume_ResumeEducation__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_resume_ResumeProject__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_resume_ResumeLanguage__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_resume_ResumeCoursework__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (resume);

/***/ }),

/***/ "./styles/styles.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/resume.js");


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
//# sourceMappingURL=resume.js.map