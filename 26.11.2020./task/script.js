 function fill(N, value) {
    var N;
    var arr = [];
    for (i = 0; i < N; i++) {
        arr[i] = value;
        arr.push(arr[i]);
    }
    return arr;
}

fill(4, 5);
console.log(fill(4, 5));