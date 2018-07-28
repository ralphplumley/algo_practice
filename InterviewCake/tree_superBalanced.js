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
tree.value = 1;

let child1 = new BinaryTreeNode();
child1.value = 2;

let child2 = new BinaryTreeNode();
child2.value = 3;

let child3 = new BinaryTreeNode();
child3.value = 4;

let child4 = new BinaryTreeNode();
child4.value = 5;

tree.left = child1;
tree.right = child2;
child2.right = child3;
child3.right = child4;

function isBalanced(treeRoot) {
  debugger;
  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {

    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {

      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {

      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}

console.log(isBalanced(tree));
