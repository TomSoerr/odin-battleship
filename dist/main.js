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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,\n  Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --col-1: white;\n  --col-2: black;\n  --col-3: rgb(255, 163, 163);\n}\n\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  color: var(--col-2);\n  background-color: var(--col-1);\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  padding: 4rem;\n  gap: 4rem;\n  position: relative;\n}\n\n/* MAIN PAGE */\n\n#header {\n  grid-column: 1 / -1;\n  font-size: 4rem;\n}\n\n#footer {\n  grid-column: 1 / -1;\n  align-self: end;\n  color: var(--col-2);\n}\n\n#footer > a {\n  color: var(--col-2);\n}\n\n#gameboard-wrapper {\n  display: grid;\n  gap: 4rem;\n  justify-items: center;\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n}\n\n.gameboard {\n  display: grid;\n  grid-auto-rows: 1fr;\n  border: thin solid var(--col-2);\n  width: 20rem;\n  height: 20rem;\n}\n\n.board-cell {\n  border: thin solid var(--col-2);\n  position: relative;\n}\n\n.board-cell.hit::before,\n.board-cell.water::before {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.board-cell.hit::before {\n  background-color: var(--col-1);\n  clip-path: polygon(20% 10%, 10% 20%, 40% 50%, 10% 80%, 20% 90%, 50% 60%, 80%\n  90%, 90% 80%, 60% 50%, 90% 20%, 80% 10%, 50% 40%);\n}\n\n.board-cell.water::before {\n  background-color: var(--col-2);\n  clip-path: polygon(10% 80%, 20% 90%, 90% 20%, 80% 10%);\n}\n\n.board-cell.ship,\n.board-cell.hover {\n  background-color: var(--col-2);\n}\n\n\n.board-cell.enemy:hover {\n  background-color: var(--col-3);\n  cursor: pointer;\n}\n\n.board-row {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  grid-auto-columns: 1fr;\n}\n\n/* POPUP TO PLACE SHIPS */\n\n#popup-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(97, 98, 117, 0.554);\n  /* margin-top: -4rem; */\n}\n\n#popup {\n  background-color: var(--col-1);\n  padding: 4rem;\n  border-radius: 1rem;\n  margin: 4rem auto;\n  width: min-content;\n  display: grid;\n  justify-items: center;\n  gap: 1rem;\n}\n\n.select {\n  position: relative;\n}\n\n.select:hover::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: var(--col-2);\n}\n\n@media only screen and (max-width: 600px) {\n  :root {\n    font-size: 0.9rem;\n  }\n\n  .gameboard {\n    width: 15rem;\n    height: 15rem;\n  }\n\n  #content {\n    padding: 1rem;\n    gap: 2rem;\n  }\n\n  #gameboard-wrapper {\n    gap: 2rem;\n  }\n\n  #popup {\n    margin: 1rem auto;\n    padding: 2rem;\n    border-radius: 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;8CAC4C;EAC5C,cAAc;EACd,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,iCAAiC;EACjC,qBAAqB;EACrB,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;;AAEA,cAAc;;AAEd;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,WAAW;EACX,2DAA2D;AAC7D;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B;mDACiD;AACnD;;AAEA;EACE,8BAA8B;EAC9B,sDAAsD;AACxD;;AAEA;;EAEE,8BAA8B;AAChC;;;AAGA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA,yBAAyB;;AAEzB;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,qBAAqB;EACvB;AACF","sourcesContent":[":root {\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,\n  Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --col-1: white;\n  --col-2: black;\n  --col-3: rgb(255, 163, 163);\n}\n\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  color: var(--col-2);\n  background-color: var(--col-1);\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  justify-items: center;\n  padding: 4rem;\n  gap: 4rem;\n  position: relative;\n}\n\n/* MAIN PAGE */\n\n#header {\n  grid-column: 1 / -1;\n  font-size: 4rem;\n}\n\n#footer {\n  grid-column: 1 / -1;\n  align-self: end;\n  color: var(--col-2);\n}\n\n#footer > a {\n  color: var(--col-2);\n}\n\n#gameboard-wrapper {\n  display: grid;\n  gap: 4rem;\n  justify-items: center;\n  width: 100%;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n}\n\n.gameboard {\n  display: grid;\n  grid-auto-rows: 1fr;\n  border: thin solid var(--col-2);\n  width: 20rem;\n  height: 20rem;\n}\n\n.board-cell {\n  border: thin solid var(--col-2);\n  position: relative;\n}\n\n.board-cell.hit::before,\n.board-cell.water::before {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.board-cell.hit::before {\n  background-color: var(--col-1);\n  clip-path: polygon(20% 10%, 10% 20%, 40% 50%, 10% 80%, 20% 90%, 50% 60%, 80%\n  90%, 90% 80%, 60% 50%, 90% 20%, 80% 10%, 50% 40%);\n}\n\n.board-cell.water::before {\n  background-color: var(--col-2);\n  clip-path: polygon(10% 80%, 20% 90%, 90% 20%, 80% 10%);\n}\n\n.board-cell.ship,\n.board-cell.hover {\n  background-color: var(--col-2);\n}\n\n\n.board-cell.enemy:hover {\n  background-color: var(--col-3);\n  cursor: pointer;\n}\n\n.board-row {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  grid-auto-columns: 1fr;\n}\n\n/* POPUP TO PLACE SHIPS */\n\n#popup-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(97, 98, 117, 0.554);\n  /* margin-top: -4rem; */\n}\n\n#popup {\n  background-color: var(--col-1);\n  padding: 4rem;\n  border-radius: 1rem;\n  margin: 4rem auto;\n  width: min-content;\n  display: grid;\n  justify-items: center;\n  gap: 1rem;\n}\n\n.select {\n  position: relative;\n}\n\n.select:hover::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: var(--col-2);\n}\n\n@media only screen and (max-width: 600px) {\n  :root {\n    font-size: 0.9rem;\n  }\n\n  .gameboard {\n    width: 15rem;\n    height: 15rem;\n  }\n\n  #content {\n    padding: 1rem;\n    gap: 2rem;\n  }\n\n  #gameboard-wrapper {\n    gap: 2rem;\n  }\n\n  #popup {\n    margin: 1rem auto;\n    padding: 2rem;\n    border-radius: 0.5rem;\n  }\n}"],"sourceRoot":""}]);
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

  const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const buildBoard = function buildBoard(boardContainer, board = null) {
    y.forEach((row) => {
      const rowContainer = create();
      rowContainer.classList.add('board-row');
      x.forEach((column) => {
        const cell = create();
        if (board !== null) board[row + column] = cell;
        cell.classList.add('board-cell');
        rowContainer.append(cell);
      });
      boardContainer.append(rowContainer);
    });
  };

  // TODO: this function could be put in its own file later
  const getShipCoordinates = function getShipCoordinates({
    start,
    direction,
    length,
  }) {
    const coordinates = [];
    const { letter, number } = start.match(
      /^(?<letter>\w)(?<number>\d{1,2})$/
    ).groups;
    let yStart = y.indexOf(letter);
    let xStart = x.indexOf(number);
    for (let a = 0; a < length; a += 1) {
      if (yStart < 10 && xStart < 10) {
        coordinates.push(y[yStart] + x[xStart]);
        if (direction === 'vertical') {
          yStart += 1;
        } else if (direction === 'horizontal') {
          xStart += 1;
        }
      } else {
        break;
      }
    }
    return coordinates;
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

  // build the popup to place the ships on the board
  const buildPlaceShipPopup = function buildPlaceShipPopup(
    placeShips,
    startGame
  ) {
    const popupContainer = create();
    popupContainer.id = 'popup';
    const popupBackgroundContainer = create();
    popupBackgroundContainer.id = 'popup-background';

    const header = create('h2');
    header.textContent = 'Place your ships';

    const shipName = create('p');
    let length;
    let place;
    [shipName.textContent, length, place] = placeShips.next().value;

    // to place the ships vertical and horizontal
    let vertical = false;
    const rotateButton = create('button');
    rotateButton.id = 'rotate-button';
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', () => {
      vertical = !vertical;
    });

    // board where the ships are placed on 10x10
    const selectBoardContainer = create();
    selectBoardContainer.classList.add('gameboard');
    let selectBoard = {};
    buildBoard(selectBoardContainer, selectBoard);

    // add an eventListener on each board cell with a linked function from
    // the playerBoard. The getShipCoordinates will return a array with
    // coordinates that should be colored
    Object.entries(selectBoard).forEach(([key, value]) => {
      value.classList.add('select');
      value.addEventListener('click', () => {
        const direction = vertical ? 'vertical' : 'horizontal';
        if (place({ start: key, direction })) {
          getShipCoordinates({ length, direction, start: key }).forEach(
            (coordinates) => {
              selectBoard[coordinates].classList.add('ship');
            }
          );
          const genValue = placeShips.next().value;
          // check if all ships are placed
          if (genValue !== undefined) {
            [shipName.textContent, length, place] = genValue;
          } else {
            popupBackgroundContainer.remove();
            selectBoard = null;
            startGame();
          }
        }
      });
      value.addEventListener('mouseenter', () => {
        const direction = vertical ? 'vertical' : 'horizontal';
        getShipCoordinates({ length, direction, start: key }).forEach(
          (coordinates) => {
            selectBoard[coordinates].classList.add('hover');
          }
        );
      });
      value.addEventListener('mouseleave', () => {
        const direction = vertical ? 'vertical' : 'horizontal';
        getShipCoordinates({ length, direction, start: key }).forEach(
          (coordinates) => {
            selectBoard[coordinates].classList.remove('hover');
          }
        );
      });
    });

    popupContainer.append(header, shipName, rotateButton, selectBoardContainer);
    popupBackgroundContainer.append(popupContainer);

    content.append(popupBackgroundContainer);
  };

  // render function

  return {
    buildMainPage,
    buildPlaceShipPopup,
  };
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
      /^(?<letter>\w)(?<number>\d{1,2})$/
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


function Player() {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

  const f = (l) => (obj) => board.place({ ...obj, length: l });
  const placeShips = function* placeShipsOnGameboard() {
    yield ['Carrier', 5, f(5)];
    yield ['Battleship', 4, f(4)];
    yield ['Cruiser', 3, f(3)];
    yield ['Destroyer', 2, f(2)];
    yield ['Destroyer', 2, f(2)];
    yield ['Submarine', 1, f(1)];
    yield ['Submarine', 1, f(1)];
  };

  return {
    attack,
    receiveAttack: board.receiveAttack,
    board: board.board,
    placeShips,
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





const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();

const dom = (0,_dom__WEBPACK_IMPORTED_MODULE_2__["default"])();
dom.buildMainPage();
dom.buildPlaceShipPopup(player.placeShips(), () => {
  console.log(player.board);
});

////////////////////////////////
// function game() {
//   const computer = Player();
//   const computerGameboard = Gameboard();
//   const player = Player();
//   const playerGameboard = Gameboard();

//   // return confirm('Want to play again');
//   return false;
// }

// let playing = true;
// while (playing) {
//   playing = game();
// }
// window.close();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxcXG4gIFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgLS1jb2wtMTogd2hpdGU7XFxuICAtLWNvbC0yOiBibGFjaztcXG4gIC0tY29sLTM6IHJnYigyNTUsIDE2MywgMTYzKTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHZhcigtLWNvbC0yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBNQUlOIFBBR0UgKi9cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcbiNmb290ZXIgPiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcbiNnYW1lYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA0cmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1jb2wtMik7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tY29sLTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5oaXQ6OmJlZm9yZSxcXG4uYm9hcmQtY2VsbC53YXRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ib2FyZC1jZWxsLmhpdDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMTAlLCAxMCUgMjAlLCA0MCUgNTAlLCAxMCUgODAlLCAyMCUgOTAlLCA1MCUgNjAlLCA4MCVcXG4gIDkwJSwgOTAlIDgwJSwgNjAlIDUwJSwgOTAlIDIwJSwgODAlIDEwJSwgNTAlIDQwJSk7XFxufVxcblxcbi5ib2FyZC1jZWxsLndhdGVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTIpO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSA4MCUsIDIwJSA5MCUsIDkwJSAyMCUsIDgwJSAxMCUpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5zaGlwLFxcbi5ib2FyZC1jZWxsLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0yKTtcXG59XFxuXFxuXFxuLmJvYXJkLWNlbGwuZW5lbXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi8qIFBPUFVQIFRPIFBMQUNFIFNISVBTICovXFxuXFxuI3BvcHVwLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5OCwgMTE3LCAwLjU1NCk7XFxuICAvKiBtYXJnaW4tdG9wOiAtNHJlbTsgKi9cXG59XFxuXFxuI3BvcHVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0xKTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc2VsZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlbGVjdDpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuXFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAjZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAjcG9wdXAge1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7OENBQzRDO0VBQzVDLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QjttREFDaUQ7QUFDbkQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0RBQXNEO0FBQ3hEOztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7O0FBR0E7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsXFxuICBVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gIC0tY29sLTE6IHdoaXRlO1xcbiAgLS1jb2wtMjogYmxhY2s7XFxuICAtLWNvbC0zOiByZ2IoMjU1LCAxNjMsIDE2Myk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGdhcDogNHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogTUFJTiBQQUdFICovXFxuXFxuI2hlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBjb2xvcjogdmFyKC0tY29sLTIpO1xcbn1cXG5cXG4jZm9vdGVyID4gYSB7XFxuICBjb2xvcjogdmFyKC0tY29sLTIpO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNHJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tY29sLTIpO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLWNvbC0yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkLWNlbGwuaGl0OjpiZWZvcmUsXFxuLmJvYXJkLWNlbGwud2F0ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5oaXQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMSk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDEwJSwgMTAlIDIwJSwgNDAlIDUwJSwgMTAlIDgwJSwgMjAlIDkwJSwgNTAlIDYwJSwgODAlXFxuICA5MCUsIDkwJSA4MCUsIDYwJSA1MCUsIDkwJSAyMCUsIDgwJSAxMCUsIDUwJSA0MCUpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC53YXRlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0yKTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxMCUgODAlLCAyMCUgOTAlLCA5MCUgMjAlLCA4MCUgMTAlKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwuc2hpcCxcXG4uYm9hcmQtY2VsbC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcblxcbi5ib2FyZC1jZWxsLmVuZW15OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvYXJkLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcbn1cXG5cXG4vKiBQT1BVUCBUTyBQTEFDRSBTSElQUyAqL1xcblxcbiNwb3B1cC1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTgsIDExNywgMC41NTQpO1xcbiAgLyogbWFyZ2luLXRvcDogLTRyZW07ICovXFxufVxcblxcbiNwb3B1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMSk7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1hcmdpbjogNHJlbSBhdXRvO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnNlbGVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3Q6aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgI2dhbWVib2FyZC13cmFwcGVyIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgI3BvcHVwIHtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb20oKSB7XG4gIGNvbnN0IGNyZWF0ZSA9ICh0eXBlID0gJ2RpdicpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZSgpO1xuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcblxuICBjb25zdCB5ID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gIGNvbnN0IHggPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG5cbiAgY29uc3QgYnVpbGRCb2FyZCA9IGZ1bmN0aW9uIGJ1aWxkQm9hcmQoYm9hcmRDb250YWluZXIsIGJvYXJkID0gbnVsbCkge1xuICAgIHkuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBjb25zdCByb3dDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZC1yb3cnKTtcbiAgICAgIHguZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBjcmVhdGUoKTtcbiAgICAgICAgaWYgKGJvYXJkICE9PSBudWxsKSBib2FyZFtyb3cgKyBjb2x1bW5dID0gY2VsbDtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmQoY2VsbCk7XG4gICAgICB9KTtcbiAgICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZChyb3dDb250YWluZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRPRE86IHRoaXMgZnVuY3Rpb24gY291bGQgYmUgcHV0IGluIGl0cyBvd24gZmlsZSBsYXRlclxuICBjb25zdCBnZXRTaGlwQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiBnZXRTaGlwQ29vcmRpbmF0ZXMoe1xuICAgIHN0YXJ0LFxuICAgIGRpcmVjdGlvbixcbiAgICBsZW5ndGgsXG4gIH0pIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICAgIGNvbnN0IHsgbGV0dGVyLCBudW1iZXIgfSA9IHN0YXJ0Lm1hdGNoKFxuICAgICAgL14oPzxsZXR0ZXI+XFx3KSg/PG51bWJlcj5cXGR7MSwyfSkkL1xuICAgICkuZ3JvdXBzO1xuICAgIGxldCB5U3RhcnQgPSB5LmluZGV4T2YobGV0dGVyKTtcbiAgICBsZXQgeFN0YXJ0ID0geC5pbmRleE9mKG51bWJlcik7XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBsZW5ndGg7IGEgKz0gMSkge1xuICAgICAgaWYgKHlTdGFydCA8IDEwICYmIHhTdGFydCA8IDEwKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goeVt5U3RhcnRdICsgeFt4U3RhcnRdKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIHlTdGFydCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgeFN0YXJ0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRNYWluUGFnZSA9IGZ1bmN0aW9uIGJ1aWxkTWFpblBhZ2UoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlKCdoMScpO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcblxuICAgIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgcGxheWVyQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSB7fTtcbiAgICBidWlsZEJvYXJkKHBsYXllckJvYXJkQ29udGFpbmVyLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5hMS5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnc2hpcCcpO1xuICAgIHBsYXllckJvYXJkLmEyLmNsYXNzTGlzdC5hZGQoJ3dhdGVyJyk7XG5cbiAgICBjb25zdCBlbmVteUJvYXJkQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgZW5lbXlCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBjb25zdCBlbmVteUJvYXJkID0ge307XG4gICAgYnVpbGRCb2FyZChlbmVteUJvYXJkQ29udGFpbmVyLCBlbmVteUJvYXJkKTtcbiAgICBPYmplY3QuZW50cmllcyhlbmVteUJvYXJkKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoJ2VuZW15Jyk7XG4gICAgICAvLyB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCgpID0+IGVuZW15KGtleSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgYm9hcmRzQ29udGFpbmVyLmlkID0gJ2dhbWVib2FyZC13cmFwcGVyJztcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kKHBsYXllckJvYXJkQ29udGFpbmVyLCBlbmVteUJvYXJkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZSgncCcpO1xuICAgIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBjcmVhdGUoJ2EnKTtcbiAgICBmb290ZXJMaW5rLnRleHRDb250ZW50ID0gJ1ZpZXcgUHJvamVjdCBPbiBHaXRodWInO1xuICAgIGZvb3RlckxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vVG9tU29lcnIvb2Rpbi1iYXR0bGVzaGlwJztcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckxpbmspO1xuXG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBib2FyZHNDb250YWluZXIsIGZvb3Rlcik7XG4gIH07XG5cbiAgLy8gYnVpbGQgdGhlIHBvcHVwIHRvIHBsYWNlIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmRcbiAgY29uc3QgYnVpbGRQbGFjZVNoaXBQb3B1cCA9IGZ1bmN0aW9uIGJ1aWxkUGxhY2VTaGlwUG9wdXAoXG4gICAgcGxhY2VTaGlwcyxcbiAgICBzdGFydEdhbWVcbiAgKSB7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICBwb3B1cENvbnRhaW5lci5pZCA9ICdwb3B1cCc7XG4gICAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyLmlkID0gJ3BvcHVwLWJhY2tncm91bmQnO1xuXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlKCdoMicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzJztcblxuICAgIGNvbnN0IHNoaXBOYW1lID0gY3JlYXRlKCdwJyk7XG4gICAgbGV0IGxlbmd0aDtcbiAgICBsZXQgcGxhY2U7XG4gICAgW3NoaXBOYW1lLnRleHRDb250ZW50LCBsZW5ndGgsIHBsYWNlXSA9IHBsYWNlU2hpcHMubmV4dCgpLnZhbHVlO1xuXG4gICAgLy8gdG8gcGxhY2UgdGhlIHNoaXBzIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXG4gICAgbGV0IHZlcnRpY2FsID0gZmFsc2U7XG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gY3JlYXRlKCdidXR0b24nKTtcbiAgICByb3RhdGVCdXR0b24uaWQgPSAncm90YXRlLWJ1dHRvbic7XG4gICAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdmVydGljYWwgPSAhdmVydGljYWw7XG4gICAgfSk7XG5cbiAgICAvLyBib2FyZCB3aGVyZSB0aGUgc2hpcHMgYXJlIHBsYWNlZCBvbiAxMHgxMFxuICAgIGNvbnN0IHNlbGVjdEJvYXJkQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgc2VsZWN0Qm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgbGV0IHNlbGVjdEJvYXJkID0ge307XG4gICAgYnVpbGRCb2FyZChzZWxlY3RCb2FyZENvbnRhaW5lciwgc2VsZWN0Qm9hcmQpO1xuXG4gICAgLy8gYWRkIGFuIGV2ZW50TGlzdGVuZXIgb24gZWFjaCBib2FyZCBjZWxsIHdpdGggYSBsaW5rZWQgZnVuY3Rpb24gZnJvbVxuICAgIC8vIHRoZSBwbGF5ZXJCb2FyZC4gVGhlIGdldFNoaXBDb29yZGluYXRlcyB3aWxsIHJldHVybiBhIGFycmF5IHdpdGhcbiAgICAvLyBjb29yZGluYXRlcyB0aGF0IHNob3VsZCBiZSBjb2xvcmVkXG4gICAgT2JqZWN0LmVudHJpZXMoc2VsZWN0Qm9hcmQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG4gICAgICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICBpZiAocGxhY2UoeyBzdGFydDoga2V5LCBkaXJlY3Rpb24gfSkpIHtcbiAgICAgICAgICBnZXRTaGlwQ29vcmRpbmF0ZXMoeyBsZW5ndGgsIGRpcmVjdGlvbiwgc3RhcnQ6IGtleSB9KS5mb3JFYWNoKFxuICAgICAgICAgICAgKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdEJvYXJkW2Nvb3JkaW5hdGVzXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBnZW5WYWx1ZSA9IHBsYWNlU2hpcHMubmV4dCgpLnZhbHVlO1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBhcmUgcGxhY2VkXG4gICAgICAgICAgaWYgKGdlblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFtzaGlwTmFtZS50ZXh0Q29udGVudCwgbGVuZ3RoLCBwbGFjZV0gPSBnZW5WYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgc2VsZWN0Qm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgZ2V0U2hpcENvb3JkaW5hdGVzKHsgbGVuZ3RoLCBkaXJlY3Rpb24sIHN0YXJ0OiBrZXkgfSkuZm9yRWFjaChcbiAgICAgICAgICAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgIHNlbGVjdEJvYXJkW2Nvb3JkaW5hdGVzXS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICBnZXRTaGlwQ29vcmRpbmF0ZXMoeyBsZW5ndGgsIGRpcmVjdGlvbiwgc3RhcnQ6IGtleSB9KS5mb3JFYWNoKFxuICAgICAgICAgIChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgc2VsZWN0Qm9hcmRbY29vcmRpbmF0ZXNdLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwb3B1cENvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBzaGlwTmFtZSwgcm90YXRlQnV0dG9uLCBzZWxlY3RCb2FyZENvbnRhaW5lcik7XG4gICAgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChwb3B1cENvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZChwb3B1cEJhY2tncm91bmRDb250YWluZXIpO1xuICB9O1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvblxuXG4gIHJldHVybiB7XG4gICAgYnVpbGRNYWluUGFnZSxcbiAgICBidWlsZFBsYWNlU2hpcFBvcHVwLFxuICB9O1xufVxuXG4vLyBUT0RPOlxuLy8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byBvbmUgYm9hcmRcbi8vIGlmIGEgc2hpcCBpcyBvbiBhIGNlbGwgdGhlcmUgc2hvdWxkIGJlIGEgY2xhc3MgYWRkZWRcbi8vIGFmdGVyIGVhY2ggdHVybiB0aGUgY2xhc3NlcyBhcmUgcmVyZW5kZXJlZFxuLy8gdGhlIHBsYXllciBvYmogbmVlZHMgdG8gY2FsbCB0aGUgcmVyZW5kZXJcbi8vIHRoZSBvbmUgYm9hcmQgbXVzdCBiZSBhYmxlIHRvIGNhbGwgdGhlIHBsYXllciBhdHRhY2sgZnVuY3Rpb25cbi8vIGFmdGVyIHRoZSBhdHRhY2sgaXMgY2FsbGVkIHRoZSBldmVudCBsaXN0ZW5lciBzaG91bGQgYmUgZGVsZXRlZFxuLy8gcG9wdXAgdG8gcGxhY2UgdGhlIGJvYXJkIHdpdGggdGhlIHJlYWwgZ2FtZWJvYXJkIG9iamVjdFxuLy8gY29tcHV0ZXIgcGxheWVyIG9iaiBuZWVkcyB0byBwbGFjZSB0aGUgc2hpcHMgcmFuZG9tbHlcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgeCA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgY29uc3QgeSA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICBjb25zdCBib2FyZCA9IHt9O1xuXG4gIC8vIHRvIHNhdmUgc29tZSB0eXBpbmcgdGltZVxuICB5LmZvckVhY2goKGVsZW1lbnRYKSA9PiB7XG4gICAgeC5mb3JFYWNoKChlbGVtZW50WSkgPT4ge1xuICAgICAgYm9hcmRbZWxlbWVudFggKyBlbGVtZW50WV0gPSBudWxsO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBwbGFjZSA9IGZ1bmN0aW9uIHBsYWNlU2hpcCh7IHN0YXJ0LCBkaXJlY3Rpb24sIGxlbmd0aCB9KSB7XG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoeyBsZW5ndGggfSk7XG4gICAgY29uc3QgeyBsZXR0ZXIsIG51bWJlciB9ID0gc3RhcnQubWF0Y2goXG4gICAgICAvXig/PGxldHRlcj5cXHcpKD88bnVtYmVyPlxcZHsxLDJ9KSQvXG4gICAgKS5ncm91cHM7XG4gICAgbGV0IHlTdGFydCA9IHkuaW5kZXhPZihsZXR0ZXIpO1xuICAgIGxldCB4U3RhcnQgPSB4LmluZGV4T2YobnVtYmVyKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBsZW5ndGg7IGEgKz0gMSkge1xuICAgICAgaWYgKGJvYXJkW3lbeVN0YXJ0XSArIHhbeFN0YXJ0XV0gPT09IG51bGwpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh5W3lTdGFydF0gKyB4W3hTdGFydF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB5U3RhcnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgeFN0YXJ0ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbEhpdCA9IChwb3NpdGlvbikgPT4gKCkgPT4ge1xuICAgICAgc2hpcC5oaXQoeyByZWxhdGl2ZUNvb3JkaW5hdGVzOiBwb3NpdGlvbiB9KTtcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpO1xuICAgIH07XG5cbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBjYWxsSGl0KGluZGV4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQWxsU3VuayA9IGZ1bmN0aW9uIGNoZWNrSWZBbGxTaGlwc0hhdmVTdW5rKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGJvYXJkKS5ldmVyeShcbiAgICAgIChlbGVtZW50KSA9PiB0eXBlb2YgZWxlbWVudCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodHlwZW9mIGJvYXJkW2Nvb3JkaW5hdGVzXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgaXNTdW5rID0gYm9hcmRbY29vcmRpbmF0ZXNdKCk7XG4gICAgICBib2FyZFtjb29yZGluYXRlc10gPSAnaGl0JztcbiAgICAgIGlmIChpc1N1bmspIHtcbiAgICAgICAgaWYgKGNoZWNrQWxsU3VuaygpKSB7XG4gICAgICAgICAgcmV0dXJuICdhbGxTdW5rJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3N1bmsnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cbiAgICBib2FyZFtjb29yZGluYXRlc10gPSAnbWlzcyc7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHBsYWNlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKCkge1xuICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIGF0dGFja0VuZW15R2FtZWJvYXJkKHtcbiAgICBnYW1lYm9hcmQsXG4gICAgY29vcmRpbmF0ZXMgPSBudWxsLFxuICB9KSB7XG4gICAgaWYgKGNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmVlQ29vcmRpbmF0ZXMgPSBPYmplY3QuZW50cmllcyhnYW1lYm9hcmQuYm9hcmQpXG4gICAgICAgIC5maWx0ZXIoKFtrZXksIHZhbHVlXSkgPT4gIXZhbHVlKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGtleSk7XG4gICAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgZnJlZUNvb3JkaW5hdGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZyZWVDb29yZGluYXRlcy5sZW5ndGgpXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmID0gKGwpID0+IChvYmopID0+IGJvYXJkLnBsYWNlKHsgLi4ub2JqLCBsZW5ndGg6IGwgfSk7XG4gIGNvbnN0IHBsYWNlU2hpcHMgPSBmdW5jdGlvbiogcGxhY2VTaGlwc09uR2FtZWJvYXJkKCkge1xuICAgIHlpZWxkIFsnQ2FycmllcicsIDUsIGYoNSldO1xuICAgIHlpZWxkIFsnQmF0dGxlc2hpcCcsIDQsIGYoNCldO1xuICAgIHlpZWxkIFsnQ3J1aXNlcicsIDMsIGYoMyldO1xuICAgIHlpZWxkIFsnRGVzdHJveWVyJywgMiwgZigyKV07XG4gICAgeWllbGQgWydEZXN0cm95ZXInLCAyLCBmKDIpXTtcbiAgICB5aWVsZCBbJ1N1Ym1hcmluZScsIDEsIGYoMSldO1xuICAgIHlpZWxkIFsnU3VibWFyaW5lJywgMSwgZigxKV07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2ssXG4gICAgcmVjZWl2ZUF0dGFjazogYm9hcmQucmVjZWl2ZUF0dGFjayxcbiAgICBib2FyZDogYm9hcmQuYm9hcmQsXG4gICAgcGxhY2VTaGlwcyxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoeyBsZW5ndGggfSkge1xuICBjb25zdCBzaGlwID0gW107XG4gIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4ICs9IDEpIHtcbiAgICBzaGlwLnB1c2godHJ1ZSk7XG4gIH1cblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiBnb3RIaXQoXG4gICAgeyByZWxhdGl2ZUNvb3JkaW5hdGVzIH0gPSB7XG4gICAgICByZWxhdGl2ZUNvb3JkaW5hdGVzOiBudWxsLFxuICAgIH1cbiAgKSB7XG4gICAgaWYgKHJlbGF0aXZlQ29vcmRpbmF0ZXMgPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vICdyZWxhdGl2ZUNvb3JkaW5hdGVzJ1wiKTtcbiAgICBpZiAocmVsYXRpdmVDb29yZGluYXRlcyA8IDAgfHwgcmVsYXRpdmVDb29yZGluYXRlcyA+PSBzaGlwLmxlbmd0aClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nICdyZWxhdGl2ZUNvb3JkaW5hdGVzJ1wiKTtcblxuICAgIHNoaXBbcmVsYXRpdmVDb29yZGluYXRlc10gPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwLmV2ZXJ5KChlbGVtZW50KSA9PiAhZWxlbWVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcblxuY29uc3QgZG9tID0gRG9tKCk7XG5kb20uYnVpbGRNYWluUGFnZSgpO1xuZG9tLmJ1aWxkUGxhY2VTaGlwUG9wdXAocGxheWVyLnBsYWNlU2hpcHMoKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQpO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBmdW5jdGlvbiBnYW1lKCkge1xuLy8gICBjb25zdCBjb21wdXRlciA9IFBsYXllcigpO1xuLy8gICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuLy8gICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbi8vICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbi8vICAgLy8gcmV0dXJuIGNvbmZpcm0oJ1dhbnQgdG8gcGxheSBhZ2FpbicpO1xuLy8gICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbi8vIGxldCBwbGF5aW5nID0gdHJ1ZTtcbi8vIHdoaWxlIChwbGF5aW5nKSB7XG4vLyAgIHBsYXlpbmcgPSBnYW1lKCk7XG4vLyB9XG4vLyB3aW5kb3cuY2xvc2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==