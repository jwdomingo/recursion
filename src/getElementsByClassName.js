// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elements = this.document.children;
  var result = [];

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
};
