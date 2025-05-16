// src/utils/BinaryTree.js

export class TreeNode {
  constructor(value) {
    this.name = value.toString(); 
    this.value = value;          
    this.children = [];           
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
        node.children.push(newNode);
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
        node.children.push(newNode);
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inorder(node = this.root, result = []) {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }

  preorder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  postorder(node = this.root, result = []) {
    if (node) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  contains(value, node = this.root) {
    if (!node) return false;
    if (node.value === value) return true;
    if (value < node.value) return this.contains(value, node.left);
    return this.contains(value, node.right);
  }
}
