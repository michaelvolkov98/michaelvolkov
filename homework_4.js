/**
 * create two variables, one is to store studentScore, and another is to store maxScore
 * based on the student percentage, print the grade
 * Grade-A : 91%-100%
 * Grade-B : 81-90.99%
 * Grade-C : 71%-80.99%
 * Grade-D : 61%-70.99%
 * Grade-E : 51%-60.99%
 * Grade-F : Less than 51%
 * 
 */

let studentScore = 99
let maxScore = 50
let studentPercent = (studentScore/maxScore) * 100
if  (studentPercent < 0 || studentPercent > 100 ) {
    console.log('Invaild Data')
} else if (studentPercent >=91 && studentPercent > 90.99) {
    console.log('Grade-A')
} else if (studentPercent >= 81 && studentPercent > 80.99) {
    console.log('Grade-B')
} else if (studentPercent >= 71 && studentPercent > 70.99) {
    console.log('Grade-C')
} else if (studentPercent >= 61 && studentPercent > 60.99) {
    console.log('Grade-D')
} else if (studentPercent >= 51 && studentPercent > 50.99) {
    console.log('Grade-E')
} else if (studentPercent < 51) {
    console.log('Grade-F')
} else {
    console.log('Error')
}
 
/*
Create a variable and store any value in it 
if the number is divisible by 5, print  'divisible by 5'
if the number is divisible by 3, print  'divisible by 3'
if the number is divisible by 5 and by 3 , print  'divisible by 5 and 3'
if the number is NOT divisible by 5 and by 3, print the value in myNumber
*/

let theNumber = 15
if (theNumber % 3 === 0 && theNumber % 5 === 0) {
console.log('divisble by 5 and 3')
} else if (theNumber % 3 === 0) {
    console.log('divisible by 3') 
} else if  (theNumber % 5 === 0) {
    console.log('divisible by 5') 
} else {
    console.log(`${theNumber}`)
}


/*
let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', 'Venus', 'Pluto'];
if earth is mentioned as first name in the array, print 'earth is mentioned in expected index
otherwise add earth as first name in the array, then print the array
*/
let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', 'Venus', 'Pluto']
if (planets[0] === 'Earth'){
    console.log(`earth is mentioned in expected index`)
} else if (planets.unshift('Earth')) {
    console.log(`${planets}`) 
} else {
    console.log ('Not Valid Data')
}


/*
const sports = ['Football, 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']
if BASKETBALL is present in the array, print 'BASKETBALL is mentioned in the sports array'
if BASKETBALL is present in index-2, print 'BASKETBALL is present at index-2'
if BASKETBALL Is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
*/


const sports = [ 'Soccer', 'Football', 'Football', 'Baseball', 'Rugby', 'Football',]
let sportName = 'BASKETBALL'

if (sports[2] === 'BASKETBALL') {
    console.log('BASKETBALL is present at index-2')
} else if (sports.includes('BASKETBALL') === true) {
    console.log('BASKETBALL is mentioned in the sports array')
} else {
    console.log(' The word that was deleted is '+sports.splice(2, 1, 'BASKETBALL'))
    console.log(`The new array is ${sports}`)}



//splice()                                       
// to add/remove values in the array
// splice needs inputs (arguments)
// arguement 1: index where which we want to add new values
// arguement 2: how many values you want to remove
// arguement N: New Values
