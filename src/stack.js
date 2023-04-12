const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.initArr = []
  }

  push(newWlement) {
    this.initArr.length++

    for (let i = 0;i < this.initArr.length;i++) {
      this.initArr[this.initArr.length-1] =  newWlement
    }
  }

  pop() {
    let num;
    
    num = this.initArr[this.initArr.length-1]
    this.initArr[this.initArr.length-1] =  null

    this.initArr.length--
    return num
  }

  peek() {
    return this.initArr[this.initArr.length-1]
  }
}

module.exports = {
  Stack
};
