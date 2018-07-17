/*
Reverse single sublist

O(n+m)

*/

// Definition for singly-linked list:
function ListNode(x = null, next = null) {
  this.data = x;
  this.next = next;
}

let reverse_sublist = function (ll, start, finish) { 
  // ! no allocating additional nodes
  // start and finish is inclusive

  // create placeholder for the result
  let dummy_head = new ListNode(0, ll);
  let sublist_head = dummy_head;
  
  // go until the 'start' input
  for (var i = 1; i < start + 1; i++) {
    sublist_head = sublist_head.next;
  }
  
  // debugger;
  // ok, start reversing
  let sublist_iter = sublist_head.next;
  for (var i = start; i < finish; i++) {
    let temp = sublist_iter.next;
    sublist_iter.next = temp.next;
    temp.next = sublist_head.next;
    sublist_head.next = temp;
  }

  return dummy_head.next;
}

// 11->3->5->7->2
let a = new ListNode(11);
let b = new ListNode(3);
let c = new ListNode(5);
let d = new ListNode(7);
let e = new ListNode(2);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

let test = reverse_sublist(a, 2, 4); 
// console.log(test);

function printNodes(l) {
  while (l) {
    console.log(l.data);
    l = l.next;
  }
}

printNodes(test);
// >>> 0->1->3->4->5->5->6->7
