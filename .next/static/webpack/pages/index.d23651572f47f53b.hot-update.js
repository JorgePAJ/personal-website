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

/***/ "./components/threejs/Box.tsx":
/*!************************************!*\
  !*** ./components/threejs/Box.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Box() {\n    _s();\n    var boxRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        boxRef.current.rotation.x += 0.01;\n        boxRef.current.rotation.y += 0.01;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: boxRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                args: [\n                    1,\n                    1,\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/jorgeplasencia/Developer/React/personal-website/components/threejs/Box.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                color: \"hotpink\"\n            }, void 0, false, {\n                fileName: \"/Users/jorgeplasencia/Developer/React/personal-website/components/threejs/Box.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jorgeplasencia/Developer/React/personal-website/components/threejs/Box.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Box, \"PG+qgUAjju80NHsSy4NhtWn5Xc0=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = Box;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Box);\nvar _c;\n$RefreshReg$(_c, \"Box\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RocmVlanMvQm94LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBOEM7QUFDZjtBQUcvQixTQUFTRSxHQUFHLEdBQUc7O0lBQ2IsSUFBTUMsTUFBTSxHQUFHRiw2Q0FBTSxDQUFPLElBQUksQ0FBQztJQUVqQ0QsNERBQVEsQ0FBQyxXQUFNO1FBRVhHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLENBQUNDLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDbENILE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLENBQUNFLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDckMsQ0FBQyxDQUFDO0lBRUgscUJBQ0UsOERBQUNDLE1BQUk7UUFBQ0MsR0FBRyxFQUFFTixNQUFNOzswQkFDZiw4REFBQ08sYUFBVztnQkFBQ0MsSUFBSSxFQUFFO0FBQUMscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO2lCQUFDOzs7OztvQkFBSTswQkFDaEMsOERBQUNDLG1CQUFpQjtnQkFBQ0MsS0FBSyxFQUFDLFNBQVM7Ozs7O29CQUFHOzs7Ozs7WUFDaEMsQ0FDUDtDQUNIO0dBZlFYLEdBQUc7O1FBR1ZGLHdEQUFROzs7QUFIREUsS0FBQUEsR0FBRztBQWlCWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhyZWVqcy9Cb3gudHN4PzY4ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwidGhyZWVcIjtcblxuZnVuY3Rpb24gQm94KCkge1xuICBjb25zdCBib3hSZWYgPSB1c2VSZWY8TWVzaD4obnVsbCk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuXG4gICAgICBib3hSZWYuY3VycmVudC5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICBib3hSZWYuY3VycmVudC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1lc2ggcmVmPXtib3hSZWZ9PlxuICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1sxLCAxLCAxXX0gLz5cbiAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCBjb2xvcj1cImhvdHBpbmtcIiAvPlxuICAgIDwvbWVzaD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl0sIm5hbWVzIjpbInVzZUZyYW1lIiwidXNlUmVmIiwiQm94IiwiYm94UmVmIiwiY3VycmVudCIsInJvdGF0aW9uIiwieCIsInkiLCJtZXNoIiwicmVmIiwiYm94R2VvbWV0cnkiLCJhcmdzIiwibWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/threejs/Box.tsx\n"));

/***/ })

});