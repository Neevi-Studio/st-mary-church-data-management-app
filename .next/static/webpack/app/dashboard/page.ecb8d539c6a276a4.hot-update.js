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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const draggables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    const parentChildDTO = {\n        parentId: \"id\",\n        childId: \"ChildId\"\n    };\n    console.log(parent);\n    function handleDragEnd(event) {\n        const { active, over } = event;\n        if ((active === null || active === void 0 ? void 0 : active.id) !== (over === null || over === void 0 ? void 0 : over.id)) {\n            console.log(\"childId\", active.id);\n            console.log(\"ParentId\", over.id);\n            setParent((old)=>{\n                const exists = old.some((item)=>(item === null || item === void 0 ? void 0 : item.parentId) === (over === null || over === void 0 ? void 0 : over.id) && (item === null || item === void 0 ? void 0 : item.childId) === (active === null || active === void 0 ? void 0 : active.id) || (item === null || item === void 0 ? void 0 : item.parentId) === (over === null || over === void 0 ? void 0 : over.id));\n                if (!exists) {\n                    return [\n                        ...old,\n                        {\n                            parentId: over.id,\n                            childId: active.id\n                        }\n                    ];\n                }\n                return old;\n            });\n            setIsDragging(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: handleDragEnd,\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables.filter((id)=>!parent.some((item)=>item.childId === id)).map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                    ids: id,\n                    dragging: isDragging\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 21\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === null || parent === void 0 ? void 0 : parent.filter((item)=>item.parentId === id).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                                    ids: item.childId,\n                                    dragging: isDragging\n                                }, item.childId, false, {\n                                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 29\n                                }, this))\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 109,\n        columnNumber: 9\n    }, this);\n}\n_s(DroppableStory, \"CYQ9q7TnNfNm8rZWBByeCvuOE2I=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids, dragging } = param;\n    _s1();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 167,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 169,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 166,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 157,\n        columnNumber: 9\n    }, this);\n}\n_s1(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 177,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBdUIxQjtBQVlGO0FBRXZCLFNBQVNPO0lBTUwscUJBQ0ksOERBQUNDO2tCQUNJQzs7Ozs7O0FBR2I7S0FYU0Y7QUFhVCwrREFBZUEsYUFBYUEsRUFBQTtBQW1CNUIsU0FBU0csZUFBZSxLQUloQjtRQUpnQixFQUNwQkMsYUFBYTtRQUFDO0tBQUksRUFDbEJDLGtCQUFrQixFQUNsQkMsU0FBUyxFQUNMLEdBSmdCOztJQUtwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBd0IsRUFBRTtJQUU5RCxNQUFNaUIsYUFBYTtRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkMsTUFBTUMsaUJBQWlCO1FBQ25CQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDYjtJQUNBQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1osU0FBU1EsY0FBY0MsS0FBVTtRQUM3QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUUUsRUFBRSxPQUFLRCxpQkFBQUEsMkJBQUFBLEtBQU1DLEVBQUUsR0FBRTtZQUN6Qk4sUUFBUUMsR0FBRyxDQUFDLFdBQVdHLE9BQU9FLEVBQUU7WUFDaENOLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSSxLQUFLQyxFQUFFO1lBRS9CWCxVQUFVWSxDQUFBQTtnQkFDTixNQUFNQyxTQUFTRCxJQUFJRSxJQUFJLENBQUMsQ0FBQ0MsT0FBUyxDQUFDQSxpQkFBQUEsMkJBQUFBLEtBQU1aLFFBQVEsT0FBS08saUJBQUFBLDJCQUFBQSxLQUFNQyxFQUFFLEtBQUlJLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVgsT0FBTyxPQUFLSyxtQkFBQUEsNkJBQUFBLE9BQVFFLEVBQUUsS0FBS0ksQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNWixRQUFRLE9BQUtPLGlCQUFBQSwyQkFBQUEsS0FBTUMsRUFBRTtnQkFHOUgsSUFBSSxDQUFDRSxRQUFRO29CQUNULE9BQU87MkJBQUlEO3dCQUFLOzRCQUFFVCxVQUFVTyxLQUFLQyxFQUFFOzRCQUFFUCxTQUFTSyxPQUFPRSxFQUFFO3dCQUFDO3FCQUFFO2dCQUM5RDtnQkFFQSxPQUFPQztZQUNYO1lBRUFkLGNBQWM7UUFDbEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDVixxREFBVUE7UUFDUE8sb0JBQW9CQTtRQUNwQkMsV0FBV0csV0FBVyxPQUFPaUIsWUFBWXBCO1FBQ3pDcUIsYUFBYSxJQUFNbkIsY0FBYztRQUNqQ29CLFdBQVdYO1FBQ1hZLGNBQWMsSUFBTXJCLGNBQWM7O1lBRWpDRyxXQUNJbUIsTUFBTSxDQUFDLENBQUNULEtBQU8sQ0FBQ1osT0FBT2UsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtYLE9BQU8sS0FBS08sS0FDdkRVLEdBQUcsQ0FBQyxDQUFDVixtQkFDRiw4REFBQ1c7b0JBRUdDLEtBQUtaO29CQUNMYSxVQUFVM0I7bUJBRkxjOzs7OzswQkFNakIsOERBQUNwQjtnQkFBSWtDLFdBQVU7O29CQUNWL0IsV0FBVzJCLEdBQUcsQ0FBQyxDQUFDVixtQkFDYiw4REFBQ3hCLGtEQUFTQTs0QkFDR3dCLElBQUlBOzRCQUFJYSxVQUFVM0I7c0NBQzFCRSxtQkFBQUEsNkJBQUFBLE9BQVFxQixNQUFNLENBQUMsQ0FBQ0wsT0FBU0EsS0FBS1osUUFBUSxLQUFLUSxJQUFJVSxHQUFHLENBQUMsQ0FBQ04scUJBQ2pELDhEQUFDTztvQ0FFR0MsS0FBS1IsS0FBS1gsT0FBTztvQ0FDakJvQixVQUFVM0I7bUNBRkxrQixLQUFLWCxPQUFPOzs7OzsyQkFIcEJPOzs7OztrQ0FXYiw4REFBQ3pCLHlEQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDO0dBekVTTztNQUFBQTtBQWdGVCxTQUFTNkIsY0FBYyxLQUF3QjtRQUF4QixFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBUyxHQUF4Qjs7SUFDbkIsTUFBTSxFQUFFM0IsVUFBVSxFQUFFNkIsVUFBVSxFQUFFQyxTQUFTLEVBQUUsR0FBR3RDLDJEQUFZQSxDQUFDO1FBQ3ZEc0IsSUFBSVk7SUFDUjtJQUVBLHFCQUNJLDhEQUFDdEMsa0RBQVNBO1FBQ051QyxVQUFVM0I7UUFDVitCLEtBQUtGO1FBQ0xDLFdBQVdBO1FBQ1hFLE9BQU87WUFDSEMsU0FBU2pDLGFBQWEsSUFBSW1CO1FBQzlCO2tCQUdBLDRFQUFDekI7WUFBSWtDLFdBQVU7OzhCQUNYLDhEQUFDTTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkI7SUF4QlNUOztRQUN5Q2pDLHVEQUFZQTs7O01BRHJEaUM7QUEwQkYsTUFBTTlCLGFBQWEsa0JBQU0sOERBQUNDO1FBQWVDLFlBQVk7WUFBQztZQUFLO1lBQUs7U0FBSTs7Ozs7a0JBQUs7TUFBbkVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7XG4vLyAgICAgRG5kQ29udGV4dCxcbi8vICAgICBjbG9zZXN0Q2VudGVyLFxuLy8gICAgIEtleWJvYXJkU2Vuc29yLFxuLy8gICAgIFBvaW50ZXJTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29yLFxuLy8gICAgIHVzZVNlbnNvcnMsXG4vLyAgICAgdXNlRHJhZ2dhYmxlLFxuLy8gICAgIERyYWdPdmVybGF5XG4vLyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuLy8gaW1wb3J0IHtcbi8vICAgICBhcnJheU1vdmUsXG4vLyAgICAgU29ydGFibGVDb250ZXh0LFxuLy8gICAgIHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcbi8vICAgICByZWN0U29ydGluZ1N0cmF0ZWd5XG4vLyB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IHVzZURyb3BwYWJsZSB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcbmltcG9ydCB7XG4gICAgRHJhZ2dhYmxlLFxuICAgIERyYWdnYWJsZU92ZXJsYXksXG4gICAgRHJvcHBhYmxlLFxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuXG5cbmltcG9ydCB7XG4gICAgY2xvc2VzdENlbnRlcixcbiAgICBjbG9zZXN0Q29ybmVycyxcbiAgICByZWN0SW50ZXJzZWN0aW9uLFxuICAgIHBvaW50ZXJXaXRoaW4sXG4gICAgRG5kQ29udGV4dCxcbiAgICB1c2VEcmFnZ2FibGUsXG4gICAgQ29sbGlzaW9uRGV0ZWN0aW9uIGFzIENvbGxpc2lvbkRldGVjdGlvblR5cGUsXG4gICAgTW9kaWZpZXJzLFxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcblxuZnVuY3Rpb24gRGFzaGJvYXJkTWFpbigpIHtcblxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICB7QmFzaWNTZXR1cCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE1haW5cblxuXG5cblxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY29sbGlzaW9uRGV0ZWN0aW9uPzogQ29sbGlzaW9uRGV0ZWN0aW9uVHlwZTtcbiAgICBjb250YWluZXJzPzogc3RyaW5nW107XG4gICAgbW9kaWZpZXJzPzogTW9kaWZpZXJzO1xuICAgIHZhbHVlPzogc3RyaW5nO1xufVxuXG50eXBlIERyYWdnYWJsZVByb3BzID0ge1xuICAgIHBhcmVudElkOiBzdHJpbmc7XG4gICAgY2hpbGRJZDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gRHJvcHBhYmxlU3Rvcnkoe1xuICAgIGNvbnRhaW5lcnMgPSBbJ0EnXSxcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24sXG4gICAgbW9kaWZpZXJzLFxufTogUHJvcHMpIHtcbiAgICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BhcmVudCwgc2V0UGFyZW50XSA9IHVzZVN0YXRlPERyYWdnYWJsZVByb3BzW10gfCBbXT4oW10pO1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IFsnMScsICcyJywgJzMnLCAnNCddO1xuXG4gICAgY29uc3QgcGFyZW50Q2hpbGREVE8gPSB7XG4gICAgICAgIHBhcmVudElkOiAnaWQnLFxuICAgICAgICBjaGlsZElkOiBcIkNoaWxkSWRcIlxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwYXJlbnQpXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZChldmVudDogYW55KSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlLCBvdmVyIH0gPSBldmVudDtcbiAgICAgICAgaWYgKGFjdGl2ZT8uaWQgIT09IG92ZXI/LmlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRJZCcsIGFjdGl2ZS5pZClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXJlbnRJZCcsIG92ZXIuaWQpXG5cbiAgICAgICAgICAgIHNldFBhcmVudChvbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IG9sZC5zb21lKChpdGVtKSA9PiAoaXRlbT8ucGFyZW50SWQgPT09IG92ZXI/LmlkICYmIGl0ZW0/LmNoaWxkSWQgPT09IGFjdGl2ZT8uaWQpIHx8IGl0ZW0/LnBhcmVudElkID09PSBvdmVyPy5pZCk7XG5cblxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ub2xkLCB7IHBhcmVudElkOiBvdmVyLmlkLCBjaGlsZElkOiBhY3RpdmUuaWQgfV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RG5kQ29udGV4dFxuICAgICAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjb2xsaXNpb25EZXRlY3Rpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e3BhcmVudCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IG1vZGlmaWVyc31cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgICAgb25EcmFnQ2FuY2VsPXsoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2RyYWdnYWJsZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpZCkgPT4gIXBhcmVudC5zb21lKChpdGVtKSA9PiBpdGVtLmNoaWxkSWQgPT09IGlkKSlcbiAgICAgICAgICAgICAgICAubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkcz17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMycgPlxuICAgICAgICAgICAgICAgIHtjb250YWluZXJzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH0gaWQ9e2lkfSBkcmFnZ2luZz17aXNEcmFnZ2luZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyZW50Py5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucGFyZW50SWQgPT09IGlkKS5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoaWxkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkcz17aXRlbS5jaGlsZElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZz17aXNEcmFnZ2luZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZU92ZXJsYXkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RuZENvbnRleHQ+XG4gICAgKTtcbn1cblxudHlwZSBwcm9wcyA9IHtcbiAgICBpZHM6IHN0cmluZztcbiAgICBkcmFnZ2luZzogYm9vbGVhbjtcblxufVxuZnVuY3Rpb24gRHJhZ2dhYmxlSXRlbSh7IGlkcywgZHJhZ2dpbmcgfTogcHJvcHMpIHtcbiAgICBjb25zdCB7IGlzRHJhZ2dpbmcsIHNldE5vZGVSZWYsIGxpc3RlbmVycyB9ID0gdXNlRHJhZ2dhYmxlKHtcbiAgICAgICAgaWQ6IGlkcyxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgICAgICAgbGlzdGVuZXJzPXtsaXN0ZW5lcnN9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBCYXNpY1NldHVwID0gKCkgPT4gPERyb3BwYWJsZVN0b3J5IGNvbnRhaW5lcnM9e1snQScsICdCJywgJ0MnXX0gLz47XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlT3ZlcmxheSIsIkRyb3BwYWJsZSIsIkRuZENvbnRleHQiLCJ1c2VEcmFnZ2FibGUiLCJEYXNoYm9hcmRNYWluIiwiZGl2IiwiQmFzaWNTZXR1cCIsIkRyb3BwYWJsZVN0b3J5IiwiY29udGFpbmVycyIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm1vZGlmaWVycyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwicGFyZW50Iiwic2V0UGFyZW50IiwiZHJhZ2dhYmxlcyIsInBhcmVudENoaWxkRFRPIiwicGFyZW50SWQiLCJjaGlsZElkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURyYWdFbmQiLCJldmVudCIsImFjdGl2ZSIsIm92ZXIiLCJpZCIsIm9sZCIsImV4aXN0cyIsInNvbWUiLCJpdGVtIiwidW5kZWZpbmVkIiwib25EcmFnU3RhcnQiLCJvbkRyYWdFbmQiLCJvbkRyYWdDYW5jZWwiLCJmaWx0ZXIiLCJtYXAiLCJEcmFnZ2FibGVJdGVtIiwiaWRzIiwiZHJhZ2dpbmciLCJjbGFzc05hbWUiLCJzZXROb2RlUmVmIiwibGlzdGVuZXJzIiwicmVmIiwic3R5bGUiLCJvcGFjaXR5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});