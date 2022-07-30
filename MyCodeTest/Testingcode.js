userSpeed = 110
speedLimit = 100
checkSpeed = (userSpeed, speedLimit) => {
    if (userSpeed > speedLimit ){ result = ((userSpeed - speedLimit) / 5)
    return Math.floor(result)
} else {
console.log('You will not be marked with any points')
}}
console.log(checkSpeed(userSpeed, speedLimit));

const numbers = [1, 2, 3, 4, 5]
lowestPositive = (numbers) => {
    for (i = 1; i <= numbers.length + 1; i++) {
      if(!numbers.includes(i)) return i;
    }}
console.log(lowestPositive(numbers))

removedNumber = 4
numberRemovalFunction = (numbers, removedNumber) => { 
    return numbers.filter(function(removedValue){ 
        return removedValue != removedNumber
    })
}
console.log(numberRemovalFunction(numbers, removedNumber))