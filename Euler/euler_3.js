/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var getFactors = function(number) {
  factors = [];
  // debugger;
  for (var i = 0; i < Math.sqrt(number) + 1; i++) {
    
    if (number % i === 0) {
      factors.push(i); // First pairing
      factors.push(number / i); // Second pairing
      // so, for example, in 24, it'd be 3 and 24 / 3 = 8
    }
  }

  return factors;
}

var isPrime = function(number) {
  return getFactors(number).length === 2;
}

let allFactors = getFactors(600851475143);
let largestPrimeFactor = 0;

for (var i = 0; i < allFactors.length; i++) {
  let num = allFactors[i];
  if (isPrime(num) && (num > largestPrimeFactor)) {
    largestPrimeFactor = num;
  }
}

console.log(largestPrimeFactor);