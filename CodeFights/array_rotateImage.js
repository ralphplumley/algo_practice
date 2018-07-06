/*
Note: Try to solve this task in-place (with O(1) additional memory),
since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image.
Rotate the image by 90 degrees (clockwise).

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

function rotateImage(a) {
    let n = a.length;
    for (var layer = 0; layer < n/2; layer++) {

        var first = layer;
        var last = n - layer - 1;

        for (var i = first; i < last; i++) {
            var offset = i - first;

            // save top
            var top = a[first][i];

            // left -> top
            a[first][i] = a[last-offset][first]
            var left = a[first][i];

            // bottom -> left
            a[last-offset][first] = a[last][last-offset]
            var bottom = a[last-offset][first];

            // right -> bottom
            a[last][last-offset] = a[i][last]
            var right = a[last][last-offset]

            // top -> right
            a[i][last] = top;
            var topEnd = a[i][last]
        }

    }

    return a;
}
let a = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
console.log(rotateImage(a));
