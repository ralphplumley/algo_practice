/*

Note: Try to solve this task in O(n) time using O(1) additional space, 
where n is the number of elements in the list, 
since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k,
remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];

For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].

*/

let printNodes = function (l) {
  while (l) {
    console.log(l.value);
    l = l.next;
  }
}
// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

/*

ListNode {
  value: 3,
  next: 
   ListNode {
     value: 1,
     next: ListNode { value: 2, next: [Object], toJSON: [Function] },
     toJSON: [Function] },
  toJSON: [Function] }

*/

function removeKFromList(l, k) {
  let fakeHead = new ListNode(null);
  fakeHead.next = l;
  let current = fakeHead;
  
  debugger;
  while (current) {
    while (current.next && current.next.value === k) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  // printNodes(fakeHead.next);
  return fakeHead.next;
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

// console.log(l);
console.log(removeKFromList(l, 3)); // [1, 2, 4, 5]
