/**
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]
 */

class RandomizedSet {
    private map: Map<number, number>;
    private arr: number[];

    constructor() {
        this.map = new Map();
        this.arr = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }

        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);
        return true;
    }


    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false;
        }
        const lastElement = this.arr[this.arr.length - 1];
        const indexToRemove = this.map.get(val) as number;
        this.arr[indexToRemove] = lastElement;
        this.map.set(lastElement, indexToRemove);
        this.arr.pop();
        this.map.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex];
    }
}