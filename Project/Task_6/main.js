function main(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

main(year);
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);

function greet() {
    return 'Hello';
}

function name(user, func)
{

    const message = func();

    console.log(`${message} ${user}`);
}

name('Anushka', greet);
name('Mansi', greet);
name('Mahi', greet);
//////////////////////////////////////////////////////////////////

function getUniqueAfterMerge(arr1, arr2){
    let arr = arr1.concat(arr2);
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

getUniqueAfterMerge(array1, array2);