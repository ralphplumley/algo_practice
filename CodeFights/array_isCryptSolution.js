/*
crypt = ["SEND", "MORE", "MONEY"]

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]

9567 + 1085 = 10652

TRUE

------
crypt = ["TEN", "TWO", "ONE"] and

solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]

Even though 054 + 091 = 145, 
054 and 091 both contain leading zeroes, 
meaning that this is not a valid solution.

FALSE

*/

function isCryptSolution(crypt, solution) {
  let hash = {};

  for (var i = 0; i < solution.length; i++) {
    let key = solution[i][0];
    let value = solution[i][1];
    hash[key] = value;
  }
  debugger;
  let foo = [];
  for (var i = 0; i < crypt.length; i++) {
    let word = crypt[i];
    let stringPrice = '';
    for (var j = 0; j < word.length; j++) {
      stringPrice += hash[word[j]];
    }
    
    if (stringPrice[0] === '0' && stringPrice.length > 1) {
      return false;
    }

    foo.push(parseInt(stringPrice));
  }
    
  return foo[0] + foo[1] === foo[2];
}

let crypt1 = ["SEND", "MORE", "MONEY"];
let solution = [['O', '0'],
['M', '1'],
['Y', '2'],
['E', '5'],
['N', '6'],
['D', '7'],
['R', '8'],
['S', '9']];

let crypt2 = ["TEN", "TWO", "ONE"];
let solution2 = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]

let crypt3 = ["A","A","A"];
let solution3 = [["A","0"]];

let crypt4 = ["TEN", "TWO", "ONE"]
let solution4 = [["O","1"], ["T","0"], ["W","9"], ["E","5"], ["N","4"]];

console.log(isCryptSolution(crypt3, solution3));

