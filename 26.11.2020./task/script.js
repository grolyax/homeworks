    var N;
function fill(N, value) {
    var arr = [];
    for (i = 0; i < N-1; i++) {
        arr[i] = value;
        arr.push(arr[i]);
    }
    return arr;
}

fill(4, 8);
console.log(fill(4, 8));