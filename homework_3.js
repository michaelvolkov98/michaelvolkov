let countryName = 'lithuania'
let lastIndexOfLithuania = countryName.lastIndexOf('a')
let countryLength = lastIndexOfLithuania + 1
console.log(`Question one: Length of "Lithuania" is ${countryLength}`)

const sentence = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.';

let sentenceSplit = sentence.split(' ');
let lengthOfSplit = sentenceSplit.length
console.log(`\nQuestion two: the amount of words are ${lengthOfSplit}` )

const word = 'aPpLes are vErY tASty'

let lowerCaseWord = word.toLowerCase()
let lowerCaseWordSplit = lowerCaseWord.split(' ')

let firstLetterOfEachWordCap1 = lowerCaseWordSplit[0].substring(0,1).toUpperCase() + lowerCaseWordSplit[0].substring(1,100)
let firstLetterOfEachWordCap2 = lowerCaseWordSplit[1].substring(0,1).toUpperCase() + lowerCaseWordSplit[1].substring(1,100)
let firstLetterOfEachWordCap3 = lowerCaseWordSplit[2].substring(0,1).toUpperCase() + lowerCaseWordSplit[2].substring(1,100)
let firstLetterOfEachWordCap4 = lowerCaseWordSplit[3].substring(0,1).toUpperCase() + lowerCaseWordSplit[3].substring(1,100)
console.log(`\nQuestion three: ${firstLetterOfEachWordCap1} ${firstLetterOfEachWordCap2} ${firstLetterOfEachWordCap3} ${firstLetterOfEachWordCap4} `)

let firstLetterOfEachWord1 = lowerCaseWordSplit[0].substring(0,1).toUpperCase() 
let firstLetterOfEachWord2 = lowerCaseWordSplit[1].substring(0,1).toUpperCase() 
let firstLetterOfEachWord3 = lowerCaseWordSplit[2].substring(0,1).toUpperCase() 
let firstLetterOfEachWord4 = lowerCaseWordSplit[3].substring(0,1).toUpperCase() 
console.log(`\nQuestion four: ${firstLetterOfEachWord1} ${firstLetterOfEachWord2} ${firstLetterOfEachWord3} ${firstLetterOfEachWord4} `)

