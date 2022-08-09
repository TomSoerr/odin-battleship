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

  const playerBoard = {};
  const enemyBoard = {};

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

  const buildMainPage = function buildMainPage(attack) {
    const header = create('h1');
    header.id = 'header';
    header.textContent = 'Battleship';

    const playerBoardContainer = create();
    playerBoardContainer.classList.add('gameboard');
    buildBoard(playerBoardContainer, playerBoard);

    const enemyBoardContainer = create();
    enemyBoardContainer.classList.add('gameboard');
    buildBoard(enemyBoardContainer, enemyBoard);

    Object.entries(enemyBoard).forEach(([key, value]) => {
      value.classList.add('enemy');
      function clickEnemyCell() {
        attack(key);
        value.classList.remove('enemy');
        value.removeEventListener('click', clickEnemyCell);
      }
      value.addEventListener('click', clickEnemyCell);
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
  const buildPlaceShipPopup = function buildPlaceShipPopup(placeShips, render) {
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
            render();
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

  const render = function renderGameboards(player, computer) {
    Object.entries(player).forEach(([key, value]) => {
      switch (true) {
        case typeof value === 'function':
          playerBoard[key].classList.add('ship');
          break;
        case value === 'miss':
          playerBoard[key].classList.add('water');
          break;
        case value === 'hit':
          playerBoard[key].classList.add('hit');
          break;
        default:
      }
    });
    Object.entries(computer).forEach(([key, value]) => {
      if (value === 'miss') {
        enemyBoard[key].classList.add('water');
      } else if (value === 'hit') {
        enemyBoard[key].classList.add('ship');
        enemyBoard[key].classList.add('hit');
      }
    });
    console.log(computer);
  };

  const remove = () => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.lastChild);
    }
  };

  return {
    buildMainPage,
    buildPlaceShipPopup,
    render,
    remove,
  };
}


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
        .filter(([key, value]) => value !== 'hit' && value !== 'miss')
        .map(([key, value]) => key);
      return gameboard.receiveAttack(
        freeCoordinates[Math.floor(Math.random() * freeCoordinates.length)]
      );
    }
    return gameboard.receiveAttack(coordinates);
  };

  // generator function that returns each ship
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

  // function that places all ships randomly the brute force way
  const placeRandomShips = function placeRandomShipsForComputerPlayer() {
    const generateShips = placeShips();
    const direction = ['horizontal', 'vertical'];
    const x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    while (true) {
      const obj = generateShips.next();
      const { value, done } = obj;
      if (done) break;
      const [, , placeFunction] = value;

      let coords;
      let dir;
      do {
        coords =
          y[Math.floor(Math.random() * y.length)] +
          x[Math.floor(Math.random() * x.length)];
        dir = direction[Math.floor(Math.random() * direction.length)];
      } while (!placeFunction({ start: coords, direction: dir }));
    }
    return true;
  };

  return {
    attack,
    receiveAttack: board.receiveAttack,
    board: board.board,
    placeShips,
    placeRandomShips,
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




let player;
let computer;
let dom;

const checkWinner = function checkForAWinner() {
  if (
    Object.values(player.board).reduce((prev, curr) => {
      if (!prev) return false;
      if (typeof curr === 'function') {
        return false;
      }
      return true;
    }, true)
  ) {
    alert('computer is the winner');
    return true;
  }
  if (
    Object.values(computer.board).reduce((prev, curr) => {
      if (!prev) return false;
      if (typeof curr === 'function') {
        return false;
      }
      return true;
    }, true)
  ) {
    alert('player is the winner');
    return true;
  }
  return false;
};

const gameloop = function gameloop() {
  player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (dom) dom.remove();
  dom = (0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();

  dom.buildMainPage((coords) => {
    player.attack({ gameboard: computer, coordinates: coords });
    dom.render(player.board, computer.board);
    if (checkWinner()) gameloop();
    computer.attack({ gameboard: player });
    dom.render(player.board, computer.board);
    if (checkWinner()) gameloop();
  });

  dom.buildPlaceShipPopup(player.placeShips(), () => {
    computer.placeRandomShips();
    dom.render(player.board, computer.board);
  });
};

gameloop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ047QUFDSDs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG1EQUFNO0FBQ2pCLGFBQWEsbURBQU07QUFDbkI7QUFDQSxRQUFRLGdEQUFHOztBQUVYO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RDtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsXFxuICBVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gIC0tY29sLTE6IHdoaXRlO1xcbiAgLS1jb2wtMjogYmxhY2s7XFxuICAtLWNvbC0zOiByZ2IoMjU1LCAxNjMsIDE2Myk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGdhcDogNHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogTUFJTiBQQUdFICovXFxuXFxuI2hlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBjb2xvcjogdmFyKC0tY29sLTIpO1xcbn1cXG5cXG4jZm9vdGVyID4gYSB7XFxuICBjb2xvcjogdmFyKC0tY29sLTIpO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNHJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tY29sLTIpO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG59XFxuXFxuLmJvYXJkLWNlbGwge1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLWNvbC0yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkLWNlbGwuaGl0OjpiZWZvcmUsXFxuLmJvYXJkLWNlbGwud2F0ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC5oaXQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMSk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDEwJSwgMTAlIDIwJSwgNDAlIDUwJSwgMTAlIDgwJSwgMjAlIDkwJSwgNTAlIDYwJSwgODAlXFxuICA5MCUsIDkwJSA4MCUsIDYwJSA1MCUsIDkwJSAyMCUsIDgwJSAxMCUsIDUwJSA0MCUpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbC53YXRlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0yKTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxMCUgODAlLCAyMCUgOTAlLCA5MCUgMjAlLCA4MCUgMTAlKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwuc2hpcCxcXG4uYm9hcmQtY2VsbC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMik7XFxufVxcblxcblxcbi5ib2FyZC1jZWxsLmVuZW15OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvYXJkLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcbn1cXG5cXG4vKiBQT1BVUCBUTyBQTEFDRSBTSElQUyAqL1xcblxcbiNwb3B1cC1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTgsIDExNywgMC41NTQpO1xcbiAgLyogbWFyZ2luLXRvcDogLTRyZW07ICovXFxufVxcblxcbiNwb3B1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMSk7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1hcmdpbjogNHJlbSBhdXRvO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnNlbGVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3Q6aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcblxcbiAgLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgI2dhbWVib2FyZC13cmFwcGVyIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgI3BvcHVwIHtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOzhDQUM0QztFQUM1QyxjQUFjO0VBQ2QsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUI7bURBQ2lEO0FBQ25EOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNEQUFzRDtBQUN4RDs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7OztBQUdBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFxcbiAgVWJ1bnR1LENhbnRhcmVsbCxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLHNhbnMtc2VyaWY7XFxuICAtLWNvbC0xOiB3aGl0ZTtcXG4gIC0tY29sLTI6IGJsYWNrO1xcbiAgLS1jb2wtMzogcmdiKDI1NSwgMTYzLCAxNjMpO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tY29sLTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTEpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBnYXA6IDRyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIE1BSU4gUEFHRSAqL1xcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgY29sb3I6IHZhcigtLWNvbC0yKTtcXG59XFxuXFxuI2Zvb3RlciA+IGEge1xcbiAgY29sb3I6IHZhcigtLWNvbC0yKTtcXG59XFxuXFxuI2dhbWVib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDRyZW07XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLWNvbC0yKTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1jb2wtMik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1jZWxsLmhpdDo6YmVmb3JlLFxcbi5ib2FyZC1jZWxsLndhdGVyOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmJvYXJkLWNlbGwuaGl0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTEpO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDIwJSAxMCUsIDEwJSAyMCUsIDQwJSA1MCUsIDEwJSA4MCUsIDIwJSA5MCUsIDUwJSA2MCUsIDgwJVxcbiAgOTAlLCA5MCUgODAlLCA2MCUgNTAlLCA5MCUgMjAlLCA4MCUgMTAlLCA1MCUgNDAlKTtcXG59XFxuXFxuLmJvYXJkLWNlbGwud2F0ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMik7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDgwJSwgMjAlIDkwJSwgOTAlIDIwJSwgODAlIDEwJSk7XFxufVxcblxcbi5ib2FyZC1jZWxsLnNoaXAsXFxuLmJvYXJkLWNlbGwuaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTIpO1xcbn1cXG5cXG5cXG4uYm9hcmQtY2VsbC5lbmVteTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib2FyZC1yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLyogUE9QVVAgVE8gUExBQ0UgU0hJUFMgKi9cXG5cXG4jcG9wdXAtYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk4LCAxMTcsIDAuNTU0KTtcXG4gIC8qIG1hcmdpbi10b3A6IC00cmVtOyAqL1xcbn1cXG5cXG4jcG9wdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTEpO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBtYXJnaW46IDRyZW0gYXV0bztcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zZWxlY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VsZWN0OmhvdmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbC0yKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG5cXG4gIC5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGhlaWdodDogMTVyZW07XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdhcDogMnJlbTtcXG4gIH1cXG5cXG4gICNnYW1lYm9hcmQtd3JhcHBlciB7XFxuICAgIGdhcDogMnJlbTtcXG4gIH1cXG5cXG4gICNwb3B1cCB7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9tKCkge1xuICBjb25zdCBjcmVhdGUgPSAodHlwZSA9ICdkaXYnKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGUoKTtcbiAgY29udGVudC5pZCA9ICdjb250ZW50JztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSB7fTtcbiAgY29uc3QgZW5lbXlCb2FyZCA9IHt9O1xuXG4gIGNvbnN0IHkgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbiAgY29uc3QgeCA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcblxuICBjb25zdCBidWlsZEJvYXJkID0gZnVuY3Rpb24gYnVpbGRCb2FyZChib2FyZENvbnRhaW5lciwgYm9hcmQgPSBudWxsKSB7XG4gICAgeS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGNyZWF0ZSgpO1xuICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXJvdycpO1xuICAgICAgeC5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZSgpO1xuICAgICAgICBpZiAoYm9hcmQgIT09IG51bGwpIGJvYXJkW3JvdyArIGNvbHVtbl0gPSBjZWxsO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcbiAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZChjZWxsKTtcbiAgICAgIH0pO1xuICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kKHJvd0NvbnRhaW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVE9ETzogdGhpcyBmdW5jdGlvbiBjb3VsZCBiZSBwdXQgaW4gaXRzIG93biBmaWxlIGxhdGVyXG4gIGNvbnN0IGdldFNoaXBDb29yZGluYXRlcyA9IGZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyh7XG4gICAgc3RhcnQsXG4gICAgZGlyZWN0aW9uLFxuICAgIGxlbmd0aCxcbiAgfSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgY29uc3QgeyBsZXR0ZXIsIG51bWJlciB9ID0gc3RhcnQubWF0Y2goXG4gICAgICAvXig/PGxldHRlcj5cXHcpKD88bnVtYmVyPlxcZHsxLDJ9KSQvXG4gICAgKS5ncm91cHM7XG4gICAgbGV0IHlTdGFydCA9IHkuaW5kZXhPZihsZXR0ZXIpO1xuICAgIGxldCB4U3RhcnQgPSB4LmluZGV4T2YobnVtYmVyKTtcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGxlbmd0aDsgYSArPSAxKSB7XG4gICAgICBpZiAoeVN0YXJ0IDwgMTAgJiYgeFN0YXJ0IDwgMTApIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh5W3lTdGFydF0gKyB4W3hTdGFydF0pO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgeVN0YXJ0ICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB4U3RhcnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfTtcblxuICBjb25zdCBidWlsZE1haW5QYWdlID0gZnVuY3Rpb24gYnVpbGRNYWluUGFnZShhdHRhY2spIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGUoJ2gxJyk7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICBwbGF5ZXJCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBidWlsZEJvYXJkKHBsYXllckJvYXJkQ29udGFpbmVyLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICBjb25zdCBlbmVteUJvYXJkQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgZW5lbXlCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBidWlsZEJvYXJkKGVuZW15Qm9hcmRDb250YWluZXIsIGVuZW15Qm9hcmQpO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoZW5lbXlCb2FyZCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdlbmVteScpO1xuICAgICAgZnVuY3Rpb24gY2xpY2tFbmVteUNlbGwoKSB7XG4gICAgICAgIGF0dGFjayhrZXkpO1xuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdlbmVteScpO1xuICAgICAgICB2YWx1ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRW5lbXlDZWxsKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tFbmVteUNlbGwpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgYm9hcmRzQ29udGFpbmVyLmlkID0gJ2dhbWVib2FyZC13cmFwcGVyJztcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kKHBsYXllckJvYXJkQ29udGFpbmVyLCBlbmVteUJvYXJkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZSgncCcpO1xuICAgIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBjcmVhdGUoJ2EnKTtcbiAgICBmb290ZXJMaW5rLnRleHRDb250ZW50ID0gJ1ZpZXcgUHJvamVjdCBPbiBHaXRodWInO1xuICAgIGZvb3RlckxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vVG9tU29lcnIvb2Rpbi1iYXR0bGVzaGlwJztcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckxpbmspO1xuXG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBib2FyZHNDb250YWluZXIsIGZvb3Rlcik7XG4gIH07XG5cbiAgLy8gYnVpbGQgdGhlIHBvcHVwIHRvIHBsYWNlIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmRcbiAgY29uc3QgYnVpbGRQbGFjZVNoaXBQb3B1cCA9IGZ1bmN0aW9uIGJ1aWxkUGxhY2VTaGlwUG9wdXAocGxhY2VTaGlwcywgcmVuZGVyKSB7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBjcmVhdGUoKTtcbiAgICBwb3B1cENvbnRhaW5lci5pZCA9ICdwb3B1cCc7XG4gICAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyLmlkID0gJ3BvcHVwLWJhY2tncm91bmQnO1xuXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlKCdoMicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzJztcblxuICAgIGNvbnN0IHNoaXBOYW1lID0gY3JlYXRlKCdwJyk7XG4gICAgbGV0IGxlbmd0aDtcbiAgICBsZXQgcGxhY2U7XG4gICAgW3NoaXBOYW1lLnRleHRDb250ZW50LCBsZW5ndGgsIHBsYWNlXSA9IHBsYWNlU2hpcHMubmV4dCgpLnZhbHVlO1xuXG4gICAgLy8gdG8gcGxhY2UgdGhlIHNoaXBzIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXG4gICAgbGV0IHZlcnRpY2FsID0gZmFsc2U7XG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gY3JlYXRlKCdidXR0b24nKTtcbiAgICByb3RhdGVCdXR0b24uaWQgPSAncm90YXRlLWJ1dHRvbic7XG4gICAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdmVydGljYWwgPSAhdmVydGljYWw7XG4gICAgfSk7XG5cbiAgICAvLyBib2FyZCB3aGVyZSB0aGUgc2hpcHMgYXJlIHBsYWNlZCBvbiAxMHgxMFxuICAgIGNvbnN0IHNlbGVjdEJvYXJkQ29udGFpbmVyID0gY3JlYXRlKCk7XG4gICAgc2VsZWN0Qm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgbGV0IHNlbGVjdEJvYXJkID0ge307XG4gICAgYnVpbGRCb2FyZChzZWxlY3RCb2FyZENvbnRhaW5lciwgc2VsZWN0Qm9hcmQpO1xuXG4gICAgLy8gYWRkIGFuIGV2ZW50TGlzdGVuZXIgb24gZWFjaCBib2FyZCBjZWxsIHdpdGggYSBsaW5rZWQgZnVuY3Rpb24gZnJvbVxuICAgIC8vIHRoZSBwbGF5ZXJCb2FyZC4gVGhlIGdldFNoaXBDb29yZGluYXRlcyB3aWxsIHJldHVybiBhIGFycmF5IHdpdGhcbiAgICAvLyBjb29yZGluYXRlcyB0aGF0IHNob3VsZCBiZSBjb2xvcmVkXG4gICAgT2JqZWN0LmVudHJpZXMoc2VsZWN0Qm9hcmQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgdmFsdWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG4gICAgICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICBpZiAocGxhY2UoeyBzdGFydDoga2V5LCBkaXJlY3Rpb24gfSkpIHtcbiAgICAgICAgICBnZXRTaGlwQ29vcmRpbmF0ZXMoeyBsZW5ndGgsIGRpcmVjdGlvbiwgc3RhcnQ6IGtleSB9KS5mb3JFYWNoKFxuICAgICAgICAgICAgKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdEJvYXJkW2Nvb3JkaW5hdGVzXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBnZW5WYWx1ZSA9IHBsYWNlU2hpcHMubmV4dCgpLnZhbHVlO1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBhcmUgcGxhY2VkXG4gICAgICAgICAgaWYgKGdlblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFtzaGlwTmFtZS50ZXh0Q29udGVudCwgbGVuZ3RoLCBwbGFjZV0gPSBnZW5WYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgc2VsZWN0Qm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgZ2V0U2hpcENvb3JkaW5hdGVzKHsgbGVuZ3RoLCBkaXJlY3Rpb24sIHN0YXJ0OiBrZXkgfSkuZm9yRWFjaChcbiAgICAgICAgICAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgIHNlbGVjdEJvYXJkW2Nvb3JkaW5hdGVzXS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICBnZXRTaGlwQ29vcmRpbmF0ZXMoeyBsZW5ndGgsIGRpcmVjdGlvbiwgc3RhcnQ6IGtleSB9KS5mb3JFYWNoKFxuICAgICAgICAgIChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgc2VsZWN0Qm9hcmRbY29vcmRpbmF0ZXNdLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwb3B1cENvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBzaGlwTmFtZSwgcm90YXRlQnV0dG9uLCBzZWxlY3RCb2FyZENvbnRhaW5lcik7XG4gICAgcG9wdXBCYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChwb3B1cENvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZChwb3B1cEJhY2tncm91bmRDb250YWluZXIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlckdhbWVib2FyZHMocGxheWVyLCBjb21wdXRlcikge1xuICAgIE9iamVjdC5lbnRyaWVzKHBsYXllcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic6XG4gICAgICAgICAgcGxheWVyQm9hcmRba2V5XS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdmFsdWUgPT09ICdtaXNzJzpcbiAgICAgICAgICBwbGF5ZXJCb2FyZFtrZXldLmNsYXNzTGlzdC5hZGQoJ3dhdGVyJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdmFsdWUgPT09ICdoaXQnOlxuICAgICAgICAgIHBsYXllckJvYXJkW2tleV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmVudHJpZXMoY29tcHV0ZXIpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSAnbWlzcycpIHtcbiAgICAgICAgZW5lbXlCb2FyZFtrZXldLmNsYXNzTGlzdC5hZGQoJ3dhdGVyJyk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnaGl0Jykge1xuICAgICAgICBlbmVteUJvYXJkW2tleV0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICBlbmVteUJvYXJkW2tleV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY29tcHV0ZXIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBidWlsZE1haW5QYWdlLFxuICAgIGJ1aWxkUGxhY2VTaGlwUG9wdXAsXG4gICAgcmVuZGVyLFxuICAgIHJlbW92ZSxcbiAgfTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgeCA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgY29uc3QgeSA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICBjb25zdCBib2FyZCA9IHt9O1xuXG4gIC8vIHRvIHNhdmUgc29tZSB0eXBpbmcgdGltZVxuICB5LmZvckVhY2goKGVsZW1lbnRYKSA9PiB7XG4gICAgeC5mb3JFYWNoKChlbGVtZW50WSkgPT4ge1xuICAgICAgYm9hcmRbZWxlbWVudFggKyBlbGVtZW50WV0gPSBudWxsO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBwbGFjZSA9IGZ1bmN0aW9uIHBsYWNlU2hpcCh7IHN0YXJ0LCBkaXJlY3Rpb24sIGxlbmd0aCB9KSB7XG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoeyBsZW5ndGggfSk7XG4gICAgY29uc3QgeyBsZXR0ZXIsIG51bWJlciB9ID0gc3RhcnQubWF0Y2goXG4gICAgICAvXig/PGxldHRlcj5cXHcpKD88bnVtYmVyPlxcZHsxLDJ9KSQvXG4gICAgKS5ncm91cHM7XG4gICAgbGV0IHlTdGFydCA9IHkuaW5kZXhPZihsZXR0ZXIpO1xuICAgIGxldCB4U3RhcnQgPSB4LmluZGV4T2YobnVtYmVyKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBsZW5ndGg7IGEgKz0gMSkge1xuICAgICAgaWYgKGJvYXJkW3lbeVN0YXJ0XSArIHhbeFN0YXJ0XV0gPT09IG51bGwpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh5W3lTdGFydF0gKyB4W3hTdGFydF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB5U3RhcnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgeFN0YXJ0ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbEhpdCA9IChwb3NpdGlvbikgPT4gKCkgPT4ge1xuICAgICAgc2hpcC5oaXQoeyByZWxhdGl2ZUNvb3JkaW5hdGVzOiBwb3NpdGlvbiB9KTtcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpO1xuICAgIH07XG5cbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBjYWxsSGl0KGluZGV4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQWxsU3VuayA9IGZ1bmN0aW9uIGNoZWNrSWZBbGxTaGlwc0hhdmVTdW5rKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGJvYXJkKS5ldmVyeShcbiAgICAgIChlbGVtZW50KSA9PiB0eXBlb2YgZWxlbWVudCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodHlwZW9mIGJvYXJkW2Nvb3JkaW5hdGVzXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgaXNTdW5rID0gYm9hcmRbY29vcmRpbmF0ZXNdKCk7XG4gICAgICBib2FyZFtjb29yZGluYXRlc10gPSAnaGl0JztcbiAgICAgIGlmIChpc1N1bmspIHtcbiAgICAgICAgaWYgKGNoZWNrQWxsU3VuaygpKSB7XG4gICAgICAgICAgcmV0dXJuICdhbGxTdW5rJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3N1bmsnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cbiAgICBib2FyZFtjb29yZGluYXRlc10gPSAnbWlzcyc7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHBsYWNlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKCkge1xuICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIGF0dGFja0VuZW15R2FtZWJvYXJkKHtcbiAgICBnYW1lYm9hcmQsXG4gICAgY29vcmRpbmF0ZXMgPSBudWxsLFxuICB9KSB7XG4gICAgaWYgKGNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmVlQ29vcmRpbmF0ZXMgPSBPYmplY3QuZW50cmllcyhnYW1lYm9hcmQuYm9hcmQpXG4gICAgICAgIC5maWx0ZXIoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUgIT09ICdoaXQnICYmIHZhbHVlICE9PSAnbWlzcycpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ga2V5KTtcbiAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgZnJlZUNvb3JkaW5hdGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZyZWVDb29yZGluYXRlcy5sZW5ndGgpXVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICAvLyBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVhY2ggc2hpcFxuICBjb25zdCBmID0gKGwpID0+IChvYmopID0+IGJvYXJkLnBsYWNlKHsgLi4ub2JqLCBsZW5ndGg6IGwgfSk7XG4gIGNvbnN0IHBsYWNlU2hpcHMgPSBmdW5jdGlvbiogcGxhY2VTaGlwc09uR2FtZWJvYXJkKCkge1xuICAgIHlpZWxkIFsnQ2FycmllcicsIDUsIGYoNSldO1xuICAgIHlpZWxkIFsnQmF0dGxlc2hpcCcsIDQsIGYoNCldO1xuICAgIHlpZWxkIFsnQ3J1aXNlcicsIDMsIGYoMyldO1xuICAgIHlpZWxkIFsnRGVzdHJveWVyJywgMiwgZigyKV07XG4gICAgeWllbGQgWydEZXN0cm95ZXInLCAyLCBmKDIpXTtcbiAgICB5aWVsZCBbJ1N1Ym1hcmluZScsIDEsIGYoMSldO1xuICAgIHlpZWxkIFsnU3VibWFyaW5lJywgMSwgZigxKV07XG4gIH07XG5cbiAgLy8gZnVuY3Rpb24gdGhhdCBwbGFjZXMgYWxsIHNoaXBzIHJhbmRvbWx5IHRoZSBicnV0ZSBmb3JjZSB3YXlcbiAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9IGZ1bmN0aW9uIHBsYWNlUmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcigpIHtcbiAgICBjb25zdCBnZW5lcmF0ZVNoaXBzID0gcGxhY2VTaGlwcygpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuICAgIGNvbnN0IHggPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgY29uc3QgeSA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IG9iaiA9IGdlbmVyYXRlU2hpcHMubmV4dCgpO1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gb2JqO1xuICAgICAgaWYgKGRvbmUpIGJyZWFrO1xuICAgICAgY29uc3QgWywgLCBwbGFjZUZ1bmN0aW9uXSA9IHZhbHVlO1xuXG4gICAgICBsZXQgY29vcmRzO1xuICAgICAgbGV0IGRpcjtcbiAgICAgIGRvIHtcbiAgICAgICAgY29vcmRzID1cbiAgICAgICAgICB5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHkubGVuZ3RoKV0gK1xuICAgICAgICAgIHhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogeC5sZW5ndGgpXTtcbiAgICAgICAgZGlyID0gZGlyZWN0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbi5sZW5ndGgpXTtcbiAgICAgIH0gd2hpbGUgKCFwbGFjZUZ1bmN0aW9uKHsgc3RhcnQ6IGNvb3JkcywgZGlyZWN0aW9uOiBkaXIgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFjayxcbiAgICByZWNlaXZlQXR0YWNrOiBib2FyZC5yZWNlaXZlQXR0YWNrLFxuICAgIGJvYXJkOiBib2FyZC5ib2FyZCxcbiAgICBwbGFjZVNoaXBzLFxuICAgIHBsYWNlUmFuZG9tU2hpcHMsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKHsgbGVuZ3RoIH0pIHtcbiAgY29uc3Qgc2hpcCA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlbmd0aDsgeCArPSAxKSB7XG4gICAgc2hpcC5wdXNoKHRydWUpO1xuICB9XG5cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gZ290SGl0KFxuICAgIHsgcmVsYXRpdmVDb29yZGluYXRlcyB9ID0ge1xuICAgICAgcmVsYXRpdmVDb29yZGluYXRlczogbnVsbCxcbiAgICB9XG4gICkge1xuICAgIGlmIChyZWxhdGl2ZUNvb3JkaW5hdGVzID09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyAncmVsYXRpdmVDb29yZGluYXRlcydcIik7XG4gICAgaWYgKHJlbGF0aXZlQ29vcmRpbmF0ZXMgPCAwIHx8IHJlbGF0aXZlQ29vcmRpbmF0ZXMgPj0gc2hpcC5sZW5ndGgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyAncmVsYXRpdmVDb29yZGluYXRlcydcIik7XG5cbiAgICBzaGlwW3JlbGF0aXZlQ29vcmRpbmF0ZXNdID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcC5ldmVyeSgoZWxlbWVudCkgPT4gIWVsZW1lbnQpO1xuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IERvbSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IHBsYXllcjtcbmxldCBjb21wdXRlcjtcbmxldCBkb207XG5cbmNvbnN0IGNoZWNrV2lubmVyID0gZnVuY3Rpb24gY2hlY2tGb3JBV2lubmVyKCkge1xuICBpZiAoXG4gICAgT2JqZWN0LnZhbHVlcyhwbGF5ZXIuYm9hcmQpLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgaWYgKCFwcmV2KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodHlwZW9mIGN1cnIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdHJ1ZSlcbiAgKSB7XG4gICAgYWxlcnQoJ2NvbXB1dGVyIGlzIHRoZSB3aW5uZXInKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoXG4gICAgT2JqZWN0LnZhbHVlcyhjb21wdXRlci5ib2FyZCkucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBpZiAoIXByZXYpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2YgY3VyciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0cnVlKVxuICApIHtcbiAgICBhbGVydCgncGxheWVyIGlzIHRoZSB3aW5uZXInKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBnYW1lbG9vcCA9IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbiAgaWYgKGRvbSkgZG9tLnJlbW92ZSgpO1xuICBkb20gPSBEb20oKTtcblxuICBkb20uYnVpbGRNYWluUGFnZSgoY29vcmRzKSA9PiB7XG4gICAgcGxheWVyLmF0dGFjayh7IGdhbWVib2FyZDogY29tcHV0ZXIsIGNvb3JkaW5hdGVzOiBjb29yZHMgfSk7XG4gICAgZG9tLnJlbmRlcihwbGF5ZXIuYm9hcmQsIGNvbXB1dGVyLmJvYXJkKTtcbiAgICBpZiAoY2hlY2tXaW5uZXIoKSkgZ2FtZWxvb3AoKTtcbiAgICBjb21wdXRlci5hdHRhY2soeyBnYW1lYm9hcmQ6IHBsYXllciB9KTtcbiAgICBkb20ucmVuZGVyKHBsYXllci5ib2FyZCwgY29tcHV0ZXIuYm9hcmQpO1xuICAgIGlmIChjaGVja1dpbm5lcigpKSBnYW1lbG9vcCgpO1xuICB9KTtcblxuICBkb20uYnVpbGRQbGFjZVNoaXBQb3B1cChwbGF5ZXIucGxhY2VTaGlwcygpLCAoKSA9PiB7XG4gICAgY29tcHV0ZXIucGxhY2VSYW5kb21TaGlwcygpO1xuICAgIGRvbS5yZW5kZXIocGxheWVyLmJvYXJkLCBjb21wdXRlci5ib2FyZCk7XG4gIH0pO1xufTtcblxuZ2FtZWxvb3AoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==