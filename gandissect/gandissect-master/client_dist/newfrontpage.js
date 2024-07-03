/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ganpaint": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./ts/ganpaint.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/ganpaint.scss":
/*!***************************!*\
  !*** ./css/ganpaint.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
    
    /***/ "./node_modules/file-loader/dist/cjs.js?name=ganpaint.html!./ganpaint.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/file-loader/dist/cjs.js?name=ganpaint.html!./ganpaint.html ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
        module.exports = __webpack_require__.p + "ganpaint.html";
    
        /***/ }),
    
        
        /***/ "./ts/api/GanterAPI.ts":
        /*!*****************************!*\
          !*** ./ts/api/GanterAPI.ts ***!
          \*****************************/
        /*! exports provided: GanterAPI */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanterAPI", function() { return GanterAPI; });
        /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
        /* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/URLHandler */ "./ts/etc/URLHandler.ts");
        /*
        Ganter API and Types
         */
        class GanterAPI {
            constructor(baseURL = null) {
                this.baseURL = baseURL;
                if (this.baseURL == null) {
                    this.baseURL = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_1__["default"].basicURL();
                }
            }
            allProjects() {
                return d3__WEBPACK_IMPORTED_MODULE_0__["json"](this.baseURL + '/api/all_projects');
            }
            ablationChannels(project, layer = "layer2") {
                return d3__WEBPACK_IMPORTED_MODULE_0__["json"](this.baseURL + `/api/channels?project=${project}&layer=${layer}`);
            }
            recipes(project) {
                return d3__WEBPACK_IMPORTED_MODULE_0__["json"](this.baseURL + `/api/recipes?project=${project}`);
            }
            rankings(project, layer) {
                return d3__WEBPACK_IMPORTED_MODULE_0__["json"](this.baseURL + `/api/rankings?project=${project}&layer=${layer}`);
            }
            levels(project, layer, q = 0.99) {
                //../api/levels?project=churchoutdoor&layer=layer4&quantiles=0.99
                return d3__WEBPACK_IMPORTED_MODULE_0__["json"](this.baseURL + `/api/levels?project=${project}&layer=${layer}&quantiles=${q}`);
            }
            generateImgs(project, ids, wantz = 0, ablations = []) {
                return d3__WEBPACK_IMPORTED_MODULE_0__["json"](this.baseURL + '/api/generate', {
                    method: "POST",
                    body: JSON.stringify({
                        "ablations": ablations,
                        "project": project,
                        "ids": ids,
                        "wantz": wantz
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
            }
            generateImgsWithInterventions(project, ids, interventions, wantz = 0, return_urls = 0) {
                const payload = {
                    "project": project,
                    "ids": ids,
                    "wantz": wantz,
                    "interventions": interventions,
                    "return_urls": return_urls
                };
                console.log(payload, "--- payload");
                return d3__WEBPACK_IMPORTED_MODULE_0__["json"](this.baseURL + '/api/generate', {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
            }
        }
        
        /***/ }),
        
        /***/ "./ts/etc/SVGplus.ts":
        /*!***************************!*\
          !*** ./ts/etc/SVGplus.ts ***!
          \***************************/
        /*! exports provided: SVG, SVGMeasurements */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMeasurements", function() { return SVGMeasurements; });
        /**
         * Created by hen on 5/15/17.
         */
        class SVG {
            static translate({ x, y }) {
                return "translate(" + x + "," + y + ")";
            }
            static group(parent, classes, pos = { x: 0, y: 0 }) {
                return parent.append('g').attrs({
                    class: classes,
                    "transform": SVG.translate(pos)
                });
            }
        }
        class SVGMeasurements {
            constructor(baseElement, classes = '') {
                this.measureElement = baseElement.append('text')
                    .attrs({ x: 0, y: -20, class: classes });
            }
            textLength(text, style = null) {
                this.measureElement.attr('style', style);
                this.measureElement.text(text);
                const tl = this.measureElement.node().getComputedTextLength();
                this.measureElement.text('');
                return tl;
            }
        }
        
        
        /***/ }),
        
        /***/ "./ts/etc/SimpleEventHandler.ts":
        /*!**************************************!*\
          !*** ./ts/etc/SimpleEventHandler.ts ***!
          \**************************************/
        /*! exports provided: SimpleEventHandler */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEventHandler", function() { return SimpleEventHandler; });
        /**
         * Created by hen on 5/15/17.
         */
        class SimpleEventHandler {
            constructor(element) {
                this.element = element;
                this.eventListeners = [];
            }
            bind(eventNames, eventFunction) {
                for (const eventName of eventNames.split(' ')) {
                    this.eventListeners.push({ eventName, eventFunction });
                    const eventFunctionWrap = e => eventFunction(e.detail, e);
                    this.element.addEventListener(eventName, eventFunctionWrap, false);
                }
            }
            getListeners() {
                return this.eventListeners;
            }
            trigger(eventName, detail) {
                this.element.dispatchEvent(new CustomEvent(eventName, { detail }));
            }
        }
        
        /***/ }),
        
        /***/ "./ts/etc/URLHandler.ts":
        /*!******************************!*\
          !*** ./ts/etc/URLHandler.ts ***!
          \******************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return URLHandler; });
        /**
         * Created by hen on 5/15/17.
         */

        /*DELETE URLHANDLER???*/ 
        class URLHandler {
            static basicURL() {
                const url_path = window.location.pathname.split('/').slice(0, -2).join('/');
                return window.location.origin + (url_path.length ? url_path : '');
            }
            /**
             * Read all URL parameters into a map.
             * @returns {Map} the url parameters as a key-value store (ES6 map)
             */
            static get parameters() {
                // Adapted from:  http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
                const query = window.location.search.substring(1);
                const vars = query.split('&');
                console.log(vars, "--- vars");
                const urlParameters = {};
                const isInt = x => (/^[0-9]+$/).test(x);
                const isFloat = x => (/^[0-9]+\.[0-9]*$/).test(x);
                const typeCast = val => {
                    if (isInt(val)) {
                        return Number.parseInt(val, 10);
                    }
                    else if (isFloat(val)) {
                        return Number.parseFloat(val);
                    }
                    // else:
                    return val;
                };
                vars.forEach(v => {
                    if (v.length > 0) {
                        const splits = v.split('=');
                        const key = decodeURIComponent(splits[0]);
                        let raw_value = decodeURIComponent(splits[1]);
                        const isArray = raw_value.startsWith('..');
                        if (isArray) {
                            raw_value = raw_value.slice(2);
                        }
                        if (raw_value.length < 1) {
                            urlParameters[key] = isArray ? [] : '';
                        }
                        else if (isArray) {
                            urlParameters[key] = raw_value.split(',')
                                .map(val => typeCast(val));
                        }
                        else {
                            urlParameters[key] = typeCast(raw_value);
                        }
                    }
                });
                return urlParameters;
            }
            /**
             * Generates an URL string from a map of url parameters
             * @param {{}} urlParameters - the map of parameters
             * @returns {string} - an URI string
             */
            static urlString(urlParameters) {
                const attr = [];
                Object.keys(urlParameters).forEach(k => {
                    const v = urlParameters[k];
                    if (v !== undefined) {
                        let value = v;
                        if (Array.isArray(v))
                            value = '..' + v.join(',');
                        attr.push(encodeURI(k + '=' + value));
                    }
                });
                const url = window.location.pathname;
                let res = url.substring(url.lastIndexOf('/') + 1);
                if (attr.length > 0) {
                    res += '?' + attr.join('&');
                }
                return res;
            }
            static updateURLParam(key, value, addToBrowserHistory = true) {
                const currentParams = URLHandler.parameters;
                currentParams[key] = value;
                URLHandler.updateUrl(currentParams, addToBrowserHistory);
            }
            // /**
            //  * Generates a key-value map of all URL params and replaces replaceKeys
            //  * @param updateKeys
            //  */
            static updateUrl(urlParameters, addToBrowserHistory = true) {
                if (addToBrowserHistory) {
                    window.history.pushState(urlParameters, '', URLHandler.urlString(urlParameters));
                }
                else {
                    window.history.replaceState(urlParameters, '', URLHandler.urlString(urlParameters));
                }
            }
        }
        
        /***/ }),
        
        /***/ "./ts/etc/Util.ts":
        /*!************************!*\
          !*** ./ts/etc/Util.ts ***!
          \************************/
        /*! exports provided: Util, argsort, range, obj_to_arr, arr_to_obj */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsort", function() { return argsort; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj_to_arr", function() { return obj_to_arr; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arr_to_obj", function() { return arr_to_obj; });
        /**
         * Created by hen on 5/15/17.
         */
        let the_unique_id_counter = 0;
        class Util {
            static simpleUId({ prefix = '' }) {
                the_unique_id_counter += 1;
                return prefix + the_unique_id_counter;
            }
        }
        function argsort(array, sortFct) {
            return array
                .map((d, i) => [d, i])
                .sort((a, b) => sortFct(a[0], b[0]))
                .map(d => d[1]);
        }
        function range(end) {
            return [...Array(end).keys()];
        }
        function obj_to_arr(obj) {
            const sortedKeys = Object.keys(obj).sort();
            const res = [];
            sortedKeys.forEach(k => { res.push(k); res.push(obj[k]); });
            return res;
        }
        function arr_to_obj(arr) {
            const res = {};
            const max_l = Math.floor(arr.length / 2);
            for (let i = 0; i < max_l; i++) {
                res[arr[2 * i]] = arr[2 * i + 1];
            }
            return res;
        }
        
        /***/ }),
        
        /***/ "./ts/ganpaint.ts":
        /*!************************!*\
          !*** ./ts/ganpaint.ts ***!
          \************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
        /* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
        /* harmony import */ var _api_GanterAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/GanterAPI */ "./ts/api/GanterAPI.ts");
        /* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./etc/Util */ "./ts/etc/Util.ts");
        /* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./etc/URLHandler */ "./ts/etc/URLHandler.ts");
        /* harmony import */ var _vis_GanPaintView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vis/GanPaintView */ "./ts/vis/GanPaintView.ts");
        
        
        const current = {
            image: {
                size: 256
            },
            projects: {
                "info": {
                    "layers": [
                        "layer4"
                    ]
                },
                "project": "churchoutdoor"
            },
            recipes: {
                ablation: {},
                copy: {},
                copy_values: []
            },
            selected_recipe: null,
            need_init: true
        };
    
        window.onload = () => {
            /*
            *
            * variables and static selections
            *
            * */
            const eventHandler = new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_6__["SimpleEventHandler"](d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body').node());
            const api_prefix = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_9__["default"].parameters['api'] || '';
            const api = new _api_GanterAPI__WEBPACK_IMPORTED_MODULE_7__["GanterAPI"](api_prefix);
            const painting_sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#painting');
            const ganPaintView = new _vis_GanPaintView__WEBPACK_IMPORTED_MODULE_10__["GanPaintView"](painting_sel, eventHandler);
            const dataset_selector = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#project_selector');
            
            const valueSlider = document.getElementById("myRange");
            const graph = document.getElementById("graph");
            /*
            *
            * Accessors
            *
            * */
            const selected_project = () => current.projects;
            const selected_layer = () => graph.getAttribute('data-value');
            const selected_recipe = () => current.selected_recipe;
            const sliderValue = () => valueSlider.value;
            const ablation_values = (recipe) => current.recipes.ablation[recipe].scores;
            function setup() {
                const updateProjectSelector = () => {
                    if (_etc_URLHandler__WEBPACK_IMPORTED_MODULE_9__["default"].parameters['project'] && current.need_init) {
                        dataset_selector.property('value', _etc_URLHandler__WEBPACK_IMPORTED_MODULE_9__["default"].parameters['project']);
                    }
                    _etc_URLHandler__WEBPACK_IMPORTED_MODULE_9__["default"].updateURLParam('project', selected_project().project, false);
                    current.need_init = false;
                    updateRecipeList();
                    updateImageList();
                };
                function updateRecipeList() {
                    current.recipes.ablation = {};
                    let request = null;
                    request = api.rankings(selected_project().project, selected_layer());
                    request.then((ranks) => {
                        // console.log(ranks, "--- recipes");
                        const names = ranks.res[1].map(d => d.name);
                        current.recipes.ablation = {};
                        current.recipes.copy = {};
                        ranks.res[1].forEach(rank => {
                            current.recipes.ablation[rank.name] = rank;
                            current.recipes.copy[rank.name] = rank;
                        });
                        let shortcuts = names;
                        shortcuts.sort();
                        current.selected_recipe = "tree-iou";
                            ganPaintView.setNewMeta({
                                payload: current_copy_payload(),
                                name: selected_recipe(),
                                remove: null//can this be deleted?
                            });
                    });
                    let level_req = null;
                    level_req = api.levels(selected_project().project, selected_layer());
                    level_req.then((level_req) => {
                        current.recipes.copy_values = level_req.res
                            .map(levels => levels[0]);
                    });
                }
                function updateImageList() {
                    const project = selected_project();
                    let req = null;
                    const imageIDs = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_9__["default"].parameters['ids'] || [104];
                    req = api.generateImgs(project.project, imageIDs);
                    req.then((gImgs) => {
                        updateMainImage(gImgs.res[0].id);
                    });
                }
                    (() => {
                        updateProjectSelector();
                    })();
    
                //triggers when slider is dragged
                valueSlider.oninput = function() {
                    console.log("value: ", this.value);
                    //copy current payload/set new meta
                    ganPaintView.setNewMeta({
                        //change unit values according to slider value
                        payload: current_copy_payload(),
                        name: selected_recipe(),
                        remove: null //selected_action_is_remove()
                    });
                    ganPaintView.sliderReact();
                    
                }
                function graph_OnLayerClicked(layerNr) { //When choosing new layer in graph
                    document.getElementsByClassName("bGraph active")[0].classList.remove("active");
                    document.getElementsByClassName("layerHighlight active")[0].classList.remove("active");
                    document.getElementById("img" + layerNr).classList.add("active");
                    document.getElementsByClassName("chosen")[0].classList.remove("chosen");
                    document.getElementById("lay" + layerNr).classList.add("chosen");
                    graph.setAttribute('data-value',"layer" + layerNr);
                    console.log("layer" + layerNr);
                    document.getElementById("layer" + layerNr).classList.add("active");
                    updateRecipeList();
                    updateImageList();
                    valueSlider.value = 0;
                }

                document.getElementById("layer4").onclick = function () {
                    graph_OnLayerClicked("4");
                }
                document.getElementById("layer7").onclick = function() {
                    graph_OnLayerClicked("7");
                }
                document.getElementById("layer10").onclick = function() {
                    graph_OnLayerClicked("10");
                }

                //Sets up dots in the hidden layer graph representing each feature 
                function setupButtonsLayer(layer) {
                    let request = null;
                    request = api.rankings(selected_project().project, layer);
                    
                    request.then((ranks) => {
                        const categ = ranks.res[0];
                        
                        for (let i = 0; i < Object.keys(categ).length; i++) {
                            let span = document.createElement('span');
                            let spanTooltip = document.createElement('span');

                            //Creates a tooltip for the given dot, displaying the name of the feature
                            spanTooltip.classList.add('tooltiptext');
                            const featureName = JSON.stringify((Object.keys(categ)[i]));
                            spanTooltip.textContent += featureName.replace(/["]+/g, '');

                            //Creates a dot for every object/part/material feature in the given layer
                            if(Object.values(categ)[i] == 'object'){
                                //Highlights the tree object neurons (def clean up these if-statements)
                                if(featureName != '"tree"'){
                                    span.classList.add('dotobject');
                                } else {
                                    span.classList.add('dotobjectTree');
                                }
                            }
                            else if(Object.values(categ)[i] == 'part'){
                            span.classList.add('dotpart');
                            }
                            else if(Object.values(categ)[i] == 'material'){
                            span.classList.add('dotmaterial');
                            }
                            
                            //Adds span containing the dot to the given hidden layer element
                            document.getElementById(layer).appendChild(span);
                            span.appendChild(spanTooltip);
                            
                        }
                        
                    });          
                }
                setupButtonsLayer('layer4');
                setupButtonsLayer('layer7');
                setupButtonsLayer('layer10');
                
                
            }
            setup();
            function current_copy_ids() {
                const n_cp = 10; //no_cp_units();
                const sort_dim = selected_recipe();
                let us = Object(_etc_Util__WEBPACK_IMPORTED_MODULE_8__["argsort"])(ablation_values(sort_dim), (a, b) => a - b);
                return us
                    .slice(0, Math.min(n_cp, us.length));
            }
    
            function current_copy_payload() {
                const copy_values = current.recipes.copy_values;
                const layer = selected_layer();
                //const del = false; //selected_action_is_remove();
                return current_copy_ids()
                    .map(unit => ({
                    layer,
                    unit,
                    alpha: 1,
                    //value: del ? 0 : +copy_values[unit]
                    value: (+copy_values[unit] + (+sliderValue()))
                }));
            }
            function updateMainImage(image) {
                let req = api.generateImgs(selected_project().project, [image], 0, []);
                req.then(gImgs => {
                    const payload = current_copy_payload();
                    const im = gImgs.res[0];
                    const img = new Image();
                    img.onload = () => {
                        ganPaintView.update({
                            image: img, imageID: '' + im.id, resetSelection: true
                        });
                        ganPaintView.setNewMeta({
                            payload,
                            name: selected_recipe(),
                            remove: null //selected_action_is_remove()
                        });
                    };
                    img.src = im.d.startsWith('/') ? api_prefix + im.d : im.d;
                });
            }
    
            /*
             *
             *  ===== EVENTS ====
             *
             */
            eventHandler.bind(_vis_GanPaintView__WEBPACK_IMPORTED_MODULE_10__["GanPaintView"].events.maskChanged, (e) => {
                // console.log(e.caller.currentStack, "--- e.caller");
                const stack = e.caller.currentStack.map(d => ({
                    meta: d.meta, img: d.canvas.toDataURL('image/png')
                }));
                const interventions = stack.map(d => ({
                    ablations: d.meta.payload,
                    mask: {
                        bitbounds: [],
                        bitstring: d.img,
                        shape: []
                    }
                }));
                api.generateImgsWithInterventions(selected_project().project, [+e.caller.imageID], interventions, 0).then(res => {
                    // console.log(res, "--- res");
                    const im = res.res[0];
                    const img = new Image();
                    img.onload = () => {
                        ganPaintView.update({
                            image: img,
                            imageID: '' + res.request.ids[0],
                            resetSelection: false,
                            alpha: 0
                        });
                    };
                    img.src = im.d.startsWith('/') ? api_prefix + im.d : im.d;
                }).catch(e => console.log(e, "--- e"));
            });
    
            /*
            *
            *  ===== UI stuff ====
            *
             */
            function setup_ui() {
                
                window.onresize = () => {
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    re_layout(w, h);
                };
                function re_layout(w = window.innerWidth, h = window.innerHeight) {
                    const main_frame = document.querySelector('.main_frame');
                        main_frame.style.height = (h - 53) + 'px';
                        main_frame.style.width = w + 'px';
                }
                re_layout(window.innerWidth, window.innerHeight);
            }
            setup_ui();
        };
        
        
        /***/ }),
        
        /***/ "./ts/vis/GanPaintView.ts":
        /*!********************************!*\
          !*** ./ts/vis/GanPaintView.ts ***!
          \********************************/
        /*! exports provided: GanPaintView */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanPaintView", function() { return GanPaintView; });
        /* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
        /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
        
        
        class GanPaintView extends _VisComponent__WEBPACK_IMPORTED_MODULE_0__["VComponent"] {
            constructor(_parent, _eventHandler) {
                super(_parent, _eventHandler);
                this.options = {
                    pos: { x: 0, y: 0 },
                    width: 256,
                    height: 256,
                    grid_size: 32,
                    radius: 1,
                    draw_color: "#0bc6d4",
                    remove_color: "#e1484a",
                    active_alpha: .7
                };
                this.css_name = "GanPaintView";
                this._current = {
                    meta: null,
                    canvas: null,
                    new_meta: {},
                    highlight: null,
                    empty: true,
                    alpha: 1
                };
                // stack of all masks
                this._maskStack = [];
                this.superInitHTML();
                this._init();
            }
            _currentMouseGrid() {
                const [x, y] = d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](this._canvas.node());
                return [
                    Math.floor(x / this.options.width * this.options.grid_size),
                    Math.floor(y / this.options.height * this.options.grid_size)
                ];
            }
            _createNewCanvas() {
                const res = document.createElement('canvas');
                res.width = this.options.grid_size;
                res.height = this.options.grid_size;
                return res;
            }
            _init() {
                const op = this.options;
                //const cur = this._current;
                this._canvas = this.base.append('canvas')
                    .property('width', op.width)
                    .property('height', op.height);
            }
            
            _paintFinished() {
                const cur = this._current;
                if (cur.meta !== null) {
                    // push current to stack and create new one
                    this._maskStack.push({
                        meta: cur.meta,
                        canvas: cur.canvas
                    });
                }
                this.eventHandler.trigger(GanPaintView.events.maskChanged, { caller: this });
            }
            //------------------
            //react to the slider being changed
            sliderReact() {
                const cur = this._current;
                const op = this.options;
                cur.empty = false;
                cur.meta = cur.new_meta;
                cur.canvas = this._createNewCanvas();
                cur.alpha = op.active_alpha;
                const drawCtx = cur.canvas.getContext('2d');
                drawCtx.fillStyle = op.draw_color;
                drawCtx.fillRect(0, 0, 256, 256); 
                this._render();
                this._paintFinished();
            }
            //------------------
            _wrangle(data) {
                if (data.resetSelection) {
                    this._maskStack = [];
                    this._current.canvas = this._createNewCanvas();
                }
                if (data.alpha !== null) {
                    this._current.alpha = data.alpha;
                }
                return data;
            }
            _render(rD = this.renderData) {
                if (rD == null)
                    return;
                const op = this.options;
                const cur = this._current;
                this._canvas
                    .property('width', op.width)
                    .property('height', op.height);
                const ctx = this._canvas.node().getContext('2d');
                // render BG
                ctx.beginPath();
                ctx.drawImage(rD.image, 0, 0);
                ctx.closePath();
                if (this._current.highlight) {
                    ctx.beginPath();
                    ctx.globalAlpha = op.active_alpha;
                    ctx.drawImage(this._current.highlight, 0, 0, op.width, op.height);
                    ctx.closePath();
                }
                else if (this._current.canvas) {
                    ctx.beginPath();
                    ctx.globalAlpha = cur.alpha;
                    ctx.drawImage(this._current.canvas, 0, 0, op.width, op.height);
                    ctx.closePath();
                }
            }
            resetSelection() { //can this be deleted??
                // this.psw.reset()
            }
            setNewMeta(d) {
                this._current.new_meta = d;
            }
            changeCurrentMeta(data) {
                this._current.meta = data;
                this._current.new_meta = data;
            }
            get currentMeta() {
                return this._current.meta;
            }
            ;
            get newMeta() {
                return this._current.new_meta;
            }
            ;
            get maskStack() {
                return this._maskStack;
            }
            /** get all stacked layers including current one */
            get currentStack() {
                return this.maskStack;
            }
            get imageID() {
                return this.renderData.imageID;
            }
            get canvas() {
                return this._canvas;
            }
        }
        GanPaintView.events = {
            maskChanged: "GanPaintView_mc"
        };
        GanPaintView.currentActiveWidget = null;
        
        
        /***/ }),
        
        /***/ "./ts/vis/VisComponent.ts":
        /*!********************************!*\
          !*** ./ts/vis/VisComponent.ts ***!
          \********************************/
        /*! exports provided: VComponent */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VComponent", function() { return VComponent; });
        /* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/Util */ "./ts/etc/Util.ts");
        /* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
        /* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
        
        
        
        class VComponent {
            // CONSTRUCTOR ============================================================
            /**
             * Simple constructor. Subclasses should call @superInit(options) as well.
             * see why here: https://stackoverflow.com/questions/43595943/why-are-derived-class-property-values-not-seen-in-the-base-class-constructor
             *
             * template:
             constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
                super(d3Parent, eventHandler);
                // -- access to subclass params:
                this.superInit(options);
             }
             *
             * @param {D3Sel} d3parent  D3 selection of parent SVG DOM Element
             * @param {SimpleEventHandler} eventHandler a global event handler object or 'null' for local event handler
             */
            constructor(d3parent, eventHandler) {
                this.id = _etc_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].simpleUId({});
                this.parent = d3parent;
                // If not further specified - create a local event handler bound to the bas element
                this.eventHandler = eventHandler ||
                    new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__["SimpleEventHandler"](this.parent.node());
                // Object for storing internal states and variables
                this._visibility = { hidden: false };
            }
    
            superInitHTML(options = {}) {
                Object.keys(options).forEach(key => this.options[key] = options[key]);
                this.base = this.parent.append('div')
                    .classed(this.css_name, true);
            }
            /**
             * Has to be called as last call in subclass constructor.
             * @param {{}} options
             * @param defaultLayers -- create the default <g> layers: bg -> main -> fg
             */
            superInitSVG(options = {}, defaultLayers = ['bg', 'main', 'fg']) {
                // Set default options if not specified in constructor call
                // const defaults = this.defaultOptions;
                // this.options = {};
                // const keys = new Set([...Object.keys(defaults), ...Object.keys(options)]);
                // keys.forEach(key => this.options[key] = (key in options) ? options[key] : defaults[key]);
                Object.keys(options).forEach(key => this.options[key] = options[key]);
                this.layers = {};
                // Create the base group element
                this.base = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(this.parent, this.css_name + ' ID' + this.id, this.options.pos);
                // create default layers: background, main, foreground
                if (defaultLayers) {
                    // construction order is important !
                    defaultLayers.forEach(layer => {
                        this.layers[layer] = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(this.base, layer);
                    });
                }
            }
            // DATA UPDATE & RENDER ============================================================
            /**
             * Every time data has changed, update is called and
             * triggers wrangling and re-rendering
             * @param {Object} data data object
             * @return {*} ---
             */
            update(data) {
                this.data = data;
                if (this._visibility.hidden)
                    return;
                this.renderData = this._wrangle(data);
                this._render(this.renderData);
            }
            // UPDATE OPTIONS ============================================================
            /**
             * Updates instance options
             * @param {Object} options only the options that should be updated
             * @param {Boolean} reRender if option change requires a re-rendering (default:false)
             * @returns {*} ---
             */
            updateOptions(options, reRender = false) {
                Object.keys(options).forEach(k => this.options[k] = options[k]);
                if (reRender)
                    this._render(this.renderData);
            }
            // === CONVENIENCE ====
            setHideElement(hE) {
                this._visibility.hideElement = hE;
            }
            hideView() {
                if (!this._visibility.hidden) {
                    const hE = this._visibility.hideElement || this.parent;
                    hE.transition().styles({
                        'opacity': 0,
                        'pointer-events': 'none'
                    }).style('display', 'none');
                    this._visibility.hidden = true;
                }
            }
            unhideView() {
                if (this._visibility.hidden) {
                    const hE = this._visibility.hideElement || this.parent;
                    hE.transition().styles({
                        'opacity': 1,
                        'pointer-events': null,
                        'display': null
                    });
                    this._visibility.hidden = false;
                    // this.update(this.data);
                }
            }
            destroy() {
                this.base.remove();
            }
        }
        // STATIC FIELDS ============================================================
        /**
         * The static property that contains all class related events.
         * Should be overwritten and event strings have to be unique!!
         */
        VComponent.events = { noEvent: 'VComponent_noEvent' };
        
        
        /***/ })
        
        /******/ });
    