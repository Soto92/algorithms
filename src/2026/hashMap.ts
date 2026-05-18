class HashMap<K, V> {
    private data: Record<string, V> = {};

    set(key: K, value: V): void {
        const stringKey = this.stringifyKey(key);
        this.data[stringKey] = value;
    }
    get(key: K): V | undefined {
        const stringKey = this.stringifyKey(key);
        return this.data[stringKey];
    }
    has(key: K): boolean {
        const stringKey = this.stringifyKey(key);
        return this.data.hasOwnProperty(stringKey);
    }
    delete(key: K): void {
        const stringKey = this.stringifyKey(key);
        if (this.has(key)) {
            delete this.data[stringKey];
        }
    }

    private stringifyKey(key: K): string {
        if (typeof key === "object") {
            return JSON.stringify(key);
        }
        return String(key);
    }
}

const myMap = new HashMap<string, number>();

myMap.set("um", 1);
myMap.set("dois", 2);
myMap.set("três", 3);

console.log(myMap.get("um"));
console.log(myMap.has("quatro"));

myMap.delete("dois");
console.log(myMap.has("dois"));
/**
npx ts-node src/hashMap.ts
1
false
false
*/