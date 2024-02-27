 const prompt = require('prompt-sync')(); 


for(let i = 0; i < 5; i++){
  console.log(i)
}

// sum of numbers
let sum = 0
let n = prompt("Enter the value of a")
n = Number.parseInt(n)
for ( a = 0;a <= n; a++){
  sum+= n
}
console.log(sum)


let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)


let sum = 0
let n = prompt("enter a number ")
n = Number.parseInt(n)
for(let i = 0; i<n ; i ++){
  sum += i +1
}
  console.log(sum)

// Count down from 10 to 1 using a for loop.

for (let i = 10; i >= 1; i --){
  console.log(i)
}

// Print even numbers from 1 to 20 using a for loop.
for(let a = 2; a <= 20; a +=2){
  console.log(a)
}

// sum of 1 to 15
let sum = 0
for (let a = 1; a <= 15; a++){
  sum += a
}
console.log(sum)

// print array element upwards
const array = [1,2,3,4,5,6,8]
for (let i = 0 ; i <= array.length ; i++){
  console.log(array[i])
}

// print array element downwords
const array = [1,2,3,4,5,6,8]
for (let i = array.length -1; i >=0  ;i--){
  console.log(array[i])

// sun of all araay element
const array = [1,2,3,4,5,6,8]
sum = 0;
for (let i = 0 ; i < array.length  ; i+=2 ){
  sum += array[i ]
}
console.log(sum)


const array = [2, 4, 6, 8, 10];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("Sum:", sum);


// multiplication table:
for (let i = 0; i <=10 ; i++){
  for (let j =0; j <=10; j++){
    console.log((i*j))
  }
}

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\t"; 
    }
    console.log(row);
}

// while:

// let i = 0;
// while(i<5){
//   console.log(i);
//   i++;
// }

const correctpassword= "1234";
let password = prompt("Enter the password");
while (password != correctpassword){
  console.log("incorrect password!");
  password = prompt("Enter the password");
}
console.log("correct password");

// factorial of number:
let n = prompt("Enter the number" );
n = Number.parseInt(n );
let factorial = 1;
let i = 1;
while(i <= n){
  factorial *= i;
  i++;
}
console.log(factorial);

// sum :
let n = prompt("enter a number");
n = Number.parseInt(n );
let sum = 0;
let i = 1;
while (i <=n){
  sum+= i;
  i++
}
console.log(sum);

// guessing game:
let n = Math.floor(Math.random()*10)
let userInput= prompt("enter a number");
userInput = Number.parseInt(userInput);
while (userInput != n){
  console.log("try again");
  userInput = prompt("enter a number");
}
console.log("guess is correct!")

// Even Numbers: Write a while loop that prints even numbers from 2 to 20.
let n = prompt("enter a number");
let userinput = Number.parseInt(n);
let i = 2;
while (i <= userinput){
  console.log(i);
  i+=2;
}

// find squre of numbers
let userinput = prompt("enter a nuber");
let n = Number.parseInt(userinput);
let i = 1;
while (i <= n){
  console.log(i*i);
  i++;
}


// reverse number
let n = prompt("enter a number");
let number= Number.parseInt(n);
let reverse = 0;
while (number > 0) {
    reverse = reverse * 10 + number % 10;
    number = Math.floor(number / 10);
}
console.log("Reversed number:", reverse);


// for each loop:

// let num = [1,2,3,4,5];
// num.forEach(element=>{
//   console.log(element*element)})

// Print Array Elements: Write a function that takes an array as a parameter and prints each element using the forEach loop.
let array = [1,2,3,4,5];
array.forEach(elements =>{
  console.log(elements)
})

// Calculate Sum: Write a function that takes an array of numbers as a parameter and calculates their sum using the forEach loop.
let array = [1,2,3,4,5];
let sum = 0;
array.forEach(elements=>{
  console.log(sum += elements)
})

// Find Even Numbers: Write a function that takes an array of numbers as a parameter and prints all the even numbers using the forEach loop.
let a = [1,2,3,4,5,6,7,8,9,10];
a.forEach(elements=>{
  if (elements % 2 == 0){
    console.log(elements)
  }
})



// Calculate Square Root: Write a function that takes an array of numbers as a parameter and calculates the square root of each number using the forEach loop.

let a = [1,2,3,4,5,6,7,8,9,10];
a.forEach(elements=>{
  console.log(Math.sqrt(elements))
})


// Filtering: Write a function that takes an array of numbers as a parameter and filters out all numbers less than 10 using the forEach loop.

let a = [1,2,3,4,75,36,71,8,69,10];
a.forEach(elements=>{
  if (elements < 10){
    console.log(elements)
  }
})

// Modify Array in Place: Write a function that takes an array of numbers as a parameter and adds 1 to each element using the forEach loop.
let a = [1,2,3,4,5,6,7,8,9,10,75,36,71,8,69,10];
a.forEach(elements=>{
  console.log(elements+1)
})

// Concatenate Strings: Write a function that takes an array of strings as a parameter and concatenates them into a single string using the forEach loop.
const array = ["hello", " ","world"];
let a = " ";
array.forEach(string=>{
  a += string
})
console.log(a)

// Find Maximum Number: Write a function that takes an array of numbers as a parameter and finds the maximum number using the forEach loop.

const arr = [10, 5, 20, 15, 25];
let max = arr[0];
arr.forEach(number => {
    if (number > max) {
        max = number;
    }
});
console.log("Maximum number:", max);
// or

let max = arr[0];
arr.forEach(number=>(number>max)?max=number:max=max);{
  console.log(max);
}

// Find Minimum Number: Write a function that takes an array of numbers as a parameter and finds the minimum number
 let a = [1,2,3,4,5,6,7,8,9,10,75,36,];
let min = a[0];
a.forEach(num=>{
  if (num < min){
    min = num;
  }
});
console.log(min)

// Remove Duplicates: Write a function that takes an array of numbers as a parameter and removes duplicate numbers using the forEach loop.
const arr = [1, 2, 3, 2, 4, 3, 5];
const uniqueArr = [];
arr.forEach(element =>{
  if (!uniqueArr.includes(element)) {
    uniqueArr.push(element);
  }
})
console.log(uniqueArr);