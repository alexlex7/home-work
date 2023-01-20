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
  #allSettled;
  #isSettledAll;
  #storage;

  constructor(obj) {
    this.#allSettled = "";
    this.#isSettledAll = false;
    this.#storage = obj ? obj : {};
  }

  insert(key, value) {
    this.#storage[key] = value;
    return this.#storage;
  }

  find(key) {
    if (this.#isSettledAll) {
      return this.#allSettled;
    }
    const value = this.storage[key];
    if (!value) return undefined;
    return value;
  }

  setAll(value) {
    // for (const key in this.storage) {
    //   if (Object.hasOwn(this.storage, key)) {
    //     this.storage[key] = value;
    //   }
    // }
    this.#allSettled = value;
    this.#isSettledAll = true;
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
// console.log(instance.find(1));
console.log(instance.setAll("hello"));
console.log(instance.find("3"));

// console.log(instance.storage);
// console.log(console.log(instance));
