function validAnagram (str1, str2) {
    debugger
    if (str1.length === 0 && str2.length === 0) {
        return true
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }
    return true
}

function assert(condition, expectation, message) {
    if (condition !== expectation) {
        console.log(message, '| Expected', expectation, 'but got', condition)
    } else {
        console.log('👍', message, 'passed')
    }
}

assert(validAnagram('', ''), true, 'test 1')
assert(validAnagram('123', 'aaa'), false, 'test 2')
assert(validAnagram('aaz', 'zza'), false, 'test 3')
assert(validAnagram('anagram', 'nagaram'), true, 'test 4')
assert(validAnagram('rat', 'car'), false, 'test 5')
assert(validAnagram('awesome', 'awesom'), false, 'test 6')
assert(validAnagram('qwerty', 'qywrt'), false, 'test 7')
assert(validAnagram('texttwisttime', 'timetwisttext'), true, 'test 8')
