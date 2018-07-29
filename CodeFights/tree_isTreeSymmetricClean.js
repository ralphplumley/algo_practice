//
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function check(t1, t2) {
  debugger;
  if (t1 == null && t2 == null) {
      return true;
  }
  if (t1 == null || t2 == null || t1.value != t2.value) {
      return false;
  }
  return check(t1.left, t2.right) && check (t1.right, t2.left);
}

function isTreeSymmetric(t) {
  debugger;
  return check(t, t);
}

let treeTrue = {
  "value": 1,
  "left": {
      "value": 2,
      "left": {
          "value": 3,
          "left": null,
          "right": null
      },
      "right": {
          "value": 4,
          "left": null,
          "right": null
      }
  },
  "right": {
      "value": 2,
      "left": {
          "value": 4,
          "left": null,
          "right": null
      },
      "right": {
          "value": 3,
          "left": null,
          "right": null
      }
  }
}

let treeFalse = {
  "value": 1,
  "left": {
      "value": 2,
      "left": null,
      "right": {
          "value": 3,
          "left": null,
          "right": null
      }
  },
  "right": {
      "value": 2,
      "left": null,
      "right": {
          "value": 3,
          "left": null,
          "right": null
      }
  }
}

console.log(isTreeSymmetric(treeFalse));
