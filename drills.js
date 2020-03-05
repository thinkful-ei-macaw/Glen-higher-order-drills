
const repeat = (fn, n) => {
    for (let i = 0; i < n; i++) {
        fn();
    }
}


const hello = () => {

    console.log('Hello World');

}

const goodBye = () => {

    console.log('Goodbye World');

}

repeat(hello, 5);
repeat(goodBye, 5);

//FILTER FUNCTIONS

const filter = (arr, fn) => {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an arr of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new arr into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

const moreNames = (filter(myNames, function (name) {
    return name[0] === 'B';
}))

console.log(moreNames);

//HAZARD WARNING FUNCTION

const hazardWarningCreator = warning => {
    let warnCount = 0;
    return function (location) {
        warnCount++;
        console.log(`"Danger! There is a ${warning} hazard at ${location}!"`);
        console.log(`"The ${warning} hazard alert has triggered ${warnCount} times(s) today!"`);
    }
}

const rockWarn = hazardWarningCreator('Rocks fill the road');
const snowWarn = hazardWarningCreator('Snow everywhere');
const lavaWarn = hazardWarningCreator('Lava coming your way');

rockWarn('Yosemite');
rockWarn('Anaheim');
snowWarn('Montucky');
lavaWarn('Florida');
lavaWarn('Your home');

//FOREACH FILTER MAP FUNCTIONS

const arr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const result1 = arr.filter(num => {
    if (num[0] >= 0 && num[1] >= 0) {
        return true;
    } else {
        return false;
    }
});

//Still working on this
console.log(result1);

const result2 = arr.map(value => value[0] + value[1]);
console.log(result2);

const result3 = arr.forEach(value => console.log(value[0] + value[1]));
console.log(result3);

const toReduce = sentence => {
    let currentValue = [];
    const reducer = (accumulator, currentValue) => {

        let newArr = sentence.split(' ');
        newArr.reduce(reducer);
    }

}