// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
function getElementsByClassName (className) {
  var body = document.body;
  var result = [];

  function ifClassNameIn(node) {
    var list = node.classList || '';

    // BASE CASE //
    for (var i = 0; i < list.length; i++) {
      if (list[i] === className) {
        result.push(node);
      }
    }

    // RECURSIVE CASE //
    for (var j = 0; j < node.childNodes.length; j++) {
      // Loop through all of current node's children
      ifClassNameIn(node.childNodes[j]);
    }
  }
  ifClassNameIn(body)
  return result;
};
