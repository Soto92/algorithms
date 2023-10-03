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
}

const linkedList = new LinkedList();
linkedList.append("Mauricio");
linkedList.append("Rafael");
linkedList.append("Foo");
linkedList.append("Bar");
console.log(linkedList)

/**
npx ts-node src/linkedList.ts
LinkedList {
  head: ListNode {
    data: 'Mauricio',
    next: ListNode { data: 'Rafael', next: [ListNode] }
  }
}
 */