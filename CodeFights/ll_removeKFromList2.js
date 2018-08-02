function ListNode(x) {
    this.value = x;
    this.next = null;
}

function removeKFromList(l, k) {
    debugger;
    if(l===null) return null;
    else {
        l.next = removeKFromList(l.next,k);
        return (l.value===k)?l.next:l
    }
}

// let l = [3, 1, 2, 3, 4, 5, 3];
let l = new ListNode(3);
let l1 = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(3);
let l4 = new ListNode(4);
let l5 = new ListNode(5);
let l6 = new ListNode(3);

l.next = l1;
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;

console.log(removeKFromList(l, 3)); // [1, 2, 4, 5]
