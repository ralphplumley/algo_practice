var hammingDistance = function (x, y) {
  // Example of (1,4)
  // Use bitwise operator ^ to convert input into bits |-> 5
  // Use toString(2) to print as string with base 2 |-> 101
  // Split |-> ['1','0','1']
  // Filter |-> ['1', '1']
  // Return length of that |-> 2

  return (x ^ y).toString(2).split('').filter(num => num === "1").length;
}

var test = hammingDistance(1,4);
console.log(test);