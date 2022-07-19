// question 1
let word = ''

function acronym(word){ 
    let lowerCaseWord = word.toLowerCase()
    let lowerCaseWordSplit = lowerCaseWord.split(' ')
    let titleCase = '' 
    for (let counter = 0; counter <= lowerCaseWordSplit.length-1 ; counter++) {
        titleCase = titleCase + lowerCaseWordSplit[counter].substring(0,1).toUpperCase() + lowerCaseWordSplit[counter].substring(1) + ' '// or charAt(0)
        
    }
    return titleCase
}
let apples = acronym('i like apples')
console.log('Question 1: Testing "Acronym function"' + ' ' + apples)

// question 2
let sports = ''

function reverse(sports){
    let reverse = ''
    let splitSports = sports.split(" ")
    for (let counter = splitSports.length - 1; counter >= 0; counter--){
        reverse = reverse + splitSports[counter] + ' '
    }
    return reverse
}
let sportsReverse = reverse('Football Soccer Basketball Baseball Rugby')
console.log('Question 2: Testing "Reverse function"' + ' ' + sportsReverse)

// question 3 
let numberAddition = 0

function addingNumbers(numberAddition){
    let totalOfNumbers = 0
    for (let counter = 0 ; counter <= numberAddition.length - 1; counter++) {
        totalOfNumbers += numberAddition[counter]
    }
    return totalOfNumbers
}
let numberAdding = addingNumbers([1, 2, 3, 4, 5, 6])
console.log('Question 3: Testing "Adding Function"   ' + numberAdding)
// question 4
let number = 0

function averagingNumbers(number){
    let averageOfNumbers = 0
    let finalNumber = 0
    for (let counter = 0 ; counter <= number.length - 1 ; counter++) {
        averageOfNumbers += number[counter]
        finalNumber = averageOfNumbers / number.length 
    } 
    return finalNumber
}
let numberAverage = averagingNumbers([1, 2, 3, 4, 5, 6])
console.log('Question 4: Testing "Average Function"  ' + numberAverage)