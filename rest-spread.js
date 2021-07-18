const filterOutOdds = (...nums) => {
    return nums.filter(num => {
        return num % 2 === 0
    });
}
console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
const findMin = (...nums) => {
    return Math.min(...nums)
}

const findMax = (...nums) => {
    return Math.max(...nums)
}
console.log(findMax(1, 2, 3, 4, 5))
console.log(findMin(1, 2, 3, 4, 5, 6, 7))

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })) // {a:1, b:2, c:3, d:4}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...vals) => {
    return [...arr, ...vals.map(v => {
        return v * 2
    })]
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)) // [1, 2, 3, 8, 8]

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let indx = Math.floor(Math.random() * items.length)
    return [...items.slice(0, indx), ...items.slice(indx + 1)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [ ...array1, ...array2]
}
/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key] : val}
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let newObj = { ...obj1, ...obj2 }
    return newObj
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = { ...obj }
    newObj[key] = val
    return newObj
}