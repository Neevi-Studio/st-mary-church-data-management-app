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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const draggables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    const parentChildDTO = {\n        parentId: \"id\",\n        childId: \"ChildId\"\n    };\n    console.log(parent);\n    function handleDragEnd(event) {\n        const { active, over } = event;\n        if ((active === null || active === void 0 ? void 0 : active.id) !== (over === null || over === void 0 ? void 0 : over.id)) {\n            console.log(\"childId\", active.id);\n            console.log(\"ParentId\", over.id);\n            setParent((old)=>{\n                const childHadParentBefore = old.filter((item)=>item.childId !== (active === null || active === void 0 ? void 0 : active.id));\n                if (!exists) {\n                    return [\n                        ...old,\n                        {\n                            parentId: over.id,\n                            childId: active.id\n                        }\n                    ];\n                }\n                return old;\n            });\n            setIsDragging(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: handleDragEnd,\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables.filter((id)=>!parent.some((item)=>item.childId === id)).map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                    ids: id,\n                    dragging: isDragging\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 21\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === null || parent === void 0 ? void 0 : parent.filter((item)=>item.parentId === id).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                                    ids: item.childId,\n                                    dragging: isDragging\n                                }, item.childId, false, {\n                                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 29\n                                }, this))\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 109,\n        columnNumber: 9\n    }, this);\n}\n_s(DroppableStory, \"CYQ9q7TnNfNm8rZWBByeCvuOE2I=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids, dragging } = param;\n    _s1();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 167,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 169,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 166,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 157,\n        columnNumber: 9\n    }, this);\n}\n_s1(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 177,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBdUIxQjtBQVlGO0FBRXZCLFNBQVNPO0lBTUwscUJBQ0ksOERBQUNDO2tCQUNJQzs7Ozs7O0FBR2I7S0FYU0Y7QUFhVCwrREFBZUEsYUFBYUEsRUFBQTtBQW1CNUIsU0FBU0csZUFBZSxLQUloQjtRQUpnQixFQUNwQkMsYUFBYTtRQUFDO0tBQUksRUFDbEJDLGtCQUFrQixFQUNsQkMsU0FBUyxFQUNMLEdBSmdCOztJQUtwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBd0IsRUFBRTtJQUU5RCxNQUFNaUIsYUFBYTtRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkMsTUFBTUMsaUJBQWlCO1FBQ25CQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDYjtJQUNBQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1osU0FBU1EsY0FBY0MsS0FBVTtRQUM3QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUUUsRUFBRSxPQUFLRCxpQkFBQUEsMkJBQUFBLEtBQU1DLEVBQUUsR0FBRTtZQUN6Qk4sUUFBUUMsR0FBRyxDQUFDLFdBQVdHLE9BQU9FLEVBQUU7WUFDaENOLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSSxLQUFLQyxFQUFFO1lBRS9CWCxVQUFVWSxDQUFBQTtnQkFDTixNQUFNQyx1QkFBdUJELElBQUlFLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLWCxPQUFPLE1BQUtLLG1CQUFBQSw2QkFBQUEsT0FBUUUsRUFBRTtnQkFHN0UsSUFBSSxDQUFDSyxRQUFRO29CQUNULE9BQU87MkJBQUlKO3dCQUFLOzRCQUFFVCxVQUFVTyxLQUFLQyxFQUFFOzRCQUFFUCxTQUFTSyxPQUFPRSxFQUFFO3dCQUFDO3FCQUFFO2dCQUM5RDtnQkFFQSxPQUFPQztZQUNYO1lBRUFkLGNBQWM7UUFDbEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDVixxREFBVUE7UUFDUE8sb0JBQW9CQTtRQUNwQkMsV0FBV0csV0FBVyxPQUFPa0IsWUFBWXJCO1FBQ3pDc0IsYUFBYSxJQUFNcEIsY0FBYztRQUNqQ3FCLFdBQVdaO1FBQ1hhLGNBQWMsSUFBTXRCLGNBQWM7O1lBRWpDRyxXQUNJYSxNQUFNLENBQUMsQ0FBQ0gsS0FBTyxDQUFDWixPQUFPc0IsSUFBSSxDQUFDLENBQUNOLE9BQVNBLEtBQUtYLE9BQU8sS0FBS08sS0FDdkRXLEdBQUcsQ0FBQyxDQUFDWCxtQkFDRiw4REFBQ1k7b0JBRUdDLEtBQUtiO29CQUNMYyxVQUFVNUI7bUJBRkxjOzs7OzswQkFNakIsOERBQUNwQjtnQkFBSW1DLFdBQVU7O29CQUNWaEMsV0FBVzRCLEdBQUcsQ0FBQyxDQUFDWCxtQkFDYiw4REFBQ3hCLGtEQUFTQTs0QkFDR3dCLElBQUlBOzRCQUFJYyxVQUFVNUI7c0NBQzFCRSxtQkFBQUEsNkJBQUFBLE9BQVFlLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLWixRQUFRLEtBQUtRLElBQUlXLEdBQUcsQ0FBQyxDQUFDUCxxQkFDakQsOERBQUNRO29DQUVHQyxLQUFLVCxLQUFLWCxPQUFPO29DQUNqQnFCLFVBQVU1QjttQ0FGTGtCLEtBQUtYLE9BQU87Ozs7OzJCQUhwQk87Ozs7O2tDQVdiLDhEQUFDekIseURBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakM7R0F6RVNPO01BQUFBO0FBZ0ZULFNBQVM4QixjQUFjLEtBQXdCO1FBQXhCLEVBQUVDLEdBQUcsRUFBRUMsUUFBUSxFQUFTLEdBQXhCOztJQUNuQixNQUFNLEVBQUU1QixVQUFVLEVBQUU4QixVQUFVLEVBQUVDLFNBQVMsRUFBRSxHQUFHdkMsMkRBQVlBLENBQUM7UUFDdkRzQixJQUFJYTtJQUNSO0lBRUEscUJBQ0ksOERBQUN2QyxrREFBU0E7UUFDTndDLFVBQVU1QjtRQUNWZ0MsS0FBS0Y7UUFDTEMsV0FBV0E7UUFDWEUsT0FBTztZQUNIQyxTQUFTbEMsYUFBYSxJQUFJb0I7UUFDOUI7a0JBR0EsNEVBQUMxQjtZQUFJbUMsV0FBVTs7OEJBQ1gsOERBQUNNOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtJQXhCU1Q7O1FBQ3lDbEMsdURBQVlBOzs7TUFEckRrQztBQTBCRixNQUFNL0IsYUFBYSxrQkFBTSw4REFBQ0M7UUFBZUMsWUFBWTtZQUFDO1lBQUs7WUFBSztTQUFJOzs7OztrQkFBSztNQUFuRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/YzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHtcbi8vICAgICBEbmRDb250ZXh0LFxuLy8gICAgIGNsb3Nlc3RDZW50ZXIsXG4vLyAgICAgS2V5Ym9hcmRTZW5zb3IsXG4vLyAgICAgUG9pbnRlclNlbnNvcixcbi8vICAgICB1c2VTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29ycyxcbi8vICAgICB1c2VEcmFnZ2FibGUsXG4vLyAgICAgRHJhZ092ZXJsYXlcbi8vIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG4vLyBpbXBvcnQge1xuLy8gICAgIGFycmF5TW92ZSxcbi8vICAgICBTb3J0YWJsZUNvbnRleHQsXG4vLyAgICAgc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzLFxuLy8gICAgIHJlY3RTb3J0aW5nU3RyYXRlZ3lcbi8vIH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnO1xuaW1wb3J0IHsgdXNlRHJvcHBhYmxlIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5pbXBvcnQgeyBDU1MgfSBmcm9tICdAZG5kLWtpdC91dGlsaXRpZXMnO1xuaW1wb3J0IHtcbiAgICBEcmFnZ2FibGUsXG4gICAgRHJhZ2dhYmxlT3ZlcmxheSxcbiAgICBEcm9wcGFibGUsXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnXG5cblxuaW1wb3J0IHtcbiAgICBjbG9zZXN0Q2VudGVyLFxuICAgIGNsb3Nlc3RDb3JuZXJzLFxuICAgIHJlY3RJbnRlcnNlY3Rpb24sXG4gICAgcG9pbnRlcldpdGhpbixcbiAgICBEbmRDb250ZXh0LFxuICAgIHVzZURyYWdnYWJsZSxcbiAgICBDb2xsaXNpb25EZXRlY3Rpb24gYXMgQ29sbGlzaW9uRGV0ZWN0aW9uVHlwZSxcbiAgICBNb2RpZmllcnMsXG59IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuXG5mdW5jdGlvbiBEYXNoYm9hcmRNYWluKCkge1xuXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIHtCYXNpY1NldHVwKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTWFpblxuXG5cblxuXG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24/OiBDb2xsaXNpb25EZXRlY3Rpb25UeXBlO1xuICAgIGNvbnRhaW5lcnM/OiBzdHJpbmdbXTtcbiAgICBtb2RpZmllcnM/OiBNb2RpZmllcnM7XG4gICAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbnR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG4gICAgcGFyZW50SWQ6IHN0cmluZztcbiAgICBjaGlsZElkOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBEcm9wcGFibGVTdG9yeSh7XG4gICAgY29udGFpbmVycyA9IFsnQSddLFxuICAgIGNvbGxpc2lvbkRldGVjdGlvbixcbiAgICBtb2RpZmllcnMsXG59OiBQcm9wcykge1xuICAgIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcGFyZW50LCBzZXRQYXJlbnRdID0gdXNlU3RhdGU8RHJhZ2dhYmxlUHJvcHNbXSB8IFtdPihbXSk7XG5cbiAgICBjb25zdCBkcmFnZ2FibGVzID0gWycxJywgJzInLCAnMycsICc0J107XG5cbiAgICBjb25zdCBwYXJlbnRDaGlsZERUTyA9IHtcbiAgICAgICAgcGFyZW50SWQ6ICdpZCcsXG4gICAgICAgIGNoaWxkSWQ6IFwiQ2hpbGRJZFwiXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBhcmVudClcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGV2ZW50O1xuICAgICAgICBpZiAoYWN0aXZlPy5pZCAhPT0gb3Zlcj8uaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZElkJywgYWN0aXZlLmlkKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhcmVudElkJywgb3Zlci5pZClcblxuICAgICAgICAgICAgc2V0UGFyZW50KG9sZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRIYWRQYXJlbnRCZWZvcmUgPSBvbGQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNoaWxkSWQgIT09IGFjdGl2ZT8uaWQpXG5cblxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ub2xkLCB7IHBhcmVudElkOiBvdmVyLmlkLCBjaGlsZElkOiBhY3RpdmUuaWQgfV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RG5kQ29udGV4dFxuICAgICAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjb2xsaXNpb25EZXRlY3Rpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e3BhcmVudCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IG1vZGlmaWVyc31cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgICAgb25EcmFnQ2FuY2VsPXsoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2RyYWdnYWJsZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpZCkgPT4gIXBhcmVudC5zb21lKChpdGVtKSA9PiBpdGVtLmNoaWxkSWQgPT09IGlkKSlcbiAgICAgICAgICAgICAgICAubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkcz17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMycgPlxuICAgICAgICAgICAgICAgIHtjb250YWluZXJzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH0gaWQ9e2lkfSBkcmFnZ2luZz17aXNEcmFnZ2luZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyZW50Py5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucGFyZW50SWQgPT09IGlkKS5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoaWxkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkcz17aXRlbS5jaGlsZElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZU92ZXJsYXkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RuZENvbnRleHQ+XG4gICAgKTtcbn1cblxudHlwZSBwcm9wcyA9IHtcbiAgICBpZHM6IHN0cmluZztcbiAgICBkcmFnZ2luZzogYm9vbGVhbjtcblxufVxuZnVuY3Rpb24gRHJhZ2dhYmxlSXRlbSh7IGlkcywgZHJhZ2dpbmcgfTogcHJvcHMpIHtcbiAgICBjb25zdCB7IGlzRHJhZ2dpbmcsIHNldE5vZGVSZWYsIGxpc3RlbmVycyB9ID0gdXNlRHJhZ2dhYmxlKHtcbiAgICAgICAgaWQ6IGlkcyxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgICAgICAgbGlzdGVuZXJzPXtsaXN0ZW5lcnN9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBCYXNpY1NldHVwID0gKCkgPT4gPERyb3BwYWJsZVN0b3J5IGNvbnRhaW5lcnM9e1snQScsICdCJywgJ0MnXX0gLz47XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlT3ZlcmxheSIsIkRyb3BwYWJsZSIsIkRuZENvbnRleHQiLCJ1c2VEcmFnZ2FibGUiLCJEYXNoYm9hcmRNYWluIiwiZGl2IiwiQmFzaWNTZXR1cCIsIkRyb3BwYWJsZVN0b3J5IiwiY29udGFpbmVycyIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm1vZGlmaWVycyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwicGFyZW50Iiwic2V0UGFyZW50IiwiZHJhZ2dhYmxlcyIsInBhcmVudENoaWxkRFRPIiwicGFyZW50SWQiLCJjaGlsZElkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURyYWdFbmQiLCJldmVudCIsImFjdGl2ZSIsIm92ZXIiLCJpZCIsIm9sZCIsImNoaWxkSGFkUGFyZW50QmVmb3JlIiwiZmlsdGVyIiwiaXRlbSIsImV4aXN0cyIsInVuZGVmaW5lZCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwib25EcmFnQ2FuY2VsIiwic29tZSIsIm1hcCIsIkRyYWdnYWJsZUl0ZW0iLCJpZHMiLCJkcmFnZ2luZyIsImNsYXNzTmFtZSIsInNldE5vZGVSZWYiLCJsaXN0ZW5lcnMiLCJyZWYiLCJzdHlsZSIsIm9wYWNpdHkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});