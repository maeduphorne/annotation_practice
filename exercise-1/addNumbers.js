// call function addNumbers
function addNumbers() {
  // Define variable firstNum
  var firstNum = 9
  // Define variable secondNum
  var secondNum = 14

// redefine variable firstNum
  firstNum = 3
  // redefine variable firstNum
  secondNum = 4

// Define variable nums as an array
  var nums = [firstNum, secondNum]

// Define variable product as an expression of firstNum and secondNum
  var product = firstNum * secondNum
  // Define variable sum as an expression of firstNum and secondNum
  var sum = firstNum + secondNum
  // Define variable average as an expression of sum divided by length of array
  var average = sum / nums.length
// Print index 0 of nums array
  console.log(nums[0])
  // Print index 1 of nums array
  console.log(nums[1])
// Print message with num1 and num2 interpolated
  console.log(`The first number is ${num1} and the second number is ${num2}!`)

  return sum
}
