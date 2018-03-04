// Given an array of numbers, return whether any two sums to K.
// For example, given [10, 15, 3, 7] and K of 17, return true since 10 + 7 is 17.

const two_sum = function(arr, k) {

  let valueToIndex = {};
  arr.map(function(element){
    valueToIndex[element] = 1;
  });

  for (let i = 0; i < arr.length; i++) {
    if ( (valueToIndex.hasOwnProperty(k - arr[i])) ) {
      return true;
    }
  }
  return false;
}

const test = two_sum([10, 15, 3, 7], 10);
console.log(test);
