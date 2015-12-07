// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = this.document.children;
  var result = [];

  // BASE CASE //

  var checkClass = function(object) {
    var name = object.className || '';
    return name.search(className) > -1 ? true : false;
  }

  var traverseDOM = function(array, x, y) {
    if (y === array.length) {
      return;
    } else if (x === array[y].length) {
      return traverseDOM(array, 0, y + 1);
    } else {
      result.push();
      return traverseDOM(array, x + 1, y);
    }
  };

  return result;
};
