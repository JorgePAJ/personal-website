"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/threejs/ThreeScene.tsx":
/*!*******************************************!*\
  !*** ./components/threejs/ThreeScene.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ \"./components/threejs/Box.tsx\");\n\n\n\nfunction ThreeScene(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: [\n                    2,\n                    2,\n                    2\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/jorgeplasencia/Developer/React/personal-website/components/threejs/ThreeScene.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    color: props.color\n                }, void 0, false, {\n                    fileName: \"/Users/jorgeplasencia/Developer/React/personal-website/components/threejs/ThreeScene.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jorgeplasencia/Developer/React/personal-website/components/threejs/ThreeScene.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jorgeplasencia/Developer/React/personal-website/components/threejs/ThreeScene.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ThreeScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeScene);\nvar _c;\n$RefreshReg$(_c, \"ThreeScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RocmVlanMvVGhyZWVTY2VuZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUE0QztBQUNwQjtBQU14QixTQUFTRSxVQUFVLENBQUNDLEtBQXNCLEVBQUU7SUFDMUMscUJBQ0UsOERBQUNILHNEQUFNOzswQkFFTCw4REFBQ0ksWUFBVTtnQkFBQ0MsUUFBUSxFQUFFO0FBQUMscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO2lCQUFDOzs7OztvQkFBSTswQkFDbkMsOERBQUNDLE1BQUk7MEJBQ0gsNEVBQUNMLDRDQUFHO29CQUFDTSxLQUFLLEVBQUVKLEtBQUssQ0FBQ0ksS0FBSzs7Ozs7d0JBQUk7Ozs7O29CQUN0Qjs7Ozs7O1lBQ0EsQ0FDVDtDQUNIO0FBVlFMLEtBQUFBLFVBQVU7QUFZbkIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RocmVlanMvVGhyZWVTY2VuZS50c3g/NjYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuXG5pbnRlcmZhY2UgVGhyZWVTY2VuZVByb3BzIHtcbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFRocmVlU2NlbmUocHJvcHM6IFRocmVlU2NlbmVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDYW52YXMgPlxuICAgICAgey8qIDxhbWJpZW50TGlnaHQgLz4gKi99XG4gICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17WzIsIDIsIDJdfSAvPlxuICAgICAgPG1lc2g+XG4gICAgICAgIDxCb3ggY29sb3I9e3Byb3BzLmNvbG9yfSAvPlxuICAgICAgPC9tZXNoPlxuICAgIDwvQ2FudmFzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaHJlZVNjZW5lO1xuIl0sIm5hbWVzIjpbIkNhbnZhcyIsIkJveCIsIlRocmVlU2NlbmUiLCJwcm9wcyIsInBvaW50TGlnaHQiLCJwb3NpdGlvbiIsIm1lc2giLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/threejs/ThreeScene.tsx\n"));

/***/ })

});