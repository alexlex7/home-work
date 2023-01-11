/* Написати структуру данних котра містить n елементів, і реалізувати наступні методи

  insert(key, value)

  find(key)

  setAll(value)

  deleteAll()

  delete (key)

складність всіх методів має дорівнювати O(1)
*/

class Stack {
  constructor() {
    this.storage = {};
  }

  insert(key, value) {
    this.storage[key] = value;
  }
  
  find(key) {
    const value = this.storage[key]
    if (!value) return undefined;
    return value;
  }

  // setAll(value) {

  // }

  deleteAll() {
    this.storage = {};
    return this.storage;
  }

  delete(key) {
    const value = this.storage[key];
    if (!Object.prototype.hasOwnProperty.call(this.storage, key)) return undefined;
    delete this.storage[key];
    return value;
   }
}

const instanceStack = new Stack();

console.log(instanceStack.insert('1', 'hello'));
console.log(instanceStack.find(1));
console.log(instanceStack.delete('2'))

console.log(instanceStack.storage);