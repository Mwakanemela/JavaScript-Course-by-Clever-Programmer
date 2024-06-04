console.log("Mwaka");
fruit = prompt("What is your favorite fruit?: ")
console.log(fruit)

food = Number(prompt("How much was the food?: "))
tipPercentage = Number(prompt("tip percentage"))/ 100 
tipAmount = food * tipPercentage
total = food + tipAmount
console.log("tipAmount    : ",tipAmount)
console.log("total Amount : ",total)