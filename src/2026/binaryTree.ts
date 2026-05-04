class NodeTree {
    value: number;
    left: NodeTree | null;
    right: NodeTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: NodeTree | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new NodeTree(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: NodeTree, newNode: NodeTree): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);

console.log(bst);
/**
 * How to run:

npx ts-node src/binaryTree.ts
BinarySearchTree {
  root: NodeTree {
    value: 50,
    left: NodeTree { value: 30, left: [NodeTree], right: [NodeTree] },
    right: NodeTree { value: 70, left: null, right: null }
  }
}
 */