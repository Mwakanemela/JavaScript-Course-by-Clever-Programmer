

/*
      ------------------------
      |     for loops        |
      ------------------------
*/

const fruits = ['🍉', '🍌', '🍎', '🍍', '🍇', '🍊']

for(const fruit of fruits) {
  console.log(fruit)
}
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