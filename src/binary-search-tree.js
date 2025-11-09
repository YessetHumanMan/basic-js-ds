const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const insert = (node, data) => {
      if (!node) return new Node(data);
      if (data === node.data) return node; // не вставляем дубли
      if (data < node.data) node.left = insert(node.left, data);
      else node.right = insert(node.right, data);
      return node;
    };
    this._root = insert(this._root, data);
  }

  find(data) {
    let cur = this._root;
    while (cur) {
      if (data === cur.data) return cur;
      cur = data < cur.data ? cur.left : cur.right;
    }
    return null;
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      // data === node.data
      if (!node.left && !node.right) return null; // лист
      if (!node.left) return node.right;          // только правый
      if (!node.right) return node.left;          // только левый

      // два ребёнка — берем минимальный в правом поддереве
      let min = node.right;
      while (min.left) min = min.left;
      node.data = min.data;
      node.right = removeNode(node.right, min.data);
      return node;
    };

    this._root = removeNode(this._root, data);
  }

  min() {
    if (!this._root) return null;
    let n = this._root;
    while (n.left) n = n.left;
    return n.data;
  }

  max() {
    if (!this._root) return null;
    let n = this._root;
    while (n.right) n = n.right;
    return n.data;
  }
}

module.exports = {
  BinarySearchTree
};
