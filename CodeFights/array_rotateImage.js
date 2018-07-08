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
    debugger;
    let n = a.length;
    for (var layer = 0; layer < n/2; layer++) {

        var first = layer;
        var last = n - layer - 1;

        for (var i = first; i < last; i++) {
            var offset = i - first;

            // save top left temporarily
            var temp = a[first][i];

            // BL (bottom left) -> TL (top left)
            var TL = a[first][i];
            a[first][i] = a[last-offset][first]
            TL = a[first][i];

            // BR (bottom right) -> BL (bottom left)
            var BR = a[last-offset][first];
            a[last-offset][first] = a[last][last-offset]
            BR = a[last-offset][first];

            // TR (top right) -> BR (bottom right)
            var TR = a[last][last-offset]
            a[last][last-offset] = a[i][last]
            TR = a[last][last-offset]

            // TL (top left) -> TR (top right)
            var TL = a[i][last]
            a[i][last] = temp;
            TL = a[i][last]

        }

    }

    return a;
}
let a = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
console.log(rotateImage(a));
