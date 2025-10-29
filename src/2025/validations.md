# Bun vs Node (benchmark)

## Bun output

```
Running expanded validation performance comparison (25 types)...

🚀 Starting benchmark for: Switch Case
✅ Finished Switch Case in 34.9197 ms.

🚀 Starting benchmark for: Object Literal Map
✅ Finished Object Literal Map in 41.8949 ms.

🚀 Starting benchmark for: Map Object
✅ Finished Map Object in 89.0476 ms.

🚀 Starting benchmark for: Array.find()
✅ Finished Array.find() in 451.3262 ms.

🚀 Starting benchmark for: If/Else Chain
✅ Finished If/Else Chain in 56.1890 ms.
```

## Node output

```
Running expanded validation performance comparison (25 types)...

🚀 Starting benchmark for: Switch Case
✅ Finished Switch Case in 49.5579 ms.

🚀 Starting benchmark for: Object Literal Map
✅ Finished Object Literal Map in 135.7696 ms.

🚀 Starting benchmark for: Map Object
✅ Finished Map Object in 133.3632 ms.

🚀 Starting benchmark for: Array.find()
✅ Finished Array.find() in 176.2687 ms.

🚀 Starting benchmark for: If/Else Chain
✅ Finished If/Else Chain in 96.3159 ms.
```

## Results

| **Validation Type**    | **Bun (ms)** | **Node.js (ms)** | **Faster Runtime** | **Performance Difference** |
| ---------------------- | ------------ | ---------------- | ------------------ | -------------------------- |
| **Switch Case**        | **34.92**    | 49.56            | 🟢 **Bun**         | Bun ≈ **1.42× faster**     |
| **Object Literal Map** | **41.89**    | 135.77           | 🟢 **Bun**         | Bun ≈ **3.24× faster**     |
| **Map Object**         | **89.05**    | 133.36           | 🟢 **Bun**         | Bun ≈ **1.50× faster**     |
| **Array.find()**       | 451.33       | **176.27**       | 🟢 **Node.js**     | Node ≈ **2.56× faster**    |
| **If/Else Chain**      | **56.19**    | 96.32            | 🟢 **Bun**         | Bun ≈ **1.71× faster**     |

## Array find vs for loop

a simpler version of find:

```
function find(callback, thisArg) {
  // 'this' é o array
  for (let i = 0; i < this.length; i++) {
    if (i in this) { // verifica se o índice existe (importante para arrays esparsos)
      const value = this[i];
      if (callback.call(thisArg, value, i, this)) {
        return value;
      }
    }
  }
  return undefined;
}

```

Simple for loop:

```
const arr = [5, 12, 8, 130, 44];
let found;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    found = arr[i];
    break;
  }
}

console.log(found); // → 12

```

So we can conclude that the For loop is faster that Find, because you don't need to check index neither do callbacks.

## Author

Mauricio Soto
