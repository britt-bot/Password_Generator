// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// var variable = variable.map(variable => variable.toLowerCase()); 
// Kurtis Jin Yesterday at 8:15 PM
// I havent started either but from reading it, you have to put upper case letters and lower case letters in to an array. As well as special characters. And then use the Math.floor(Math.random * variable.length) method for the computer to pick random charters. And also from observation, it seems like you are going to have to write an if and else statement within the function to tell it If(variable === "true") { }.
// Thinking outloud you will just have if statements per “confirm”, I might nestle each of the random generation logic into functions BUT like I’ve mentioned before, get it all to work THEN organize things into functions. 

// Chris LeBlanc:astronaut:  3 hours ago
// @Katherine Jackson var is the OG as @Kurtis Jin mentioned and is technically more compatible across browsers. Since you are curious,  let and const are just more specific forms of var  that came about later in the language. We will shift to using them at some point when we get our bearings. If you see them just replace them with var  if they give you any trouble.