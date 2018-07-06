function rotLeft(a, d) {
    let len = a.length;

    while (d > 0) {
        let temp = a.shift();
        a[len-1] = temp;
        d--;
    }

    return a;
}

console.log(rotLeft([1,2,3,4,5], 4));
