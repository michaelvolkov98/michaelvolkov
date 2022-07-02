console.log('Question Number 1')
const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
sentence1.length >= 10 ? result1 = 15 : result1 = 25

console.log(`\nresult1 -> ${result1}`);

const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

//Practicing snake_case + camelCase
//let sentence2_replace_a_alpha = sentence2.replace('a', 'Alpha')
//console.log(`\nsentence2 -> ${sentence2}`)
// console.log(`sentence2_Replace_a_Alpha -> ${sentence2_Replace_a_Alpha}`);

//let sentence2_replace_all_a_alpha = sentence2.replace(/a/g, 'Alpha')
//console.log(`sentence2_replace_all_a_alpha -> ${sentence2_Replace_All_a_Alpha}`)
console.log('\n\nQuestion Number 2')
let sentence2_Replace_All_a_Alpha_IgnoreCase = sentence2.replace(/a/gi, 'Alpha')
console.log(`\nsentence2_Replace_All_a_Alpha_IgnoreCase -> ${sentence2_Replace_All_a_Alpha_IgnoreCase}`)



const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";



/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */
console.log(`\n\nQuestion Number 3`)
//1
let sentence3Length = sentence3.length;
console.log(`\n\nsentence3 -> ${sentence3}`)
console.log(`Length = ${sentence3Length}`)
//code for upperCase
let sentence3_U = sentence3.toUpperCase()
//2
let healthPattern = 'health'
healthPattern = healthPattern.toUpperCase()
let sentence3_U_Health = sentence3_U.startsWith(healthPattern)
console.log(`Does ${sentence3} start with 'health'? : ${sentence3_U_Health}`)
//3
let bodyPattern = 'Body'
bodyPattern = bodyPattern.toUpperCase()
let sentence3_U_Body = sentence3_U.includes(bodyPattern)
console.log(`Does ${sentence3} contains 'Body'? : ${sentence3_U_Body}`)
//4
let indexOfBody = sentence3_U.indexOf(bodyPattern)
console.log(`The index of body is -> ${indexOfBody}`)
//5
let lastChar = sentence3.length - 1 
lastChar = sentence3.charAt(lastChar)
console.log(`The last character in the sentence is = ${lastChar}`)
//6
let result2 = 0
// let indexOfBody = sentence3_U.indexOf(bodyPattern)
let lastIndexOfBody = sentence3_U.lastIndexOf(bodyPattern)
indexOfBody === lastIndexOfBody ? result2 = 'Body is only present once (true)' : result2 = 'Body is present more than once (false)'
console.log(`Body present only once? -> ${result2}`);




