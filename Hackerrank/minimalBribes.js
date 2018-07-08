function minimumBribes(q) {

    let val = 0;
    debugger;
    for (var i = 0; i < q.length; i++) {
        let diff = q[i] - (i+1);
        if (diff > 2) {
            return 'Too chaotic';
        }

        if (q[i] > i+1) {
            val += diff;
        }
    }

    console.log(val);
}

console.log(minimumBribes([1,2,5,3,7,8,6,4]));
                       //  0 1 2 3 4 5 6 7