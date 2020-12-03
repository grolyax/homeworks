
function search(string1, string2) {
    return string1.split(string2).length - 1;
}

console.log('first');
console.log(search('asdasdadsa', 'as'));

function strip(str) {
    while(true) {
        if (str[0] === ' ' && str.length > 1) {
            str = str.substring(1);
        } else if (str[str.length - 1] === ' ') {
            str = str.substring(0, str.length - 1);
        } else {
            return str;
        }
    }
}

console.log('second');
console.log(strip(' sdf     sdfd    dfd   '));


function checkIfEnds(string1, string2) {
    return string1.substring(string1.length - string2.length) === string2;
}

console.log('third');
console.log(checkIfEnds('asdasdadsa', 'sa'));


function compare(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase();
}

console.log('fourth');
console.log(compare('sa', 'sa'));

