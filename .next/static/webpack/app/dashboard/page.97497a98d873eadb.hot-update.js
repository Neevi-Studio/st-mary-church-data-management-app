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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    _s();\n    const droppables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    // const sensors = useSensors(\n    //     useSensor(PointerSensor),\n    //     useSensor(KeyboardSensor, {\n    //         coordinateGetter: sortableKeyboardCoordinates\n    //     })\n    // );\n    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleDragEnd(event) {\n        const { active, over } = event;\n        if (active.id !== over.id) {\n            console.log(\"active\", active.id);\n            console.log(\"over\", over.id);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_s(DashboardMain, \"ZnDrjteW58bnGeETVR7mYfS3gU4=\");\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s1();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const draggables = [\n        \"a\",\n        \"b\",\n        \"c\",\n        \"d\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: (param)=>{\n            let { over } = param;\n            setParent(over ? over.id : null);\n            setIsDragging(false);\n        },\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n                    ids: id,\n                    dragging: isDragging,\n                    children: id\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 198,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === id ? item : null\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 210,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 214,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 208,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 187,\n        columnNumber: 9\n    }, this);\n}\n_s1(DroppableStory, \"cGYW11fxIGZWkr2Dvt8Qb6FPezY=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids, dragging } = param;\n    _s2();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 241,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 242,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 243,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 244,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 240,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 231,\n        columnNumber: 9\n    }, this);\n}\n_s2(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 251,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBeUIxQjtBQWFGO0FBRXZCLFNBQVNPOztJQUlMLE1BQU1DLGFBQWE7UUFBQztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRXZDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHdEQUF3RDtJQUN4RCxTQUFTO0lBQ1QsS0FBSztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFLekMsZUFBZVksY0FBY0MsS0FBVTtRQUNuQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLE9BQU9FLEVBQUUsS0FBS0QsS0FBS0MsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUMsVUFBVUosT0FBT0UsRUFBRTtZQUMvQkMsUUFBUUMsR0FBRyxDQUFDLFFBQVFILEtBQUtDLEVBQUU7UUFFL0I7SUFDSjtJQUlBLHFCQUNJLDhEQUFDRztrQkFDSUM7Ozs7OztBQTRCYjtHQTNEU2Q7S0FBQUE7QUE2RFQsK0RBQWVBLGFBQWFBLEVBQUE7QUF3RTVCLFNBQVNlLGVBQWUsS0FJaEI7UUFKZ0IsRUFDcEJDLGFBQWE7UUFBQztLQUFJLEVBQ2xCQyxrQkFBa0IsRUFDbEJDLFNBQVMsRUFDTCxHQUpnQjs7SUFLcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUMyQixRQUFRQyxVQUFVLEdBQUc1QiwrQ0FBUUEsQ0FBMEI7SUFFOUQsTUFBTTZCLGFBQWE7UUFBQztRQUFLO1FBQUs7UUFBSztLQUFJO0lBR3ZDLHFCQUNJLDhEQUFDekIscURBQVVBO1FBQ1BtQixvQkFBb0JBO1FBQ3BCQyxXQUFXRyxXQUFXLE9BQU9HLFlBQVlOO1FBQ3pDTyxhQUFhLElBQU1MLGNBQWM7UUFDakNNLFdBQVc7Z0JBQUMsRUFBRWpCLElBQUksRUFBRTtZQUNoQmEsVUFBVWIsT0FBT0EsS0FBS0MsRUFBRSxHQUFHO1lBQzNCVSxjQUFjO1FBQ2xCO1FBQ0FPLGNBQWMsSUFBTVAsY0FBYzs7WUFFakNHLFdBQVdLLEdBQUcsQ0FBQyxDQUFDbEIsbUJBQ2IsOERBQUNmLGtEQUFTQTtvQkFFTmtDLEtBQUtuQjtvQkFDTE4sVUFBVWU7OEJBRVRUO21CQUpJQTs7Ozs7MEJBU2IsOERBQUNHO2dCQUFJaUIsV0FBVTs7b0JBQ1ZkLFdBQVdZLEdBQUcsQ0FBQyxDQUFDbEIsbUJBQ2IsOERBQUNiLGtEQUFTQTs0QkFBVWEsSUFBSUE7NEJBQUlOLFVBQVVlO3NDQUNqQ0UsV0FBV1gsS0FBS3FCLE9BQU87MkJBRFpyQjs7Ozs7a0NBSXBCLDhEQUFDZCx5REFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQztJQTNDU21CO01BQUFBO0FBa0RULFNBQVNpQixjQUFjLEtBQXdCO1FBQXhCLEVBQUVILEdBQUcsRUFBRXpCLFFBQVEsRUFBUyxHQUF4Qjs7SUFDbkIsTUFBTSxFQUFFZSxVQUFVLEVBQUVjLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUduQywyREFBWUEsQ0FBQztRQUN2RFcsSUFBSW1CO0lBQ1I7SUFFQSxxQkFDSSw4REFBQ2xDLGtEQUFTQTtRQUNOUyxVQUFVZTtRQUNWZ0IsS0FBS0Y7UUFDTEMsV0FBV0E7UUFDWEUsT0FBTztZQUNIQyxTQUFTbEIsYUFBYSxJQUFJSztRQUM5QjtrQkFHQSw0RUFBQ1g7WUFBSWlCLFdBQVU7OzhCQUNYLDhEQUFDUTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkI7SUF4QlNOOztRQUN5Q2pDLHVEQUFZQTs7O01BRHJEaUM7QUEwQkYsTUFBTWxCLGFBQWEsa0JBQU0sOERBQUNDO1FBQWVDLFlBQVk7WUFBQztZQUFLO1lBQUs7U0FBSTs7Ozs7a0JBQUs7TUFBbkVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7XG4vLyAgICAgRG5kQ29udGV4dCxcbi8vICAgICBjbG9zZXN0Q2VudGVyLFxuLy8gICAgIEtleWJvYXJkU2Vuc29yLFxuLy8gICAgIFBvaW50ZXJTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29yLFxuLy8gICAgIHVzZVNlbnNvcnMsXG4vLyAgICAgdXNlRHJhZ2dhYmxlLFxuLy8gICAgIERyYWdPdmVybGF5XG4vLyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuLy8gaW1wb3J0IHtcbi8vICAgICBhcnJheU1vdmUsXG4vLyAgICAgU29ydGFibGVDb250ZXh0LFxuLy8gICAgIHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcbi8vICAgICByZWN0U29ydGluZ1N0cmF0ZWd5XG4vLyB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcbmltcG9ydCB7XG4gICAgRHJhZ2dhYmxlLFxuICAgIERyYWdnYWJsZU92ZXJsYXksXG4gICAgRHJvcHBhYmxlLFxuICAgIEdyaWRDb250YWluZXIsXG4gICAgV3JhcHBlcixcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcblxuXG5pbXBvcnQge1xuICAgIGNsb3Nlc3RDZW50ZXIsXG4gICAgY2xvc2VzdENvcm5lcnMsXG4gICAgcmVjdEludGVyc2VjdGlvbixcbiAgICBwb2ludGVyV2l0aGluLFxuICAgIERuZENvbnRleHQsXG4gICAgdXNlRHJhZ2dhYmxlLFxuICAgIFVuaXF1ZUlkZW50aWZpZXIsXG4gICAgQ29sbGlzaW9uRGV0ZWN0aW9uIGFzIENvbGxpc2lvbkRldGVjdGlvblR5cGUsXG4gICAgTW9kaWZpZXJzLFxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcblxuZnVuY3Rpb24gRGFzaGJvYXJkTWFpbigpIHtcblxuXG5cbiAgICBjb25zdCBkcm9wcGFibGVzID0gWycxJywgJzInLCAnMycsICc0J107XG5cbiAgICAvLyBjb25zdCBzZW5zb3JzID0gdXNlU2Vuc29ycyhcbiAgICAvLyAgICAgdXNlU2Vuc29yKFBvaW50ZXJTZW5zb3IpLFxuICAgIC8vICAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcbiAgICAvLyAgICAgICAgIGNvb3JkaW5hdGVHZXR0ZXI6IHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlc1xuICAgIC8vICAgICB9KVxuICAgIC8vICk7XG4gICAgY29uc3QgW2FjdGl2ZUlkLCBzZXRBY3RpdmVJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgICAgIGlmIChhY3RpdmUuaWQgIT09IG92ZXIuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUnLCBhY3RpdmUuaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3ZlcicsIG92ZXIuaWQpXG5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIHtCYXNpY1NldHVwKCl9XG4gICAgICAgICAgICB7LyogPERuZENvbnRleHRcbiAgICAgICAgICAgICAgICBzZW5zb3JzPXtzZW5zb3JzfVxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkRldGVjdGlvbj17Y2xvc2VzdENlbnRlcn1cbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgICAgICAgLy8gb25EcmFnT3Zlcj17KCkgPT4gc2V0RHJhZ2dpbmcoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cbiAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICB7Lyoge2Ryb3BwYWJsZXMubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGlkPXtpZH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcm9wcGFibGUgY29udGFpbmVyIGlkOiAke2lkfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICAgICAge2RyYWdnYWJsZXMubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZz17ZHJhZ2dpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcmFnZ2FibGUgaXRlbSBpZDogJHtpZH1cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgICAgICAgKSl9ICovfVxuXG4gICAgICAgICAgICB7LyogPC9EbmRDb250ZXh0PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRNYWluXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gRHJvcHBhYmxlKHByb3BzOiB7IGlkOiBzdHJpbmc7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuLy8gICAgIGNvbnN0IHsgc2V0Tm9kZVJlZiB9ID0gdXNlRHJvcHBhYmxlKHtcbi8vICAgICAgICAgaWQ6IHByb3BzLmlkLFxuXG4vLyAgICAgfSk7XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy01MiBoLTUyIGJnLXJlZC0yMDAgcm91bmRlZC1sZyBtLTUnIHJlZj17c2V0Tm9kZVJlZn0+XG4vLyAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9XG5cblxuLy8gZnVuY3Rpb24gRHJhZ2dhYmxlKHByb3BzOiB7IGlkOiBzdHJpbmc7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsIGRyYWdnaW5nOiBib29sZWFuIH0pIHtcbi8vICAgICBjb25zdCB7IGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgc2V0QWN0aXZhdG9yTm9kZVJlZixcbi8vICAgICAgICAgYXR0cmlidXRlcyxcbi8vICAgICAgICAgdHJhbnNmb3JtLFxuLy8gICAgICAgICBpc0RyYWdnaW5nLFxuLy8gICAgICAgICB0cmFuc2l0aW9uLFxuLy8gICAgIH0gPSB1c2VEcmFnZ2FibGUoeyBpZDogcHJvcHMuaWQsIH0pO1xuXG5cblxuLy8gICAgIGNvbnN0IHN0eWxlID0ge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IENTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKSxcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbiA/PyB1bmRlZmluZWQsXG4vLyAgICAgICAgIHpJbmRleDogaXNEcmFnZ2luZyA/ICcxMDAnIDogJ2F1dG8nLFxuLy8gICAgICAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC40IDogMVxuLy8gICAgIH07XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2XG4vLyAgICAgICAgICAgICByZWY9e3NldE5vZGVSZWZ9XG4vLyAgICAgICAgICAgICBzdHlsZT17c3R5bGUgYXMgUmVhY3QuQ1NTUHJvcGVydGllc31cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgICAgey8qIC4uLiAqL31cbi8vICAgICAgICAgICAgIDxidXR0b24gcmVmPXtzZXRBY3RpdmF0b3JOb2RlUmVmfSB7Li4ubGlzdGVuZXJzfT5EcmFnIGhhbmRsZTwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24/OiBDb2xsaXNpb25EZXRlY3Rpb25UeXBlO1xuICAgIGNvbnRhaW5lcnM/OiBzdHJpbmdbXTtcbiAgICBtb2RpZmllcnM/OiBNb2RpZmllcnM7XG4gICAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIERyb3BwYWJsZVN0b3J5KHtcbiAgICBjb250YWluZXJzID0gWydBJ10sXG4gICAgY29sbGlzaW9uRGV0ZWN0aW9uLFxuICAgIG1vZGlmaWVycyxcbn06IFByb3BzKSB7XG4gICAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwYXJlbnQsIHNldFBhcmVudF0gPSB1c2VTdGF0ZTxVbmlxdWVJZGVudGlmaWVyIHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBkcmFnZ2FibGVzID0gWydhJywgJ2InLCAnYycsICdkJ107XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEbmRDb250ZXh0XG4gICAgICAgICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2NvbGxpc2lvbkRldGVjdGlvbn1cbiAgICAgICAgICAgIG1vZGlmaWVycz17cGFyZW50ID09PSBudWxsID8gdW5kZWZpbmVkIDogbW9kaWZpZXJzfVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldElzRHJhZ2dpbmcodHJ1ZSl9XG4gICAgICAgICAgICBvbkRyYWdFbmQ9eyh7IG92ZXIgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBhcmVudChvdmVyID8gb3Zlci5pZCA6IG51bGwpO1xuICAgICAgICAgICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ0NhbmNlbD17KCkgPT4gc2V0SXNEcmFnZ2luZyhmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtkcmFnZ2FibGVzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkcz17aWR9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lkfVxuICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIHsvKiB7cGFyZW50ID09PSBudWxsID8gaXRlbSA6IG51bGx9ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMnID5cbiAgICAgICAgICAgICAgICB7Y29udGFpbmVycy5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUga2V5PXtpZH0gaWQ9e2lkfSBkcmFnZ2luZz17aXNEcmFnZ2luZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyZW50ID09PSBpZCA/IGl0ZW0gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlT3ZlcmxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRG5kQ29udGV4dD5cbiAgICApO1xufVxuXG50eXBlIHByb3BzID0ge1xuICAgIGlkczogc3RyaW5nO1xuICAgIGRyYWdnaW5nOiBib29sZWFuO1xuXG59XG5mdW5jdGlvbiBEcmFnZ2FibGVJdGVtKHsgaWRzLCBkcmFnZ2luZyB9OiBwcm9wcykge1xuICAgIGNvbnN0IHsgaXNEcmFnZ2luZywgc2V0Tm9kZVJlZiwgbGlzdGVuZXJzIH0gPSB1c2VEcmFnZ2FibGUoe1xuICAgICAgICBpZDogaWRzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICAgICAgZHJhZ2dpbmc9e2lzRHJhZ2dpbmd9XG4gICAgICAgICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICAgICAgICBsaXN0ZW5lcnM9e2xpc3RlbmVyc31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljU2V0dXAgPSAoKSA9PiA8RHJvcHBhYmxlU3RvcnkgY29udGFpbmVycz17WydBJywgJ0InLCAnQyddfSAvPjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcmFnZ2FibGUiLCJEcmFnZ2FibGVPdmVybGF5IiwiRHJvcHBhYmxlIiwiRG5kQ29udGV4dCIsInVzZURyYWdnYWJsZSIsIkRhc2hib2FyZE1haW4iLCJkcm9wcGFibGVzIiwiYWN0aXZlSWQiLCJzZXRBY3RpdmVJZCIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJoYW5kbGVEcmFnRW5kIiwiZXZlbnQiLCJhY3RpdmUiLCJvdmVyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiQmFzaWNTZXR1cCIsIkRyb3BwYWJsZVN0b3J5IiwiY29udGFpbmVycyIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm1vZGlmaWVycyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwicGFyZW50Iiwic2V0UGFyZW50IiwiZHJhZ2dhYmxlcyIsInVuZGVmaW5lZCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwib25EcmFnQ2FuY2VsIiwibWFwIiwiaWRzIiwiY2xhc3NOYW1lIiwiaXRlbSIsIkRyYWdnYWJsZUl0ZW0iLCJzZXROb2RlUmVmIiwibGlzdGVuZXJzIiwicmVmIiwic3R5bGUiLCJvcGFjaXR5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});