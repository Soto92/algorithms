// Research font: https://pt.wikibooks.org/wiki/Algoritmos_e_Estruturas_de_Dados/Lista_encadeada
class ListNode {
    data: String;
    next: ListNode | null;
    constructor(data: String) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    append(data: String): void {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    delete(data: String): void {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.append("Mauricio");
linkedList.append("Foo");
linkedList.append("Rafael");
linkedList.append("Bar");
console.log(linkedList)
linkedList.delete("Foo")
console.log(linkedList)
/**
npx ts-node src/linkedList.ts
LinkedList {
  head: ListNode {
    data: 'Mauricio',
    next: ListNode { data: 'Foo', next: [ListNode] }
  }
}
LinkedList {
  head: ListNode {
    data: 'Mauricio',
    next: ListNode { data: 'Rafael', next: [ListNode] }
  }
}
 */