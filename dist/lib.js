'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMedian;
function getForEven(arr, index) {
  return (arr[index] + arr[index - 1]) / 2;
}

function getForOdd(arr, index) {
  return arr[index];
}

function getValue(isEven, arr, index) {
  return (isEven ? getForEven : getForOdd)(arr, index);
}

function isInteger(num) {
  if (!num) throw 'isInteger: value undefined';
  return num.toString().indexOf('.') === -1;
}

function getMedian(arr) {
  if (!Array.isArray(arr)) throw new Error('getMedian: argument must be an array');
  if (!arr.every(function (v) {
    return Number.isFinite(v) && isInteger(v);
  })) throw new Error('getMedian: array may contain integer numbers only');
  if (arr.length === 0) throw new Error('getMedian: array is empty');
  if (arr.length > 3) throw new Error('getMedian: array can\'t contain more than 3 items');

  // TODO (S.Panfilov) this check gonna be in repl instead of median
  if (arr.length === 1) return -1;

  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  var isEven = arr.length % 2 === 0;
  var middle = Math.floor(arr.length / 2);

  return getValue(isEven, sortedArr, middle);
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = repl;

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _median = require('./median');

var _median2 = _interopRequireDefault(_median);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function repl(arr) {

  var slideSize = 3;
  var slides = (0, _slider2.default)(arr, slideSize);

  var result = [];
  slides.forEach(function (v) {
    return result.push((0, _median2.default)(v));
  });

  console.info(result);

  return result;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSlides;
function getSlideBody(arr, size) {
  var result = [];
  arr.forEach(function (v, i) {
    var from = i;
    var to = from + size;
    result.push(arr.slice(from, to));
  });

  return result;
}

function getSlideTail(arr, size) {
  var result = [];
  for (var i = size; i > 1; i--) {
    if (arr.length > i - 1) result.unshift(arr.slice(0, i - 1));
  }

  return result;
}

function getSlides(arr) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  if (!arr || arr.length === 0) return [];

  var bodyArr = getSlideBody(arr, size);
  var tailArr = getSlideTail(arr, size);

  return tailArr.concat(bodyArr);
}
//# sourceMappingURL=lib.js.map
