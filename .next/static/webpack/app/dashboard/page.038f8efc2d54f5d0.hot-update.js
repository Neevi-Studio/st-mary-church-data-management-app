"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/Draggable/Draggable.tsx":
/*!************************************************!*\
  !*** ./src/components/Draggable/Draggable.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Axis: function() { return /* binding */ Axis; },\n/* harmony export */   Draggable: function() { return /* binding */ Draggable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _draggable_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable-svg */ \"(app-pages-browser)/./src/components/Draggable/draggable-svg.tsx\");\n/* harmony import */ var _Draggable_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Draggable.module.css */ \"(app-pages-browser)/./src/components/Draggable/Draggable.module.css\");\n/* harmony import */ var _Draggable_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Draggable_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar Axis;\n(function(Axis) {\n    Axis[Axis[\"All\"] = 0] = \"All\";\n    Axis[Axis[\"Vertical\"] = 1] = \"Vertical\";\n    Axis[Axis[\"Horizontal\"] = 2] = \"Horizontal\";\n})(Axis || (Axis = {}));\nconst Draggable = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = function Draggable(param, ref) {\n    let { axis, dragOverlay, dragging, handle, label, listeners, transform, style, buttonStyle, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Draggable_module_css__WEBPACK_IMPORTED_MODULE_4___default().Draggable), dragOverlay && (_Draggable_module_css__WEBPACK_IMPORTED_MODULE_4___default().dragOverlay), dragging && (_Draggable_module_css__WEBPACK_IMPORTED_MODULE_4___default().dragging), handle && (_Draggable_module_css__WEBPACK_IMPORTED_MODULE_4___default().handle)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            ...props,\n            \"aria-label\": \"Draggable\",\n            \"data-cypress\": \"draggable-item\",\n            ...handle ? {} : listeners,\n            tabIndex: handle ? -1 : undefined,\n            ref: ref,\n            style: buttonStyle,\n            children: [\n                axis === 1 ? _draggable_svg__WEBPACK_IMPORTED_MODULE_3__.draggableVertical : axis === 2 ? _draggable_svg__WEBPACK_IMPORTED_MODULE_3__.draggableHorizontal : _draggable_svg__WEBPACK_IMPORTED_MODULE_3__.draggable,\n                props.children\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/components/Draggable/Draggable.tsx\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/components/Draggable/Draggable.tsx\",\n        lineNumber: 51,\n        columnNumber: 7\n    }, this);\n});\n_c1 = Draggable;\nvar _c, _c1;\n$RefreshReg$(_c, \"Draggable$forwardRef\");\n$RefreshReg$(_c1, \"Draggable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ047QUFVWDtBQUNtQjs7VUFFaENPOzs7O0dBQUFBLFNBQUFBO0FBbUJMLE1BQU1DLDBCQUFZUCxpREFBVUEsTUFDakMsU0FBU08sVUFDUCxLQVdDLEVBQ0RDLEdBQUc7UUFaSCxFQUNFQyxJQUFJLEVBQ0pDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsV0FBVyxFQUNYLEdBQUdDLE9BQ0osR0FYRDtJQWNBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXbkIsaURBQVVBLENBQ25CSSx3RUFBZ0IsRUFDaEJLLGVBQWVMLDBFQUFrQixFQUNqQ00sWUFBWU4sdUVBQWUsRUFDM0JPLFVBQVVQLHFFQUFhO2tCQUl6Qiw0RUFBQ2dCO1lBQ0UsR0FBR0gsS0FBSztZQUNUSSxjQUFXO1lBQ1hDLGdCQUFhO1lBQ1osR0FBSVgsU0FBUyxDQUFDLElBQUlFLFNBQVM7WUFDNUJVLFVBQVVaLFNBQVMsQ0FBQyxJQUFJYTtZQUN4QmpCLEtBQUtBO1lBQ0xRLE9BQU9DOztnQkFFTlIsYUFDR0wsNkRBQWlCQSxHQUNqQkssYUFDRU4sK0RBQW1CQSxHQUNuQkQscURBQVNBO2dCQUVoQmdCLE1BQU1RLFFBQVE7Ozs7Ozs7Ozs7OztBQUlyQixHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGUudHN4PzFlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB0eXBlIHsgRHJhZ2dhYmxlU3ludGhldGljTGlzdGVuZXJzIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybSB9IGZyb20gJ0BkbmQta2l0L3V0aWxpdGllcyc7XG5cbmltcG9ydCB7IEhhbmRsZSB9IGZyb20gJy4uL0l0ZW0vY29tcG9uZW50cy9IYW5kbGUnO1xuXG5pbXBvcnQge1xuICBkcmFnZ2FibGUsXG4gIGRyYWdnYWJsZUhvcml6b250YWwsXG4gIGRyYWdnYWJsZVZlcnRpY2FsLFxufSBmcm9tICcuL2RyYWdnYWJsZS1zdmcnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RyYWdnYWJsZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGVudW0gQXhpcyB7XG4gIEFsbCxcbiAgVmVydGljYWwsXG4gIEhvcml6b250YWwsXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGF4aXM/OiBBeGlzO1xuICBkcmFnT3ZlcmxheT86IGJvb2xlYW47XG4gIGRyYWdnaW5nPzogYm9vbGVhbjtcbiAgaGFuZGxlPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGxpc3RlbmVycz86IERyYWdnYWJsZVN5bnRoZXRpY0xpc3RlbmVycztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBidXR0b25TdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIHRyYW5zZm9ybT86IFRyYW5zZm9ybSB8IG51bGw7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBEcmFnZ2FibGUgPSBmb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBQcm9wcz4oXG4gIGZ1bmN0aW9uIERyYWdnYWJsZShcbiAgICB7XG4gICAgICBheGlzLFxuICAgICAgZHJhZ092ZXJsYXksXG4gICAgICBkcmFnZ2luZyxcbiAgICAgIGhhbmRsZSxcbiAgICAgIGxhYmVsLFxuICAgICAgbGlzdGVuZXJzLFxuICAgICAgdHJhbnNmb3JtLFxuICAgICAgc3R5bGUsXG4gICAgICBidXR0b25TdHlsZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSxcbiAgICByZWZcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHN0eWxlcy5EcmFnZ2FibGUsXG4gICAgICAgICAgZHJhZ092ZXJsYXkgJiYgc3R5bGVzLmRyYWdPdmVybGF5LFxuICAgICAgICAgIGRyYWdnaW5nICYmIHN0eWxlcy5kcmFnZ2luZyxcbiAgICAgICAgICBoYW5kbGUgJiYgc3R5bGVzLmhhbmRsZVxuICAgICAgICApfVxuXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkRyYWdnYWJsZVwiXG4gICAgICAgICAgZGF0YS1jeXByZXNzPVwiZHJhZ2dhYmxlLWl0ZW1cIlxuICAgICAgICAgIHsuLi4oaGFuZGxlID8ge30gOiBsaXN0ZW5lcnMpfVxuICAgICAgICAgIHRhYkluZGV4PXtoYW5kbGUgPyAtMSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICB7YXhpcyA9PT0gQXhpcy5WZXJ0aWNhbFxuICAgICAgICAgICAgPyBkcmFnZ2FibGVWZXJ0aWNhbFxuICAgICAgICAgICAgOiBheGlzID09PSBBeGlzLkhvcml6b250YWxcbiAgICAgICAgICAgICAgPyBkcmFnZ2FibGVIb3Jpem9udGFsXG4gICAgICAgICAgICAgIDogZHJhZ2dhYmxlfVxuICAgIFxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJjbGFzc05hbWVzIiwiZHJhZ2dhYmxlIiwiZHJhZ2dhYmxlSG9yaXpvbnRhbCIsImRyYWdnYWJsZVZlcnRpY2FsIiwic3R5bGVzIiwiQXhpcyIsIkRyYWdnYWJsZSIsInJlZiIsImF4aXMiLCJkcmFnT3ZlcmxheSIsImRyYWdnaW5nIiwiaGFuZGxlIiwibGFiZWwiLCJsaXN0ZW5lcnMiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsImJ1dHRvblN0eWxlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwiZGF0YS1jeXByZXNzIiwidGFiSW5kZXgiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Draggable/Draggable.tsx\n"));

/***/ })

});