// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// describe('fibSeq', () => {
//   it('returns an array with the Fibonacci sequence from the provdided variable', () => {
//     expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // b) Create the function that makes the test pass.
// //puesdo code: // Create a funciton called fibSeq.
// // Give the function the parameter num
// // Start by making an array to initalize the first two numbers in the sequence.
// // Inside of our function create a for loop
// // Start the for loop at index 2 to account for the first two number in the array.
// // Inside of the loop set the variable fibArray[i] equal to fibArray[i-1] and add that to fibArray[i-2]
// //outside of the for loop return the fibArray
// //

// const fibSeq = (num) => {
//   let fibArray = [1, 1]
//     for (let i = 1; i < num; i++){
//       fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
//     }
// return fibArray
// }
// console.log(fibSeq(fibLength1))

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("orderedArray", () => {
  it("returns an array with the values from the object in oder from smallest to largest", () => {
    expect(orderedArray(studyMinutesWeek1)).toEqual([
      15, 15, 20, 30, 30, 60, 90,
    ])
    expect(orderedArray(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
}
// // Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
}
// // Expected output: [10, 15, 20, 45, 60, 65, 100]

// // b) Create the function that makes the test pass.

//Puesdo Code:
// Create the funciton ordered Array that will take in the objects above.
// Give the funciton a parameter called object to be used in the logic.
// inside the function create a new variable called values.
// store the method Object.values inside of the new variable.
// Pass in the parameter 'object' to the method.
// This will iterate through the given object and take out the values from the key value pairs and place them into an array.
// return the variable 'values' with the .sort() method attached so the new array can be ordered.
// inside of the method give two values a and b.
// outside of the parentheses subtract a - b.
// This will allow the items in the array to check the order from smallest to largest based on the number datatype and place them in that order.

const orderedArray = (object) => {
  const values = Object.values(object)
  return values.sort((a, b) => a - b)
}

// PASS  ./code-challenges.test.js
// PASS  ./jest.test.js

// Test Suites: 2 passed, 2 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arraySum", () => {
  it("returns a new array with an ", () => {
    expect(arraySum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arraySum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arraySum(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
