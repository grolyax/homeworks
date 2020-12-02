    var N;
function fill(N, value) {
    var arr = [];
    for (i = 0; i < N-1; i++) {
        arr[i] = value;
        arr.push(arr[i]);
    }
    return arr;
}

console.log('first');
console.log(fill(4, 8));


var array = [1, 2, 3, 4, 5];

function reverse(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.unshift(array[i]);
    }
    return result;
}

console.log('second');
console.log(reverse([1, 2, 3, 4, 5]));


function compact(arr) {
 var result = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] !== undefined
             && arr[i] !== false 
             && arr[i] !== '' 
             && arr[i] !== 0 
             && arr[i] !== null) {
       
            result.push(arr[i]);
        }
    }
    return result;
}

console.log('third');
console.log(compact([1, 2, null, 0, 7, 'apple', undefined, true, false, '']));


var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4];

function isEqual(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log('переменные должны быть массивами');
        return false;
    }
    if (array1.length !== array2.length) {
        console.log('массивы разной длины');
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log('массивы не идентичны')
            return false;
        }
    }
    return true;

}

console.log('forth');
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));

var arr1 = [5, 8, 9, 3];
var arr2 = [8, 1, 2, 5, 4, 0];

function intersection(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {  
        for (var j = 0; j < arr2.length; j++) {          
            if (arr1[i] === arr2[j]) {            
                result.push(arr1[i]);                             
            }
        }
    }
    return result;
}

console.log('fifth');
console.log(intersection([5, 8, 9, 3], [8, 1, 2, 5, 4, 0]));