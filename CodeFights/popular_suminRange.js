function sumInRange(nums, queries) {
    let prefixeArr = new Array(nums.length + 1);
    prefixeArr[0] = 0;

    let sum = 0;
    
    nums.forEach(function(num, index){
        return prefixeArr[index+1] = nums[index] + prefixeArr[index];
    });
    
    queries.forEach(function(tuple, index){
        let smaller = tuple[0];
        let larger = tuple[1] + 1;
        let valueToAdd = prefixeArr[larger] - prefixeArr[smaller];
        sum += valueToAdd;
    });

    // return sum % (Math.pow(10,9) + 7);
    return sum > 0 ? sum % (1000000000 + 7) : sum + (1000000000 + 7);
}

// let nums = [3, 0, -2, 6, -3, 2];
// let queries = [[0, 2], [2, 5], [0, 5]];

let nums = [-1000];
let queries = [[0, 0]];
console.log(sumInRange(nums, queries));
