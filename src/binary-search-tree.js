const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.init
  }

  root() {
      return this.init === undefined ? null : this.init;
  }

  add(data) {
    let newNode = new Node (data)

    if (!this.init) {
      this.init = newNode;
      return this
    }

    let currentNode = this.init;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }

      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

  }

  has(data) {
    let res = this.find(data)
    if (res) {
      
      if (data === res.data) {
        return true
      }
      
    } else {
      return false
    }
  }

  find(data) {
    let currentNode = this.init;

    while (currentNode) {
      if (data === currentNode.data) return currentNode;
      
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        if(currentNode === null){
          return null
        } 
      } else {
        currentNode = currentNode.right;
        if(currentNode === null){
          return null
        } 
      }
    }
  }



  remove(data) {
    let currentNode = this.init;

    // if (data === currentNode.data) {
    //   currentNode.data = null;
    // }
    while (currentNode) {
      
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        if(currentNode !==null && currentNode.data === data){
          currentNode.data = null
        } 
      } else {
        currentNode = currentNode.right;
        if(currentNode !==null && currentNode.data === data){
          currentNode.data = null
        } 
      }
    }
  }


  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};