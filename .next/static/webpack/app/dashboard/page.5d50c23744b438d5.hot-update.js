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

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    _s();\n    const droppables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    const draggables = [\n        \"a\",\n        \"b\",\n        \"c\",\n        \"d\"\n    ];\n    // const sensors = useSensors(\n    //     useSensor(PointerSensor),\n    //     useSensor(KeyboardSensor, {\n    //         coordinateGetter: sortableKeyboardCoordinates\n    //     })\n    // );\n    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleDragEnd(event) {\n        const { active, over } = event;\n        if (active.id !== over.id) {\n            console.log(\"active\", active.id);\n            console.log(\"over\", over.id);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this);\n}\n_s(DashboardMain, \"ZnDrjteW58bnGeETVR7mYfS3gU4=\");\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s1();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const item = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {}, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 184,\n        columnNumber: 18\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: (param)=>{\n            let { over } = param;\n            setParent(over ? over.id : null);\n            setIsDragging(false);\n        },\n        onDragCancel: ()=>setIsDragging(false),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-3\",\n            children: [\n                parent === null ? item : null,\n                containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                        id: id,\n                        dragging: isDragging,\n                        children: parent === id ? item : null\n                    }, id, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 201,\n                        columnNumber: 21\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 205,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 197,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 187,\n        columnNumber: 9\n    }, this);\n}\n_s1(DroppableStory, \"cGYW11fxIGZWkr2Dvt8Qb6FPezY=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { handle } = param;\n    _s2();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: \"draggable-item\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        handle: handle,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        }\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 221,\n        columnNumber: 9\n    }, this);\n}\n_s2(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 233,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBeUIxQjtBQWFGO0FBRXZCLFNBQVNPOztJQUlMLE1BQU1DLGFBQWE7UUFBQztRQUFLO1FBQUs7UUFBSztLQUFJO0lBQ3ZDLE1BQU1DLGFBQWE7UUFBQztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRXZDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHdEQUF3RDtJQUN4RCxTQUFTO0lBQ1QsS0FBSztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFLekMsZUFBZWEsY0FBY0MsS0FBVTtRQUNuQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLE9BQU9FLEVBQUUsS0FBS0QsS0FBS0MsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUMsVUFBVUosT0FBT0UsRUFBRTtZQUMvQkMsUUFBUUMsR0FBRyxDQUFDLFFBQVFILEtBQUtDLEVBQUU7UUFFL0I7SUFDSjtJQUlBLHFCQUNJLDhEQUFDRztrQkFDSUM7Ozs7OztBQTRCYjtHQTVEU2Y7S0FBQUE7QUE4RFQsK0RBQWVBLGFBQWFBLEVBQUE7QUF3RTVCLFNBQVNnQixlQUFlLEtBSWhCO1FBSmdCLEVBQ3BCQyxhQUFhO1FBQUM7S0FBSSxFQUNsQkMsa0JBQWtCLEVBQ2xCQyxTQUFTLEVBQ0wsR0FKZ0I7O0lBS3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHM0IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDNEIsUUFBUUMsVUFBVSxHQUFHN0IsK0NBQVFBLENBQTBCO0lBRTlELE1BQU04QixxQkFBTyw4REFBQ0M7Ozs7O0lBRWQscUJBQ0ksOERBQUMzQixxREFBVUE7UUFDUG9CLG9CQUFvQkE7UUFDcEJDLFdBQVdHLFdBQVcsT0FBT0ksWUFBWVA7UUFDekNRLGFBQWEsSUFBTU4sY0FBYztRQUNqQ08sV0FBVztnQkFBQyxFQUFFbEIsSUFBSSxFQUFFO1lBQ2hCYSxVQUFVYixPQUFPQSxLQUFLQyxFQUFFLEdBQUc7WUFDM0JVLGNBQWM7UUFDbEI7UUFDQVEsY0FBYyxJQUFNUixjQUFjO2tCQUVsQyw0RUFBQ1A7WUFBSWdCLFdBQVU7O2dCQUVWUixXQUFXLE9BQU9FLE9BQU87Z0JBQ3pCUCxXQUFXYyxHQUFHLENBQUMsQ0FBQ3BCLG1CQUNiLDhEQUFDZCxrREFBU0E7d0JBQVVjLElBQUlBO3dCQUFJTixVQUFVZTtrQ0FDakNFLFdBQVdYLEtBQUthLE9BQU87dUJBRFpiOzs7Ozs4QkFJcEIsOERBQUNmLHlEQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakM7SUFqQ1NvQjtNQUFBQTtBQXVDVCxTQUFTUyxjQUFjLEtBQTBCO1FBQTFCLEVBQUVPLE1BQU0sRUFBa0IsR0FBMUI7O0lBQ25CLE1BQU0sRUFBRVosVUFBVSxFQUFFYSxVQUFVLEVBQUVDLFNBQVMsRUFBRSxHQUFHbkMsMkRBQVlBLENBQUM7UUFDdkRZLElBQUk7SUFDUjtJQUVBLHFCQUNJLDhEQUFDaEIsa0RBQVNBO1FBQ05VLFVBQVVlO1FBQ1ZlLEtBQUtGO1FBQ0xELFFBQVFBO1FBQ1JFLFdBQVdBO1FBQ1hFLE9BQU87WUFDSEMsU0FBU2pCLGFBQWEsSUFBSU07UUFDOUI7Ozs7OztBQUdaO0lBaEJTRDs7UUFDeUMxQix1REFBWUE7OztNQURyRDBCO0FBa0JGLE1BQU1WLGFBQWEsa0JBQU0sOERBQUNDO1FBQWVDLFlBQVk7WUFBQztZQUFLO1lBQUs7U0FBSTs7Ozs7a0JBQUs7TUFBbkVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7XG4vLyAgICAgRG5kQ29udGV4dCxcbi8vICAgICBjbG9zZXN0Q2VudGVyLFxuLy8gICAgIEtleWJvYXJkU2Vuc29yLFxuLy8gICAgIFBvaW50ZXJTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29yLFxuLy8gICAgIHVzZVNlbnNvcnMsXG4vLyAgICAgdXNlRHJhZ2dhYmxlLFxuLy8gICAgIERyYWdPdmVybGF5XG4vLyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuLy8gaW1wb3J0IHtcbi8vICAgICBhcnJheU1vdmUsXG4vLyAgICAgU29ydGFibGVDb250ZXh0LFxuLy8gICAgIHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcbi8vICAgICByZWN0U29ydGluZ1N0cmF0ZWd5XG4vLyB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcbmltcG9ydCB7XG4gICAgRHJhZ2dhYmxlLFxuICAgIERyYWdnYWJsZU92ZXJsYXksXG4gICAgRHJvcHBhYmxlLFxuICAgIEdyaWRDb250YWluZXIsXG4gICAgV3JhcHBlcixcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcblxuXG5pbXBvcnQge1xuICAgIGNsb3Nlc3RDZW50ZXIsXG4gICAgY2xvc2VzdENvcm5lcnMsXG4gICAgcmVjdEludGVyc2VjdGlvbixcbiAgICBwb2ludGVyV2l0aGluLFxuICAgIERuZENvbnRleHQsXG4gICAgdXNlRHJhZ2dhYmxlLFxuICAgIFVuaXF1ZUlkZW50aWZpZXIsXG4gICAgQ29sbGlzaW9uRGV0ZWN0aW9uIGFzIENvbGxpc2lvbkRldGVjdGlvblR5cGUsXG4gICAgTW9kaWZpZXJzLFxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcblxuZnVuY3Rpb24gRGFzaGJvYXJkTWFpbigpIHtcblxuXG5cbiAgICBjb25zdCBkcm9wcGFibGVzID0gWycxJywgJzInLCAnMycsICc0J107XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IFsnYScsICdiJywgJ2MnLCAnZCddO1xuXG4gICAgLy8gY29uc3Qgc2Vuc29ycyA9IHVzZVNlbnNvcnMoXG4gICAgLy8gICAgIHVzZVNlbnNvcihQb2ludGVyU2Vuc29yKSxcbiAgICAvLyAgICAgdXNlU2Vuc29yKEtleWJvYXJkU2Vuc29yLCB7XG4gICAgLy8gICAgICAgICBjb29yZGluYXRlR2V0dGVyOiBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXNcbiAgICAvLyAgICAgfSlcbiAgICAvLyApO1xuICAgIGNvbnN0IFthY3RpdmVJZCwgc2V0QWN0aXZlSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGV2ZW50O1xuICAgICAgICBpZiAoYWN0aXZlLmlkICE9PSBvdmVyLmlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlJywgYWN0aXZlLmlkKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ292ZXInLCBvdmVyLmlkKVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICB7QmFzaWNTZXR1cCgpfVxuICAgICAgICAgICAgey8qIDxEbmRDb250ZXh0XG4gICAgICAgICAgICAgICAgc2Vuc29ycz17c2Vuc29yc31cbiAgICAgICAgICAgICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2Nsb3Nlc3RDZW50ZXJ9XG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgICAgICAgIC8vIG9uRHJhZ092ZXI9eygpID0+IHNldERyYWdnaW5nKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0RHJhZ2dpbmcodHJ1ZSl9XG4gICAgICAgICAgICA+ICovfVxuICAgICAgICAgICAgey8qIHtkcm9wcGFibGVzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBpZD17aWR9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRHJvcHBhYmxlIGNvbnRhaW5lciBpZDogJHtpZH1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgICAgICAgKSl9XG5cblxuICAgICAgICAgICAgICAgIHtkcmFnZ2FibGVzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmc9e2RyYWdnaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRHJhZ2dhYmxlIGl0ZW0gaWQ6ICR7aWR9XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgICkpfSAqL31cblxuICAgICAgICAgICAgey8qIDwvRG5kQ29udGV4dD4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTWFpblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIERyb3BwYWJsZShwcm9wczogeyBpZDogc3RyaW5nOyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbi8vICAgICBjb25zdCB7IHNldE5vZGVSZWYgfSA9IHVzZURyb3BwYWJsZSh7XG4vLyAgICAgICAgIGlkOiBwcm9wcy5pZCxcblxuLy8gICAgIH0pO1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNTIgaC01MiBiZy1yZWQtMjAwIHJvdW5kZWQtbGcgbS01JyByZWY9e3NldE5vZGVSZWZ9PlxuLy8gICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIERyYWdnYWJsZShwcm9wczogeyBpZDogc3RyaW5nOyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLCBkcmFnZ2luZzogYm9vbGVhbiB9KSB7XG4vLyAgICAgY29uc3QgeyBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIHNldEFjdGl2YXRvck5vZGVSZWYsXG4vLyAgICAgICAgIGF0dHJpYnV0ZXMsXG4vLyAgICAgICAgIHRyYW5zZm9ybSxcbi8vICAgICAgICAgaXNEcmFnZ2luZyxcbi8vICAgICAgICAgdHJhbnNpdGlvbixcbi8vICAgICB9ID0gdXNlRHJhZ2dhYmxlKHsgaWQ6IHByb3BzLmlkLCB9KTtcblxuXG5cbi8vICAgICBjb25zdCBzdHlsZSA9IHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiBDU1MuVHJhbnNmb3JtLnRvU3RyaW5nKHRyYW5zZm9ybSksXG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24gPz8gdW5kZWZpbmVkLFxuLy8gICAgICAgICB6SW5kZXg6IGlzRHJhZ2dpbmcgPyAnMTAwJyA6ICdhdXRvJyxcbi8vICAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAuNCA6IDFcbi8vICAgICB9O1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdlxuLy8gICAgICAgICAgICAgcmVmPXtzZXROb2RlUmVmfVxuLy8gICAgICAgICAgICAgc3R5bGU9e3N0eWxlIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICAgIHsvKiAuLi4gKi99XG4vLyAgICAgICAgICAgICA8YnV0dG9uIHJlZj17c2V0QWN0aXZhdG9yTm9kZVJlZn0gey4uLmxpc3RlbmVyc30+RHJhZyBoYW5kbGU8L2J1dHRvbj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY29sbGlzaW9uRGV0ZWN0aW9uPzogQ29sbGlzaW9uRGV0ZWN0aW9uVHlwZTtcbiAgICBjb250YWluZXJzPzogc3RyaW5nW107XG4gICAgbW9kaWZpZXJzPzogTW9kaWZpZXJzO1xuICAgIHZhbHVlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBEcm9wcGFibGVTdG9yeSh7XG4gICAgY29udGFpbmVycyA9IFsnQSddLFxuICAgIGNvbGxpc2lvbkRldGVjdGlvbixcbiAgICBtb2RpZmllcnMsXG59OiBQcm9wcykge1xuICAgIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcGFyZW50LCBzZXRQYXJlbnRdID0gdXNlU3RhdGU8VW5pcXVlSWRlbnRpZmllciB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc3QgaXRlbSA9IDxEcmFnZ2FibGVJdGVtIC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERuZENvbnRleHRcbiAgICAgICAgICAgIGNvbGxpc2lvbkRldGVjdGlvbj17Y29sbGlzaW9uRGV0ZWN0aW9ufVxuICAgICAgICAgICAgbW9kaWZpZXJzPXtwYXJlbnQgPT09IG51bGwgPyB1bmRlZmluZWQgOiBtb2RpZmllcnN9XG4gICAgICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0SXNEcmFnZ2luZyh0cnVlKX1cbiAgICAgICAgICAgIG9uRHJhZ0VuZD17KHsgb3ZlciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFyZW50KG92ZXIgPyBvdmVyLmlkIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgc2V0SXNEcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25EcmFnQ2FuY2VsPXsoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMnID5cblxuICAgICAgICAgICAgICAgIHtwYXJlbnQgPT09IG51bGwgPyBpdGVtIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Y29udGFpbmVycy5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUga2V5PXtpZH0gaWQ9e2lkfSBkcmFnZ2luZz17aXNEcmFnZ2luZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyZW50ID09PSBpZCA/IGl0ZW0gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlT3ZlcmxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRG5kQ29udGV4dD5cbiAgICApO1xufVxuXG5pbnRlcmZhY2UgRHJhZ2dhYmxlUHJvcHMge1xuICAgIGhhbmRsZT86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIERyYWdnYWJsZUl0ZW0oeyBoYW5kbGUgfTogRHJhZ2dhYmxlUHJvcHMpIHtcbiAgICBjb25zdCB7IGlzRHJhZ2dpbmcsIHNldE5vZGVSZWYsIGxpc3RlbmVycyB9ID0gdXNlRHJhZ2dhYmxlKHtcbiAgICAgICAgaWQ6ICdkcmFnZ2FibGUtaXRlbScsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgICAgICAgIGhhbmRsZT17aGFuZGxlfVxuICAgICAgICAgICAgbGlzdGVuZXJzPXtsaXN0ZW5lcnN9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgQmFzaWNTZXR1cCA9ICgpID0+IDxEcm9wcGFibGVTdG9yeSBjb250YWluZXJzPXtbJ0EnLCAnQicsICdDJ119IC8+O1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyYWdnYWJsZSIsIkRyYWdnYWJsZU92ZXJsYXkiLCJEcm9wcGFibGUiLCJEbmRDb250ZXh0IiwidXNlRHJhZ2dhYmxlIiwiRGFzaGJvYXJkTWFpbiIsImRyb3BwYWJsZXMiLCJkcmFnZ2FibGVzIiwiYWN0aXZlSWQiLCJzZXRBY3RpdmVJZCIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJoYW5kbGVEcmFnRW5kIiwiZXZlbnQiLCJhY3RpdmUiLCJvdmVyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiQmFzaWNTZXR1cCIsIkRyb3BwYWJsZVN0b3J5IiwiY29udGFpbmVycyIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm1vZGlmaWVycyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwicGFyZW50Iiwic2V0UGFyZW50IiwiaXRlbSIsIkRyYWdnYWJsZUl0ZW0iLCJ1bmRlZmluZWQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIm9uRHJhZ0NhbmNlbCIsImNsYXNzTmFtZSIsIm1hcCIsImhhbmRsZSIsInNldE5vZGVSZWYiLCJsaXN0ZW5lcnMiLCJyZWYiLCJzdHlsZSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});