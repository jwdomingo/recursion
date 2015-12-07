// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = document.body;
  var result = [];

  // TEST FUNCTION //

  var checkClass = function(object) {
    var list = object.classList;

    for (var i = 0; i < list.length; i++) {
      if (list[i] === className) {
        return true;
      }
    }

    return false;
  }

  // RECURSIVE FUNCTION //

  var traverseDOM = function(array, x, y) {
    console.log('array:', array);
    // BASE CASE //

    if (array.length === 0) {
      return; // traverseDOM(array[x + 1], 0, 0)
    } else {
      for (var i = 0; i < array.length; i++) {
        if (checkClass(array[i])) {
          result.push(array[i]);
        }
      }

      traverseDOM(array[x + 1].childNodes, 0, 0);
    }

    // BASE CASE //
  //   if (y > array.length) {
  //     console.log("BASE CAAAAAAAAAAAAASE")
  //     return;
  //   } else if (x > array[y].length) {
  //     return traverseDOM(array, 0, y + 1);
  //   } else {
  //     //console.log('checkClass(array[' + x + '][' + y + ']):', array[y]);
  //     if (checkClass(array[y])) {
  //       result.push(array[y]);
  //     }
  //     return traverseDOM(array, x + 1, y);
  //   }
  };

  traverseDOM(elements, 0, 0);

  return result;
};
