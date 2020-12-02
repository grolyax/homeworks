
var array1 = [3, 5];
var array2 = [5, 9];

function calcSegment(array1, array2) {
    var d = (array2[0] - array1[0]) ** 2 + (array2[1] - array1[1]) ** 2;
    var result = d ** 1/2;
    return result;
}

console.log(calcSegment([3, 5], [5, 9]));