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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    _s();\n    const droppables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    // const sensors = useSensors(\n    //     useSensor(PointerSensor),\n    //     useSensor(KeyboardSensor, {\n    //         coordinateGetter: sortableKeyboardCoordinates\n    //     })\n    // );\n    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleDragEnd(event) {\n        const { active, over } = event;\n        if (active.id !== over.id) {\n            console.log(\"active\", active.id);\n            console.log(\"over\", over.id);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(DashboardMain, \"ZnDrjteW58bnGeETVR7mYfS3gU4=\");\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s1();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const draggables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    const parentChildDTO = {\n        parentId: \"id\",\n        childId: \"ChildId\"\n    };\n    console.log(parent);\n    function handleDragEnd(event) {\n        const { active, over } = event;\n        if (active.id !== over.id) {\n            console.log(\"Parent Id\", active.id);\n            console.log(\"Child ID\", over.id);\n            setParent((old)=>[\n                    ...old,\n                    {\n                        parentId: active.id,\n                        childId: over.id\n                    }\n                ]);\n            setIsDragging(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: handleDragEnd,\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                    ids: id,\n                    dragging: isDragging\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 215,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === id ? item : null\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 226,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 230,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 224,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 207,\n        columnNumber: 9\n    }, this);\n}\n_s1(DroppableStory, \"CYQ9q7TnNfNm8rZWBByeCvuOE2I=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids, dragging } = param;\n    _s2();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 257,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 258,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 259,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 260,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 256,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 247,\n        columnNumber: 9\n    }, this);\n}\n_s2(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 267,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBdUIxQjtBQVlGO0FBRXZCLFNBQVNPOztJQUlMLE1BQU1DLGFBQWE7UUFBQztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRXZDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHdEQUF3RDtJQUN4RCxTQUFTO0lBQ1QsS0FBSztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFLekMsZUFBZVksY0FBY0MsS0FBVTtRQUNuQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLE9BQU9FLEVBQUUsS0FBS0QsS0FBS0MsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUMsVUFBVUosT0FBT0UsRUFBRTtZQUMvQkMsUUFBUUMsR0FBRyxDQUFDLFFBQVFILEtBQUtDLEVBQUU7UUFFL0I7SUFDSjtJQUlBLHFCQUNJLDhEQUFDRztrQkFDSUM7Ozs7OztBQTRCYjtHQTNEU2Q7S0FBQUE7QUE2RFQsK0RBQWVBLGFBQWFBLEVBQUE7QUE2RTVCLFNBQVNlLGVBQWUsS0FJaEI7UUFKZ0IsRUFDcEJDLGFBQWE7UUFBQztLQUFJLEVBQ2xCQyxrQkFBa0IsRUFDbEJDLFNBQVMsRUFDTCxHQUpnQjs7SUFLcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUMyQixRQUFRQyxVQUFVLEdBQUc1QiwrQ0FBUUEsQ0FBMEIsRUFBRTtJQUVoRSxNQUFNNkIsYUFBYTtRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkMsTUFBTUMsaUJBQWlCO1FBQ25CQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDYjtJQUNBZixRQUFRQyxHQUFHLENBQUNTO0lBQ1osU0FBU2YsY0FBY0MsS0FBVTtRQUM3QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLE9BQU9FLEVBQUUsS0FBS0QsS0FBS0MsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUMsYUFBYUosT0FBT0UsRUFBRTtZQUNsQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlILEtBQUtDLEVBQUU7WUFDL0JZLFVBQVVLLENBQUFBLE1BQU87dUJBQUlBO29CQUFLO3dCQUN0QkYsVUFBVWpCLE9BQU9FLEVBQUU7d0JBQ25CZ0IsU0FBU2pCLEtBQUtDLEVBQUU7b0JBQ3BCO2lCQUFFO1lBQ0ZVLGNBQWM7UUFDbEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDdEIscURBQVVBO1FBQ1BtQixvQkFBb0JBO1FBQ3BCQyxXQUFXRyxXQUFXLE9BQU9PLFlBQVlWO1FBQ3pDVyxhQUFhLElBQU1ULGNBQWM7UUFDakNVLFdBQVd4QjtRQUNYeUIsY0FBYyxJQUFNWCxjQUFjOztZQUVqQ0csV0FBV1MsR0FBRyxDQUFDLENBQUN0QixtQkFDYiw4REFBQ3VCO29CQUVHQyxLQUFLeEI7b0JBQ0xOLFVBQVVlO21CQUZMVDs7Ozs7MEJBUWIsOERBQUNHO2dCQUFJc0IsV0FBVTs7b0JBQ1ZuQixXQUFXZ0IsR0FBRyxDQUFDLENBQUN0QixtQkFDYiw4REFBQ2Isa0RBQVNBOzRCQUFVYSxJQUFJQTs0QkFBSU4sVUFBVWU7c0NBQ2pDRSxXQUFXWCxLQUFLMEIsT0FBTzsyQkFEWjFCOzs7OztrQ0FJcEIsOERBQUNkLHlEQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDO0lBekRTbUI7TUFBQUE7QUFnRVQsU0FBU2tCLGNBQWMsS0FBd0I7UUFBeEIsRUFBRUMsR0FBRyxFQUFFOUIsUUFBUSxFQUFTLEdBQXhCOztJQUNuQixNQUFNLEVBQUVlLFVBQVUsRUFBRWtCLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUd2QywyREFBWUEsQ0FBQztRQUN2RFcsSUFBSXdCO0lBQ1I7SUFFQSxxQkFDSSw4REFBQ3ZDLGtEQUFTQTtRQUNOUyxVQUFVZTtRQUNWb0IsS0FBS0Y7UUFDTEMsV0FBV0E7UUFDWEUsT0FBTztZQUNIQyxTQUFTdEIsYUFBYSxJQUFJUztRQUM5QjtrQkFHQSw0RUFBQ2Y7WUFBSXNCLFdBQVU7OzhCQUNYLDhEQUFDTzs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkI7SUF4QlNUOztRQUN5Q2xDLHVEQUFZQTs7O01BRHJEa0M7QUEwQkYsTUFBTW5CLGFBQWEsa0JBQU0sOERBQUNDO1FBQWVDLFlBQVk7WUFBQztZQUFLO1lBQUs7U0FBSTs7Ozs7a0JBQUs7TUFBbkVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7XG4vLyAgICAgRG5kQ29udGV4dCxcbi8vICAgICBjbG9zZXN0Q2VudGVyLFxuLy8gICAgIEtleWJvYXJkU2Vuc29yLFxuLy8gICAgIFBvaW50ZXJTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29yLFxuLy8gICAgIHVzZVNlbnNvcnMsXG4vLyAgICAgdXNlRHJhZ2dhYmxlLFxuLy8gICAgIERyYWdPdmVybGF5XG4vLyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuLy8gaW1wb3J0IHtcbi8vICAgICBhcnJheU1vdmUsXG4vLyAgICAgU29ydGFibGVDb250ZXh0LFxuLy8gICAgIHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcbi8vICAgICByZWN0U29ydGluZ1N0cmF0ZWd5XG4vLyB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcbmltcG9ydCB7XG4gICAgRHJhZ2dhYmxlLFxuICAgIERyYWdnYWJsZU92ZXJsYXksXG4gICAgRHJvcHBhYmxlLFxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuXG5cbmltcG9ydCB7XG4gICAgY2xvc2VzdENlbnRlcixcbiAgICBjbG9zZXN0Q29ybmVycyxcbiAgICByZWN0SW50ZXJzZWN0aW9uLFxuICAgIHBvaW50ZXJXaXRoaW4sXG4gICAgRG5kQ29udGV4dCxcbiAgICB1c2VEcmFnZ2FibGUsXG4gICAgQ29sbGlzaW9uRGV0ZWN0aW9uIGFzIENvbGxpc2lvbkRldGVjdGlvblR5cGUsXG4gICAgTW9kaWZpZXJzLFxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcblxuZnVuY3Rpb24gRGFzaGJvYXJkTWFpbigpIHtcblxuXG5cbiAgICBjb25zdCBkcm9wcGFibGVzID0gWycxJywgJzInLCAnMycsICc0J107XG5cbiAgICAvLyBjb25zdCBzZW5zb3JzID0gdXNlU2Vuc29ycyhcbiAgICAvLyAgICAgdXNlU2Vuc29yKFBvaW50ZXJTZW5zb3IpLFxuICAgIC8vICAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcbiAgICAvLyAgICAgICAgIGNvb3JkaW5hdGVHZXR0ZXI6IHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlc1xuICAgIC8vICAgICB9KVxuICAgIC8vICk7XG4gICAgY29uc3QgW2FjdGl2ZUlkLCBzZXRBY3RpdmVJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgICAgIGlmIChhY3RpdmUuaWQgIT09IG92ZXIuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUnLCBhY3RpdmUuaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3ZlcicsIG92ZXIuaWQpXG5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIHtCYXNpY1NldHVwKCl9XG4gICAgICAgICAgICB7LyogPERuZENvbnRleHRcbiAgICAgICAgICAgICAgICBzZW5zb3JzPXtzZW5zb3JzfVxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkRldGVjdGlvbj17Y2xvc2VzdENlbnRlcn1cbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgICAgICAgLy8gb25EcmFnT3Zlcj17KCkgPT4gc2V0RHJhZ2dpbmcoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cbiAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICB7Lyoge2Ryb3BwYWJsZXMubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGlkPXtpZH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcm9wcGFibGUgY29udGFpbmVyIGlkOiAke2lkfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICAgICAge2RyYWdnYWJsZXMubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZz17ZHJhZ2dpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcmFnZ2FibGUgaXRlbSBpZDogJHtpZH1cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgICAgICAgKSl9ICovfVxuXG4gICAgICAgICAgICB7LyogPC9EbmRDb250ZXh0PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRNYWluXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gRHJvcHBhYmxlKHByb3BzOiB7IGlkOiBzdHJpbmc7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuLy8gICAgIGNvbnN0IHsgc2V0Tm9kZVJlZiB9ID0gdXNlRHJvcHBhYmxlKHtcbi8vICAgICAgICAgaWQ6IHByb3BzLmlkLFxuXG4vLyAgICAgfSk7XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy01MiBoLTUyIGJnLXJlZC0yMDAgcm91bmRlZC1sZyBtLTUnIHJlZj17c2V0Tm9kZVJlZn0+XG4vLyAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9XG5cblxuLy8gZnVuY3Rpb24gRHJhZ2dhYmxlKHByb3BzOiB7IGlkOiBzdHJpbmc7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsIGRyYWdnaW5nOiBib29sZWFuIH0pIHtcbi8vICAgICBjb25zdCB7IGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgc2V0QWN0aXZhdG9yTm9kZVJlZixcbi8vICAgICAgICAgYXR0cmlidXRlcyxcbi8vICAgICAgICAgdHJhbnNmb3JtLFxuLy8gICAgICAgICBpc0RyYWdnaW5nLFxuLy8gICAgICAgICB0cmFuc2l0aW9uLFxuLy8gICAgIH0gPSB1c2VEcmFnZ2FibGUoeyBpZDogcHJvcHMuaWQsIH0pO1xuXG5cblxuLy8gICAgIGNvbnN0IHN0eWxlID0ge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IENTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKSxcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbiA/PyB1bmRlZmluZWQsXG4vLyAgICAgICAgIHpJbmRleDogaXNEcmFnZ2luZyA/ICcxMDAnIDogJ2F1dG8nLFxuLy8gICAgICAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC40IDogMVxuLy8gICAgIH07XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2XG4vLyAgICAgICAgICAgICByZWY9e3NldE5vZGVSZWZ9XG4vLyAgICAgICAgICAgICBzdHlsZT17c3R5bGUgYXMgUmVhY3QuQ1NTUHJvcGVydGllc31cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgICAgey8qIC4uLiAqL31cbi8vICAgICAgICAgICAgIDxidXR0b24gcmVmPXtzZXRBY3RpdmF0b3JOb2RlUmVmfSB7Li4ubGlzdGVuZXJzfT5EcmFnIGhhbmRsZTwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24/OiBDb2xsaXNpb25EZXRlY3Rpb25UeXBlO1xuICAgIGNvbnRhaW5lcnM/OiBzdHJpbmdbXTtcbiAgICBtb2RpZmllcnM/OiBNb2RpZmllcnM7XG4gICAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbnR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG4gICAgcGFyZW50SWQ6IHN0cmluZztcbiAgICBjaGlsZElkOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBEcm9wcGFibGVTdG9yeSh7XG4gICAgY29udGFpbmVycyA9IFsnQSddLFxuICAgIGNvbGxpc2lvbkRldGVjdGlvbixcbiAgICBtb2RpZmllcnMsXG59OiBQcm9wcykge1xuICAgIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcGFyZW50LCBzZXRQYXJlbnRdID0gdXNlU3RhdGU8RHJhZ2dhYmxlUHJvcHNbXSB8IG51bGw+KFtdKTtcblxuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBbJzEnLCAnMicsICczJywgJzQnXTtcblxuICAgIGNvbnN0IHBhcmVudENoaWxkRFRPID0ge1xuICAgICAgICBwYXJlbnRJZDogJ2lkJyxcbiAgICAgICAgY2hpbGRJZDogXCJDaGlsZElkXCJcbiAgICB9XG4gICAgY29uc29sZS5sb2cocGFyZW50KVxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgICAgIGlmIChhY3RpdmUuaWQgIT09IG92ZXIuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXJlbnQgSWQnLCBhY3RpdmUuaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2hpbGQgSUQnLCBvdmVyLmlkKVxuICAgICAgICAgICAgc2V0UGFyZW50KG9sZCA9PiBbLi4ub2xkLCB7XG4gICAgICAgICAgICAgICAgcGFyZW50SWQ6IGFjdGl2ZS5pZCxcbiAgICAgICAgICAgICAgICBjaGlsZElkOiBvdmVyLmlkXG4gICAgICAgICAgICB9XSlcbiAgICAgICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RG5kQ29udGV4dFxuICAgICAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjb2xsaXNpb25EZXRlY3Rpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e3BhcmVudCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IG1vZGlmaWVyc31cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgICAgb25EcmFnQ2FuY2VsPXsoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2RyYWdnYWJsZXMubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVJdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkcz17aWR9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgey8qIHtwYXJlbnQgPT09IG51bGwgPyBpdGVtIDogbnVsbH0gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMycgPlxuICAgICAgICAgICAgICAgIHtjb250YWluZXJzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBrZXk9e2lkfSBpZD17aWR9IGRyYWdnaW5nPXtpc0RyYWdnaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJlbnQgPT09IGlkID8gaXRlbSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVPdmVybGF5IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EbmRDb250ZXh0PlxuICAgICk7XG59XG5cbnR5cGUgcHJvcHMgPSB7XG4gICAgaWRzOiBzdHJpbmc7XG4gICAgZHJhZ2dpbmc6IGJvb2xlYW47XG5cbn1cbmZ1bmN0aW9uIERyYWdnYWJsZUl0ZW0oeyBpZHMsIGRyYWdnaW5nIH06IHByb3BzKSB7XG4gICAgY29uc3QgeyBpc0RyYWdnaW5nLCBzZXROb2RlUmVmLCBsaXN0ZW5lcnMgfSA9IHVzZURyYWdnYWJsZSh7XG4gICAgICAgIGlkOiBpZHMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgICAgICAgIGxpc3RlbmVycz17bGlzdGVuZXJzfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgQmFzaWNTZXR1cCA9ICgpID0+IDxEcm9wcGFibGVTdG9yeSBjb250YWluZXJzPXtbJ0EnLCAnQicsICdDJ119IC8+O1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyYWdnYWJsZSIsIkRyYWdnYWJsZU92ZXJsYXkiLCJEcm9wcGFibGUiLCJEbmRDb250ZXh0IiwidXNlRHJhZ2dhYmxlIiwiRGFzaGJvYXJkTWFpbiIsImRyb3BwYWJsZXMiLCJhY3RpdmVJZCIsInNldEFjdGl2ZUlkIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImhhbmRsZURyYWdFbmQiLCJldmVudCIsImFjdGl2ZSIsIm92ZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJCYXNpY1NldHVwIiwiRHJvcHBhYmxlU3RvcnkiLCJjb250YWluZXJzIiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwibW9kaWZpZXJzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJwYXJlbnQiLCJzZXRQYXJlbnQiLCJkcmFnZ2FibGVzIiwicGFyZW50Q2hpbGREVE8iLCJwYXJlbnRJZCIsImNoaWxkSWQiLCJvbGQiLCJ1bmRlZmluZWQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIm9uRHJhZ0NhbmNlbCIsIm1hcCIsIkRyYWdnYWJsZUl0ZW0iLCJpZHMiLCJjbGFzc05hbWUiLCJpdGVtIiwic2V0Tm9kZVJlZiIsImxpc3RlbmVycyIsInJlZiIsInN0eWxlIiwib3BhY2l0eSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});