let alt = alert("Welcome to my site");



function checktemperature(){
let temperature = document.getElementById("temperature").value;
const Result= temperature >=30?"Hot" :"cold"
document.getElementById("Result").textContent=Result;

}
let name, birthYear, age;


while (true) {
    name = prompt("Enter your name:");
    
    if (typeof name === "string" ) {
        break; 
    } else {
        alert("Please enter a valid name (a non-empty string).");
    }
}


while (true) {
    birthYear = prompt("Enter your birth year (before 2010):");
    birthYear = parseInt(birthYear, 10); 

    if (!isNaN(birthYear) && birthYear < 2010 && birthYear > 1900) {
        break; 
    } else {
        alert("Please enter a valid birth year (a number less than 2010 and greater than 1900).");
    }
}


age = new Date().getFullYear() - birthYear;


document.write("Name: " + name + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("Age: " + age + "<br>");


for (let i = 1; i <= 6; i++) document.write(`<h${i}>Welcome to my page</h${i}>`);


