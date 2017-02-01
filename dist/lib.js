'use strict';

var getSlides = require('./slider');
var getMedian = require('./median');

module.exports = function makeMedianArr(content) {
  var slideSize = 3;
  var arr = makeArr(content);
  var slides = getSlides(arr, slideSize);
  var result = [];

  slides.forEach(function (v) {
    return result.push(getMedian(v));
  });

  return result;
};

function makeArr(string) {
  return string.split('\n\n').map(function (v) {
    return +v;
  });
}
'use strict';

var fs = require('fs');

module.exports = {
  readFile: function readFile(path, cb) {
    var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'utf8';

    return fs.readFile(path, encoding, cb);
  },
  writeFile: function writeFile(path, data, cb) {
    // TODO (S.Panfilov) implement
  }
};
'use strict';

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

module.exports = function getMedian(arr) {
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
};
'use strict';

var files = require('./files');
var makeMedianArr = require('./core');

module.exports = function repl() {
  if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }

  var input = process.argv[2];
  var output = './output';

  files.readFile(input, function (err, contents) {
    // if (err) throw 'REPL: can\'t read file'
    if (err) throw err;
    var arr = makeMedianArr(contents);
    files.writeFile(output, arr, function () {
      return onWriteDone(output);
    });
  });
};

// function onReady (err, contents) {
//   core()
// }

function onWriteDone(path) {
  console.log('Done: ' + path);
}

// module.exports = repl
"use strict";

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

module.exports = function getSlides(arr) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  if (!arr || arr.length === 0) return [];

  var bodyArr = getSlideBody(arr, size);
  var tailArr = getSlideTail(arr, size);

  return tailArr.concat(bodyArr);
};
//# sourceMappingURL=lib.js.map
