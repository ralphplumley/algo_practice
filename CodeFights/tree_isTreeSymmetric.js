//
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function isTreeSymmetric(t) {
  // debugger;
  if (t === null) {
    return true;
  }

  // let's do BFS
  let queue = [];
  queue.push(t);
  
  while (queue.length) {
    // check if contents of queue are symmetrical
    for (let i = 0; i < Math.floor(queue.length / 2); i++) {
      let elementA, elementB;

      // stringifying for null cases
      if (queue[i] !== null) {
        elementA = queue[i].value;
      } else {
        elementA = "null"
      }

      if (queue[queue.length - 1 - i] !== null) {
        elementB = queue[queue.length - 1 - i].value;
      } else {
        elementB = "null"
      }

      if (elementA !== elementB) {
        return false;
      }
    }

    // so far, it's passed
    // so let's add the current queue elements' children to the queue

    // first, get number to remove before adding children
    let numToSlice, numOfNodes;
    numToSlice = numOfNodes = queue.length;

    // add children
    let tempArr = []; // store in temp for now, to check if all nodes are leaf nodes
    let currDepthAllLeaves = true;

    for (let i = 0; i < numOfNodes; i++) {

      // avoid doing work on nulls
      if (queue[i] !== null) {
        
        // if there's a single child node, set boolean
        if (queue[i].left || queue[i].right) {
          currDepthAllLeaves = false;
        }
  
        tempArr.push(queue[i].left); // 'null' being pushed is fine
        tempArr.push(queue[i].right); // same here
  
        // if these nodes have children, add to the queue
        // otherwise it won't get added, and this while loop will end
        if (!currDepthAllLeaves) {
          queue = queue.concat(tempArr);
          tempArr = [];
        }

      }

    }

    // remove the curren level's nodes
    queue.splice(0, numToSlice);
  }

  return true;
}

let treeTrue = {
  "value": -191,
  "left": {
      "value": 374,
      "left": {
          "value": -361,
          "left": {
              "value": -771,
              "left": null,
              "right": {
                  "value": -379,
                  "left": {
                      "value": -154,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": -699,
                      "left": null,
                      "right": null
                  }
              }
          },
          "right": {
              "value": 159,
              "left": {
                  "value": -900,
                  "left": {
                      "value": 305,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": -486,
                      "left": null,
                      "right": null
                  }
              },
              "right": {
                  "value": 200,
                  "left": {
                      "value": -699,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": 470,
                      "left": null,
                      "right": null
                  }
              }
          }
      },
      "right": null
  },
  "right": {
      "value": 374,
      "left": null,
      "right": {
          "value": -361,
          "left": {
              "value": 159,
              "left": {
                  "value": 200,
                  "left": {
                      "value": 470,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": -699,
                      "left": null,
                      "right": null
                  }
              },
              "right": {
                  "value": -900,
                  "left": {
                      "value": -486,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": 305,
                      "left": null,
                      "right": null
                  }
              }
          },
          "right": {
              "value": -771,
              "left": {
                  "value": -379,
                  "left": {
                      "value": -699,
                      "left": null,
                      "right": null
                  },
                  "right": {
                      "value": -154,
                      "left": null,
                      "right": null
                  }
              },
              "right": null
          }
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

console.log(isTreeSymmetric(treeTrue));
