class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function deleteMiddleNode(head) {
    if (!head || !head.next) {
        return null; // No or one node, cannot delete middle
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next; // Remove the middle node
    console.log( "Remove Node : ", prev.next.val);

    return head;
}

// Function to print linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

// Example usage
const linkedList = new ListNode(1);
linkedList.next = new ListNode(3);
linkedList.next.next = new ListNode(4);
linkedList.next.next.next = new ListNode(7);
linkedList.next.next.next.next = new ListNode(1);
linkedList.next.next.next.next.next = new ListNode(2);
linkedList.next.next.next.next.next.next = new ListNode(6);

const modifiedList = deleteMiddleNode(linkedList);
printLinkedList(modifiedList);
