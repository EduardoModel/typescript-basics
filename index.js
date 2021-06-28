"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var _ = require("lodash");
console.log('Just the introduction');
// An example of a async await function
function aAsyncFunction() {
    return __awaiter(this, void 0, void 0, function () {
        var value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.google.com")];
                case 1:
                    value = _a.sent();
                    console.log(value);
                    return [2 /*return*/];
            }
        });
    });
}
/*
    An example of a method of the DOM library.
    Here is possible to visualize how IntelliSense helps a lot during development,
    avoiding the need to consult any external library documentation.
*/
var url = new URL("...").toString();
/*
    For third-party libraries are always interesting to have the types of it.
    Sometimes the library contains all his types but sometimes it doesn't.
    Fortunately, the community took care already and wrote a ton of modules
    that contains all the necessary types for the libraries.
*/
console.log(_.pickBy({
    a: 1,
    b: '2',
    c: 3
}, _.isNumber));
/*
    About the typing: it can be explicitly or implicitly
*/
// At the time the value is attributed to a variable, the type will be automatically inferred
var theAnswerToLifeTheUniverseAndEverything = 42; // <-- There is an implicity declaration
var theAnswerToLifeTheUniverseAndEverythingExplicit = 42; // <-- There is an explicit declaration
/*
    And if it tried to give another value type to the variable, that isn't a number, the compiler will
    present an error.
    Here is where typescript shines because if the code were sent to production, this error would
    only be caught later on.
*/
// theAnswerToLifeTheUniverseAndEverything = "AAAA";
/*
    To give more flexibility for a variable the type any can be given, but
    this approach isn't encouraged because it can lead to the same errors without typescript.
*/
var anyValueIsValid = "ANY VALUE";
/*
    To define a variable to have a specific type,
    it just needs to be defined with the following syntax: variable name: type.
*/
var name;
var age;
/*
    Another tip: if there is an implicit variable declaration,
    it is not needed to add the explicit type annotation for the variable
*/
var itIsANumberForSure = 42;
var textFont = 'bold'; // This will throw an error!
/*
    To strong type functions is like a mixture with C++ and PHP
*/
function pow(base, exponent) {
    // If the return isn't the right one it will throw an error as well
    return Math.pow(base, exponent);
}
/*
    For functions that doesn't return a value, the appropriated return value type
    is void.
    This approach is for event listeners, for example:
*/
function iDoMathForMyself(a, b) {
    var c = a + b;
}
/*
    To strong type arrays just use the syntax array[type].
    This approach is very useful when is needed to iterate through
    an array to get some IntelliSense.
*/
var userList = []; // Array of users
var myListArray = [42, 'Douglas Adamns', true];
/*
    Another powerful resource is generics.
    With them is possible to define the internal value for an observable for example.
*/
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
// Explicit declaration
// const x: Observable<number>;
// Implicitly declaration
var y = new Observable(2);
