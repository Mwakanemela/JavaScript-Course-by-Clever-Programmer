/*
      ------------------------
      |     Advanced Array Methods | Part 1     |
      ------------------------

      higher order functions: map filter reduce

      map: loops and returns an array
      
*/

//map demo

// const mapResult = [1, 2, 3].map(number => number * 2)
// const doubleMap = (numbers) => {
//   return numbers.map(number => number * 2)
// }
// console.log(doubleMap([1, 2, 3]))

const filterFun = (numbers, greaterThan) => {
      let result = []
      for (const number of numbers) {
            if (number > greaterThan) {
                  result.push(number)
            }
      }
      return result
}
console.log(filterFun([1, 2, 3, 4, 5, 6], 3))
// end of Advanced Array Methods | Part 1



/*
      ------------------------
      |     Advanced Array & Objects | Exercises | Part 1      |
      ------------------------
*/

// const frequencyLoopFunction = (phrase) => {
//       let frequency = {}

//       for(const letter of phrase) {
//             if(letter in frequency) {
//                   frequency[letter]++
//             }else {
//                   frequency[letter] = 1
//             }
//       }
//       return frequency
// }

//letter frequency 
// const letterFrequency = (phrase) => {
//       // make frequency object
//       // let frequency = {}

//       // for(letter of phrase) {
//       //       // check if letter exists in frequency
//       //       if(letter in frequency) {
//       //             // increment the value by +1
//       //             frequency[letter] += 1
//       //       } else {
//       //             // otherwise, set the value to 1
//       //             frequency[letter] = 1
//       //       }
//       // }
//       // return frequency
//       return frequencyLoopFunction(phrase)
// }

// console.log(letterFrequency('mwaka'))

// const wordFrequency = (phrase) => {
//       let frequency = {}

//       //turn phrase into an array by seperating by space
//       let words = phrase.split(' ')

//       return frequencyLoopFunction(words)

//       // for(const word of words) {
//       //       if(word in frequency) {
//       //             frequency[word]++
//       //       }else {
//       //             frequency[word] = 1
//       //       }
//       // }
//       // return frequency
// }

// console.log(wordFrequency('lol what lol'))


// find max value in an array

// const max = (array) => {
//       let maxValue = array[0];

//       for (number of array) {
//             console.log(number)
//             if(number > maxValue) {
//                   maxValue = number;
//             }
//       }

//       return {maxValue}
// }
// const array = [1, 12, 3, 4]
// console.log(max(array))

//sum of all numbers in an array

// const sumArray = (numbers) => {

//       let result = 0;
//       for(index of numbers) {
//             result = result + index
//       }

//       console.log(`sum is ${result}`)
// }

// const array = [1, 2, 3, 4]
// sumArray(array)

// const countLetters = (phrase) => {

//   //can be replaced with phrase.length
//   //for in for getting indexes us for of for getting values
//   let count = 0
//   for(index in phrase) {
//     // console.log(Number(letter)+1)
//     count = Number(index)+1
//     // console.log(letter)
//   }

//   console.log(`${phrase} has ${count} including spaces`)
// }

// countLetters("Mwakanemela")


/*
      ------------------------
      |     end of Advanced Array & Objects | Exercises | Part 1       |
      ------------------------
*/

/*
      ------------------------
      |     for loops        |
      ------------------------
*/

// a function to print doubles of an array 
// const doubleArray = (numbers) => {

//   let result = []
//   for (const number of numbers){
//     result.push(number * 2)
//   }
//   return result
// }

// const squareArray = (numbers) => {

//   let result = []
//   for (const number of numbers){
//     result.push(number ** 2)
//   }
//   return result
// }
// const numbers = [1, 2, 3, 4, 5]
// console.log(squareArray(numbers))


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = [];
// // let num = 0
// for(const number of numbers) {
//   result.push(number * 2);
//   // console.log(num, number)
//   // num++
// }

// console.log(`doubled numbers - ${result}`)
// const fruits = ['🍉', '🍌', '🍎', '🍍', '🍇', '🍊']

// for(const fruit of fruits) {
//   console.log(fruit * 2)
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i])
// }


/*
      ------------------------
      |  end of  for loops        |
      ------------------------
*/




/*
      Objects {}
*/


// const person = {
//   firstName: "Mwakanemela",
//   lastName: "Kayange"
// }

// const greetings = (firstName, lastName, assets, liabilities) => {
//   const person2 = {
//     firstName: firstName,
//     lastName: lastName,
//     assets: assets,
//     liabilities: liabilities,
//     networth: function () {
//       return this.assets - this.liabilities
//     }
//   }
//   const greet = `Hello ${person2.firstName} ${person2["lastName"]}, how are you doing today? because your networth is K${person2.networth()}`

//   return greet
// }

// console.log(greetings(person.firstName, person.lastName, 100000, 50000))

// console.log(person)
// console.log(person.firstName) //dot notation
// console.log(person["lastName"]) //bracket notation

//assign object
// person.phone = "088-64-74-493"
// console.log(person.phone)

// console.log(person)
/*
    end of Objects{}
*/


////////////////////////////////////////////////
//  Basics of Arrays         ////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\///////////

// const fruits = ['🍉', '🍌', '🍎', '🍍', '🍇', '🍊']
// // console.log(fruits)

// // console.log(`I want a ${fruits[4]}`)

// fruits.push('🥑')
// // console.log(fruits)

// fruits.push('🍅')
// // console.log(fruits)
// // console.log(fruits.slice(2,4))
// console.log(fruits.indexOf("🍇"))
// console.log(fruits.length)
/*
      End of basics fo arrays
*/

//JavaScript 101

// console.log("Mwaka");
// fruit = prompt("What is your favorite fruit?: ")
// console.log(fruit)

// food = Number(prompt("How much was the food?: "))
// tipPercentage = Number(prompt("tip percentage"))/ 100 
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log("tipAmount    : ",tipAmount)
// console.log("total Amount : ",total)





////////////////////////////////////////////////
//  Baby Weather App ////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\///////////
// let weather = prompt("How is the weather?")
// if (weather == "rainy") {
//   console.log("Get an umbrella")
// }else {
//   console.log("Wear your sunglasses")
// }