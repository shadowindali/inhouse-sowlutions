// ListNode Class containing value and next pointer
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // header and tail
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    // create new node
    const newNode = new ListNode(value);

    // if there's no header then list is empty so head and tail are the same
    // else tail.next points to the newNode and set tail the newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeNodes(x) {
    // search to the first smaller number than x and set it as head
    while (this.head && this.head.value >= x) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.value > x) {
        // if number is bigger than x skip
        current.next = current.next.next;
      } else {
        // if number is lower than x add it to current list
        current = current.next;
      }
    }

    this.tail = current;
  }

  printList() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" → "));
  }
}

const ll = new LinkedList();
[10].forEach((n) => ll.addNode(n));

console.log("Original list:");
ll.printList();

ll.removeNodes(7);

console.log("After removing nodes > 7:");
ll.printList();
