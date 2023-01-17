// 21. Merge Two Sorted Lists

var mergeTwoLists = function(list1, list2) {
    let output;
    let temp;
    while(list1!== null && list2!== null) {
        if(list1.val <= list2.val) {
            if(temp===undefined) {
                temp = list1;                
            } else {
                temp.next = list1;
                temp = temp.next;
            }
            if(output === undefined) {
                output = temp;
            }
            list1 = list1.next;
        } else {
            if(temp===undefined) {
                temp = list2;                
            } else {
                temp.next = list2;
                temp = temp.next;
            }
            if(output === undefined) {
                output = temp;
            }
            list2 = list2.next;
        }
    }
    while(list1!==null) {
        if(temp===undefined) {
            temp = list1;                
        } else {
            temp.next = list1;
            temp= temp.next;
        }
        if(output === undefined) {
            output = temp;
        }
        list1 = list1.next;
    }
    while(list2!==null) {
        if(temp===undefined) {
            temp = list2;                
        } else {
            temp.next = list2;
            temp = temp.next;
        }
        if(output === undefined) {
            output = temp;
        }
        list2 = list2.next;
    }
    if(output=== undefined) return null;
    return output;
};