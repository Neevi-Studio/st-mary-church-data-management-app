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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const draggables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    function handleDragEnd(event) {\n        const { active, over } = event;\n        if ((active === null || active === void 0 ? void 0 : active.id) !== (over === null || over === void 0 ? void 0 : over.id)) {\n            console.log(\"childId\", active.id);\n            console.log(\"ParentId\", over.id);\n            setParent((old)=>{\n                // Remove any existing relationship for the active child or over parent\n                const filtered = old.filter((item)=>item.childId !== active.id && item.parentId !== over.id);\n                // Add the new relationship\n                return [\n                    ...filtered,\n                    {\n                        parentId: over.id,\n                        childId: active.id\n                    }\n                ];\n            });\n            setIsDragging(false);\n        }\n    }\n    function removeChild(childId) {\n        setParent((old)=>old.filter((item)=>item.childId !== childId));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: handleDragEnd,\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables.filter((id)=>!parent.some((item)=>item.childId === id)).map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                    ids: id,\n                    removeChild: true\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 21\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === null || parent === void 0 ? void 0 : parent.filter((item)=>item.parentId === id).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                                    ids: item.childId,\n                                    dragging: isDragging\n                                }, item.childId, false, {\n                                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 29\n                                }, this))\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, this);\n}\n_s(DroppableStory, \"CYQ9q7TnNfNm8rZWBByeCvuOE2I=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids } = param;\n    _s1();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 163,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 164,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 165,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 166,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 162,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 153,\n        columnNumber: 9\n    }, this);\n}\n_s1(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 173,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBdUIxQjtBQVlGO0FBRXZCLFNBQVNPO0lBTUwscUJBQ0ksOERBQUNDO2tCQUNJQzs7Ozs7O0FBR2I7S0FYU0Y7QUFhVCwrREFBZUEsYUFBYUEsRUFBQTtBQW1CNUIsU0FBU0csZUFBZSxLQUloQjtRQUpnQixFQUNwQkMsYUFBYTtRQUFDO0tBQUksRUFDbEJDLGtCQUFrQixFQUNsQkMsU0FBUyxFQUNMLEdBSmdCOztJQUtwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBd0IsRUFBRTtJQUU5RCxNQUFNaUIsYUFBYTtRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFHdkMsU0FBU0MsY0FBY0MsS0FBVTtRQUM3QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUUUsRUFBRSxPQUFLRCxpQkFBQUEsMkJBQUFBLEtBQU1DLEVBQUUsR0FBRTtZQUN6QkMsUUFBUUMsR0FBRyxDQUFDLFdBQVdKLE9BQU9FLEVBQUU7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSCxLQUFLQyxFQUFFO1lBRS9CTixVQUFVUyxDQUFBQTtnQkFDTix1RUFBdUU7Z0JBQ3ZFLE1BQU1DLFdBQVdELElBQUlFLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsT0FBTyxLQUFLVCxPQUFPRSxFQUFFLElBQUlNLEtBQUtFLFFBQVEsS0FBS1QsS0FBS0MsRUFBRTtnQkFFM0YsMkJBQTJCO2dCQUMzQixPQUFPO3VCQUFJSTtvQkFBVTt3QkFBRUksVUFBVVQsS0FBS0MsRUFBRTt3QkFBRU8sU0FBU1QsT0FBT0UsRUFBRTtvQkFBQztpQkFBRTtZQUNuRTtZQUVBUixjQUFjO1FBQ2xCO0lBQ0o7SUFHQSxTQUFTaUIsWUFBWUYsT0FBZTtRQUNoQ2IsVUFBVSxDQUFDUyxNQUFRQSxJQUFJRSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsT0FBTyxLQUFLQTtJQUM3RDtJQUVBLHFCQUNJLDhEQUFDekIscURBQVVBO1FBQ1BPLG9CQUFvQkE7UUFDcEJDLFdBQVdHLFdBQVcsT0FBT2lCLFlBQVlwQjtRQUN6Q3FCLGFBQWEsSUFBTW5CLGNBQWM7UUFDakNvQixXQUFXaEI7UUFDWGlCLGNBQWMsSUFBTXJCLGNBQWM7O1lBRWpDRyxXQUNJVSxNQUFNLENBQUMsQ0FBQ0wsS0FBTyxDQUFDUCxPQUFPcUIsSUFBSSxDQUFDLENBQUNSLE9BQVNBLEtBQUtDLE9BQU8sS0FBS1AsS0FDdkRlLEdBQUcsQ0FBQyxDQUFDZixtQkFDRiw4REFBQ2dCO29CQUVHQyxLQUFLakI7b0JBQ0xTLFdBQVc7bUJBRk5UOzs7OzswQkFNakIsOERBQUNmO2dCQUFJaUMsV0FBVTs7b0JBQ1Y5QixXQUFXMkIsR0FBRyxDQUFDLENBQUNmLG1CQUNiLDhEQUFDbkIsa0RBQVNBOzRCQUNHbUIsSUFBSUE7NEJBQUltQixVQUFVNUI7c0NBQzFCRSxtQkFBQUEsNkJBQUFBLE9BQVFZLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLRSxRQUFRLEtBQUtSLElBQUllLEdBQUcsQ0FBQyxDQUFDVCxxQkFDakQsOERBQUNVO29DQUVHQyxLQUFLWCxLQUFLQyxPQUFPO29DQUNqQlksVUFBVTVCO21DQUZMZSxLQUFLQyxPQUFPOzs7OzsyQkFIcEJQOzs7OztrQ0FXYiw4REFBQ3BCLHlEQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDO0dBdEVTTztNQUFBQTtBQTRFVCxTQUFTNkIsY0FBYyxLQUFnQjtRQUFoQixFQUFFQyxHQUFHLEVBQVcsR0FBaEI7O0lBQ25CLE1BQU0sRUFBRTFCLFVBQVUsRUFBRTZCLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUd0QywyREFBWUEsQ0FBQztRQUN2RGlCLElBQUlpQjtJQUNSO0lBRUEscUJBQ0ksOERBQUN0QyxrREFBU0E7UUFDTndDLFVBQVU1QjtRQUNWK0IsS0FBS0Y7UUFDTEMsV0FBV0E7UUFDWEUsT0FBTztZQUNIQyxTQUFTakMsYUFBYSxJQUFJbUI7UUFDOUI7a0JBR0EsNEVBQUN6QjtZQUFJaUMsV0FBVTs7OEJBQ1gsOERBQUNPOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtJQXhCU1Q7O1FBQ3lDakMsdURBQVlBOzs7TUFEckRpQztBQTBCRixNQUFNOUIsYUFBYSxrQkFBTSw4REFBQ0M7UUFBZUMsWUFBWTtZQUFDO1lBQUs7WUFBSztTQUFJOzs7OztrQkFBSztNQUFuRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/YzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHtcbi8vICAgICBEbmRDb250ZXh0LFxuLy8gICAgIGNsb3Nlc3RDZW50ZXIsXG4vLyAgICAgS2V5Ym9hcmRTZW5zb3IsXG4vLyAgICAgUG9pbnRlclNlbnNvcixcbi8vICAgICB1c2VTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29ycyxcbi8vICAgICB1c2VEcmFnZ2FibGUsXG4vLyAgICAgRHJhZ092ZXJsYXlcbi8vIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG4vLyBpbXBvcnQge1xuLy8gICAgIGFycmF5TW92ZSxcbi8vICAgICBTb3J0YWJsZUNvbnRleHQsXG4vLyAgICAgc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzLFxuLy8gICAgIHJlY3RTb3J0aW5nU3RyYXRlZ3lcbi8vIH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnO1xuaW1wb3J0IHsgdXNlRHJvcHBhYmxlIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5pbXBvcnQgeyBDU1MgfSBmcm9tICdAZG5kLWtpdC91dGlsaXRpZXMnO1xuaW1wb3J0IHtcbiAgICBEcmFnZ2FibGUsXG4gICAgRHJhZ2dhYmxlT3ZlcmxheSxcbiAgICBEcm9wcGFibGUsXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnXG5cblxuaW1wb3J0IHtcbiAgICBjbG9zZXN0Q2VudGVyLFxuICAgIGNsb3Nlc3RDb3JuZXJzLFxuICAgIHJlY3RJbnRlcnNlY3Rpb24sXG4gICAgcG9pbnRlcldpdGhpbixcbiAgICBEbmRDb250ZXh0LFxuICAgIHVzZURyYWdnYWJsZSxcbiAgICBDb2xsaXNpb25EZXRlY3Rpb24gYXMgQ29sbGlzaW9uRGV0ZWN0aW9uVHlwZSxcbiAgICBNb2RpZmllcnMsXG59IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuXG5mdW5jdGlvbiBEYXNoYm9hcmRNYWluKCkge1xuXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIHtCYXNpY1NldHVwKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTWFpblxuXG5cblxuXG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24/OiBDb2xsaXNpb25EZXRlY3Rpb25UeXBlO1xuICAgIGNvbnRhaW5lcnM/OiBzdHJpbmdbXTtcbiAgICBtb2RpZmllcnM/OiBNb2RpZmllcnM7XG4gICAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbnR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG4gICAgcGFyZW50SWQ6IHN0cmluZztcbiAgICBjaGlsZElkOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBEcm9wcGFibGVTdG9yeSh7XG4gICAgY29udGFpbmVycyA9IFsnQSddLFxuICAgIGNvbGxpc2lvbkRldGVjdGlvbixcbiAgICBtb2RpZmllcnMsXG59OiBQcm9wcykge1xuICAgIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcGFyZW50LCBzZXRQYXJlbnRdID0gdXNlU3RhdGU8RHJhZ2dhYmxlUHJvcHNbXSB8IFtdPihbXSk7XG5cbiAgICBjb25zdCBkcmFnZ2FibGVzID0gWycxJywgJzInLCAnMycsICc0J107XG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgICAgIGlmIChhY3RpdmU/LmlkICE9PSBvdmVyPy5pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkSWQnLCBhY3RpdmUuaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGFyZW50SWQnLCBvdmVyLmlkKVxuXG4gICAgICAgICAgICBzZXRQYXJlbnQob2xkID0+IHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIHJlbGF0aW9uc2hpcCBmb3IgdGhlIGFjdGl2ZSBjaGlsZCBvciBvdmVyIHBhcmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gb2xkLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hpbGRJZCAhPT0gYWN0aXZlLmlkICYmIGl0ZW0ucGFyZW50SWQgIT09IG92ZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgcmVsYXRpb25zaGlwXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5maWx0ZXJlZCwgeyBwYXJlbnRJZDogb3Zlci5pZCwgY2hpbGRJZDogYWN0aXZlLmlkIH1dO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0SXNEcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUNoaWxkKGNoaWxkSWQ6IHN0cmluZykge1xuICAgICAgICBzZXRQYXJlbnQoKG9sZCkgPT4gb2xkLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jaGlsZElkICE9PSBjaGlsZElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERuZENvbnRleHRcbiAgICAgICAgICAgIGNvbGxpc2lvbkRldGVjdGlvbj17Y29sbGlzaW9uRGV0ZWN0aW9ufVxuICAgICAgICAgICAgbW9kaWZpZXJzPXtwYXJlbnQgPT09IG51bGwgPyB1bmRlZmluZWQgOiBtb2RpZmllcnN9XG4gICAgICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0SXNEcmFnZ2luZyh0cnVlKX1cbiAgICAgICAgICAgIG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH1cbiAgICAgICAgICAgIG9uRHJhZ0NhbmNlbD17KCkgPT4gc2V0SXNEcmFnZ2luZyhmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtkcmFnZ2FibGVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaWQpID0+ICFwYXJlbnQuc29tZSgoaXRlbSkgPT4gaXRlbS5jaGlsZElkID09PSBpZCkpXG4gICAgICAgICAgICAgICAgLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHM9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMycgPlxuICAgICAgICAgICAgICAgIHtjb250YWluZXJzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH0gaWQ9e2lkfSBkcmFnZ2luZz17aXNEcmFnZ2luZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyZW50Py5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucGFyZW50SWQgPT09IGlkKS5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoaWxkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkcz17aXRlbS5jaGlsZElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZU92ZXJsYXkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RuZENvbnRleHQ+XG4gICAgKTtcbn1cblxudHlwZSBwcm9wcyA9IHtcbiAgICBpZHM6IHN0cmluZztcblxufVxuZnVuY3Rpb24gRHJhZ2dhYmxlSXRlbSh7IGlkcywgIH06IHByb3BzKSB7XG4gICAgY29uc3QgeyBpc0RyYWdnaW5nLCBzZXROb2RlUmVmLCBsaXN0ZW5lcnMgfSA9IHVzZURyYWdnYWJsZSh7XG4gICAgICAgIGlkOiBpZHMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgICAgICAgIGxpc3RlbmVycz17bGlzdGVuZXJzfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgQmFzaWNTZXR1cCA9ICgpID0+IDxEcm9wcGFibGVTdG9yeSBjb250YWluZXJzPXtbJ0EnLCAnQicsICdDJ119IC8+O1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyYWdnYWJsZSIsIkRyYWdnYWJsZU92ZXJsYXkiLCJEcm9wcGFibGUiLCJEbmRDb250ZXh0IiwidXNlRHJhZ2dhYmxlIiwiRGFzaGJvYXJkTWFpbiIsImRpdiIsIkJhc2ljU2V0dXAiLCJEcm9wcGFibGVTdG9yeSIsImNvbnRhaW5lcnMiLCJjb2xsaXNpb25EZXRlY3Rpb24iLCJtb2RpZmllcnMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInBhcmVudCIsInNldFBhcmVudCIsImRyYWdnYWJsZXMiLCJoYW5kbGVEcmFnRW5kIiwiZXZlbnQiLCJhY3RpdmUiLCJvdmVyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwib2xkIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwiY2hpbGRJZCIsInBhcmVudElkIiwicmVtb3ZlQ2hpbGQiLCJ1bmRlZmluZWQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIm9uRHJhZ0NhbmNlbCIsInNvbWUiLCJtYXAiLCJEcmFnZ2FibGVJdGVtIiwiaWRzIiwiY2xhc3NOYW1lIiwiZHJhZ2dpbmciLCJzZXROb2RlUmVmIiwibGlzdGVuZXJzIiwicmVmIiwic3R5bGUiLCJvcGFjaXR5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});