class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

let tree = new BinaryTreeNode();
tree.value = 10;

let child1 = new BinaryTreeNode();
child1.value = 1;

let child2 = new BinaryTreeNode();
child2.value = 20;

// let child3 = new BinaryTreeNode();
// child3.value = 1;

// let child4 = new BinaryTreeNode();
// child4.value = 5;

tree.left = child1;
tree.right = child2;
// child1.left = child3;
// child1.right = child4;

function isBinarySearchTree(treeRoot) {
  debugger;
  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {

      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {

      // This node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  // If none of the nodes were invalid, return true
  // (At this point we have checked all nodes)
  return true;
}

console.log(isBinarySearchTree(tree));
