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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction DashboardMain() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const draggables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    function handleDragEnd(event) {\n        const { active, over } = event;\n        if ((active === null || active === void 0 ? void 0 : active.id) !== (over === null || over === void 0 ? void 0 : over.id)) {\n            console.log(\"childId\", active.id);\n            console.log(\"ParentId\", over.id);\n            setParent((old)=>{\n                // Remove any existing relationship for the active child or over parent\n                const filtered = old.filter((item)=>item.childId !== active.id && item.parentId !== over.id);\n                // Add the new relationship\n                return [\n                    ...filtered,\n                    {\n                        parentId: over.id,\n                        childId: active.id\n                    }\n                ];\n            });\n            setIsDragging(false);\n        }\n    }\n    function removeChild(childId) {\n        setParent((old)=>old.filter((item)=>item.childId !== childId));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: handleDragEnd,\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables.filter((id)=>!parent.some((item)=>item.childId === id)).map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                    ids: id,\n                    removeChild: removeChild,\n                    isInList: false\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 21\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === null || parent === void 0 ? void 0 : parent.filter((item)=>item.parentId === id).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                                    ids: item.childId,\n                                    removeChild: removeChild,\n                                    isInList: true\n                                }, item.childId, false, {\n                                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 29\n                                }, this))\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_s(DroppableStory, \"CYQ9q7TnNfNm8rZWBByeCvuOE2I=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids, removeChild, isInList } = param;\n    _s1();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        buttonStyle: {\n            backgroundColor: \"#f7f7\",\n            width: 500,\n            height: 1500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white flex flex-col gap-y-2\",\n            children: [\n                isInList && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.button_default, {\n                    color: \"primary\",\n                    onClick: ()=>removeChild(ids),\n                    children: \"Remove\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-lg\",\n                    children: [\n                        \"Child ID: #\",\n                        ids\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 175,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 168,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 154,\n        columnNumber: 9\n    }, this);\n}\n_s1(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 182,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtRDtBQXVCMUI7QUFRRjtBQUNvQjtBQUUzQyxTQUFTUTtJQU1MLHFCQUNJLDhEQUFDQztrQkFDSUM7Ozs7OztBQUdiO0tBWFNGO0FBYVQsK0RBQWVBLGFBQWFBLEVBQUE7QUFtQjVCLFNBQVNHLGVBQWUsS0FJaEI7UUFKZ0IsRUFDcEJDLGFBQWE7UUFBQztLQUFJLEVBQ2xCQyxrQkFBa0IsRUFDbEJDLFNBQVMsRUFDTCxHQUpnQjs7SUFLcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2dCLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUF3QixFQUFFO0lBRTlELE1BQU1rQixhQUFhO1FBQUM7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUd2QyxTQUFTQyxjQUFjQyxLQUFVO1FBQzdCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Y7UUFDekIsSUFBSUMsQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRRSxFQUFFLE9BQUtELGlCQUFBQSwyQkFBQUEsS0FBTUMsRUFBRSxHQUFFO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUMsV0FBV0osT0FBT0UsRUFBRTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlILEtBQUtDLEVBQUU7WUFFL0JOLFVBQVVTLENBQUFBO2dCQUNOLHVFQUF1RTtnQkFDdkUsTUFBTUMsV0FBV0QsSUFBSUUsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxPQUFPLEtBQUtULE9BQU9FLEVBQUUsSUFBSU0sS0FBS0UsUUFBUSxLQUFLVCxLQUFLQyxFQUFFO2dCQUUzRiwyQkFBMkI7Z0JBQzNCLE9BQU87dUJBQUlJO29CQUFVO3dCQUFFSSxVQUFVVCxLQUFLQyxFQUFFO3dCQUFFTyxTQUFTVCxPQUFPRSxFQUFFO29CQUFDO2lCQUFFO1lBQ25FO1lBRUFSLGNBQWM7UUFDbEI7SUFDSjtJQUdBLFNBQVNpQixZQUFZRixPQUFlO1FBQ2hDYixVQUFVLENBQUNTLE1BQVFBLElBQUlFLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxPQUFPLEtBQUtBO0lBQzdEO0lBRUEscUJBQ0ksOERBQUMxQixxREFBVUE7UUFDUFEsb0JBQW9CQTtRQUNwQkMsV0FBV0csV0FBVyxPQUFPaUIsWUFBWXBCO1FBQ3pDcUIsYUFBYSxJQUFNbkIsY0FBYztRQUNqQ29CLFdBQVdoQjtRQUNYaUIsY0FBYyxJQUFNckIsY0FBYzs7WUFFakNHLFdBQ0lVLE1BQU0sQ0FBQyxDQUFDTCxLQUFPLENBQUNQLE9BQU9xQixJQUFJLENBQUMsQ0FBQ1IsT0FBU0EsS0FBS0MsT0FBTyxLQUFLUCxLQUN2RGUsR0FBRyxDQUFDLENBQUNmLG1CQUNGLDhEQUFDZ0I7b0JBRUdDLEtBQUtqQjtvQkFDTFMsYUFBYUE7b0JBQ2JTLFVBQVU7bUJBSExsQjs7Ozs7MEJBT2pCLDhEQUFDZjtnQkFBSWtDLFdBQVU7O29CQUNWL0IsV0FBVzJCLEdBQUcsQ0FBQyxDQUFDZixtQkFDYiw4REFBQ3BCLGtEQUFTQTs0QkFDR29CLElBQUlBOzRCQUFJb0IsVUFBVTdCO3NDQUMxQkUsbUJBQUFBLDZCQUFBQSxPQUFRWSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0UsUUFBUSxLQUFLUixJQUFJZSxHQUFHLENBQUMsQ0FBQ1QscUJBQ2pELDhEQUFDVTtvQ0FFR0MsS0FBS1gsS0FBS0MsT0FBTztvQ0FDakJFLGFBQWFBO29DQUNiUyxVQUFVO21DQUhMWixLQUFLQyxPQUFPOzs7OzsyQkFIcEJQOzs7OztrQ0FZYiw4REFBQ3JCLHlEQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDO0dBeEVTUTtNQUFBQTtBQWdGVCxTQUFTNkIsY0FBYyxLQUFxQztRQUFyQyxFQUFFQyxHQUFHLEVBQUVSLFdBQVcsRUFBRVMsUUFBUSxFQUFTLEdBQXJDOztJQUNuQixNQUFNLEVBQUUzQixVQUFVLEVBQUU4QixVQUFVLEVBQUVDLFNBQVMsRUFBRSxHQUFHeEMsMkRBQVlBLENBQUM7UUFDdkRrQixJQUFJaUI7SUFDUjtJQUVBLHFCQUNJLDhEQUFDdkMsa0RBQVNBO1FBQ04wQyxVQUFVN0I7UUFDVmdDLEtBQUtGO1FBQ0xDLFdBQVdBO1FBQ1hFLE9BQU87WUFDSEMsU0FBU2xDLGFBQWEsSUFBSW1CO1FBQzlCO1FBQ0FnQixhQUFhO1lBQ1RDLGlCQUFpQjtZQUNqQkMsT0FBTztZQUNQQyxRQUFRO1FBQ1o7a0JBR0EsNEVBQUM1QztZQUFJa0MsV0FBVTs7Z0JBQ1ZELDBCQUNHLDhEQUFDbkMsNkRBQU1BO29CQUFDK0MsT0FBTTtvQkFBVUMsU0FBUyxJQUFNdEIsWUFBWVE7OEJBQU87Ozs7Ozs4QkFLOUQsOERBQUNlO29CQUFFYixXQUFVOzt3QkFBb0I7d0JBQVlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0Q7SUFoQ1NEOztRQUN5Q2xDLHVEQUFZQTs7O01BRHJEa0M7QUFrQ0YsTUFBTTlCLGFBQWEsa0JBQU0sOERBQUNDO1FBQWVDLFlBQVk7WUFBQztZQUFLO1lBQUs7U0FBSTs7Ozs7a0JBQUs7TUFBbkVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7XG4vLyAgICAgRG5kQ29udGV4dCxcbi8vICAgICBjbG9zZXN0Q2VudGVyLFxuLy8gICAgIEtleWJvYXJkU2Vuc29yLFxuLy8gICAgIFBvaW50ZXJTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29yLFxuLy8gICAgIHVzZVNlbnNvcnMsXG4vLyAgICAgdXNlRHJhZ2dhYmxlLFxuLy8gICAgIERyYWdPdmVybGF5XG4vLyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuLy8gaW1wb3J0IHtcbi8vICAgICBhcnJheU1vdmUsXG4vLyAgICAgU29ydGFibGVDb250ZXh0LFxuLy8gICAgIHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcbi8vICAgICByZWN0U29ydGluZ1N0cmF0ZWd5XG4vLyB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcbmltcG9ydCB7XG4gICAgRHJhZ2dhYmxlLFxuICAgIERyYWdnYWJsZU92ZXJsYXksXG4gICAgRHJvcHBhYmxlLFxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuXG5cbmltcG9ydCB7XG4gICAgRG5kQ29udGV4dCxcbiAgICB1c2VEcmFnZ2FibGUsXG4gICAgQ29sbGlzaW9uRGV0ZWN0aW9uIGFzIENvbGxpc2lvbkRldGVjdGlvblR5cGUsXG4gICAgTW9kaWZpZXJzLFxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcblxuZnVuY3Rpb24gRGFzaGJvYXJkTWFpbigpIHtcblxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICB7QmFzaWNTZXR1cCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE1haW5cblxuXG5cblxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY29sbGlzaW9uRGV0ZWN0aW9uPzogQ29sbGlzaW9uRGV0ZWN0aW9uVHlwZTtcbiAgICBjb250YWluZXJzPzogc3RyaW5nW107XG4gICAgbW9kaWZpZXJzPzogTW9kaWZpZXJzO1xuICAgIHZhbHVlPzogc3RyaW5nO1xufVxuXG50eXBlIERyYWdnYWJsZVByb3BzID0ge1xuICAgIHBhcmVudElkOiBzdHJpbmc7XG4gICAgY2hpbGRJZDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gRHJvcHBhYmxlU3Rvcnkoe1xuICAgIGNvbnRhaW5lcnMgPSBbJ0EnXSxcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24sXG4gICAgbW9kaWZpZXJzLFxufTogUHJvcHMpIHtcbiAgICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BhcmVudCwgc2V0UGFyZW50XSA9IHVzZVN0YXRlPERyYWdnYWJsZVByb3BzW10gfCBbXT4oW10pO1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IFsnMScsICcyJywgJzMnLCAnNCddO1xuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGV2ZW50O1xuICAgICAgICBpZiAoYWN0aXZlPy5pZCAhPT0gb3Zlcj8uaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZElkJywgYWN0aXZlLmlkKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhcmVudElkJywgb3Zlci5pZClcblxuICAgICAgICAgICAgc2V0UGFyZW50KG9sZCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBleGlzdGluZyByZWxhdGlvbnNoaXAgZm9yIHRoZSBhY3RpdmUgY2hpbGQgb3Igb3ZlciBwYXJlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IG9sZC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoaWxkSWQgIT09IGFjdGl2ZS5pZCAmJiBpdGVtLnBhcmVudElkICE9PSBvdmVyLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgbmV3IHJlbGF0aW9uc2hpcFxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZmlsdGVyZWQsIHsgcGFyZW50SWQ6IG92ZXIuaWQsIGNoaWxkSWQ6IGFjdGl2ZS5pZCB9XTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZElkOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0UGFyZW50KChvbGQpID0+IG9sZC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2hpbGRJZCAhPT0gY2hpbGRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEbmRDb250ZXh0XG4gICAgICAgICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2NvbGxpc2lvbkRldGVjdGlvbn1cbiAgICAgICAgICAgIG1vZGlmaWVycz17cGFyZW50ID09PSBudWxsID8gdW5kZWZpbmVkIDogbW9kaWZpZXJzfVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldElzRHJhZ2dpbmcodHJ1ZSl9XG4gICAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgICBvbkRyYWdDYW5jZWw9eygpID0+IHNldElzRHJhZ2dpbmcoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgICB7ZHJhZ2dhYmxlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGlkKSA9PiAhcGFyZW50LnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2hpbGRJZCA9PT0gaWQpKVxuICAgICAgICAgICAgICAgIC5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWRzPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkPXtyZW1vdmVDaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5MaXN0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMycgPlxuICAgICAgICAgICAgICAgIHtjb250YWluZXJzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH0gaWQ9e2lkfSBkcmFnZ2luZz17aXNEcmFnZ2luZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyZW50Py5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucGFyZW50SWQgPT09IGlkKS5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoaWxkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkcz17aXRlbS5jaGlsZElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZD17cmVtb3ZlQ2hpbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5MaXN0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlT3ZlcmxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRG5kQ29udGV4dD5cbiAgICApO1xufVxuXG50eXBlIHByb3BzID0ge1xuICAgIGlkczogc3RyaW5nO1xuICAgIHJlbW92ZUNoaWxkOiAoY2hpbGRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGlzSW5MaXN0OiBib29sZWFuO1xuXG59XG5mdW5jdGlvbiBEcmFnZ2FibGVJdGVtKHsgaWRzLCByZW1vdmVDaGlsZCwgaXNJbkxpc3QgfTogcHJvcHMpIHtcbiAgICBjb25zdCB7IGlzRHJhZ2dpbmcsIHNldE5vZGVSZWYsIGxpc3RlbmVycyB9ID0gdXNlRHJhZ2dhYmxlKHtcbiAgICAgICAgaWQ6IGlkcyxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgICAgICAgbGlzdGVuZXJzPXtsaXN0ZW5lcnN9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGJ1dHRvblN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmN2Y3XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MDBcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIGZsZXggZmxleC1jb2wgZ2FwLXktMic+XG4gICAgICAgICAgICAgICAge2lzSW5MaXN0ICYmXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoaWxkKGlkcyl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWxnJz5DaGlsZCBJRDogI3tpZHN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljU2V0dXAgPSAoKSA9PiA8RHJvcHBhYmxlU3RvcnkgY29udGFpbmVycz17WydBJywgJ0InLCAnQyddfSAvPjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcmFnZ2FibGUiLCJEcmFnZ2FibGVPdmVybGF5IiwiRHJvcHBhYmxlIiwiRG5kQ29udGV4dCIsInVzZURyYWdnYWJsZSIsIkJ1dHRvbiIsIkRhc2hib2FyZE1haW4iLCJkaXYiLCJCYXNpY1NldHVwIiwiRHJvcHBhYmxlU3RvcnkiLCJjb250YWluZXJzIiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwibW9kaWZpZXJzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJwYXJlbnQiLCJzZXRQYXJlbnQiLCJkcmFnZ2FibGVzIiwiaGFuZGxlRHJhZ0VuZCIsImV2ZW50IiwiYWN0aXZlIiwib3ZlciIsImlkIiwiY29uc29sZSIsImxvZyIsIm9sZCIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsImNoaWxkSWQiLCJwYXJlbnRJZCIsInJlbW92ZUNoaWxkIiwidW5kZWZpbmVkIiwib25EcmFnU3RhcnQiLCJvbkRyYWdFbmQiLCJvbkRyYWdDYW5jZWwiLCJzb21lIiwibWFwIiwiRHJhZ2dhYmxlSXRlbSIsImlkcyIsImlzSW5MaXN0IiwiY2xhc3NOYW1lIiwiZHJhZ2dpbmciLCJzZXROb2RlUmVmIiwibGlzdGVuZXJzIiwicmVmIiwic3R5bGUiLCJvcGFjaXR5IiwiYnV0dG9uU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});