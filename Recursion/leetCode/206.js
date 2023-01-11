// 206. Reverse Linked List

let arr = [1, 2, 3, 4, 5];

var reverseList = function (head) {
    if (!head) return null
    let temp = head.next
    head.next = null

    while (temp) {
        console.log(temp);
        let t = temp.next
        console.log(t);
        temp.next = head
        head = temp
        console.log(head);
        temp = t
    }
    return head
};

reverseList(arr)