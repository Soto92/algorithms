class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Topo da pilha:", stack.peek()); //  3"
console.log("Tamanho da pilha:", stack.size()); //  3"

const poppedItem = stack.pop();
console.log("Item desempilhado:", poppedItem); //  3"
console.log("Tamanho da pilha após desempilhar:", stack.size()); // 2"

stack.clear();
console.log("Pilha está vazia?", stack.isEmpty());
