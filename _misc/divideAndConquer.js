// Binary search is a technique for very rapidly searching a sorted
// collection by cutting the search space in half at every pass.
//
// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]
//
// You can search for the value 31, as follows:
//
// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.
//
// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number,
// just round it down ("floor" it).

// I: sorted array
// O: index of the target number
// A: array is sorted
// E: no value, return null
//             v
// [1, 3, 16, 22, 31, 33, 34]

function binarySearch(arr, target){
  let minIndex = 0;
  let currentIndex = Math.floor(arr.length / 2);
  let maxIndex = arr.length - 1;

  let attemptsLeft = Math.ceil(arr.length / 2);

  console.log("minIndex starting at: " + minIndex);
  console.log("currentIndex starting at: " + currentIndex);
  console.log("maxIndex starting at: " + maxIndex);

  while (attemptsLeft > 0) {
    console.log("------------------");
    if (target === arr[currentIndex]) {
      return currentIndex;
    }

    if (arr[currentIndex] < target) {
      if (attemptsLeft === 1) {
        return arr.length-1;
      }
      minIndex = currentIndex;
      currentIndex = Math.floor(((maxIndex - currentIndex) / 2) + currentIndex);
      console.log("minIndex now: " + minIndex);
      console.log("currentIndex now: " + currentIndex);
      console.log("maxIndex now: " + maxIndex);
    } else {
      if (attemptsLeft === 1) {
        return arr[0];
      }
      // [1, 3, 16, 22, 31, 33, 34]
      //  0           3
      minIndex = 0;
      maxIndex = currentIndex;
      currentIndex = Math.floor(currentIndex - ((currentIndex - minIndex) / 2));
      console.log("minIndex now: " + minIndex);
      console.log("currentIndex now: " + currentIndex);
      console.log("maxIndex now: " + maxIndex);
    }
    attemptsLeft--;
  }

  return null;

}

console.log(binarySearch([1, 3, 16, 22, 31, 33, 34], 34));  // should be in the 6th slot
