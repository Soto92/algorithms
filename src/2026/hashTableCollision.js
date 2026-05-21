class HashTable {
  constructor() {
    this.table = new Array(5);
  }

  hash(key) {
    return key % 5;
  }

  insert(key, value) {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [{ key, value }];
    } else {
      const existingElement = this.table[index].find(
        (item) => item.key === key
      );
      console.log({ existingElement });
      if (existingElement) {
        existingElement.value = value;
      } else {
        this.table[index].push({ key, value });
      }
    }
  }

  get(key) {
    const index = this.hash(key);

    if (this.table[index]) {
      const element = this.table[index].find((item) => item.key === key);
      if (element) {
        return element.value;
      }
    }

    return null;
  }
}

const table = new HashTable();

table.insert(5, "Apple");
table.insert(10, "Banana");
table.insert(2, "Orange");

table.insert(7, "Pear");

console.log(table.get(2)); // Output: 'Orange' ( 'Pear' did not replace 'Orange')
console.log(table.get(7)); // Output: 'Pear'
