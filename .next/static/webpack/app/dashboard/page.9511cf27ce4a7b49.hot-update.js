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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BasicSetup: function() { return /* binding */ BasicSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default,BasicSetup auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nfunction DashboardMain() {\n    _s();\n    const droppables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    // const sensors = useSensors(\n    //     useSensor(PointerSensor),\n    //     useSensor(KeyboardSensor, {\n    //         coordinateGetter: sortableKeyboardCoordinates\n    //     })\n    // );\n    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleDragEnd(event) {\n        const { active, over } = event;\n        if (active.id !== over.id) {\n            console.log(\"active\", active.id);\n            console.log(\"over\", over.id);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: BasicSetup()\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(DashboardMain, \"ZnDrjteW58bnGeETVR7mYfS3gU4=\");\n_c = DashboardMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardMain);\nfunction DroppableStory(param) {\n    let { containers = [\n        \"A\"\n    ], collisionDetection, modifiers } = param;\n    _s1();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [parent, setParent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const draggables = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\"\n    ];\n    const parentChildDTO = {\n        parentId: \"id\",\n        childId: \"ChildId\"\n    };\n    console.log(parent);\n    function handleDragEnd(event) {\n        const { active, over } = event;\n        if (active.id !== over.id) {\n            console.log(\"Parent Id\", active.id);\n            console.log(\"Child ID\", over.id);\n            setParent((old)=>{\n                const exists = old.some((item)=>item.parentId === over.id && item.childId === active.id);\n                if (!exists) {\n                    return [\n                        ...old,\n                        {\n                            parentId: over.id,\n                            childId: active.id\n                        }\n                    ];\n                }\n                return old;\n            });\n            setIsDragging(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {\n        collisionDetection: collisionDetection,\n        modifiers: parent === null ? undefined : modifiers,\n        onDragStart: ()=>setIsDragging(true),\n        onDragEnd: handleDragEnd,\n        onDragCancel: ()=>setIsDragging(false),\n        children: [\n            draggables === null || draggables === void 0 ? void 0 : draggables.filter((item)=>item).map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                    ids: id,\n                    dragging: isDragging\n                }, id, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 218,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\",\n                children: [\n                    containers.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                            id: id,\n                            dragging: isDragging,\n                            children: parent === null || parent === void 0 ? void 0 : parent.filter((item)=>item.parentId === id).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableItem, {\n                                    ids: item.childId,\n                                    dragging: isDragging\n                                }, item.childId, false, {\n                                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                                    lineNumber: 232,\n                                    columnNumber: 29\n                                }, this))\n                        }, id, false, {\n                            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                            lineNumber: 229,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.DraggableOverlay, {}, void 0, false, {\n                        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                        lineNumber: 241,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                lineNumber: 227,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 210,\n        columnNumber: 9\n    }, this);\n}\n_s1(DroppableStory, \"CYQ9q7TnNfNm8rZWBByeCvuOE2I=\");\n_c1 = DroppableStory;\nfunction DraggableItem(param) {\n    let { ids, dragging } = param;\n    _s2();\n    const { isDragging, setNodeRef, listeners } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({\n        id: ids\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n        dragging: isDragging,\n        ref: setNodeRef,\n        listeners: listeners,\n        style: {\n            opacity: isDragging ? 0 : undefined\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 268,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 269,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 270,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"ASD\"\n                }, void 0, false, {\n                    fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n                    lineNumber: 271,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n            lineNumber: 267,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 258,\n        columnNumber: 9\n    }, this);\n}\n_s2(DraggableItem, \"Hl33O2Etrp83FKhBq8DwjfKef+o=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable\n    ];\n});\n_c2 = DraggableItem;\nconst BasicSetup = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableStory, {\n        containers: [\n            \"A\",\n            \"B\",\n            \"C\"\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/botrosaziz/Desktop/Programming/StMaryDataApp/src/app/dashboard/page.tsx\",\n        lineNumber: 278,\n        columnNumber: 33\n    }, undefined);\n_c3 = BasicSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"DashboardMain\");\n$RefreshReg$(_c1, \"DroppableStory\");\n$RefreshReg$(_c2, \"DraggableItem\");\n$RefreshReg$(_c3, \"BasicSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBdUIxQjtBQVlGO0FBRXZCLFNBQVNPOztJQUlMLE1BQU1DLGFBQWE7UUFBQztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRXZDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHdEQUF3RDtJQUN4RCxTQUFTO0lBQ1QsS0FBSztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFLekMsZUFBZVksY0FBY0MsS0FBVTtRQUNuQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLE9BQU9FLEVBQUUsS0FBS0QsS0FBS0MsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUMsVUFBVUosT0FBT0UsRUFBRTtZQUMvQkMsUUFBUUMsR0FBRyxDQUFDLFFBQVFILEtBQUtDLEVBQUU7UUFFL0I7SUFDSjtJQUlBLHFCQUNJLDhEQUFDRztrQkFDSUM7Ozs7OztBQTRCYjtHQTNEU2Q7S0FBQUE7QUE2RFQsK0RBQWVBLGFBQWFBLEVBQUE7QUE2RTVCLFNBQVNlLGVBQWUsS0FJaEI7UUFKZ0IsRUFDcEJDLGFBQWE7UUFBQztLQUFJLEVBQ2xCQyxrQkFBa0IsRUFDbEJDLFNBQVMsRUFDTCxHQUpnQjs7SUFLcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUMyQixRQUFRQyxVQUFVLEdBQUc1QiwrQ0FBUUEsQ0FBd0IsRUFBRTtJQUU5RCxNQUFNNkIsYUFBYTtRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkMsTUFBTUMsaUJBQWlCO1FBQ25CQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDYjtJQUNBZixRQUFRQyxHQUFHLENBQUNTO0lBQ1osU0FBU2YsY0FBY0MsS0FBVTtRQUM3QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBQ3pCLElBQUlDLE9BQU9FLEVBQUUsS0FBS0QsS0FBS0MsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUMsYUFBYUosT0FBT0UsRUFBRTtZQUNsQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlILEtBQUtDLEVBQUU7WUFDL0JZLFVBQVVLLENBQUFBO2dCQUNOLE1BQU1DLFNBQVNELElBQUlFLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0wsUUFBUSxLQUFLaEIsS0FBS0MsRUFBRSxJQUFJb0IsS0FBS0osT0FBTyxLQUFLbEIsT0FBT0UsRUFBRTtnQkFDdkYsSUFBSSxDQUFDa0IsUUFBUTtvQkFDVCxPQUFPOzJCQUFJRDt3QkFBSzs0QkFBRUYsVUFBVWhCLEtBQUtDLEVBQUU7NEJBQUVnQixTQUFTbEIsT0FBT0UsRUFBRTt3QkFBQztxQkFBRTtnQkFDOUQ7Z0JBQ0EsT0FBT2lCO1lBQ1g7WUFDQVAsY0FBYztRQUNsQjtJQUNKO0lBR0EscUJBQ0ksOERBQUN0QixxREFBVUE7UUFDUG1CLG9CQUFvQkE7UUFDcEJDLFdBQVdHLFdBQVcsT0FBT1UsWUFBWWI7UUFDekNjLGFBQWEsSUFBTVosY0FBYztRQUNqQ2EsV0FBVzNCO1FBQ1g0QixjQUFjLElBQU1kLGNBQWM7O1lBRWpDRyx1QkFBQUEsaUNBQUFBLFdBQVlZLE1BQU0sQ0FBQyxDQUFDTCxPQUFTQSxNQUFNTSxHQUFHLENBQUMsQ0FBQzFCLG1CQUNyQyw4REFBQzJCO29CQUVHQyxLQUFLNUI7b0JBQ0xOLFVBQVVlO21CQUZMVDs7Ozs7MEJBUWIsOERBQUNHO2dCQUFJMEIsV0FBVTs7b0JBQ1Z2QixXQUFXb0IsR0FBRyxDQUFDLENBQUMxQixtQkFDYiw4REFBQ2Isa0RBQVNBOzRCQUFVYSxJQUFJQTs0QkFBSU4sVUFBVWU7c0NBRWpDRSxtQkFBQUEsNkJBQUFBLE9BQVFjLE1BQU0sQ0FBQyxDQUFDTCxPQUFTQSxLQUFLTCxRQUFRLEtBQUtmLElBQUkwQixHQUFHLENBQUMsQ0FBQ04scUJBQ2pELDhEQUFDTztvQ0FFR0MsS0FBS1IsS0FBS0osT0FBTztvQ0FDakJ0QixVQUFVZTttQ0FGTFcsS0FBS0osT0FBTzs7Ozs7MkJBSmJoQjs7Ozs7a0NBWXBCLDhEQUFDZCx5REFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQztJQXBFU21CO01BQUFBO0FBMkVULFNBQVNzQixjQUFjLEtBQXdCO1FBQXhCLEVBQUVDLEdBQUcsRUFBRWxDLFFBQVEsRUFBUyxHQUF4Qjs7SUFDbkIsTUFBTSxFQUFFZSxVQUFVLEVBQUVxQixVQUFVLEVBQUVDLFNBQVMsRUFBRSxHQUFHMUMsMkRBQVlBLENBQUM7UUFDdkRXLElBQUk0QjtJQUNSO0lBRUEscUJBQ0ksOERBQUMzQyxrREFBU0E7UUFDTlMsVUFBVWU7UUFDVnVCLEtBQUtGO1FBQ0xDLFdBQVdBO1FBQ1hFLE9BQU87WUFDSEMsU0FBU3pCLGFBQWEsSUFBSVk7UUFDOUI7a0JBR0EsNEVBQUNsQjtZQUFJMEIsV0FBVTs7OEJBQ1gsOERBQUNNOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtJQXhCU1I7O1FBQ3lDdEMsdURBQVlBOzs7TUFEckRzQztBQTBCRixNQUFNdkIsYUFBYSxrQkFBTSw4REFBQ0M7UUFBZUMsWUFBWTtZQUFDO1lBQUs7WUFBSztTQUFJOzs7OztrQkFBSztNQUFuRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/YzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHtcbi8vICAgICBEbmRDb250ZXh0LFxuLy8gICAgIGNsb3Nlc3RDZW50ZXIsXG4vLyAgICAgS2V5Ym9hcmRTZW5zb3IsXG4vLyAgICAgUG9pbnRlclNlbnNvcixcbi8vICAgICB1c2VTZW5zb3IsXG4vLyAgICAgdXNlU2Vuc29ycyxcbi8vICAgICB1c2VEcmFnZ2FibGUsXG4vLyAgICAgRHJhZ092ZXJsYXlcbi8vIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG4vLyBpbXBvcnQge1xuLy8gICAgIGFycmF5TW92ZSxcbi8vICAgICBTb3J0YWJsZUNvbnRleHQsXG4vLyAgICAgc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzLFxuLy8gICAgIHJlY3RTb3J0aW5nU3RyYXRlZ3lcbi8vIH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnO1xuaW1wb3J0IHsgdXNlRHJvcHBhYmxlIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5pbXBvcnQgeyBDU1MgfSBmcm9tICdAZG5kLWtpdC91dGlsaXRpZXMnO1xuaW1wb3J0IHtcbiAgICBEcmFnZ2FibGUsXG4gICAgRHJhZ2dhYmxlT3ZlcmxheSxcbiAgICBEcm9wcGFibGUsXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnXG5cblxuaW1wb3J0IHtcbiAgICBjbG9zZXN0Q2VudGVyLFxuICAgIGNsb3Nlc3RDb3JuZXJzLFxuICAgIHJlY3RJbnRlcnNlY3Rpb24sXG4gICAgcG9pbnRlcldpdGhpbixcbiAgICBEbmRDb250ZXh0LFxuICAgIHVzZURyYWdnYWJsZSxcbiAgICBDb2xsaXNpb25EZXRlY3Rpb24gYXMgQ29sbGlzaW9uRGV0ZWN0aW9uVHlwZSxcbiAgICBNb2RpZmllcnMsXG59IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuXG5mdW5jdGlvbiBEYXNoYm9hcmRNYWluKCkge1xuXG5cblxuICAgIGNvbnN0IGRyb3BwYWJsZXMgPSBbJzEnLCAnMicsICczJywgJzQnXTtcblxuICAgIC8vIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKFxuICAgIC8vICAgICB1c2VTZW5zb3IoUG9pbnRlclNlbnNvciksXG4gICAgLy8gICAgIHVzZVNlbnNvcihLZXlib2FyZFNlbnNvciwge1xuICAgIC8vICAgICAgICAgY29vcmRpbmF0ZUdldHRlcjogc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzXG4gICAgLy8gICAgIH0pXG4gICAgLy8gKTtcbiAgICBjb25zdCBbYWN0aXZlSWQsIHNldEFjdGl2ZUlkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZChldmVudDogYW55KSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlLCBvdmVyIH0gPSBldmVudDtcbiAgICAgICAgaWYgKGFjdGl2ZS5pZCAhPT0gb3Zlci5pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZScsIGFjdGl2ZS5pZClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvdmVyJywgb3Zlci5pZClcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAge0Jhc2ljU2V0dXAoKX1cbiAgICAgICAgICAgIHsvKiA8RG5kQ29udGV4dFxuICAgICAgICAgICAgICAgIHNlbnNvcnM9e3NlbnNvcnN9XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjbG9zZXN0Q2VudGVyfVxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH1cbiAgICAgICAgICAgICAgICAvLyBvbkRyYWdPdmVyPXsoKSA9PiBzZXREcmFnZ2luZyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldERyYWdnaW5nKHRydWUpfVxuICAgICAgICAgICAgPiAqL31cbiAgICAgICAgICAgIHsvKiB7ZHJvcHBhYmxlcy5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgaWQ9e2lkfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERyb3BwYWJsZSBjb250YWluZXIgaWQ6ICR7aWR9XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICAgICAgICAgICkpfVxuXG5cbiAgICAgICAgICAgICAgICB7ZHJhZ2dhYmxlcy5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nPXtkcmFnZ2luZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERyYWdnYWJsZSBpdGVtIGlkOiAke2lkfVxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgICApKX0gKi99XG5cbiAgICAgICAgICAgIHsvKiA8L0RuZENvbnRleHQ+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE1haW5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBEcm9wcGFibGUocHJvcHM6IHsgaWQ6IHN0cmluZzsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4vLyAgICAgY29uc3QgeyBzZXROb2RlUmVmIH0gPSB1c2VEcm9wcGFibGUoe1xuLy8gICAgICAgICBpZDogcHJvcHMuaWQsXG5cbi8vICAgICB9KTtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTUyIGgtNTIgYmctcmVkLTIwMCByb3VuZGVkLWxnIG0tNScgcmVmPXtzZXROb2RlUmVmfT5cbi8vICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBEcmFnZ2FibGUocHJvcHM6IHsgaWQ6IHN0cmluZzsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSwgZHJhZ2dpbmc6IGJvb2xlYW4gfSkge1xuLy8gICAgIGNvbnN0IHsgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCBzZXRBY3RpdmF0b3JOb2RlUmVmLFxuLy8gICAgICAgICBhdHRyaWJ1dGVzLFxuLy8gICAgICAgICB0cmFuc2Zvcm0sXG4vLyAgICAgICAgIGlzRHJhZ2dpbmcsXG4vLyAgICAgICAgIHRyYW5zaXRpb24sXG4vLyAgICAgfSA9IHVzZURyYWdnYWJsZSh7IGlkOiBwcm9wcy5pZCwgfSk7XG5cblxuXG4vLyAgICAgY29uc3Qgc3R5bGUgPSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogQ1NTLlRyYW5zZm9ybS50b1N0cmluZyh0cmFuc2Zvcm0pLFxuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uID8/IHVuZGVmaW5lZCxcbi8vICAgICAgICAgekluZGV4OiBpc0RyYWdnaW5nID8gJzEwMCcgOiAnYXV0bycsXG4vLyAgICAgICAgIG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwLjQgOiAxXG4vLyAgICAgfTtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXZcbi8vICAgICAgICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbi8vICAgICAgICAgICAgIHN0eWxlPXtzdHlsZSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgICB7LyogLi4uICovfVxuLy8gICAgICAgICAgICAgPGJ1dHRvbiByZWY9e3NldEFjdGl2YXRvck5vZGVSZWZ9IHsuLi5saXN0ZW5lcnN9PkRyYWcgaGFuZGxlPC9idXR0b24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNvbGxpc2lvbkRldGVjdGlvbj86IENvbGxpc2lvbkRldGVjdGlvblR5cGU7XG4gICAgY29udGFpbmVycz86IHN0cmluZ1tdO1xuICAgIG1vZGlmaWVycz86IE1vZGlmaWVycztcbiAgICB2YWx1ZT86IHN0cmluZztcbn1cblxudHlwZSBEcmFnZ2FibGVQcm9wcyA9IHtcbiAgICBwYXJlbnRJZDogc3RyaW5nO1xuICAgIGNoaWxkSWQ6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIERyb3BwYWJsZVN0b3J5KHtcbiAgICBjb250YWluZXJzID0gWydBJ10sXG4gICAgY29sbGlzaW9uRGV0ZWN0aW9uLFxuICAgIG1vZGlmaWVycyxcbn06IFByb3BzKSB7XG4gICAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwYXJlbnQsIHNldFBhcmVudF0gPSB1c2VTdGF0ZTxEcmFnZ2FibGVQcm9wc1tdIHwgW10+KFtdKTtcblxuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBbJzEnLCAnMicsICczJywgJzQnXTtcblxuICAgIGNvbnN0IHBhcmVudENoaWxkRFRPID0ge1xuICAgICAgICBwYXJlbnRJZDogJ2lkJyxcbiAgICAgICAgY2hpbGRJZDogXCJDaGlsZElkXCJcbiAgICB9XG4gICAgY29uc29sZS5sb2cocGFyZW50KVxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgICAgIGlmIChhY3RpdmUuaWQgIT09IG92ZXIuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXJlbnQgSWQnLCBhY3RpdmUuaWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2hpbGQgSUQnLCBvdmVyLmlkKVxuICAgICAgICAgICAgc2V0UGFyZW50KG9sZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gb2xkLnNvbWUoaXRlbSA9PiBpdGVtLnBhcmVudElkID09PSBvdmVyLmlkICYmIGl0ZW0uY2hpbGRJZCA9PT0gYWN0aXZlLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLm9sZCwgeyBwYXJlbnRJZDogb3Zlci5pZCwgY2hpbGRJZDogYWN0aXZlLmlkIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2xkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RG5kQ29udGV4dFxuICAgICAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjb2xsaXNpb25EZXRlY3Rpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e3BhcmVudCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IG1vZGlmaWVyc31cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgICAgb25EcmFnQ2FuY2VsPXsoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2RyYWdnYWJsZXM/LmZpbHRlcigoaXRlbSkgPT4gaXRlbSkubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVJdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkcz17aWR9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgey8qIHtwYXJlbnQgPT09IG51bGwgPyBpdGVtIDogbnVsbH0gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMycgPlxuICAgICAgICAgICAgICAgIHtjb250YWluZXJzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBrZXk9e2lkfSBpZD17aWR9IGRyYWdnaW5nPXtpc0RyYWdnaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7cGFyZW50ID09PSBpZCA/IGl0ZW0gOiBudWxsfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJlbnQ/LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wYXJlbnRJZCA9PT0gaWQpLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uY2hpbGRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzPXtpdGVtLmNoaWxkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nPXtpc0RyYWdnaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlT3ZlcmxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRG5kQ29udGV4dD5cbiAgICApO1xufVxuXG50eXBlIHByb3BzID0ge1xuICAgIGlkczogc3RyaW5nO1xuICAgIGRyYWdnaW5nOiBib29sZWFuO1xuXG59XG5mdW5jdGlvbiBEcmFnZ2FibGVJdGVtKHsgaWRzLCBkcmFnZ2luZyB9OiBwcm9wcykge1xuICAgIGNvbnN0IHsgaXNEcmFnZ2luZywgc2V0Tm9kZVJlZiwgbGlzdGVuZXJzIH0gPSB1c2VEcmFnZ2FibGUoe1xuICAgICAgICBpZDogaWRzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERyYWdnYWJsZVxuICAgICAgICAgICAgZHJhZ2dpbmc9e2lzRHJhZ2dpbmd9XG4gICAgICAgICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICAgICAgICBsaXN0ZW5lcnM9e2xpc3RlbmVyc31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFTRDwvcD5cbiAgICAgICAgICAgICAgICA8cD5BU0Q8L3A+XG4gICAgICAgICAgICAgICAgPHA+QVNEPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljU2V0dXAgPSAoKSA9PiA8RHJvcHBhYmxlU3RvcnkgY29udGFpbmVycz17WydBJywgJ0InLCAnQyddfSAvPjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcmFnZ2FibGUiLCJEcmFnZ2FibGVPdmVybGF5IiwiRHJvcHBhYmxlIiwiRG5kQ29udGV4dCIsInVzZURyYWdnYWJsZSIsIkRhc2hib2FyZE1haW4iLCJkcm9wcGFibGVzIiwiYWN0aXZlSWQiLCJzZXRBY3RpdmVJZCIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJoYW5kbGVEcmFnRW5kIiwiZXZlbnQiLCJhY3RpdmUiLCJvdmVyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiQmFzaWNTZXR1cCIsIkRyb3BwYWJsZVN0b3J5IiwiY29udGFpbmVycyIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm1vZGlmaWVycyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwicGFyZW50Iiwic2V0UGFyZW50IiwiZHJhZ2dhYmxlcyIsInBhcmVudENoaWxkRFRPIiwicGFyZW50SWQiLCJjaGlsZElkIiwib2xkIiwiZXhpc3RzIiwic29tZSIsIml0ZW0iLCJ1bmRlZmluZWQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIm9uRHJhZ0NhbmNlbCIsImZpbHRlciIsIm1hcCIsIkRyYWdnYWJsZUl0ZW0iLCJpZHMiLCJjbGFzc05hbWUiLCJzZXROb2RlUmVmIiwibGlzdGVuZXJzIiwicmVmIiwic3R5bGUiLCJvcGFjaXR5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});