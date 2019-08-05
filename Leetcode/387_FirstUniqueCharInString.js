/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let store = {}
  let sArr = s.split('')
  // debugger
  for (let i = 0; i < sArr.length; i++) {
    let currentProperty = sArr[i]
    if (store.hasOwnProperty(currentProperty)) {
      sArr[i] = '.'
      sArr[store[currentProperty]] = '.'
    } else {
      store[currentProperty] = i
    }
  }

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== '.') {
      return i
    }
  }

  return -1
}

let s = 'aadadaad'
firstUniqChar(s)
