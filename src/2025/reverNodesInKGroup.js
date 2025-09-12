function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var reverseKGroup = function (head, k) {
  if (!head || k === 1) return head;

  let dummy = new ListNode(0, head);
  let prevGroupEnd = dummy;

  while (true) {
    let kth = prevGroupEnd;
    for (let i = 0; i < k && kth; i++) {
      kth = kth.next;
    }
    if (!kth) break;

    let groupStart = prevGroupEnd.next;
    let nextGroupStart = kth.next;

    let prev = nextGroupStart;
    let curr = groupStart;
    while (curr !== nextGroupStart) {
      let tmp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tmp;
    }

    prevGroupEnd.next = kth;
    prevGroupEnd = groupStart;
  }

  return dummy.next;
};

// Example:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let result = reverseKGroup(head, 2);

// Convert linked list to array
let arr = [];
while (result) {
  arr.push(result.val);
  result = result.next;
}
console.log(arr); // [2,1,4,3,5]
