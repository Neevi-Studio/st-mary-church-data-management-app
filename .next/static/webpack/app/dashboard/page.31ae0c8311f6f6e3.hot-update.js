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

/***/ "(app-pages-browser)/./src/components/Droppable/Droppable.tsx":
/*!************************************************!*\
  !*** ./src/components/Droppable/Droppable.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Droppable: function() { return /* binding */ Droppable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _droppable_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./droppable-svg */ \"(app-pages-browser)/./src/components/Droppable/droppable-svg.tsx\");\n/* harmony import */ var _Droppable_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Droppable.module.css */ \"(app-pages-browser)/./src/components/Droppable/Droppable.module.css\");\n/* harmony import */ var _Droppable_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Droppable_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Droppable(param) {\n    let { children, id, dragging, disabled } = param;\n    _s();\n    const { isOver, setNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useDroppable)({\n        id\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: setNodeRef,\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Droppable_module_css__WEBPACK_IMPORTED_MODULE_5___default().Droppable), isOver && (_Droppable_module_css__WEBPACK_IMPORTED_MODULE_5___default().over), dragging && (_Droppable_module_css__WEBPACK_IMPORTED_MODULE_5___default().dragging), children && (_Droppable_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropped)),\n        \"aria-label\": \"Droppable region\",\n        children: [\n            children,\n            _droppable_svg__WEBPACK_IMPORTED_MODULE_4__.droppable\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/components/Droppable/Droppable.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Droppable, \"fT702R7NW3L8KUJObOwGrnMsXMQ=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useDroppable\n    ];\n});\n_c = Droppable;\nvar _c;\n$RefreshReg$(_c, \"Droppable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Ryb3BwYWJsZS9Ecm9wcGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNxQztBQUMzQjtBQUVRO0FBQ0E7QUFTckMsU0FBU0ssVUFBVSxLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQUVDLEVBQUUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQVMsR0FBM0M7O0lBQ3hCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR1YsMkRBQVlBLENBQUM7UUFDMUNNO0lBRUY7SUFFQSxxQkFDRSw4REFBQ0s7UUFDQ0MsS0FBS0Y7UUFDTEcsV0FBV1osaURBQVVBLENBQ25CRSx3RUFBZ0IsRUFDaEJNLFVBQVVOLG1FQUFXLEVBQ3JCSSxZQUFZSix1RUFBZSxFQUMzQkUsWUFBWUYsc0VBQWM7UUFFNUJhLGNBQVc7O1lBRVZYO1lBQ0FILHFEQUFTQTs7Ozs7OztBQUdoQjtHQXJCZ0JFOztRQUNpQkosdURBQVlBOzs7S0FEN0JJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Ryb3BwYWJsZS9Ecm9wcGFibGUudHN4PzUwODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURyb3BwYWJsZSwgVW5pcXVlSWRlbnRpZmllciB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB7IGRyb3BwYWJsZSB9IGZyb20gJy4vZHJvcHBhYmxlLXN2Zyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRHJvcHBhYmxlLm1vZHVsZS5jc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBkcmFnZ2luZzogYm9vbGVhbjtcbiAgaWQ6IFVuaXF1ZUlkZW50aWZpZXI7XG4gIGRpc2FibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRHJvcHBhYmxlKHsgY2hpbGRyZW4sIGlkLCBkcmFnZ2luZywgZGlzYWJsZWQgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBpc092ZXIsIHNldE5vZGVSZWYgfSA9IHVzZURyb3BwYWJsZSh7XG4gICAgaWQsXG4gICAgXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICBzdHlsZXMuRHJvcHBhYmxlLFxuICAgICAgICBpc092ZXIgJiYgc3R5bGVzLm92ZXIsXG4gICAgICAgIGRyYWdnaW5nICYmIHN0eWxlcy5kcmFnZ2luZyxcbiAgICAgICAgY2hpbGRyZW4gJiYgc3R5bGVzLmRyb3BwZWRcbiAgICAgICl9XG4gICAgICBhcmlhLWxhYmVsPVwiRHJvcHBhYmxlIHJlZ2lvblwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgICAge2Ryb3BwYWJsZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURyb3BwYWJsZSIsImNsYXNzTmFtZXMiLCJkcm9wcGFibGUiLCJzdHlsZXMiLCJEcm9wcGFibGUiLCJjaGlsZHJlbiIsImlkIiwiZHJhZ2dpbmciLCJkaXNhYmxlZCIsImlzT3ZlciIsInNldE5vZGVSZWYiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJvdmVyIiwiZHJvcHBlZCIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Droppable/Droppable.tsx\n"));

/***/ })

});