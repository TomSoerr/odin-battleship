/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,\n  Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --col-1: white;\n  --col-2: black;\n  --col-3: rgb(255, 163, 163);\n}\n\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  color: var(--col-2);\n  background-color: var(--col-1);\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  padding: 4rem;\n  gap: 4rem;\n  position: relative;\n}\n\n/* MAIN PAGE */\n\n#header {\n  grid-column: 1 / -1;\n  font-size: 4rem;\n}\n\n#footer {\n  grid-column: 1 / -1;\n  align-self: end;\n  color: var(--col-2);\n}\n\n#footer > a {\n  color: var(--col-2);\n}\n\n#gameboard-wrapper {\n  display: grid;\n  gap: 4rem;\n  justify-items: center;\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n}\n\n.gameboard {\n  display: grid;\n  grid-auto-rows: 1fr;\n  border: thin solid var(--col-2);\n  width: 20rem;\n  height: 20rem;\n}\n\n.board-cell {\n  border: thin solid var(--col-2);\n  position: relative;\n}\n\n.board-cell.hit::before,\n.board-cell.water::before {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.board-cell.hit::before {\n  background-color: var(--col-1);\n  clip-path: polygon(20% 10%, 10% 20%, 40% 50%, 10% 80%, 20% 90%, 50% 60%, 80%\n  90%, 90% 80%, 60% 50%, 90% 20%, 80% 10%, 50% 40%);\n}\n\n.board-cell.water::before {\n  background-color: var(--col-2);\n  clip-path: polygon(10% 80%, 20% 90%, 90% 20%, 80% 10%);\n}\n\n.board-cell.ship {\n  background-color: var(--col-2);\n}\n\n.board-cell.enemy:hover {\n  background-color: var(--col-3);\n  cursor: pointer;\n}\n\n.board-row {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  grid-auto-columns: 1fr;\n}\n\n/* POPUP TO PLACE SHIPS */\n\n#popup-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(97, 98, 117, 0.554);\n  /* margin-top: -4rem; */\n}\n\n#popup {\n  background-color: var(--col-1);\n  padding: 4rem;\n  border-radius: 1rem;\n  margin: 4rem auto;\n  width: min-content;\n}\n\n@media only screen and (max-width: 600px) {\n  :root {\n    font-size: 0.9rem;\n  }\n\n  .gameboard {\n    width: 15rem;\n    height: 15rem;\n  }\n\n  #content {\n    padding: 1rem;\n    gap: 2rem;\n  }\n\n  #gameboard-wrapper {\n    gap: 2rem;\n  }\n\n  #popup {\n    margin: 1rem auto;\n    padding: 2rem;\n    border-radius: 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;8CAC4C;EAC5C,cAAc;EACd,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,iCAAiC;EACjC,qBAAqB;EACrB,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;;AAEA,cAAc;;AAEd;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,WAAW;EACX,2DAA2D;AAC7D;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B;mDACiD;AACnD;;AAEA;EACE,8BAA8B;EAC9B,sDAAsD;AACxD;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA,yBAAyB;;AAEzB;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,qBAAqB;EACvB;AACF","sourcesContent":[":root {\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,\n  Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --col-1: white;\n  --col-2: black;\n  --col-3: rgb(255, 163, 163);\n}\n\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  color: var(--col-2);\n  background-color: var(--col-1);\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  padding: 4rem;\n  gap: 4rem;\n  position: relative;\n}\n\n/* MAIN PAGE */\n\n#header {\n  grid-column: 1 / -1;\n  font-size: 4rem;\n}\n\n#footer {\n  grid-column: 1 / -1;\n  align-self: end;\n  color: var(--col-2);\n}\n\n#footer > a {\n  color: var(--col-2);\n}\n\n#gameboard-wrapper {\n  display: grid;\n  gap: 4rem;\n  justify-items: center;\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n}\n\n.gameboard {\n  display: grid;\n  grid-auto-rows: 1fr;\n  border: thin solid var(--col-2);\n  width: 20rem;\n  height: 20rem;\n}\n\n.board-cell {\n  border: thin solid var(--col-2);\n  position: relative;\n}\n\n.board-cell.hit::before,\n.board-cell.water::before {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.board-cell.hit::before {\n  background-color: var(--col-1);\n  clip-path: polygon(20% 10%, 10% 20%, 40% 50%, 10% 80%, 20% 90%, 50% 60%, 80%\n  90%, 90% 80%, 60% 50%, 90% 20%, 80% 10%, 50% 40%);\n}\n\n.board-cell.water::before {\n  background-color: var(--col-2);\n  clip-path: polygon(10% 80%, 20% 90%, 90% 20%, 80% 10%);\n}\n\n.board-cell.ship {\n  background-color: var(--col-2);\n}\n\n.board-cell.enemy:hover {\n  background-color: var(--col-3);\n  cursor: pointer;\n}\n\n.board-row {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  grid-auto-columns: 1fr;\n}\n\n/* POPUP TO PLACE SHIPS */\n\n#popup-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(97, 98, 117, 0.554);\n  /* margin-top: -4rem; */\n}\n\n#popup {\n  background-color: var(--col-1);\n  padding: 4rem;\n  border-radius: 1rem;\n  margin: 4rem auto;\n  width: min-content;\n}\n\n@media only screen and (max-width: 600px) {\n  :root {\n    font-size: 0.9rem;\n  }\n\n  .gameboard {\n    width: 15rem;\n    height: 15rem;\n  }\n\n  #content {\n    padding: 1rem;\n    gap: 2rem;\n  }\n\n  #gameboard-wrapper {\n    gap: 2rem;\n  }\n\n  #popup {\n    margin: 1rem auto;\n    padding: 2rem;\n    border-radius: 0.5rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dom)
/* harmony export */ });
function Dom() {
  const create = (type = 'div') => document.createElement(type);

  const content = create();
  content.id = 'content';
  document.body.append(content);

  const buildBoard = function buildBoard(boardContainer, board = null) {
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].forEach((row) => {
      const rowContainer = create();
      rowContainer.classList.add('board-row');
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].forEach((column) => {
        const cell = create();
        if (board !== null) board[row + column] = cell;
        cell.classList.add('board-cell');
        rowContainer.append(cell);
      });
      boardContainer.append(rowContainer);
    });
  };

  const buildMainPage = function buildMainPage() {
    const header = create('h1');
    header.id = 'header';
    header.textContent = 'Battleship';

    const playerBoardContainer = create();
    playerBoardContainer.classList.add('gameboard');
    const playerBoard = {};
    buildBoard(playerBoardContainer, playerBoard);

    playerBoard.a1.classList.add('hit', 'ship');
    playerBoard.a2.classList.add('water');

    const enemyBoardContainer = create();
    enemyBoardContainer.classList.add('gameboard');
    const enemyBoard = {};
    buildBoard(enemyBoardContainer, enemyBoard);
    Object.entries(enemyBoard).forEach(([key, value]) => {
      value.classList.add('enemy');
      // value.addEventListener(() => enemy(key));
    });

    const boardsContainer = create();
    boardsContainer.id = 'gameboard-wrapper';
    boardsContainer.append(playerBoardContainer, enemyBoardContainer);

    const footer = create('p');
    footer.id = 'footer';
    const footerLink = create('a');
    footerLink.textContent = 'View Project On Github';
    footerLink.href = 'https://github.com/TomSoerr/odin-battleship';
    footer.append(footerLink);

    content.append(header, boardsContainer, footer);
  };

  const buildPlaceShipPopup = function buildPlaceShipPopup() {
    const header = create('h2');
    header.textContent = 'Place your ships';

    const shipName = create('p');
    shipName.textContent = 'testName';

    const rotateButton = create('button');
    rotateButton.id = 'rotate-button';
    rotateButton.textContent = 'Rotate Ship';

    const selectBoardContainer = create();
    selectBoardContainer.classList.add('gameboard');
    buildBoard(selectBoardContainer);

    const popupContainer = create();
    popupContainer.id = 'popup';
    popupContainer.append(header, shipName, rotateButton, selectBoardContainer);

    const popupBackgroundContainer = create();
    popupBackgroundContainer.id = 'popup-background';
    popupBackgroundContainer.append(popupContainer);

    content.append(popupBackgroundContainer);
  };

  (function init() {
    buildMainPage();
    buildPlaceShipPopup();
  })();
}

// TODO:
// add event listeners to one board
// if a ship is on a cell there should be a class added
// after each turn the classes are rerendered
// the player obj needs to call the rerender
// the one board must be able to call the player attack function
// after the attack is called the event listener should be deleted
// popup to place the board with the real gameboard object
// computer player obj needs to place the ships randomly


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function Gameboard() {
  const x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const board = {};

  // to save some typing time
  y.forEach((elementX) => {
    x.forEach((elementY) => {
      board[elementX + elementY] = null;
    });
  });

  const place = function placeShip({ start, direction, length }) {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])({ length });
    const { letter, number } = start.match(
      /^(?<letter>\w)(?<number>\d)$/
    ).groups;
    let yStart = y.indexOf(letter);
    let xStart = x.indexOf(number);
    const coordinates = [];

    for (let a = 0; a < length; a += 1) {
      if (board[y[yStart] + x[xStart]] === null) {
        coordinates.push(y[yStart] + x[xStart]);
      } else {
        return false;
      }
      if (direction === 'vertical') {
        yStart += 1;
      } else if (direction === 'horizontal') {
        xStart += 1;
      }
    }

    const callHit = (position) => () => {
      ship.hit({ relativeCoordinates: position });
      return ship.isSunk();
    };

    coordinates.forEach((coordinate, index) => {
      board[coordinate] = callHit(index);
    });

    return true;
  };

  const checkAllSunk = function checkIfAllShipsHaveSunk() {
    return Object.values(board).every(
      (element) => typeof element !== 'function'
    );
  };

  const receiveAttack = function receiveAttack(coordinates) {
    if (typeof board[coordinates] === 'function') {
      const isSunk = board[coordinates]();
      board[coordinates] = 'hit';
      if (isSunk) {
        if (checkAllSunk()) {
          return 'allSunk';
        }
        return 'sunk';
      }
      return 'hit';
    }
    board[coordinates] = 'miss';
    return 'miss';
  };

  return {
    board,
    place,
    receiveAttack,
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player() {
  const attack = function attackEnemyGameboard({
    gameboard,
    coordinates = null,
  }) {
    if (coordinates === null) {
      const freeCoordinates = Object.entries(gameboard.board)
        .filter(([key, value]) => !value)
        .map(([key, value]) => key);
      gameboard.receiveAttack(
        freeCoordinates[Math.floor(Math.random() * freeCoordinates.length)]
      );
    } else {
      gameboard.receiveAttack(coordinates);
    }
  };
  return {
    attack,
  };
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship({ length }) {
  const ship = [];
  for (let x = 0; x < length; x += 1) {
    ship.push(true);
  }

  const hit = function gotHit(
    { relativeCoordinates } = {
      relativeCoordinates: null,
    }
  ) {
    if (relativeCoordinates == null)
      throw new Error("No 'relativeCoordinates'");
    if (relativeCoordinates < 0 || relativeCoordinates >= ship.length)
      throw new Error("Wrong 'relativeCoordinates'");

    ship[relativeCoordinates] = false;
  };

  const isSunk = () => ship.every((element) => !element);

  return {
    hit,
    isSunk,
  };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_dom__WEBPACK_IMPORTED_MODULE_2__["default"])();

////////////////////////////////
function game() {
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // return confirm('Want to play again');
  return false;
}

let playing = true;
while (playing) {
  playing = game();
}
window.close();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELHVJQUF1SSxtQkFBbUIsbUJBQW1CLGdDQUFnQyxHQUFHLDRCQUE0QixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsY0FBYyxvQ0FBb0MsaUJBQWlCLHNCQUFzQix3QkFBd0IsbUNBQW1DLGtCQUFrQixzQ0FBc0MsMEJBQTBCLGtCQUFrQixjQUFjLHVCQUF1QixHQUFHLGdDQUFnQyx3QkFBd0Isb0JBQW9CLEdBQUcsYUFBYSx3QkFBd0Isb0JBQW9CLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyx3QkFBd0Isa0JBQWtCLGNBQWMsMEJBQTBCLGdCQUFnQixnRUFBZ0UsR0FBRyxnQkFBZ0Isa0JBQWtCLHdCQUF3QixvQ0FBb0MsaUJBQWlCLGtCQUFrQixHQUFHLGlCQUFpQixvQ0FBb0MsdUJBQXVCLEdBQUcseURBQXlELGdCQUFnQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLDZCQUE2QixtQ0FBbUMsc0lBQXNJLEdBQUcsK0JBQStCLG1DQUFtQywyREFBMkQsR0FBRyxzQkFBc0IsbUNBQW1DLEdBQUcsNkJBQTZCLG1DQUFtQyxvQkFBb0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLEdBQUcscURBQXFELG9CQUFvQixXQUFXLGNBQWMsZ0JBQWdCLGlCQUFpQiwrQ0FBK0MsMEJBQTBCLEtBQUssWUFBWSxtQ0FBbUMsa0JBQWtCLHdCQUF3QixzQkFBc0IsdUJBQXVCLEdBQUcsK0NBQStDLFdBQVcsd0JBQXdCLEtBQUssa0JBQWtCLG1CQUFtQixvQkFBb0IsS0FBSyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixLQUFLLDBCQUEwQixnQkFBZ0IsS0FBSyxjQUFjLHdCQUF3QixvQkFBb0IsNEJBQTRCLEtBQUssR0FBRyxPQUFPLGdGQUFnRixLQUFLLE9BQU8sV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxnQ0FBZ0MsdUlBQXVJLG1CQUFtQixtQkFBbUIsZ0NBQWdDLEdBQUcsNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxjQUFjLG9DQUFvQyxpQkFBaUIsc0JBQXNCLHdCQUF3QixtQ0FBbUMsa0JBQWtCLHNDQUFzQywwQkFBMEIsa0JBQWtCLGNBQWMsdUJBQXVCLEdBQUcsZ0NBQWdDLHdCQUF3QixvQkFBb0IsR0FBRyxhQUFhLHdCQUF3QixvQkFBb0Isd0JBQXdCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLHdCQUF3QixrQkFBa0IsY0FBYywwQkFBMEIsZ0JBQWdCLGdFQUFnRSxHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLG9DQUFvQyxpQkFBaUIsa0JBQWtCLEdBQUcsaUJBQWlCLG9DQUFvQyx1QkFBdUIsR0FBRyx5REFBeUQsZ0JBQWdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsNkJBQTZCLG1DQUFtQyxzSUFBc0ksR0FBRywrQkFBK0IsbUNBQW1DLDJEQUEyRCxHQUFHLHNCQUFzQixtQ0FBbUMsR0FBRyw2QkFBNkIsbUNBQW1DLG9CQUFvQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLDJCQUEyQiwyQkFBMkIsR0FBRyxxREFBcUQsb0JBQW9CLFdBQVcsY0FBYyxnQkFBZ0IsaUJBQWlCLCtDQUErQywwQkFBMEIsS0FBSyxZQUFZLG1DQUFtQyxrQkFBa0Isd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRywrQ0FBK0MsV0FBVyx3QkFBd0IsS0FBSyxrQkFBa0IsbUJBQW1CLG9CQUFvQixLQUFLLGdCQUFnQixvQkFBb0IsZ0JBQWdCLEtBQUssMEJBQTBCLGdCQUFnQixLQUFLLGNBQWMsd0JBQXdCLG9CQUFvQiw0QkFBNEIsS0FBSyxHQUFHLG1CQUFtQjtBQUMvek07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUgscUNBQXFDLDBCQUEwQjtBQUMvRCxpQkFBaUIsaURBQUksR0FBRyxRQUFRO0FBQ2hDLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsK0JBQStCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlLGdCQUFnQixRQUFRO0FBQ3ZDO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLE1BQU0sc0JBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ047QUFDTjtBQUNIOztBQUVyQixnREFBRzs7QUFFSDtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFNO0FBQ3pCLDRCQUE0QixzREFBUztBQUNyQyxpQkFBaUIsbURBQU07QUFDdkIsMEJBQTBCLHNEQUFTOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxcXG4gIFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgLS1jb2wtMTogd2hpdGU7XFxuICAtLWNvbC0yOiBibGFjaztcXG4gIC0tY29sLTM6IHJnYigyNTUsIDE2MywgMTYzKTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHZhcigtLWNvbC0yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBNQUlOIFBBR0UgKi9cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcbiNmb290ZXIgPiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcbiNnYW1lYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA0cmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1jb2wtMik7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tY29sLTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5oaXQ6OmJlZm9yZSxcXG4uYm9hcmQtY2VsbC53YXRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ib2FyZC1jZWxsLmhpdDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMTAlLCAxMCUgMjAlLCA0MCUgNTAlLCAxMCUgODAlLCAyMCUgOTAlLCA1MCUgNjAlLCA4MCVcXG4gIDkwJSwgOTAlIDgwJSwgNjAlIDUwJSwgOTAlIDIwJSwgODAlIDEwJSwgNTAlIDQwJSk7XFxufVxcblxcbi5ib2FyZC1jZWxsLndhdGVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTIpO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSA4MCUsIDIwJSA5MCUsIDkwJSAyMCUsIDgwJSAxMCUpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0yKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwuZW5lbXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi8qIFBPUFVQIFRPIFBMQUNFIFNISVBTICovXFxuXFxuI3BvcHVwLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5OCwgMTE3LCAwLjU1NCk7XFxuICAvKiBtYXJnaW4tdG9wOiAtNHJlbTsgKi9cXG59XFxuXFxuI3BvcHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAjZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAjcG9wdXAge1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7OENBQzRDO0VBQzVDLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QjttREFDaUQ7QUFDbkQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxcXG4gIFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgLS1jb2wtMTogd2hpdGU7XFxuICAtLWNvbC0yOiBibGFjaztcXG4gIC0tY29sLTM6IHJnYigyNTUsIDE2MywgMTYzKTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHZhcigtLWNvbC0yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBNQUlOIFBBR0UgKi9cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcbiNmb290ZXIgPiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcbiNnYW1lYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA0cmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1jb2wtMik7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tY29sLTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5oaXQ6OmJlZm9yZSxcXG4uYm9hcmQtY2VsbC53YXRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ib2FyZC1jZWxsLmhpdDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMTAlLCAxMCUgMjAlLCA0MCUgNTAlLCAxMCUgODAlLCAyMCUgOTAlLCA1MCUgNjAlLCA4MCVcXG4gIDkwJSwgOTAlIDgwJSwgNjAlIDUwJSwgOTAlIDIwJSwgODAlIDEwJSwgNTAlIDQwJSk7XFxufVxcblxcbi5ib2FyZC1jZWxsLndhdGVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTIpO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSA4MCUsIDIwJSA5MCUsIDkwJSAyMCUsIDgwJSAxMCUpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0yKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwuZW5lbXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi8qIFBPUFVQIFRPIFBMQUNFIFNISVBTICovXFxuXFxuI3BvcHVwLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5OCwgMTE3LCAwLjU1NCk7XFxuICAvKiBtYXJnaW4tdG9wOiAtNHJlbTsgKi9cXG59XFxuXFxuI3BvcHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAjZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAjcG9wdXAge1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbSgpIHtcbiAgY29uc3QgY3JlYXRlID0gKHR5cGUgPSAnZGl2JykgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICBjb25zdCBjb250ZW50ID0gY3JlYXRlKCk7XG4gIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRlbnQpO1xuXG4gIGNvbnN0IGJ1aWxkQm9hcmQgPSBmdW5jdGlvbiBidWlsZEJvYXJkKGJvYXJkQ29udGFpbmVyLCBib2FyZCA9IG51bGwpIHtcbiAgICBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGNyZWF0ZSgpO1xuICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXJvdycpO1xuICAgICAgWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gY3JlYXRlKCk7XG4gICAgICAgIGlmIChib2FyZCAhPT0gbnVsbCkgYm9hcmRbcm93ICsgY29sdW1uXSA9IGNlbGw7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuICAgICAgICByb3dDb250YWluZXIuYXBwZW5kKGNlbGwpO1xuICAgICAgfSk7XG4gICAgICBib2FyZENvbnRhaW5lci5hcHBlbmQocm93Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBidWlsZE1haW5QYWdlID0gZnVuY3Rpb24gYnVpbGRNYWluUGFnZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGUoJ2gxJyk7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICBwbGF5ZXJCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHt9O1xuICAgIGJ1aWxkQm9hcmQocGxheWVyQm9hcmRDb250YWluZXIsIHBsYXllckJvYXJkKTtcblxuICAgIHBsYXllckJvYXJkLmExLmNsYXNzTGlzdC5hZGQoJ2hpdCcsICdzaGlwJyk7XG4gICAgcGxheWVyQm9hcmQuYTIuY2xhc3NMaXN0LmFkZCgnd2F0ZXInKTtcblxuICAgIGNvbnN0IGVuZW15Qm9hcmRDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICBlbmVteUJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSB7fTtcbiAgICBidWlsZEJvYXJkKGVuZW15Qm9hcmRDb250YWluZXIsIGVuZW15Qm9hcmQpO1xuICAgIE9iamVjdC5lbnRyaWVzKGVuZW15Qm9hcmQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZCgnZW5lbXknKTtcbiAgICAgIC8vIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoKCkgPT4gZW5lbXkoa2V5KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICBib2FyZHNDb250YWluZXIuaWQgPSAnZ2FtZWJvYXJkLXdyYXBwZXInO1xuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmQocGxheWVyQm9hcmRDb250YWluZXIsIGVuZW15Qm9hcmRDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlKCdwJyk7XG4gICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG4gICAgY29uc3QgZm9vdGVyTGluayA9IGNyZWF0ZSgnYScpO1xuICAgIGZvb3RlckxpbmsudGV4dENvbnRlbnQgPSAnVmlldyBQcm9qZWN0IE9uIEdpdGh1Yic7XG4gICAgZm9vdGVyTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9Ub21Tb2Vyci9vZGluLWJhdHRsZXNoaXAnO1xuICAgIGZvb3Rlci5hcHBlbmQoZm9vdGVyTGluayk7XG5cbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIsIGJvYXJkc0NvbnRhaW5lciwgZm9vdGVyKTtcbiAgfTtcblxuICBjb25zdCBidWlsZFBsYWNlU2hpcFBvcHVwID0gZnVuY3Rpb24gYnVpbGRQbGFjZVNoaXBQb3B1cCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGUoJ2gyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMnO1xuXG4gICAgY29uc3Qgc2hpcE5hbWUgPSBjcmVhdGUoJ3AnKTtcbiAgICBzaGlwTmFtZS50ZXh0Q29udGVudCA9ICd0ZXN0TmFtZSc7XG5cbiAgICBjb25zdCByb3RhdGVCdXR0b24gPSBjcmVhdGUoJ2J1dHRvbicpO1xuICAgIHJvdGF0ZUJ1dHRvbi5pZCA9ICdyb3RhdGUtYnV0dG9uJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnUm90YXRlIFNoaXAnO1xuXG4gICAgY29uc3Qgc2VsZWN0Qm9hcmRDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICBzZWxlY3RCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBidWlsZEJvYXJkKHNlbGVjdEJvYXJkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgcG9wdXBDb250YWluZXIuaWQgPSAncG9wdXAnO1xuICAgIHBvcHVwQ29udGFpbmVyLmFwcGVuZChoZWFkZXIsIHNoaXBOYW1lLCByb3RhdGVCdXR0b24sIHNlbGVjdEJvYXJkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBvcHVwQmFja2dyb3VuZENvbnRhaW5lciA9IGNyZWF0ZSgpO1xuICAgIHBvcHVwQmFja2dyb3VuZENvbnRhaW5lci5pZCA9ICdwb3B1cC1iYWNrZ3JvdW5kJztcbiAgICBwb3B1cEJhY2tncm91bmRDb250YWluZXIuYXBwZW5kKHBvcHVwQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKHBvcHVwQmFja2dyb3VuZENvbnRhaW5lcik7XG4gIH07XG5cbiAgKGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYnVpbGRNYWluUGFnZSgpO1xuICAgIGJ1aWxkUGxhY2VTaGlwUG9wdXAoKTtcbiAgfSkoKTtcbn1cblxuLy8gVE9ETzpcbi8vIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gb25lIGJvYXJkXG4vLyBpZiBhIHNoaXAgaXMgb24gYSBjZWxsIHRoZXJlIHNob3VsZCBiZSBhIGNsYXNzIGFkZGVkXG4vLyBhZnRlciBlYWNoIHR1cm4gdGhlIGNsYXNzZXMgYXJlIHJlcmVuZGVyZWRcbi8vIHRoZSBwbGF5ZXIgb2JqIG5lZWRzIHRvIGNhbGwgdGhlIHJlcmVuZGVyXG4vLyB0aGUgb25lIGJvYXJkIG11c3QgYmUgYWJsZSB0byBjYWxsIHRoZSBwbGF5ZXIgYXR0YWNrIGZ1bmN0aW9uXG4vLyBhZnRlciB0aGUgYXR0YWNrIGlzIGNhbGxlZCB0aGUgZXZlbnQgbGlzdGVuZXIgc2hvdWxkIGJlIGRlbGV0ZWRcbi8vIHBvcHVwIHRvIHBsYWNlIHRoZSBib2FyZCB3aXRoIHRoZSByZWFsIGdhbWVib2FyZCBvYmplY3Rcbi8vIGNvbXB1dGVyIHBsYXllciBvYmogbmVlZHMgdG8gcGxhY2UgdGhlIHNoaXBzIHJhbmRvbWx5XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IHggPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gIGNvbnN0IHkgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbiAgY29uc3QgYm9hcmQgPSB7fTtcblxuICAvLyB0byBzYXZlIHNvbWUgdHlwaW5nIHRpbWVcbiAgeS5mb3JFYWNoKChlbGVtZW50WCkgPT4ge1xuICAgIHguZm9yRWFjaCgoZWxlbWVudFkpID0+IHtcbiAgICAgIGJvYXJkW2VsZW1lbnRYICsgZWxlbWVudFldID0gbnVsbDtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcGxhY2UgPSBmdW5jdGlvbiBwbGFjZVNoaXAoeyBzdGFydCwgZGlyZWN0aW9uLCBsZW5ndGggfSkge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKHsgbGVuZ3RoIH0pO1xuICAgIGNvbnN0IHsgbGV0dGVyLCBudW1iZXIgfSA9IHN0YXJ0Lm1hdGNoKFxuICAgICAgL14oPzxsZXR0ZXI+XFx3KSg/PG51bWJlcj5cXGQpJC9cbiAgICApLmdyb3VwcztcbiAgICBsZXQgeVN0YXJ0ID0geS5pbmRleE9mKGxldHRlcik7XG4gICAgbGV0IHhTdGFydCA9IHguaW5kZXhPZihudW1iZXIpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG5cbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGxlbmd0aDsgYSArPSAxKSB7XG4gICAgICBpZiAoYm9hcmRbeVt5U3RhcnRdICsgeFt4U3RhcnRdXSA9PT0gbnVsbCkge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKHlbeVN0YXJ0XSArIHhbeFN0YXJ0XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHlTdGFydCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB4U3RhcnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYWxsSGl0ID0gKHBvc2l0aW9uKSA9PiAoKSA9PiB7XG4gICAgICBzaGlwLmhpdCh7IHJlbGF0aXZlQ29vcmRpbmF0ZXM6IHBvc2l0aW9uIH0pO1xuICAgICAgcmV0dXJuIHNoaXAuaXNTdW5rKCk7XG4gICAgfTtcblxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XG4gICAgICBib2FyZFtjb29yZGluYXRlXSA9IGNhbGxIaXQoaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBbGxTdW5rID0gZnVuY3Rpb24gY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmsoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYm9hcmQpLmV2ZXJ5KFxuICAgICAgKGVsZW1lbnQpID0+IHR5cGVvZiBlbGVtZW50ICE9PSAnZnVuY3Rpb24nXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGlmICh0eXBlb2YgYm9hcmRbY29vcmRpbmF0ZXNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBpc1N1bmsgPSBib2FyZFtjb29yZGluYXRlc10oKTtcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVzXSA9ICdoaXQnO1xuICAgICAgaWYgKGlzU3Vuaykge1xuICAgICAgICBpZiAoY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgICAgICByZXR1cm4gJ2FsbFN1bmsnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnc3Vuayc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICAgIGJvYXJkW2Nvb3JkaW5hdGVzXSA9ICdtaXNzJztcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcGxhY2UsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24gYXR0YWNrRW5lbXlHYW1lYm9hcmQoe1xuICAgIGdhbWVib2FyZCxcbiAgICBjb29yZGluYXRlcyA9IG51bGwsXG4gIH0pIHtcbiAgICBpZiAoY29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyZWVDb29yZGluYXRlcyA9IE9iamVjdC5lbnRyaWVzKGdhbWVib2FyZC5ib2FyZClcbiAgICAgICAgLmZpbHRlcigoW2tleSwgdmFsdWVdKSA9PiAhdmFsdWUpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ga2V5KTtcbiAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICBmcmVlQ29vcmRpbmF0ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZnJlZUNvb3JkaW5hdGVzLmxlbmd0aCldXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGF0dGFjayxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoeyBsZW5ndGggfSkge1xuICBjb25zdCBzaGlwID0gW107XG4gIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4ICs9IDEpIHtcbiAgICBzaGlwLnB1c2godHJ1ZSk7XG4gIH1cblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiBnb3RIaXQoXG4gICAgeyByZWxhdGl2ZUNvb3JkaW5hdGVzIH0gPSB7XG4gICAgICByZWxhdGl2ZUNvb3JkaW5hdGVzOiBudWxsLFxuICAgIH1cbiAgKSB7XG4gICAgaWYgKHJlbGF0aXZlQ29vcmRpbmF0ZXMgPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vICdyZWxhdGl2ZUNvb3JkaW5hdGVzJ1wiKTtcbiAgICBpZiAocmVsYXRpdmVDb29yZGluYXRlcyA8IDAgfHwgcmVsYXRpdmVDb29yZGluYXRlcyA+PSBzaGlwLmxlbmd0aClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nICdyZWxhdGl2ZUNvb3JkaW5hdGVzJ1wiKTtcblxuICAgIHNoaXBbcmVsYXRpdmVDb29yZGluYXRlc10gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwLmV2ZXJ5KChlbGVtZW50KSA9PiAhZWxlbWVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbkRvbSgpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gZ2FtZSgpIHtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbiAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIC8vIHJldHVybiBjb25maXJtKCdXYW50IHRvIHBsYXkgYWdhaW4nKTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5sZXQgcGxheWluZyA9IHRydWU7XG53aGlsZSAocGxheWluZykge1xuICBwbGF5aW5nID0gZ2FtZSgpO1xufVxud2luZG93LmNsb3NlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=