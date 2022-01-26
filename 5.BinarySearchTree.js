// Node class
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Binary search tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // adding nodes to the tree
  add = (data) => {
    let rootNode = this.root;
    // if the root node is empty
    if (rootNode === null) {
      this.root = new Node(data);
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          // left
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          // right
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(rootNode);
    }
  };

  // finding the smallest value in the tree
  findMin = () => {
    let currentNode = this.root;
    while (currentNode !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  };

  // finding the largest value in the tree
  findMax = () => {
    let currentNode = this.root;
    while (currentNode !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  };

  // finding a value in the tree
  find = (data) => {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (data === currentNode.data) return currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  };

  // is present
  isPresent = (data) => {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.data === data) return true;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  };
}
