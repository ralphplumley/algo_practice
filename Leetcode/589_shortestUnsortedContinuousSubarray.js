// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5

//            v     v
// Input: [2, 6, 7, 4, 8, 10, 15]
// Input: [2, 4, 6, 7, 8, 10, 15]
// Output: 3

//         v        v
// Input: [4, 6, 7, 2, 8, 10, 15]
// Input: [2, 4, 6, 7, 8, 10, 15]
// Output: 4

//         v                  
// Input: [2, 6, 7, 6, 8, 10, 15]
//         beg
//                 end                        

// keep track of MAX, MIN, startIndex, endIndex
// 1st pass to find MAX: iterate through input array
  // if next element is bigger
    // update MAX
  // if next element is smaller than MAX
    // update endIndex to current index

// 2nd pass to find MIN: iterate through input array (backwards)
  // if next element is smaller
    // update MIN
  // if next element is bigger than MIN
    // update startIndex to current index

// return endIndex - startIndex + 1  

var findUnsortedSubarray = function(nums) {
    var max = -Infinity, min = Infinity, startIndex = -1, endIndex = -2;

    // 1st pass to find MAX
    for (var i = 0; i < nums.length; i++) {
      max = Math.max(max, nums[i]);
      if (nums[i] < max) {
        endIndex = i;
      }
    }

    // 2nd pass to find MIN
    debugger;
    for (var i = nums.length - 1; i >= 0; i--) {
      min = Math.min(min, nums[i]);
      if (nums[i] > min) {
        startIndex = i;
      }
    }
    return endIndex - startIndex + 1;
};

let foo = [4, 6, 7, 2, 8, 10, 15]; //4?
console.log(findUnsortedSubarray(foo));
