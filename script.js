/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."


//exercise1//



var numDollars  = 5;
var partner  = 'Jurassic Park';
var geolocation = 'Florida';
var jobTitle = 'Dinosaur';

var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ', working for  ' +
partner + ' making ' + numDollars + '$.';
console.log(future);
var output = document.getElementById("first");
output.innerHTML = future;


//exercise 2//
var birthYear = 1993;
var currentYear  = 2020;
var age  = currentYear - birthYear;
var theirAge ='They are either ' + age + ' or ' + (age - 1);
console.log('They are either ' + age + ' or ' + (age - 1));
var output = document.getElementById("second");
output.innerHTML = theirAge;





//exercise 3//
var age = 26;
var maxAge = 100;
var numPerDay = 3;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of coffee to last you until the ripe old age of ' + maxAge;
console.log(message);
var output = document.getElementById("third");
output.innerHTML = message;






//exercise 4//
var radius = 3;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
var areaIs="The area is " + area;
console.log("The area is " + area);
var output = document.getElementById("forth");
output.innerHTML = areaIs;





//exercise 5//
var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
var fToC=fahrenheit + '°F is ' + fahrenheitInC + '°C';
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
var output = document.getElementById("fith");
output.innerHTML = fToC;






//exercise 6//
function squareRoot(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}

console.log('the square root is',+ squareRoot(3, 4));
var output = document.getElementById("sixth");
output.innerHTML = ('the square root is',+ squareRoot(3, 4));






//exercise 7//
b=2;
function halfOf (a,b){

return a/b;
  
}
console.log (halfOf(8,b));
var output = document.getElementById("seventh");
output.innerHTML = ('Half of', + halfOf(8,b));


//exercise 8//


function percentage(partialValue, totalValue) {
return (100 * partialValue) / totalValue;
} 

console.log(percentage(8,17));
var output = document.getElementById("eight");
output.innerHTML = percentage(8,17);

//exercise 9//


const circle= {
  radius: 2,
  get area (){
    return Math.PI * this.radius * this.radius;}
};
console.log (circle.area)
var output = document.getElementById("nineth");
output.innerHTML = circle.area;


let someElement = document.querySelector(`#tenth`)
someElement.textContent = ('The square root is ' + squareRoot(3, 4)) + (', Half of 8 is ' + halfOf(8,b)) + `, 8 is ` +percentage(8,17)+ ` % of 17` + `, the area is `+ circle.area + ` with a radius of 2`;