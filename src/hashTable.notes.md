# Hash Tables or Hash Maps notes

A hash table is a data structure that maps keys to values, allowing efficient retrieval of values associated with a specific key. Let's explore the key concepts related to a hash table:

## Basic Structure

### Hashing Function:

- The hashing function is an algorithm that transforms the key into a numerical index.
- Ideally, the hashing function distributes keys uniformly across the table, minimizing collisions (when two keys have the same index).

### Array Structure:

- The hash table is typically implemented as an array, where each element is referred to as a "bucket."
- The array index is obtained by applying the hash function to the key.

## Adding a New Item

### Hashing the Key:

- The key is processed by the hash function to determine the index in the table.

### Storing in the Bucket:

- The value corresponding to the key is stored in the bucket corresponding to the calculated index.
- If there is a collision (two items mapped to the same index), collision resolution strategies are applied.

## Collision Resolution

### Separate Chaining:

- Each bucket contains a list (or another data structure) to store multiple items that collide at the same index.

### Open Addressing:

- When a collision occurs, the algorithm searches for the next empty (or available) bucket and stores the item there.

## Accessing Items

### Hashing the Key:

- To access an item, the key is passed through the hash function to obtain the index.

### Searching in the Bucket:

- If there is no collision, the corresponding value is retrieved.
- If there is a collision (separate chaining), it is necessary to traverse the list in the corresponding bucket.

## Hash Conflicts

### Collisions:

- Occur when two different keys result in the same index after applying the hash function.

### Resolution Techniques:

- In addition to separate chaining and open addressing, other techniques include rehashing, double hashing, among others.

## Efficiency

### Time Complexity:

- On average, insertion, search, and removal operations are O(1), if the hash function is efficient and there are not many collisions.

### Load Factor:

- The ratio between the number of elements and the table size. Maintaining a low load factor helps reduce collisions.

### Rehashing:

- As the table fills up, it can be resized (rehashed) to maintain an acceptable load factor.

In summary, a hashtable is an efficient data structure for storing key-value pairs, providing fast access to values associated with keys, as long as the hash function is well-designed, and collisions are handled efficiently.

# Arrays vs. Hash Tables in JavaScript

While both hash tables and arrays in JavaScript are used to store data, they serve different purposes and exhibit different behaviors.

## Array in JavaScript

### Numeric Indexing:

- Arrays in JavaScript are numerically indexed structures, meaning you access elements through an integer that represents the position of the element in the array.

### Order Maintained:

- The order of elements in an array is maintained. The first element inserted will be the first in order, the second will be the second, and so on.

### Implicit Keys:

- Keys are implicit and based on numeric indices. Example: `array[0]`, `array[1]`, ...

## Hashtable in JavaScript

### Arbitrary Keys:

- In a hash table, keys can be any values, not just numbers. The hash function maps these keys to numerical indices.

### Fast Access by Key:

- Access to elements is done through keys, not indices. This allows faster access if you know the key associated with the desired value.

### Order Not Guaranteed:

- The order of elements may not be maintained. The order depends on the hash function and collision resolution.

### Performance in Searches:

- Compared to arrays, hash tables are efficient for search, insertion, and removal operations, especially when the dataset is large.

## Example of collision

```js
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

// Trying to insert an element that collides with an already occupied index (collision)
table.insert(7, "Pear");

console.log(table.get(2)); // Output: 'Orange' ( 'Pear' did not replace 'Orange')
console.log(table.get(7)); // Output: 'Pear'
```
