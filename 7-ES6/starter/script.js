let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName}`.repeat(5));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `
.repeat(5));

console.log(`string text line 1 ${firstName}
string text line 2 ${firstName}`);



let parts = ['shoulders', 'knees'];
let otherParts = ['head', ...parts, 'knees'];
 console.log(otherParts);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = arr1.concat(arr2);

arr1 = [...arr1,...arr2];
arr1 = arr1.concat(arr2); // traditional
arr1 = [...arr1, ...arr2]; // spread operator
console.log(arr1);