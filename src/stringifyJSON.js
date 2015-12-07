// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var str = '';

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      return '[]';
    } else {
      str = '[';

      for (var i = 0; i < obj.length; i++) {
        str += stringifyJSON(obj[i]) + (i < obj.length - 1 ? ',' : '');
      }

      return str + ']'
    }
  } else if (obj instanceof Object) {
    if (obj === undefined) {
      return '{}';
    } else {
      str = '{';

      for (var item in obj) {
        if (typeof obj[item] !== 'function' && obj[item] !== undefined) {
          str += stringifyJSON(item) + ':' + stringifyJSON(obj[item]) + ',';
        }
      }

      return (str.charAt(str.length - 1) === ',' ? str.slice(0, -1) : str) + '}'
    }
  }
};
