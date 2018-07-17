/*
  Test for cyclicity
*/

// Definition for singly-linked list:
function ListNode(x = null, next = null) {
  this.data = x;
  this.next = next;
}

const has_cycle = function (head) {
  const cycle_len = function (end) {
    let start = end
    let step = 0
    
    while (true) {
      step += 1
      start = start.next
      if (start === end) {
        return step
      }
    }
  }
  
  fast = head
  slow = head
  
  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    
    if (slow === fast) {
      // finds the start of the cycle
      let cycle_len_advanced_iter = head
      
      let len = cycle_len(slow)
      for (let i = 0; i < len; i++) {
        cycle_len_advanced_iter = cycle_len_advanced_iter.next
      }
      
      let it = head
      
      debugger;
      // both interators advance in tandem
      while (it !== cycle_len_advanced_iter) {
        it = it.next
        cycle_len_advanced_iter = cycle_len_advanced_iter.next
      }
      return it // iter is the start of cycle
    }
  }

  return null;
}

// 11->3->5->7->2
//     ^     |
//     |-----|

let a = new ListNode(11);
let b = new ListNode(3);
let c = new ListNode(5);
let d = new ListNode(7);
let e = new ListNode(2);

a.next = b;
b.next = c;
c.next = d;
d.next = b;


let test = has_cycle(a); 
console.log(test);

function printNodes(l) {
  while (l) {
    console.log(l.data);
    l = l.next;
  }
}

// printNodes(test);