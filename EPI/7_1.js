/*
Merge two sorted lists

O(n+m)

*/

// Definition for singly-linked list:
function ListNode(x = null) {
  this.data = x;
  this.next = null;
}

let merge_two_sorted_lists = function (l1, l2) {
  // create placeholder for the result
  let l3 = new ListNode();
  let prev = l3;

  while (l1 && l2) {
    if (l1.data <= l2.data) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // appends the remaining nodes of l1 and l2
  prev.next = l1 || l2;

  return l3.next
}

// 0->3->5->7
let l1a = new ListNode(0);
let l1b = new ListNode(3);
let l1c = new ListNode(5);
let l1d = new ListNode(7);
l1a.next = l1b;
l1b.next = l1c;
l1c.next = l1d;
l1d.next = null;

// 1->4->5->6
let l2a = new ListNode(1);
let l2b = new ListNode(4);
let l2c = new ListNode(5);
let l2d = new ListNode(6);
l2a.next = l2b;
l2b.next = l2c;
l2c.next = l2d;
l2d.next = null;

let test = merge_two_sorted_lists(l1a, l2a); 

function printNodes(l) {
  while (l) {
    console.log(l.data);
    l = l.next;
  }
}

printNodes(test);
// >>> 0->1->3->4->5->5->6->7
