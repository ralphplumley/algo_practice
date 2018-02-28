function largestPalindrome(x, y) {
  let product;
  let max = 0;

  for (var i = 100; i <= x; i++) {
    for (var j = 100; j <= y; j++) {
      product = i * j;
      // console.log("product: " + product);
      if (isPalindrome(product)) {
        // console.log(product + " is a palindrome!");
        if (product > max) {
          max = product;
        }
      }
    }
  }
  return max === 0 ? "No Palindrome" : max;
}

function isPalindrome(num) {
  let arrayNum = num.toString().split('');
  let arrayNumReversed = num.toString().split('').reverse();
  let digitsToCheck = Math.floor(num.toString().length / 2);

  let a = arrayNum.join('').substr(0, digitsToCheck + 1);
  let b = arrayNumReversed.join('').substr(0, digitsToCheck + 1);
  return  a === b;
}

console.log(largestPalindrome(913, 993)); // should be 906609
