/*
Note: Write a solution that only iterates over the string once and uses O(1)
additional memory, since this is what you would be asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating
character in it. If there is no such character, return '_'.

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

*/

function firstNotRepeatingCharacter(s) {
  if (s.length === 1) {
    return s;
  }

  let alphabet = {
    'a':1,
    'b':2,
    'c':3,
    'd':4,
    'e':5,
    'f':6,
    'g':7,
    'h':8,
    'i':9,
    'j':10,
    'k':11,
    'l':12,
    'm':13,
    'n':14,
    'o':15,
    'p':16,
    'q':17,
    'r':18,
    's':19,
    't':20,
    'u':21,
    'v':22,
    'w':23,
    'x':24,
    'y':25,
    'z':26
  };

  let temp = Array.from(Array(26), () => 0);
  debugger;
  for (var i = 0; i < s.length; i++) {
    let c = s[i];
    let alphabetIndex = alphabet[c];
    temp[alphabetIndex]++;
  }

  for (var i = 0; i < s.length; i++) {
    let char = s[i];
    let val = alphabet[char];
    if (temp[val] === 1) {
      return char;
    }
  }

  return '_';
}
  
 console.log(firstNotRepeatingCharacter("ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof"));


  