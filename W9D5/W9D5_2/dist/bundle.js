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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n  constructor(arr){\n    this.HTMLElements = arr;\n  }\n\n  html(string) {\n    if (string !== undefined){\n      this.HTMLElements.forEach(function(el){\n        el.innerHTML = string;\n      })\n    } else {\n      return this.HTMLElements[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.HTMLElements.forEach(function (el) {\n      el.innerHTML = \"\";\n    });\n    return this;\n  }\n\n  remove() {\n    this.HTMLElements.forEach(function (el) {\n      el.outerHTML = \"\";\n    });\n  }\n\n  append(kim) {\n    if ( typeof kim === 'string'){\n      this.HTMLElements.forEach(function(el){\n        el.innerHTML += kim;\n      });\n    } else if(kim instanceof HTMLElement){\n      this.HTMLElements.forEach(function (el) {\n        el.innerHTML += kim.outerHTML;\n      });\n\n    } else if (kim instanceof DOMNodeCollection){\n      this.HTMLElements.forEach(function (parent) {\n        kim.HTMLElements.forEach((child) => {\n          parent.appendChild(child.cloneNode(true));\n        });\n      });\n    }\n  }\n\n  attr(name, value) {\n    this.HTMLElements.forEach((el) => {\n      el.setAttribute(name, value);\n    });\n  }\n\n  addClass(className) {\n    this.HTMLElements.forEach((el) => {\n      el.classList.add(className);\n    });\n  }\n\n  removeClass(className) {\n    this.HTMLElements.forEach((el) => {\n      el.classList.remove(className);\n    });\n  }\n\n  children() {\n    let childrenArr = [];\n    this.HTMLElements.forEach((el) => {\n      childrenArr.push(el.children);\n    });\n    return new DOMNodeCollection(childrenArr);\n  }\n\n  parent() {\n    let parentArr = [];\n    this.HTMLElements.forEach((el) => {\n      parentArr.push(el.parent);\n    });\n    return new DOMNodeCollection(parenArr);\n  }\n\n  find(selector) {\n    let result = [];\n    this.HTMLElements.forEach((el) => {\n      if (el.matches(selector)) {\n        result.push(el);\n      }\n    });\n    return new DOMNodeCollection(result);\n  }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\nwindow.$l = function(selector) {\n  if (typeof selector === \"string\"){\n    const nodeList = document.querySelectorAll(selector);\n    const nodeListArr = Array.from(nodeList);\n    return new DOMNodeCollection(nodeListArr)\n\n  } else if (selector instanceof HTMLElement){\n    return new DOMNodeCollection(Array.from(selector));\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });