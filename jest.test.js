// describe('fibSeq', () => {
//     it('returns an array with the Fibonacci sequence from the provdided variable', () => {
//       expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//       expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
//   })
  
//   const fibLength1 = 6
//   // Expected output: [1, 1, 2, 3, 5, 8]
  
//   const fibLength2 = 10
//   // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  
//   // b) Create the function that makes the test pass.
//   //puesdo code: // Create a funciton called fibSeq.
//   // Give the function the parameter num 
//   // Start by making an array to initalize the first two numbers in the sequence.
//   // Inside of our function create a for loop 
//   // Start the for loop at index 2 to account for the first two number in the array. 
//   // Inside of the loop set the variable fibArray[i] equal to fibArray[i-1] and add that to fibArray[i-2]
//   //outside of the for loop return the fibArray
//   // 
  
//   const fibSeq = (num) => {
//     let fibArray = [1, 1]
//       for (let i = 1; i < num; i++){
//         fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
//       }
//   return fibArray
//   }
  

describe('orderedArray', () => {
    it('returns an array with the values from the object in oder from smallest to largest', () => {
      expect(orderedArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(orderedArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
  })
  
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  // // Expected output: [15, 15, 20, 30, 30, 60, 90]
  
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
  // // Expected output: [10, 15, 20, 45, 60, 65, 100]
  
  // // b) Create the function that makes the test pass.
  //Puesdo Code:
  // Create the funciton ordered Array that will take in the objects above.
  // 
  const orderedArray = (object) => {
  const values = Object.values(object)
  return values.sort((a, b) => a-b)
  }
  