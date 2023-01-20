/* Написати структуру данних котра містить n елементів, 
і реалізувати наступні методи:

  insert(key, value)

  find(key)

  setAll(value)

  deleteAll()

  delete (key)

складність всіх методів має дорівнювати O(1)
*/

class Stack {
  #cloud;
  #storage;
  #keys;

  constructor(obj) {
    this.#cloud = "";
    this.#storage = obj ? obj : {};
    this.#keys = {};
  }

  insert(key, value) {
    this.#keys[key] = true;
    this.#storage[key] = value;
    return this.#storage;
  }

  find(key) {
    if (!this.#keys[key]) {
      return this.#cloud;
    }
    const value = this.#storage[key];
    if (!value) return undefined;
    return value;
  }

  setAll(value) {
    this.#cloud = value;
    this.#keys = {};
    return `All values settled to - ${value}`;
  }

  deleteAll() {
    this.#storage = {};
    return this.#storage;
  }

  delete(key) {
    const value = this.#storage[key];
    if (!Object.hasOwn(this.#storage, key)) return `Key '${key}' doesn't exist`;
    delete this.#storage[key];
    return value;
  }
}

const instance = new Stack();

console.log(instance.insert("1", "hello"));
console.log(instance.insert("2", "world"));
console.log(instance.insert("3", "!"));

console.log(instance.setAll("true"));

console.log(instance.insert("4", "value"));
console.log(instance.find("4"));
