"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/combined-stream";
exports.ids = ["vendor-chunks/combined-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/combined-stream/lib/combined_stream.js":
/*!*************************************************************!*\
  !*** ./node_modules/combined-stream/lib/combined_stream.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar util = __webpack_require__(/*! util */ \"util\");\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar DelayedStream = __webpack_require__(/*! delayed-stream */ \"(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\");\nmodule.exports = CombinedStream;\nfunction CombinedStream() {\n    this.writable = false;\n    this.readable = true;\n    this.dataSize = 0;\n    this.maxDataSize = 2 * 1024 * 1024;\n    this.pauseStreams = true;\n    this._released = false;\n    this._streams = [];\n    this._currentStream = null;\n    this._insideLoop = false;\n    this._pendingNext = false;\n}\nutil.inherits(CombinedStream, Stream);\nCombinedStream.create = function(options) {\n    var combinedStream = new this();\n    options = options || {};\n    for(var option in options){\n        combinedStream[option] = options[option];\n    }\n    return combinedStream;\n};\nCombinedStream.isStreamLike = function(stream) {\n    return typeof stream !== \"function\" && typeof stream !== \"string\" && typeof stream !== \"boolean\" && typeof stream !== \"number\" && !Buffer.isBuffer(stream);\n};\nCombinedStream.prototype.append = function(stream) {\n    var isStreamLike = CombinedStream.isStreamLike(stream);\n    if (isStreamLike) {\n        if (!(stream instanceof DelayedStream)) {\n            var newStream = DelayedStream.create(stream, {\n                maxDataSize: Infinity,\n                pauseStream: this.pauseStreams\n            });\n            stream.on(\"data\", this._checkDataSize.bind(this));\n            stream = newStream;\n        }\n        this._handleErrors(stream);\n        if (this.pauseStreams) {\n            stream.pause();\n        }\n    }\n    this._streams.push(stream);\n    return this;\n};\nCombinedStream.prototype.pipe = function(dest, options) {\n    Stream.prototype.pipe.call(this, dest, options);\n    this.resume();\n    return dest;\n};\nCombinedStream.prototype._getNext = function() {\n    this._currentStream = null;\n    if (this._insideLoop) {\n        this._pendingNext = true;\n        return; // defer call\n    }\n    this._insideLoop = true;\n    try {\n        do {\n            this._pendingNext = false;\n            this._realGetNext();\n        }while (this._pendingNext);\n    } finally{\n        this._insideLoop = false;\n    }\n};\nCombinedStream.prototype._realGetNext = function() {\n    var stream = this._streams.shift();\n    if (typeof stream == \"undefined\") {\n        this.end();\n        return;\n    }\n    if (typeof stream !== \"function\") {\n        this._pipeNext(stream);\n        return;\n    }\n    var getStream = stream;\n    getStream((function(stream) {\n        var isStreamLike = CombinedStream.isStreamLike(stream);\n        if (isStreamLike) {\n            stream.on(\"data\", this._checkDataSize.bind(this));\n            this._handleErrors(stream);\n        }\n        this._pipeNext(stream);\n    }).bind(this));\n};\nCombinedStream.prototype._pipeNext = function(stream) {\n    this._currentStream = stream;\n    var isStreamLike = CombinedStream.isStreamLike(stream);\n    if (isStreamLike) {\n        stream.on(\"end\", this._getNext.bind(this));\n        stream.pipe(this, {\n            end: false\n        });\n        return;\n    }\n    var value = stream;\n    this.write(value);\n    this._getNext();\n};\nCombinedStream.prototype._handleErrors = function(stream) {\n    var self = this;\n    stream.on(\"error\", function(err) {\n        self._emitError(err);\n    });\n};\nCombinedStream.prototype.write = function(data) {\n    this.emit(\"data\", data);\n};\nCombinedStream.prototype.pause = function() {\n    if (!this.pauseStreams) {\n        return;\n    }\n    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == \"function\") this._currentStream.pause();\n    this.emit(\"pause\");\n};\nCombinedStream.prototype.resume = function() {\n    if (!this._released) {\n        this._released = true;\n        this.writable = true;\n        this._getNext();\n    }\n    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == \"function\") this._currentStream.resume();\n    this.emit(\"resume\");\n};\nCombinedStream.prototype.end = function() {\n    this._reset();\n    this.emit(\"end\");\n};\nCombinedStream.prototype.destroy = function() {\n    this._reset();\n    this.emit(\"close\");\n};\nCombinedStream.prototype._reset = function() {\n    this.writable = false;\n    this._streams = [];\n    this._currentStream = null;\n};\nCombinedStream.prototype._checkDataSize = function() {\n    this._updateDataSize();\n    if (this.dataSize <= this.maxDataSize) {\n        return;\n    }\n    var message = \"DelayedStream#maxDataSize of \" + this.maxDataSize + \" bytes exceeded.\";\n    this._emitError(new Error(message));\n};\nCombinedStream.prototype._updateDataSize = function() {\n    this.dataSize = 0;\n    var self = this;\n    this._streams.forEach(function(stream) {\n        if (!stream.dataSize) {\n            return;\n        }\n        self.dataSize += stream.dataSize;\n    });\n    if (this._currentStream && this._currentStream.dataSize) {\n        this.dataSize += this._currentStream.dataSize;\n    }\n};\nCombinedStream.prototype._emitError = function(err) {\n    this._reset();\n    this.emit(\"error\", err);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tYmluZWQtc3RyZWFtL2xpYi9jb21iaW5lZF9zdHJlYW0uanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLE9BQU9DLG1CQUFPQSxDQUFDO0FBQ25CLElBQUlDLFNBQVNELG9EQUF3QjtBQUNyQyxJQUFJRSxnQkFBZ0JGLG1CQUFPQSxDQUFDO0FBRTVCRyxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCLFNBQVNBO0lBQ1AsSUFBSSxDQUFDQyxRQUFRLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxPQUFPO0lBQzlCLElBQUksQ0FBQ0MsWUFBWSxHQUFHO0lBRXBCLElBQUksQ0FBQ0MsU0FBUyxHQUFHO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxjQUFjLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxXQUFXLEdBQUc7SUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUc7QUFDdEI7QUFDQWhCLEtBQUtpQixRQUFRLENBQUNYLGdCQUFnQko7QUFFOUJJLGVBQWVZLE1BQU0sR0FBRyxTQUFTQyxPQUFPO0lBQ3RDLElBQUlDLGlCQUFpQixJQUFJLElBQUk7SUFFN0JELFVBQVVBLFdBQVcsQ0FBQztJQUN0QixJQUFLLElBQUlFLFVBQVVGLFFBQVM7UUFDMUJDLGNBQWMsQ0FBQ0MsT0FBTyxHQUFHRixPQUFPLENBQUNFLE9BQU87SUFDMUM7SUFFQSxPQUFPRDtBQUNUO0FBRUFkLGVBQWVnQixZQUFZLEdBQUcsU0FBU0MsTUFBTTtJQUMzQyxPQUFPLE9BQVFBLFdBQVcsY0FDcEIsT0FBT0EsV0FBVyxZQUNsQixPQUFPQSxXQUFXLGFBQ2xCLE9BQU9BLFdBQVcsWUFDbEIsQ0FBQ0MsT0FBT0MsUUFBUSxDQUFDRjtBQUN6QjtBQUVBakIsZUFBZW9CLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHLFNBQVNKLE1BQU07SUFDL0MsSUFBSUQsZUFBZWhCLGVBQWVnQixZQUFZLENBQUNDO0lBRS9DLElBQUlELGNBQWM7UUFDaEIsSUFBSSxDQUFFQyxDQUFBQSxrQkFBa0JwQixhQUFZLEdBQUk7WUFDdEMsSUFBSXlCLFlBQVl6QixjQUFjZSxNQUFNLENBQUNLLFFBQVE7Z0JBQzNDYixhQUFhbUI7Z0JBQ2JDLGFBQWEsSUFBSSxDQUFDbkIsWUFBWTtZQUNoQztZQUNBWSxPQUFPUSxFQUFFLENBQUMsUUFBUSxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUk7WUFDL0NWLFNBQVNLO1FBQ1g7UUFFQSxJQUFJLENBQUNNLGFBQWEsQ0FBQ1g7UUFFbkIsSUFBSSxJQUFJLENBQUNaLFlBQVksRUFBRTtZQUNyQlksT0FBT1ksS0FBSztRQUNkO0lBQ0Y7SUFFQSxJQUFJLENBQUN0QixRQUFRLENBQUN1QixJQUFJLENBQUNiO0lBQ25CLE9BQU8sSUFBSTtBQUNiO0FBRUFqQixlQUFlb0IsU0FBUyxDQUFDVyxJQUFJLEdBQUcsU0FBU0MsSUFBSSxFQUFFbkIsT0FBTztJQUNwRGpCLE9BQU93QixTQUFTLENBQUNXLElBQUksQ0FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRUQsTUFBTW5CO0lBQ3ZDLElBQUksQ0FBQ3FCLE1BQU07SUFDWCxPQUFPRjtBQUNUO0FBRUFoQyxlQUFlb0IsU0FBUyxDQUFDZSxRQUFRLEdBQUc7SUFDbEMsSUFBSSxDQUFDM0IsY0FBYyxHQUFHO0lBRXRCLElBQUksSUFBSSxDQUFDQyxXQUFXLEVBQUU7UUFDcEIsSUFBSSxDQUFDQyxZQUFZLEdBQUc7UUFDcEIsUUFBUSxhQUFhO0lBQ3ZCO0lBRUEsSUFBSSxDQUFDRCxXQUFXLEdBQUc7SUFDbkIsSUFBSTtRQUNGLEdBQUc7WUFDRCxJQUFJLENBQUNDLFlBQVksR0FBRztZQUNwQixJQUFJLENBQUMwQixZQUFZO1FBQ25CLFFBQVMsSUFBSSxDQUFDMUIsWUFBWSxFQUFFO0lBQzlCLFNBQVU7UUFDUixJQUFJLENBQUNELFdBQVcsR0FBRztJQUNyQjtBQUNGO0FBRUFULGVBQWVvQixTQUFTLENBQUNnQixZQUFZLEdBQUc7SUFDdEMsSUFBSW5CLFNBQVMsSUFBSSxDQUFDVixRQUFRLENBQUM4QixLQUFLO0lBR2hDLElBQUksT0FBT3BCLFVBQVUsYUFBYTtRQUNoQyxJQUFJLENBQUNxQixHQUFHO1FBQ1I7SUFDRjtJQUVBLElBQUksT0FBT3JCLFdBQVcsWUFBWTtRQUNoQyxJQUFJLENBQUNzQixTQUFTLENBQUN0QjtRQUNmO0lBQ0Y7SUFFQSxJQUFJdUIsWUFBWXZCO0lBQ2hCdUIsVUFBVSxVQUFTdkIsTUFBTTtRQUN2QixJQUFJRCxlQUFlaEIsZUFBZWdCLFlBQVksQ0FBQ0M7UUFDL0MsSUFBSUQsY0FBYztZQUNoQkMsT0FBT1EsRUFBRSxDQUFDLFFBQVEsSUFBSSxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJO1lBQy9DLElBQUksQ0FBQ0MsYUFBYSxDQUFDWDtRQUNyQjtRQUVBLElBQUksQ0FBQ3NCLFNBQVMsQ0FBQ3RCO0lBQ2pCLEdBQUVVLElBQUksQ0FBQyxJQUFJO0FBQ2I7QUFFQTNCLGVBQWVvQixTQUFTLENBQUNtQixTQUFTLEdBQUcsU0FBU3RCLE1BQU07SUFDbEQsSUFBSSxDQUFDVCxjQUFjLEdBQUdTO0lBRXRCLElBQUlELGVBQWVoQixlQUFlZ0IsWUFBWSxDQUFDQztJQUMvQyxJQUFJRCxjQUFjO1FBQ2hCQyxPQUFPUSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUNVLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDLElBQUk7UUFDeENWLE9BQU9jLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBQ08sS0FBSztRQUFLO1FBQzdCO0lBQ0Y7SUFFQSxJQUFJRyxRQUFReEI7SUFDWixJQUFJLENBQUN5QixLQUFLLENBQUNEO0lBQ1gsSUFBSSxDQUFDTixRQUFRO0FBQ2Y7QUFFQW5DLGVBQWVvQixTQUFTLENBQUNRLGFBQWEsR0FBRyxTQUFTWCxNQUFNO0lBQ3RELElBQUkwQixPQUFPLElBQUk7SUFDZjFCLE9BQU9RLEVBQUUsQ0FBQyxTQUFTLFNBQVNtQixHQUFHO1FBQzdCRCxLQUFLRSxVQUFVLENBQUNEO0lBQ2xCO0FBQ0Y7QUFFQTVDLGVBQWVvQixTQUFTLENBQUNzQixLQUFLLEdBQUcsU0FBU0ksSUFBSTtJQUM1QyxJQUFJLENBQUNDLElBQUksQ0FBQyxRQUFRRDtBQUNwQjtBQUVBOUMsZUFBZW9CLFNBQVMsQ0FBQ1MsS0FBSyxHQUFHO0lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUN4QixZQUFZLEVBQUU7UUFDdEI7SUFDRjtJQUVBLElBQUcsSUFBSSxDQUFDQSxZQUFZLElBQUksSUFBSSxDQUFDRyxjQUFjLElBQUksT0FBTyxJQUFJLENBQUNBLGNBQWMsQ0FBQ3FCLEtBQUssSUFBSyxZQUFZLElBQUksQ0FBQ3JCLGNBQWMsQ0FBQ3FCLEtBQUs7SUFDekgsSUFBSSxDQUFDa0IsSUFBSSxDQUFDO0FBQ1o7QUFFQS9DLGVBQWVvQixTQUFTLENBQUNjLE1BQU0sR0FBRztJQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDNUIsU0FBUyxFQUFFO1FBQ25CLElBQUksQ0FBQ0EsU0FBUyxHQUFHO1FBQ2pCLElBQUksQ0FBQ0wsUUFBUSxHQUFHO1FBQ2hCLElBQUksQ0FBQ2tDLFFBQVE7SUFDZjtJQUVBLElBQUcsSUFBSSxDQUFDOUIsWUFBWSxJQUFJLElBQUksQ0FBQ0csY0FBYyxJQUFJLE9BQU8sSUFBSSxDQUFDQSxjQUFjLENBQUMwQixNQUFNLElBQUssWUFBWSxJQUFJLENBQUMxQixjQUFjLENBQUMwQixNQUFNO0lBQzNILElBQUksQ0FBQ2EsSUFBSSxDQUFDO0FBQ1o7QUFFQS9DLGVBQWVvQixTQUFTLENBQUNrQixHQUFHLEdBQUc7SUFDN0IsSUFBSSxDQUFDVSxNQUFNO0lBQ1gsSUFBSSxDQUFDRCxJQUFJLENBQUM7QUFDWjtBQUVBL0MsZUFBZW9CLFNBQVMsQ0FBQzZCLE9BQU8sR0FBRztJQUNqQyxJQUFJLENBQUNELE1BQU07SUFDWCxJQUFJLENBQUNELElBQUksQ0FBQztBQUNaO0FBRUEvQyxlQUFlb0IsU0FBUyxDQUFDNEIsTUFBTSxHQUFHO0lBQ2hDLElBQUksQ0FBQy9DLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNNLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsY0FBYyxHQUFHO0FBQ3hCO0FBRUFSLGVBQWVvQixTQUFTLENBQUNNLGNBQWMsR0FBRztJQUN4QyxJQUFJLENBQUN3QixlQUFlO0lBQ3BCLElBQUksSUFBSSxDQUFDL0MsUUFBUSxJQUFJLElBQUksQ0FBQ0MsV0FBVyxFQUFFO1FBQ3JDO0lBQ0Y7SUFFQSxJQUFJK0MsVUFDRixrQ0FBa0MsSUFBSSxDQUFDL0MsV0FBVyxHQUFHO0lBQ3ZELElBQUksQ0FBQ3lDLFVBQVUsQ0FBQyxJQUFJTyxNQUFNRDtBQUM1QjtBQUVBbkQsZUFBZW9CLFNBQVMsQ0FBQzhCLGVBQWUsR0FBRztJQUN6QyxJQUFJLENBQUMvQyxRQUFRLEdBQUc7SUFFaEIsSUFBSXdDLE9BQU8sSUFBSTtJQUNmLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQzhDLE9BQU8sQ0FBQyxTQUFTcEMsTUFBTTtRQUNuQyxJQUFJLENBQUNBLE9BQU9kLFFBQVEsRUFBRTtZQUNwQjtRQUNGO1FBRUF3QyxLQUFLeEMsUUFBUSxJQUFJYyxPQUFPZCxRQUFRO0lBQ2xDO0lBRUEsSUFBSSxJQUFJLENBQUNLLGNBQWMsSUFBSSxJQUFJLENBQUNBLGNBQWMsQ0FBQ0wsUUFBUSxFQUFFO1FBQ3ZELElBQUksQ0FBQ0EsUUFBUSxJQUFJLElBQUksQ0FBQ0ssY0FBYyxDQUFDTCxRQUFRO0lBQy9DO0FBQ0Y7QUFFQUgsZUFBZW9CLFNBQVMsQ0FBQ3lCLFVBQVUsR0FBRyxTQUFTRCxHQUFHO0lBQ2hELElBQUksQ0FBQ0ksTUFBTTtJQUNYLElBQUksQ0FBQ0QsSUFBSSxDQUFDLFNBQVNIO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlrZXItZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL2NvbWJpbmVkLXN0cmVhbS9saWIvY29tYmluZWRfc3RyZWFtLmpzPzZhYTUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJykuU3RyZWFtO1xudmFyIERlbGF5ZWRTdHJlYW0gPSByZXF1aXJlKCdkZWxheWVkLXN0cmVhbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbWJpbmVkU3RyZWFtO1xuZnVuY3Rpb24gQ29tYmluZWRTdHJlYW0oKSB7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG4gIHRoaXMuZGF0YVNpemUgPSAwO1xuICB0aGlzLm1heERhdGFTaXplID0gMiAqIDEwMjQgKiAxMDI0O1xuICB0aGlzLnBhdXNlU3RyZWFtcyA9IHRydWU7XG5cbiAgdGhpcy5fcmVsZWFzZWQgPSBmYWxzZTtcbiAgdGhpcy5fc3RyZWFtcyA9IFtdO1xuICB0aGlzLl9jdXJyZW50U3RyZWFtID0gbnVsbDtcbiAgdGhpcy5faW5zaWRlTG9vcCA9IGZhbHNlO1xuICB0aGlzLl9wZW5kaW5nTmV4dCA9IGZhbHNlO1xufVxudXRpbC5pbmhlcml0cyhDb21iaW5lZFN0cmVhbSwgU3RyZWFtKTtcblxuQ29tYmluZWRTdHJlYW0uY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgY29tYmluZWRTdHJlYW0gPSBuZXcgdGhpcygpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgIGNvbWJpbmVkU3RyZWFtW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl07XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRTdHJlYW07XG59O1xuXG5Db21iaW5lZFN0cmVhbS5pc1N0cmVhbUxpa2UgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3RyZWFtICE9PSAnZnVuY3Rpb24nKVxuICAgICYmICh0eXBlb2Ygc3RyZWFtICE9PSAnc3RyaW5nJylcbiAgICAmJiAodHlwZW9mIHN0cmVhbSAhPT0gJ2Jvb2xlYW4nKVxuICAgICYmICh0eXBlb2Ygc3RyZWFtICE9PSAnbnVtYmVyJylcbiAgICAmJiAoIUJ1ZmZlci5pc0J1ZmZlcihzdHJlYW0pKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgdmFyIGlzU3RyZWFtTGlrZSA9IENvbWJpbmVkU3RyZWFtLmlzU3RyZWFtTGlrZShzdHJlYW0pO1xuXG4gIGlmIChpc1N0cmVhbUxpa2UpIHtcbiAgICBpZiAoIShzdHJlYW0gaW5zdGFuY2VvZiBEZWxheWVkU3RyZWFtKSkge1xuICAgICAgdmFyIG5ld1N0cmVhbSA9IERlbGF5ZWRTdHJlYW0uY3JlYXRlKHN0cmVhbSwge1xuICAgICAgICBtYXhEYXRhU2l6ZTogSW5maW5pdHksXG4gICAgICAgIHBhdXNlU3RyZWFtOiB0aGlzLnBhdXNlU3RyZWFtcyxcbiAgICAgIH0pO1xuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgdGhpcy5fY2hlY2tEYXRhU2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHN0cmVhbSA9IG5ld1N0cmVhbTtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVFcnJvcnMoc3RyZWFtKTtcblxuICAgIGlmICh0aGlzLnBhdXNlU3RyZWFtcykge1xuICAgICAgc3RyZWFtLnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5fc3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbihkZXN0LCBvcHRpb25zKSB7XG4gIFN0cmVhbS5wcm90b3R5cGUucGlwZS5jYWxsKHRoaXMsIGRlc3QsIG9wdGlvbnMpO1xuICB0aGlzLnJlc3VtZSgpO1xuICByZXR1cm4gZGVzdDtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5fZ2V0TmV4dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jdXJyZW50U3RyZWFtID0gbnVsbDtcblxuICBpZiAodGhpcy5faW5zaWRlTG9vcCkge1xuICAgIHRoaXMuX3BlbmRpbmdOZXh0ID0gdHJ1ZTtcbiAgICByZXR1cm47IC8vIGRlZmVyIGNhbGxcbiAgfVxuXG4gIHRoaXMuX2luc2lkZUxvb3AgPSB0cnVlO1xuICB0cnkge1xuICAgIGRvIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdOZXh0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWFsR2V0TmV4dCgpO1xuICAgIH0gd2hpbGUgKHRoaXMuX3BlbmRpbmdOZXh0KTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLl9pbnNpZGVMb29wID0gZmFsc2U7XG4gIH1cbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5fcmVhbEdldE5leHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0cmVhbSA9IHRoaXMuX3N0cmVhbXMuc2hpZnQoKTtcblxuXG4gIGlmICh0eXBlb2Ygc3RyZWFtID09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5lbmQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHN0cmVhbSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuX3BpcGVOZXh0KHN0cmVhbSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGdldFN0cmVhbSA9IHN0cmVhbTtcbiAgZ2V0U3RyZWFtKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHZhciBpc1N0cmVhbUxpa2UgPSBDb21iaW5lZFN0cmVhbS5pc1N0cmVhbUxpa2Uoc3RyZWFtKTtcbiAgICBpZiAoaXNTdHJlYW1MaWtlKSB7XG4gICAgICBzdHJlYW0ub24oJ2RhdGEnLCB0aGlzLl9jaGVja0RhdGFTaXplLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5faGFuZGxlRXJyb3JzKHN0cmVhbSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGlwZU5leHQoc3RyZWFtKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5fcGlwZU5leHQgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgdGhpcy5fY3VycmVudFN0cmVhbSA9IHN0cmVhbTtcblxuICB2YXIgaXNTdHJlYW1MaWtlID0gQ29tYmluZWRTdHJlYW0uaXNTdHJlYW1MaWtlKHN0cmVhbSk7XG4gIGlmIChpc1N0cmVhbUxpa2UpIHtcbiAgICBzdHJlYW0ub24oJ2VuZCcsIHRoaXMuX2dldE5leHQuYmluZCh0aGlzKSk7XG4gICAgc3RyZWFtLnBpcGUodGhpcywge2VuZDogZmFsc2V9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdmFsdWUgPSBzdHJlYW07XG4gIHRoaXMud3JpdGUodmFsdWUpO1xuICB0aGlzLl9nZXROZXh0KCk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX2hhbmRsZUVycm9ycyA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcbiAgICBzZWxmLl9lbWl0RXJyb3IoZXJyKTtcbiAgfSk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHRoaXMuZW1pdCgnZGF0YScsIGRhdGEpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5wYXVzZVN0cmVhbXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih0aGlzLnBhdXNlU3RyZWFtcyAmJiB0aGlzLl9jdXJyZW50U3RyZWFtICYmIHR5cGVvZih0aGlzLl9jdXJyZW50U3RyZWFtLnBhdXNlKSA9PSAnZnVuY3Rpb24nKSB0aGlzLl9jdXJyZW50U3RyZWFtLnBhdXNlKCk7XG4gIHRoaXMuZW1pdCgncGF1c2UnKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLl9yZWxlYXNlZCkge1xuICAgIHRoaXMuX3JlbGVhc2VkID0gdHJ1ZTtcbiAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl9nZXROZXh0KCk7XG4gIH1cblxuICBpZih0aGlzLnBhdXNlU3RyZWFtcyAmJiB0aGlzLl9jdXJyZW50U3RyZWFtICYmIHR5cGVvZih0aGlzLl9jdXJyZW50U3RyZWFtLnJlc3VtZSkgPT0gJ2Z1bmN0aW9uJykgdGhpcy5fY3VycmVudFN0cmVhbS5yZXN1bWUoKTtcbiAgdGhpcy5lbWl0KCdyZXN1bWUnKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXQoKTtcbiAgdGhpcy5lbWl0KCdlbmQnKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3Jlc2V0KCk7XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuICB0aGlzLl9zdHJlYW1zID0gW107XG4gIHRoaXMuX2N1cnJlbnRTdHJlYW0gPSBudWxsO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9jaGVja0RhdGFTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3VwZGF0ZURhdGFTaXplKCk7XG4gIGlmICh0aGlzLmRhdGFTaXplIDw9IHRoaXMubWF4RGF0YVNpemUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWVzc2FnZSA9XG4gICAgJ0RlbGF5ZWRTdHJlYW0jbWF4RGF0YVNpemUgb2YgJyArIHRoaXMubWF4RGF0YVNpemUgKyAnIGJ5dGVzIGV4Y2VlZGVkLic7XG4gIHRoaXMuX2VtaXRFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl91cGRhdGVEYXRhU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRhdGFTaXplID0gMDtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX3N0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcbiAgICBpZiAoIXN0cmVhbS5kYXRhU2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuZGF0YVNpemUgKz0gc3RyZWFtLmRhdGFTaXplO1xuICB9KTtcblxuICBpZiAodGhpcy5fY3VycmVudFN0cmVhbSAmJiB0aGlzLl9jdXJyZW50U3RyZWFtLmRhdGFTaXplKSB7XG4gICAgdGhpcy5kYXRhU2l6ZSArPSB0aGlzLl9jdXJyZW50U3RyZWFtLmRhdGFTaXplO1xuICB9XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX2VtaXRFcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICB0aGlzLl9yZXNldCgpO1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbn07XG4iXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJTdHJlYW0iLCJEZWxheWVkU3RyZWFtIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNvbWJpbmVkU3RyZWFtIiwid3JpdGFibGUiLCJyZWFkYWJsZSIsImRhdGFTaXplIiwibWF4RGF0YVNpemUiLCJwYXVzZVN0cmVhbXMiLCJfcmVsZWFzZWQiLCJfc3RyZWFtcyIsIl9jdXJyZW50U3RyZWFtIiwiX2luc2lkZUxvb3AiLCJfcGVuZGluZ05leHQiLCJpbmhlcml0cyIsImNyZWF0ZSIsIm9wdGlvbnMiLCJjb21iaW5lZFN0cmVhbSIsIm9wdGlvbiIsImlzU3RyZWFtTGlrZSIsInN0cmVhbSIsIkJ1ZmZlciIsImlzQnVmZmVyIiwicHJvdG90eXBlIiwiYXBwZW5kIiwibmV3U3RyZWFtIiwiSW5maW5pdHkiLCJwYXVzZVN0cmVhbSIsIm9uIiwiX2NoZWNrRGF0YVNpemUiLCJiaW5kIiwiX2hhbmRsZUVycm9ycyIsInBhdXNlIiwicHVzaCIsInBpcGUiLCJkZXN0IiwiY2FsbCIsInJlc3VtZSIsIl9nZXROZXh0IiwiX3JlYWxHZXROZXh0Iiwic2hpZnQiLCJlbmQiLCJfcGlwZU5leHQiLCJnZXRTdHJlYW0iLCJ2YWx1ZSIsIndyaXRlIiwic2VsZiIsImVyciIsIl9lbWl0RXJyb3IiLCJkYXRhIiwiZW1pdCIsIl9yZXNldCIsImRlc3Ryb3kiLCJfdXBkYXRlRGF0YVNpemUiLCJtZXNzYWdlIiwiRXJyb3IiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/combined-stream/lib/combined_stream.js\n");

/***/ })

};
;