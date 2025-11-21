# Bun vs Node (benchmark)

## Bun output

```
Running expanded validation performance comparison (25 types)...

🚀 Starting benchmark for: Switch Case
✅ Finished Switch Case in 20.1266 ms.

🚀 Starting benchmark for: Object Literal Map
✅ Finished Object Literal Map in 20.7063 ms.

🚀 Starting benchmark for: Map Object
✅ Finished Map Object in 48.4529 ms.

🚀 Starting benchmark for: Array.find()
✅ Finished Array.find() in 185.5344 ms.

🚀 Starting benchmark for: If/Else Chain
✅ Finished If/Else Chain in 27.9327 ms.

🚀 Starting benchmark for: For Find Style
✅ Finished For Find Style in 112.4867 ms.

🚀 Starting benchmark for: For Loop
✅ Finished For Loop in 4329.2878 ms.
```

## Node output

```
Running expanded validation performance comparison (25 types)...

🚀 Starting benchmark for: Switch Case
✅ Finished Switch Case in 24.5179 ms.

🚀 Starting benchmark for: Object Literal Map
✅ Finished Object Literal Map in 59.5286 ms.

🚀 Starting benchmark for: Map Object
✅ Finished Map Object in 41.9615 ms.

🚀 Starting benchmark for: Array.find()
✅ Finished Array.find() in 82.5658 ms.

🚀 Starting benchmark for: If/Else Chain
✅ Finished If/Else Chain in 26.6366 ms.

🚀 Starting benchmark for: For Find Style
✅ Finished For Find Style in 79.3346 ms.

🚀 Starting benchmark for: For Loop
✅ Finished For Loop in 957.1584 ms.
```

---

# Results

| **Validation Method**  | **Bun (ms)** | **Node.js (ms)** | **Faster Runtime** | **Performance Difference** |
| ---------------------- | ------------ | ---------------- | ------------------ | -------------------------- |
| **Switch Case**        | **20.13**    | 24.52            | 🟢 **Bun**         | Bun ≈ **1.22× faster**     |
| **Object Literal Map** | **20.71**    | 59.53            | 🟢 **Bun**         | Bun ≈ **2.87× faster**     |
| **Map Object**         | **48.45**    | **41.96**        | 🟢 **Node.js**     | Node ≈ **1.15× faster**    |
| **Array.find()**       | 185.53       | **82.57**        | 🟢 **Node.js**     | Node ≈ **2.25× faster**    |
| **If/Else Chain**      | 27.93        | **26.64**        | 🟢 **Node.js**     | Node ≈ **1.05× faster**    |
| **For Find Style**     | 112.49       | **79.33**        | 🟢 **Node.js**     | Node ≈ **1.42× faster**    |
| **For Loop (native)**  | 4329.29      | **957.16**       | 🟢 **Node.js**     | Node ≈ **4.52× faster**    |

---

# Array find vs For Loop

## `.find()` simplified behavior

```
function find(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const value = this[i];
      if (callback.call(thisArg, value, i, this)) {
        return value;
      }
    }
  }
  return undefined;
}
```

## Simple `for` loop

```
const arr = [5, 12, 8, 130, 44];
let found;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    found = arr[i];
    break;
  }
}
```

---

# FOR native VS FOR Find style

### **For Find Style is significantly faster than the native For Loop in both Bun and Node.**

Your results show:

- **For Loop (native)** is extremely slow in your implementation
  (likely due to object key iteration or extra operations inside the loop).

- **For Find Style** (looping a prebuilt array with numeric indexes) is:

  - **38× faster in Bun**
  - **12× faster in Node**
    compared to your native For Loop.

- `.find()` is still slower than both manual loops because of:

  - callback overhead
  - `.call()`
  - shape transitions
  - prototype lookups
  - extra branching (`i in this`)

---

### Final Summary

- **Fastest pattern overall:** **Switch Case** (Bun)
- **Fastest array-walking method:** **For Find Style (Node)**
- **Slowest by far:** **Your native For Loop implementation**
- **`.find()` is slower due to callback overhead**
- **Bun dominates in dispatch structures (switch, object-map) but loses in array scanning**
