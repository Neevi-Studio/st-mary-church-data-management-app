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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const draggables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    const parentChildDTO = {\n        parentId: \"id\",\n        childId: \"ChildId\"\n    };\n    console.log(parent);\n    function handleDragEnd(event) {\n        const { active, over } = event;\n        if ((active === null || active === void 0 ? void 0 : active.id) !== (over === null || over === void 0 ? void 0 : over.id)) {\n            console.log(\"active\", active.id);\n            console.log(\"over\", over.id);\n            setParent((old)=>{\n                const exists = old.some((item)=>(item === null || item === void 0 ? void 0 : item.parentId) === (over === null || over === void 0 ? void 0 : over.id) && (item === null || item === void 0 ? void 0 : item.childId) === (active === null || active === void 0 ? void 0 : active.id) || (item === null || item === void 0 ? void 0 : item.parentId) === (over === null || over === void 0 ? void 0 : over.id));\n                const checkIfTheChildIdisAlreadyInAParentAndThenMoveItToTheNewParentAndDeleteTheOldObjectOfTheParent = old.filter((item)=>item.childId !== (active === null || active === void 0 ? void 0 : active.id));\n                console.log(\"checkIfTheChildIdisAlreadyInAParentAndThenMoveItToTheNewParentAndDeleteTheOldObjectOfTheParent\", checkIfTheChildIdisAlreadyInAParentAndThenMoveItToTheNewParentAndDeleteTheOldObjectOfTheParent);\n                if (!exists) {\n                    return [\n                        ...old,\n                        {\n                            parentId: over.id,\n                            childId: active.id\n                        }\n                    ];\n                }\n                if (!exists) {\n                    return [\n                        ...old,\n                        {\n                            parentId: over.id,\n                            childId: active.id\n                        }\n                    ];\n                }\n                return old;\n            });\n            setIsDragging(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: handleDragEnd,\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables.filter((id)=>!parent.some((item)=>item.childId === id)).map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                    ids: id,\n                    dragging: isDragging\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 21\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === null || parent === void 0 ? void 0 : parent.filter((item)=>item.parentId === id).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                                    ids: item.childId,\n                                    dragging: isDragging\n                                }, item.childId, false, {\n                                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 29\n                                }, this))\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, this);\n}\n_s(DroppableStory, \"CYQ9q7TnNfNm8rZWBByeCvuOE2I=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids, dragging } = param;\n    _s1();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 171,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 172,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 173,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 169,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 160,\n        columnNumber: 9\n    }, this);\n}\n_s1(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 180,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBdUIxQjtBQVlGO0FBRXZCLFNBQVNPO0lBTUwscUJBQ0ksOERBQUNDO2tCQUNJQzs7Ozs7O0FBR2I7S0FYU0Y7QUFhVCwrREFBZUEsYUFBYUEsRUFBQTtBQW1CNUIsU0FBU0csZUFBZSxLQUloQjtRQUpnQixFQUNwQkMsYUFBYTtRQUFDO0tBQUksRUFDbEJDLGtCQUFrQixFQUNsQkMsU0FBUyxFQUNMLEdBSmdCOztJQUtwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBd0IsRUFBRTtJQUU5RCxNQUFNaUIsYUFBYTtRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkMsTUFBTUMsaUJBQWlCO1FBQ25CQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDYjtJQUNBQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1osU0FBU1EsY0FBY0MsS0FBVTtRQUM3QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUUUsRUFBRSxPQUFLRCxpQkFBQUEsMkJBQUFBLEtBQU1DLEVBQUUsR0FBRTtZQUN6Qk4sUUFBUUMsR0FBRyxDQUFDLFVBQVVHLE9BQU9FLEVBQUU7WUFDL0JOLFFBQVFDLEdBQUcsQ0FBQyxRQUFRSSxLQUFLQyxFQUFFO1lBQzNCWCxVQUFVWSxDQUFBQTtnQkFDTixNQUFNQyxTQUFTRCxJQUFJRSxJQUFJLENBQUMsQ0FBQ0MsT0FBUyxDQUFDQSxpQkFBQUEsMkJBQUFBLEtBQU1aLFFBQVEsT0FBS08saUJBQUFBLDJCQUFBQSxLQUFNQyxFQUFFLEtBQUlJLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVgsT0FBTyxPQUFLSyxtQkFBQUEsNkJBQUFBLE9BQVFFLEVBQUUsS0FBS0ksQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNWixRQUFRLE9BQUtPLGlCQUFBQSwyQkFBQUEsS0FBTUMsRUFBRTtnQkFDOUgsTUFBTUssaUdBQ05KLElBQUlLLE1BQU0sQ0FBQyxDQUFDRixPQUFTQSxLQUFLWCxPQUFPLE1BQUtLLG1CQUFBQSw2QkFBQUEsT0FBUUUsRUFBRTtnQkFFaEROLFFBQVFDLEdBQUcsQ0FBQyxrR0FBa0dVO2dCQUM5RyxJQUFJLENBQUNILFFBQVE7b0JBQ1QsT0FBTzsyQkFBSUQ7d0JBQUs7NEJBQUVULFVBQVVPLEtBQUtDLEVBQUU7NEJBQUVQLFNBQVNLLE9BQU9FLEVBQUU7d0JBQUM7cUJBQUU7Z0JBQzlEO2dCQUVBLElBQUksQ0FBQ0UsUUFBUTtvQkFDVCxPQUFPOzJCQUFJRDt3QkFBSzs0QkFBRVQsVUFBVU8sS0FBS0MsRUFBRTs0QkFBRVAsU0FBU0ssT0FBT0UsRUFBRTt3QkFBQztxQkFBRTtnQkFDOUQ7Z0JBQ0EsT0FBT0M7WUFDWDtZQUNBZCxjQUFjO1FBQ2xCO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ1YscURBQVVBO1FBQ1BPLG9CQUFvQkE7UUFDcEJDLFdBQVdHLFdBQVcsT0FBT21CLFlBQVl0QjtRQUN6Q3VCLGFBQWEsSUFBTXJCLGNBQWM7UUFDakNzQixXQUFXYjtRQUNYYyxjQUFjLElBQU12QixjQUFjOztZQUVqQ0csV0FDSWdCLE1BQU0sQ0FBQyxDQUFDTixLQUFPLENBQUNaLE9BQU9lLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLWCxPQUFPLEtBQUtPLEtBQ3ZEVyxHQUFHLENBQUMsQ0FBQ1gsbUJBQ0YsOERBQUNZO29CQUVHQyxLQUFLYjtvQkFDTGMsVUFBVTVCO21CQUZMYzs7Ozs7MEJBTWpCLDhEQUFDcEI7Z0JBQUltQyxXQUFVOztvQkFDVmhDLFdBQVc0QixHQUFHLENBQUMsQ0FBQ1gsbUJBQ2IsOERBQUN4QixrREFBU0E7NEJBQ0d3QixJQUFJQTs0QkFBSWMsVUFBVTVCO3NDQUMxQkUsbUJBQUFBLDZCQUFBQSxPQUFRa0IsTUFBTSxDQUFDLENBQUNGLE9BQVNBLEtBQUtaLFFBQVEsS0FBS1EsSUFBSVcsR0FBRyxDQUFDLENBQUNQLHFCQUNqRCw4REFBQ1E7b0NBRUdDLEtBQUtULEtBQUtYLE9BQU87b0NBQ2pCcUIsVUFBVTVCO21DQUZMa0IsS0FBS1gsT0FBTzs7Ozs7MkJBSHBCTzs7Ozs7a0NBV2IsOERBQUN6Qix5REFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQztHQTVFU087TUFBQUE7QUFtRlQsU0FBUzhCLGNBQWMsS0FBd0I7UUFBeEIsRUFBRUMsR0FBRyxFQUFFQyxRQUFRLEVBQVMsR0FBeEI7O0lBQ25CLE1BQU0sRUFBRTVCLFVBQVUsRUFBRThCLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUd2QywyREFBWUEsQ0FBQztRQUN2RHNCLElBQUlhO0lBQ1I7SUFFQSxxQkFDSSw4REFBQ3ZDLGtEQUFTQTtRQUNOd0MsVUFBVTVCO1FBQ1ZnQyxLQUFLRjtRQUNMQyxXQUFXQTtRQUNYRSxPQUFPO1lBQ0hDLFNBQVNsQyxhQUFhLElBQUlxQjtRQUM5QjtrQkFHQSw0RUFBQzNCO1lBQUltQyxXQUFVOzs4QkFDWCw4REFBQ007OEJBQUU7Ozs7Ozs4QkFDSCw4REFBQ0E7OEJBQUU7Ozs7Ozs4QkFDSCw4REFBQ0E7OEJBQUU7Ozs7Ozs4QkFDSCw4REFBQ0E7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0lBeEJTVDs7UUFDeUNsQyx1REFBWUE7OztNQURyRGtDO0FBMEJGLE1BQU0vQixhQUFhLGtCQUFNLDhEQUFDQztRQUFlQyxZQUFZO1lBQUM7WUFBSztZQUFLO1NBQUk7Ozs7O2tCQUFLO01BQW5FRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9jMTVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQge1xuLy8gICAgIERuZENvbnRleHQsXG4vLyAgICAgY2xvc2VzdENlbnRlcixcbi8vICAgICBLZXlib2FyZFNlbnNvcixcbi8vICAgICBQb2ludGVyU2Vuc29yLFxuLy8gICAgIHVzZVNlbnNvcixcbi8vICAgICB1c2VTZW5zb3JzLFxuLy8gICAgIHVzZURyYWdnYWJsZSxcbi8vICAgICBEcmFnT3ZlcmxheVxuLy8gfSBmcm9tICdAZG5kLWtpdC9jb3JlJztcbi8vIGltcG9ydCB7XG4vLyAgICAgYXJyYXlNb3ZlLFxuLy8gICAgIFNvcnRhYmxlQ29udGV4dCxcbi8vICAgICBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMsXG4vLyAgICAgcmVjdFNvcnRpbmdTdHJhdGVneVxuLy8gfSBmcm9tICdAZG5kLWtpdC9zb3J0YWJsZSc7XG5pbXBvcnQgeyB1c2VEcm9wcGFibGUgfSBmcm9tICdAZG5kLWtpdC9jb3JlJztcbmltcG9ydCB7IENTUyB9IGZyb20gJ0BkbmQta2l0L3V0aWxpdGllcyc7XG5pbXBvcnQge1xuICAgIERyYWdnYWJsZSxcbiAgICBEcmFnZ2FibGVPdmVybGF5LFxuICAgIERyb3BwYWJsZSxcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcblxuXG5pbXBvcnQge1xuICAgIGNsb3Nlc3RDZW50ZXIsXG4gICAgY2xvc2VzdENvcm5lcnMsXG4gICAgcmVjdEludGVyc2VjdGlvbixcbiAgICBwb2ludGVyV2l0aGluLFxuICAgIERuZENvbnRleHQsXG4gICAgdXNlRHJhZ2dhYmxlLFxuICAgIENvbGxpc2lvbkRldGVjdGlvbiBhcyBDb2xsaXNpb25EZXRlY3Rpb25UeXBlLFxuICAgIE1vZGlmaWVycyxcbn0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5cbmZ1bmN0aW9uIERhc2hib2FyZE1haW4oKSB7XG5cblxuXG4gIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICB7QmFzaWNTZXR1cCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE1haW5cblxuXG5cblxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY29sbGlzaW9uRGV0ZWN0aW9uPzogQ29sbGlzaW9uRGV0ZWN0aW9uVHlwZTtcbiAgICBjb250YWluZXJzPzogc3RyaW5nW107XG4gICAgbW9kaWZpZXJzPzogTW9kaWZpZXJzO1xuICAgIHZhbHVlPzogc3RyaW5nO1xufVxuXG50eXBlIERyYWdnYWJsZVByb3BzID0ge1xuICAgIHBhcmVudElkOiBzdHJpbmc7XG4gICAgY2hpbGRJZDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gRHJvcHBhYmxlU3Rvcnkoe1xuICAgIGNvbnRhaW5lcnMgPSBbJ0EnXSxcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24sXG4gICAgbW9kaWZpZXJzLFxufTogUHJvcHMpIHtcbiAgICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BhcmVudCwgc2V0UGFyZW50XSA9IHVzZVN0YXRlPERyYWdnYWJsZVByb3BzW10gfCBbXT4oW10pO1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IFsnMScsICcyJywgJzMnLCAnNCddO1xuXG4gICAgY29uc3QgcGFyZW50Q2hpbGREVE8gPSB7XG4gICAgICAgIHBhcmVudElkOiAnaWQnLFxuICAgICAgICBjaGlsZElkOiBcIkNoaWxkSWRcIlxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwYXJlbnQpXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZChldmVudDogYW55KSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlLCBvdmVyIH0gPSBldmVudDtcbiAgICAgICAgaWYgKGFjdGl2ZT8uaWQgIT09IG92ZXI/LmlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlJywgYWN0aXZlLmlkKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ292ZXInLCBvdmVyLmlkKVxuICAgICAgICAgICAgc2V0UGFyZW50KG9sZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gb2xkLnNvbWUoKGl0ZW0pID0+IChpdGVtPy5wYXJlbnRJZCA9PT0gb3Zlcj8uaWQgJiYgaXRlbT8uY2hpbGRJZCA9PT0gYWN0aXZlPy5pZCkgfHwgaXRlbT8ucGFyZW50SWQgPT09IG92ZXI/LmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0lmVGhlQ2hpbGRJZGlzQWxyZWFkeUluQVBhcmVudEFuZFRoZW5Nb3ZlSXRUb1RoZU5ld1BhcmVudEFuZERlbGV0ZVRoZU9sZE9iamVjdE9mVGhlUGFyZW50ID0gXG4gICAgICAgICAgICAgICAgb2xkLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jaGlsZElkICE9PSBhY3RpdmU/LmlkKVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrSWZUaGVDaGlsZElkaXNBbHJlYWR5SW5BUGFyZW50QW5kVGhlbk1vdmVJdFRvVGhlTmV3UGFyZW50QW5kRGVsZXRlVGhlT2xkT2JqZWN0T2ZUaGVQYXJlbnQnLCBjaGVja0lmVGhlQ2hpbGRJZGlzQWxyZWFkeUluQVBhcmVudEFuZFRoZW5Nb3ZlSXRUb1RoZU5ld1BhcmVudEFuZERlbGV0ZVRoZU9sZE9iamVjdE9mVGhlUGFyZW50KVxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ub2xkLCB7IHBhcmVudElkOiBvdmVyLmlkLCBjaGlsZElkOiBhY3RpdmUuaWQgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ub2xkLCB7IHBhcmVudElkOiBvdmVyLmlkLCBjaGlsZElkOiBhY3RpdmUuaWQgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvbGQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0SXNEcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEbmRDb250ZXh0XG4gICAgICAgICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2NvbGxpc2lvbkRldGVjdGlvbn1cbiAgICAgICAgICAgIG1vZGlmaWVycz17cGFyZW50ID09PSBudWxsID8gdW5kZWZpbmVkIDogbW9kaWZpZXJzfVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldElzRHJhZ2dpbmcodHJ1ZSl9XG4gICAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgICBvbkRyYWdDYW5jZWw9eygpID0+IHNldElzRHJhZ2dpbmcoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgICB7ZHJhZ2dhYmxlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGlkKSA9PiAhcGFyZW50LnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2hpbGRJZCA9PT0gaWQpKVxuICAgICAgICAgICAgICAgIC5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWRzPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zJyA+XG4gICAgICAgICAgICAgICAge2NvbnRhaW5lcnMubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfSBpZD17aWR9IGRyYWdnaW5nPXtpc0RyYWdnaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJlbnQ/LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wYXJlbnRJZCA9PT0gaWQpLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uY2hpbGRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzPXtpdGVtLmNoaWxkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlT3ZlcmxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRG5kQ29udGV4dD5cbiAgICApO1xufVxuXG50eXBlIHByb3BzID0ge1xuICAgIGlkczogc3RyaW5nO1xuICAgIGRyYWdnaW5nOiBib29sZWFuO1xuXG59XG5mdW5jdGlvbiBEcmFnZ2FibGVJdGVtKHsgaWRzLCBkcmFnZ2luZyB9OiBwcm9wcykge1xuICAgIGNvbnN0IHsgaXNEcmFnZ2luZywgc2V0Tm9kZVJlZiwgbGlzdGVuZXJzIH0gPSB1c2VEcmFnZ2FibGUoe1xuICAgICAgICBpZDogaWRzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICAgICAgZHJhZ2dpbmc9e2lzRHJhZ2dpbmd9XG4gICAgICAgICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICAgICAgICBsaXN0ZW5lcnM9e2xpc3RlbmVyc31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljU2V0dXAgPSAoKSA9PiA8RHJvcHBhYmxlU3RvcnkgY29udGFpbmVycz17WydBJywgJ0InLCAnQyddfSAvPjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcmFnZ2FibGUiLCJEcmFnZ2FibGVPdmVybGF5IiwiRHJvcHBhYmxlIiwiRG5kQ29udGV4dCIsInVzZURyYWdnYWJsZSIsIkRhc2hib2FyZE1haW4iLCJkaXYiLCJCYXNpY1NldHVwIiwiRHJvcHBhYmxlU3RvcnkiLCJjb250YWluZXJzIiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwibW9kaWZpZXJzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJwYXJlbnQiLCJzZXRQYXJlbnQiLCJkcmFnZ2FibGVzIiwicGFyZW50Q2hpbGREVE8iLCJwYXJlbnRJZCIsImNoaWxkSWQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRHJhZ0VuZCIsImV2ZW50IiwiYWN0aXZlIiwib3ZlciIsImlkIiwib2xkIiwiZXhpc3RzIiwic29tZSIsIml0ZW0iLCJjaGVja0lmVGhlQ2hpbGRJZGlzQWxyZWFkeUluQVBhcmVudEFuZFRoZW5Nb3ZlSXRUb1RoZU5ld1BhcmVudEFuZERlbGV0ZVRoZU9sZE9iamVjdE9mVGhlUGFyZW50IiwiZmlsdGVyIiwidW5kZWZpbmVkIiwib25EcmFnU3RhcnQiLCJvbkRyYWdFbmQiLCJvbkRyYWdDYW5jZWwiLCJtYXAiLCJEcmFnZ2FibGVJdGVtIiwiaWRzIiwiZHJhZ2dpbmciLCJjbGFzc05hbWUiLCJzZXROb2RlUmVmIiwibGlzdGVuZXJzIiwicmVmIiwic3R5bGUiLCJvcGFjaXR5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});