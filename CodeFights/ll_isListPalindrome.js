/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;

For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.

*/

function isListPalindrome(l) {
    let slow = l;
    let fast = l;
    // Finds the second half of the linked list
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    debugger;
    // looks like this now:
    //               slow           fast
    //                v              v 
    // 0 -> 1 -> 2 -> 3 -> 2 -> 1 -> 0

    // Let's compare the first half and the REVERSED of the second half
    let firstHalf = l;
    let secondHalf = reverseLinkedList(slow)
    while (secondHalf && firstHalf) {
        if (firstHalf.value != secondHalf.value) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
}


// Definition for singly-linked list:
function ListNode(x) {
    this.value = x;
    this.next = null;
}

function reverseLinkedList(l) {
    debugger;
    let node = l;
    let previous = null;

    while (node) {
        let temp = node.next;
        node.next = previous;
        previous = node;
        node = temp;
    }

    return previous;
}

// let l = [0,1,5,3,2,1,0];
let l = new ListNode(0);
let l1 = new ListNode(3);
let l2 = new ListNode(5);
// let l3 = new ListNode(3);
// let l4 = new ListNode(2);
// let l5 = new ListNode(1);
// let l6 = new ListNode(0);

l.next = l1;
l1.next = l2;
l2.next = null;

console.log(reverseLinkedList(l)); // true
