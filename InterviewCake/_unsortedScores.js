/*
This method is called Counting Sort.
Counting sort is a very time-efficient (and somewhat space-inefficient) algorithm for sorting that avoids comparisons and exploits the O(1)O(1) time insertions and lookups in an array.

The idea is simple: if you're sorting  integers and you know they all fall in the range 1..1001..100, you can generate a sorted array this way:

Allocate an array numCounts where the indices represent numbers from our input array and the values represent how many times the index number appears. Start each value at 0.
In one pass of the input array, update numCounts as you go, so that at the end the values in numCounts are correct.
Allocate an array sortedArray where we'll store our sorted numbers.
In one in-order pass of numCounts put each number, the correct number of times, into sortedArray.
Counting sort takes O(n)O(n) time and O(n)O(n)
additional space (for the new array that we end up returning).

*/

function sortScores(unorderedScores, highestPossibleScore) {
  debugger;
  // array of 0s at indices 0..highestPossibleScore
  var scoreCounts = [];
  for (var i = 0; i < highestPossibleScore + 1; i++) {
      scoreCounts.push(0);
  }

  // populate scoreCounts
  unorderedScores.forEach(function(score) {
      scoreCounts[score]++;
  });

  // populate the final sorted array
  var sortedScores = [];

  // for each item in scoreCounts
  for (var score = highestPossibleScore; score >= 0; score--) {
      var count = scoreCounts[score];

      // for the number of times the item occurs
      for (var time = 0; time < count; time++) {
          sortedScores.push(score);
      }
  }

  return sortedScores;
}

let highestPossibleScore = 10;
let unorderedScores = [3, 6, 1, 4, 9];

// let unorderedScores = [37, 81, 42, 65, 91, 53];
// let highestPossibleScore = 100;

console.log(sortScores(unorderedScores, highestPossibleScore));