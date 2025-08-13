# JavaScript Queue Implementations

This repository contains implementations of various **queue data structures** in JavaScript. Each type serves different purposes and has distinct characteristics.

## 📋 List of Queues

1. [Simple Queue](#1-simple-queue)
2. [Circular Queue](#2-circular-queue)
3. [Double Ended Queue (Deque)](#3-double-ended-queue-deque)
4. [Priority Queue](#4-priority-queue)
5. [Multiple Queues](#5-multiple-queues)
6. [Asynchronous Queue](#6-asynchronous-queue)
7. [Message Queue](#7-message-queue)

---

## 1. Simple Queue

**File:** `SimpleQueue.js`  
**Behavior:** FIFO (First In, First Out)

**Use Cases:**

- Task scheduling
- Print job management
- Basic line/order processing

---

## 2. Circular Queue

**File:** `CircularQueue.js`  
**Behavior:** FIFO with circular memory reuse

**Use Cases:**

- Fixed-size buffers
- Traffic light systems
- Circular scheduling (e.g., round-robin CPU scheduling)

---

## 3. Double Ended Queue (Deque)

**File:** `Deque.js`  
**Behavior:** Insert and remove elements from both ends

**Use Cases:**

- Undo/Redo functionality
- Sliding window problems
- Palindrome checkers

---

## 4. Priority Queue

**File:** `PriorityQueue.js`  
**Behavior:** Elements are dequeued based on priority

**Use Cases:**

- Operating system process scheduling
- Pathfinding algorithms (e.g., Dijkstra, A\*)
- Emergency queues (higher severity goes first)

---

## 5. Multiple Queues

**File:** `MultiQueue.js`  
**Behavior:** Multiple independent FIFO queues

**Use Cases:**

- Categorized task management (e.g., low, medium, high)
- Separate queues for different services (e.g., bank, hospital)
- Load balancing

---

## 6. Asynchronous Queue

**File:** `AsyncQueue.js`  
**Behavior:** Non-blocking queue for async/await usage

**Use Cases:**

- Background job processing
- Event-driven systems
- Web Workers and concurrency

---

## 7. Message Queue

**File:** `MessageQueue.js`  
**Behavior:** Basic simulation of a message broker queue

**Use Cases:**

- Microservices communication
- Event sourcing
- Logging systems

---

## 🛠 How to Use

Each queue is implemented as a separate JavaScript class. You can import them into your own project and test them using Node.js or any JS runtime.

```bash
node yourScript.js
```

## Author

Mauricio Soto
