function isBalanced(str) {
  var allParentheses;
  var isEqualCount;
  var isOrdered;

  if (!str.match(/[\)\(]/g)) {
    return true;
  } else if (!str.match(/[\(].*[\)]/) || 
      str.match(/[\)\(]/g).length % 2 !== 0) {
    return false;
  }

  allParentheses = str.match(/[\(\)]/g);
  isEqualCount = str.match(/\(/g).length === str.match(/\)/g).length;
  
  isOrdered = function () {
    var i;
    var tracker = 0;

    for (i = 0; i < allParentheses.length; i += 1) {
      allParentheses[i].match(/\(/) ? tracker += 1 : tracker -= 1;

      if (tracker < 0) {
        return false;
      }
    }
    return true;
  };

  return isEqualCount && isOrdered();
}




isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false

