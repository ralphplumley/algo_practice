let foo = function(n) {
  debugger;
  let sumOfSquares = 0;
  let sumSquared = 0;
  for (let i = 1; i < n+1; i++) {
    sumSquared += i;
    sumOfSquares += (Math.pow(i, 2));
  }
  sumSquared = sumSquared * sumSquared;

  return sumSquared - sumOfSquares;
}

let test = foo(100);
console.log(test);
