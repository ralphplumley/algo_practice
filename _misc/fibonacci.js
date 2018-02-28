// 0(2^n)
function fibonacci(position) {
  if (position < 3) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position -2);
  }
}

// console.log(fibonacci(12)); // 144
// console.log(fibonacci(20)); // 6765

// ---- Memoized O(n)

function fibMemo(index, cache) {
  cache = cache || [];

  if (cache[index]) {
    return cache[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] = fibMemo(index -1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}

console.log(fibMemo(8)); // 21
