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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Axis: function() { return /* binding */ Axis; },\n/* harmony export */   Draggable: function() { return /* binding */ Draggable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Draggable_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Draggable.module.css */ \"(app-pages-browser)/./src/components/Draggable/Draggable.module.css\");\n/* harmony import */ var _Draggable_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Draggable_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar Axis;\n(function(Axis) {\n    Axis[Axis[\"All\"] = 0] = \"All\";\n    Axis[Axis[\"Vertical\"] = 1] = \"Vertical\";\n    Axis[Axis[\"Horizontal\"] = 2] = \"Horizontal\";\n})(Axis || (Axis = {}));\nconst Draggable = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = function Draggable(param, ref) {\n    let { axis, dragOverlay, dragging, listeners, transform, style, buttonStyle, ...props } = param;\n    var _transform_x, _transform_y;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Draggable_module_css__WEBPACK_IMPORTED_MODULE_3___default().Draggable), dragOverlay && (_Draggable_module_css__WEBPACK_IMPORTED_MODULE_3___default().dragOverlay), dragging && (_Draggable_module_css__WEBPACK_IMPORTED_MODULE_3___default().dragging)),\n        style: {\n            ...style,\n            \"--translate-x\": \"\".concat((_transform_x = transform === null || transform === void 0 ? void 0 : transform.x) !== null && _transform_x !== void 0 ? _transform_x : 0, \"px\"),\n            \"--translate-y\": \"\".concat((_transform_y = transform === null || transform === void 0 ? void 0 : transform.y) !== null && _transform_y !== void 0 ? _transform_y : 0, \"px\")\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            ...props,\n            \"aria-label\": \"Draggable\",\n            ...listeners,\n            ref: ref,\n            style: buttonStyle,\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/components/Draggable/Draggable.tsx\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/components/Draggable/Draggable.tsx\",\n        lineNumber: 47,\n        columnNumber: 7\n    }, this);\n});\n_c1 = Draggable;\nvar _c, _c1;\n$RefreshReg$(_c, \"Draggable$forwardRef\");\n$RefreshReg$(_c1, \"Draggable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZS9EcmFnZ2FibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTjtBQVdROztVQUVoQ0k7Ozs7R0FBQUEsU0FBQUE7QUFpQkwsTUFBTUMsMEJBQVlKLGlEQUFVQSxNQUNqQyxTQUFTSSxVQUNQLEtBU0MsRUFDREMsR0FBRztRQVZILEVBQ0VDLElBQUksRUFDSkMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVEMsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWCxHQUFHQyxPQUNKLEdBVEQ7UUFzQjRCSCxjQUNBQTtJQVg1QixxQkFDRSw4REFBQ0k7UUFDQ0MsV0FBV2QsaURBQVVBLENBQ25CQyx3RUFBZ0IsRUFDaEJLLGVBQWVMLDBFQUFrQixFQUNqQ00sWUFBWU4sdUVBQWU7UUFFN0JTLE9BQ0U7WUFDRSxHQUFHQSxLQUFLO1lBQ1IsaUJBQWlCLEdBQXFCLE9BQWxCRCxDQUFBQSxlQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVdNLENBQUMsY0FBWk4sMEJBQUFBLGVBQWdCLEdBQUU7WUFDdEMsaUJBQWlCLEdBQXFCLE9BQWxCQSxDQUFBQSxlQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVdPLENBQUMsY0FBWlAsMEJBQUFBLGVBQWdCLEdBQUU7UUFDeEM7a0JBR0YsNEVBQUNRO1lBQ0UsR0FBR0wsS0FBSztZQUNUTSxjQUFXO1lBQ1YsR0FBR1YsU0FBUztZQUNiSixLQUFLQTtZQUNMTSxPQUFPQztzQkFJUkMsTUFBTU8sUUFBUTs7Ozs7Ozs7Ozs7QUFJckIsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EcmFnZ2FibGUvRHJhZ2dhYmxlLnRzeD8xZTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdHlwZSB7IERyYWdnYWJsZVN5bnRoZXRpY0xpc3RlbmVycyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm0gfSBmcm9tICdAZG5kLWtpdC91dGlsaXRpZXMnO1xuXG5pbXBvcnQgeyBIYW5kbGUgfSBmcm9tICcuLi9JdGVtL2NvbXBvbmVudHMvSGFuZGxlJztcblxuaW1wb3J0IHtcbiAgZHJhZ2dhYmxlLFxuICBkcmFnZ2FibGVIb3Jpem9udGFsLFxuICBkcmFnZ2FibGVWZXJ0aWNhbCxcbn0gZnJvbSAnLi9kcmFnZ2FibGUtc3ZnJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EcmFnZ2FibGUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBlbnVtIEF4aXMge1xuICBBbGwsXG4gIFZlcnRpY2FsLFxuICBIb3Jpem9udGFsLFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBheGlzPzogQXhpcztcbiAgZHJhZ092ZXJsYXk/OiBib29sZWFuO1xuICBkcmFnZ2luZz86IGJvb2xlYW47XG4gIGxpc3RlbmVycz86IERyYWdnYWJsZVN5bnRoZXRpY0xpc3RlbmVycztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBidXR0b25TdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIHRyYW5zZm9ybT86IFRyYW5zZm9ybSB8IG51bGw7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBEcmFnZ2FibGUgPSBmb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBQcm9wcz4oXG4gIGZ1bmN0aW9uIERyYWdnYWJsZShcbiAgICB7XG4gICAgICBheGlzLFxuICAgICAgZHJhZ092ZXJsYXksXG4gICAgICBkcmFnZ2luZyxcbiAgICAgIGxpc3RlbmVycyxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIHN0eWxlLFxuICAgICAgYnV0dG9uU3R5bGUsXG4gICAgICAuLi5wcm9wc1xuICAgIH0sXG4gICAgcmVmXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuRHJhZ2dhYmxlLFxuICAgICAgICAgIGRyYWdPdmVybGF5ICYmIHN0eWxlcy5kcmFnT3ZlcmxheSxcbiAgICAgICAgICBkcmFnZ2luZyAmJiBzdHlsZXMuZHJhZ2dpbmcsXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgICctLXRyYW5zbGF0ZS14JzogYCR7dHJhbnNmb3JtPy54ID8/IDB9cHhgLFxuICAgICAgICAgICAgJy0tdHJhbnNsYXRlLXknOiBgJHt0cmFuc2Zvcm0/LnkgPz8gMH1weGAsXG4gICAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRHJhZ2dhYmxlXCJcbiAgICAgICAgICB7Li4ubGlzdGVuZXJzfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cbiAgICAgICAgPlxuXG4gICAgXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJBeGlzIiwiRHJhZ2dhYmxlIiwicmVmIiwiYXhpcyIsImRyYWdPdmVybGF5IiwiZHJhZ2dpbmciLCJsaXN0ZW5lcnMiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsImJ1dHRvblN0eWxlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ4IiwieSIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Draggable/Draggable.tsx\n"));

/***/ })

});