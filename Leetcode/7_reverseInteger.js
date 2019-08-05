/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = JSON.stringify(x)
  let chars = str.split('')

  // remove 0s
  let countCharsToRemove = 0
  for (let i = 0; i < chars.length; i++) {
    let char = chars[chars.length - 1 - i]
    if (char !== '0') {
      break
    }
    countCharsToRemove++
  }
  chars.splice(chars.length - countCharsToRemove)

  // reverse
  let reversed = chars.reverse()
  if (reversed[reversed.length - 1] === '-') {
    let neg = reversed.pop()
    reversed.unshift(neg)
  }

  let output = Number(reversed.join(''))

  // overflow?
  if (output > 2147483647 || output < -2147483648) {
    return 0
  } else {
    return output
  }
}

console.log(reverse(-65090)) // return -9056
