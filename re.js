  
let nameFormat = /^[A-Za-z]{2,}$/;
let namee;

do {
  namee = prompt("Enter Your Name:");
} while (!namee.match(nameFormat));


let colorChoice = prompt("Choose a color (red, green, blue ,pink or purple):").toLowerCase();


if (colorChoice === "red" || colorChoice === "green" || colorChoice === "blue"||colorChoice === "purple"||colorChoice === "pink") {
  console.log(`%cWelcome dear guest :`, `color: ${colorChoice}; font-size: 15px; font-weight: bold;`,namee);
} else {
  alert("Invalid choice. Please refresh and choose red, green, or blue.");
}


let phoneFormat = /^[0-9]{8}$/;
let phon;

do {
  phon = prompt("Enter Your Telephone Number (8 digits):");
} while (!phon.match(phoneFormat));

console.log(`%cYour Telephone number is : `, `color: ${colorChoice}; font-size: 14px;`,phon);


let phonFormat = /^01[0-2][0-9]{8}$/;
let phone;

do {
  phone = prompt("Enter Your Mobile Number (11 digits starting with 01):");
} while (!phone.match(phonFormat));

console.log(`%cYour Mobile Number is :`, `color: ${colorChoice}; font-size: 14px;`,phone);


let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email;

do {
  email = prompt("Enter Your Email:");
} while (!email.match(emailFormat));

console.log(`%cYour Email Address is :`, `color: ${colorChoice}; font-size: 14px;`,email);


let x = prompt("Enter your Message");

function longword(x) {
  const word = x.split(" ");
  return word.reduce((longest, current) => (longest.length > current.length ? longest : current), "");
}

const longest=longword(x);
console.log(`%cThe longest word in your message is: `, `color: ${colorChoice}; font-size: 14px;`,longword(x));




let num2=[];
for(i=0;i<5;i++)
{
    let num1= parseInt(prompt("Enter Five Numbers"));
    num2.push(num1)
}
  document.write(`<span style="color:${colorChoice}; font-weight:bold;">Original Array:</span> ${num2.join(" -")}<br> <br>`);
  document.write(`<span style="color:${colorChoice}; font-weight:bold;">Ascending:</span> ${num2.sort((a, b) => a - b).join(" - ")}<br><br>`);
  document.write(`<span style="color:${colorChoice}; font-weight:bold;">Descending:</span> ${num2.sort((a, b) => b - a).join(" -")}<br><br>`);

console.log(`%cOriginal Array:`, `color: ${colorChoice}; font-weight: bold;`, num2);
console.log(`%cAscending:`, `color: ${colorChoice}; font-weight: bold;`, num2.sort((a, b) => a - b));
console.log(`%cDescending:`, `color: ${colorChoice}; font-weight: bold;`, num2.sort((a, b) => b - a));

let radius = parseFloat(prompt("Enter the radius of the circle:"));
//  area of the circle (πr²)
let area = Math.PI * Math.pow(radius, 2);
alert(`The area of the circle is: ${+area.toFixed(2)}`);
console.log(`Radius: ${radius}, Area: ${+area.toFixed(2)}`);

//
let numbers = parseFloat(prompt("Enter the number of square root:"));
let squre = Math.sqrt(numbers);
alert(`The square of the number is: ${squre.toFixed(2)}`);
console.log(`numbers: ${numbers}, squre: ${squre.toFixed(2)}`);


//

let number = parseFloat(prompt("Enter the Angle of the Number:"));
let angle = Math.cos(number);
alert(`The angle of the number is: ${angle.toFixed(2)}`);
console.log(`number: ${number}, angle: ${angle.toFixed(2)}`);




     