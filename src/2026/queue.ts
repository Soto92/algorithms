class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    front(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    clear(): void {
        this.items = [];
    }

    toArray(): T[] {
        return this.items.slice();
    }
}

const myQueue = new Queue<number>();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Fila:", myQueue.toArray());

console.log("Frente da fila:", myQueue.front());

myQueue.dequeue();
console.log("Fila após desenfileirar:", myQueue.toArray());

console.log("Tamanho da fila:", myQueue.size());

myQueue.clear();
console.log("Fila após limpar:", myQueue.toArray());
/**
npx ts-node src/queue.ts     
Fila: [ 1, 2, 3 ]
Frente da fila: 1
Fila após desenfileirar: [ 2, 3 ]
Tamanho da fila: 2
Fila após limpar: []
 */