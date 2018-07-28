//
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function hasPathWithGivenSum(t, s, sum = 0) {
  if (t === null) {
    return false;
  }

  if (t.left === null && t.right === null) {
    if ( (s - t.value) === 0) {
      return true;
    }
  }

  if (hasPathWithGivenSum(t.left, s - t.value) || hasPathWithGivenSum(t.right, s - t.value)) {
    return true;
  } else {
    return false;
  }
}

let t = {
  "value": 4,
  "left": {
      "value": 1,
      "left": {
          "value": -2,
          "left": null,
          "right": {
              "value": 3,
              "left": null,
              "right": null
          }
      },
      "right": null
  },
  "right": {
      "value": 3,
      "left": {
          "value": 1,
          "left": null,
          "right": null
      },
      "right": {
          "value": 2,
          "left": {
              "value": -2,
              "left": null,
              "right": null
          },
          "right": {
              "value": -3,
              "left": null,
              "right": null
          }
      }
  }
}

let s = 7;

console.log(hasPathWithGivenSum(t, s));
