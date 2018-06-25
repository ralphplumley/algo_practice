/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

Your task is to find their comparison points by comparing  with ,  with , and  with .

If , then Alice is awarded  point.
If , then Bob is awarded  point.
If , then neither person receives a point.
Comparison points is the total points a person earned.

Given  and , can you compare the two challenges and print their respective comparison points?

Input Format

The first line contains  space-separated integers, , , and , describing the respective values in triplet . 
The second line contains  space-separated integers, , , and , describing the respective values in triplet .

Constraints

Output Format

Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

Sample Input 0

5 6 7
3 6 10
Sample Output 0

1 1
*/

let compareTriplets = function(a,b) {
  if (a.length !== b.length) {
    return error;
  }

  let len = a.length;
  let aScore = 0;
  let bScore = 0;

  for (var i = 0; i < len; i++) {
    // a[i] > b[i] ? aScore++ : bScore++;
    if (a[i] > b[i]) {
      aScore++;
    }

    if (a[i] < b[i]) {
      bScore++;
    }
  }

  return [aScore, bScore];
}

let a = [5,6,7];
let b = [3,6,10];

let test = compareTriplets(a,b);
console.log(test);

