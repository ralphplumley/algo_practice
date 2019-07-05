/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var isPalindrome = function(node) {
    // debugger
    if (node === null || node.next === null) {
        return true
    }
    
    let slow = node
    let fast = node
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    let left = node
    let nextLeft = left.next
    let half = slow
    
    node.next = null
    
    while(nextLeft !== half) {
        let curr = nextLeft.next
        nextLeft.next = left
        
        left = nextLeft
        nextLeft = curr
    }
    
    if (fast != null) {
        half = half.next
    }
    
    // console.log('left: ', left)
    // console.log('half: ', half)
    
    
    while (left !== null) {
        console.log('------------')
        console.log('left: ', left)
        console.log('half: ', half)
        
        if (half === null || left.val !== half.val ) {
            return false
        }
        
        left = left.next
        half = half.next
    }
    
    return true
};


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = new ListNode(1)

let node2 = new ListNode(2)
head.next = node2

let node3 = new ListNode(2)
node2.next = node3
let node4 = new ListNode(1)
node3.next = node4
node4.next = null

