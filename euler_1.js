// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// find multiples of 3, push into array
// find multiples of 5, push into array
// add those numbers

function getSum(num) {
  let multiples = [];

  for (var i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  return multiples.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  });

}

console.log("Sum is: " + getSum(1000));
