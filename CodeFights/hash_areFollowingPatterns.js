/*
Example

For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = true;

For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = false.
*/
let strings = ["cat", "dog", "dog"];
let patterns = ["a", "b", "c"];

function areFollowingPatterns(strings, patterns) {
  if (strings.length !== patterns.length) {
    return false;
  }

  let hashA = {};
  let hashB = {};
  
  debugger;
  for (let i = 0; i < strings.length; i++) {
    let currString = strings[i];
    let currPattern = patterns[i];

    if (!hashA[currString]) {
      hashA[currString] = currPattern;
    } else {
      if (currPattern !== hashA[currString]) {
        return false;
      }
    }

    if (!hashB[currPattern]) {
      hashB[currPattern] = currString;
    } else {
      if (currString !== hashB[currPattern]) {
        return false;
      }
    }

  }

  return true;
}

console.log(areFollowingPatterns(strings, patterns));

