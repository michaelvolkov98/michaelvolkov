class MyTestFunctions{ 
numberRemovalFunction = (numbers, removedNumber) => { 
    return numbers.filter(function(removedValue){ 
        return removedValue != removedNumber
    })
}
lowestPositive = (numbers) => {
    for (i = 1; i <= numbers.length + 1; i++) {
      if(!numbers.includes(i)) return i;
    }}
result = ''
checkSpeed = (userSpeed, speedLimit) => {
        if (userSpeed > speedLimit ){ result = ((userSpeed - speedLimit) / 5)
        return Math.floor(result)
    } else {
    console.log('You will not be marked with any points')
    }}
}
module.exports = MyTestFunctions;
