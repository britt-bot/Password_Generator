// Assignment Code
const generateBtn = document.querySelector("#generate");
const minPassLength = 8;
const maxPassLength = 128;

// Prompts after click
function generatePassword() {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numeric = '0123456789';
  const specialChara = '!@#$%^&*()_+{}|:?><[]';

  let passLength = prompt("Please enter length of password - Must be 8 to 128 characters.");
  console.log(passLength);
    if (passLength >= minPassLength && passLength <= maxPassLength) {
      console.log(passLength);
    } else if (passLength <= minPassLength || passLength >= maxPassLength) {
      alert("Invalid length, please try again.");
    };

  let passCharacters = confirm("Do you want to include: Lowercase?");        
  console.log(passCharacters);
    if (passCharacters == "lowercaseLetters") {
      for (i = 0; i <= passLength - 1; i++) {
        var index = Math.floor(Math.random() * criteria.lowercaseLetters.length);
        var digit = criteria.lowercaseLetters[index];
        console.log(digit);
      }
    }
  
  let passCharacters = confirm("Do you want to include: Uppercase?");         
  console.log(passCharacters);
    if (passCharacters == "uppercaseLetters") {
      for (i = 0; i <= passLength - 1; i++) {
        var index = Math.floor(Math.random() * criteria.uppercaseLetters.length);
        var digit = criteria.uppercaseLetters[index];
        console.log(digit);
      }
    }

  let passCharacters = confirm("Do you want to include: Numeric?");         
  console.log(passCharacters);
    if (passCharacters == "numeric") {
      for (i = 0; i <= passLength - 1; i++) {
        var index = Math.floor(Math.random() * criteria.numeric.length);
        var digit = criteria.numeric[index];
        console.log(digit);
      }
    }

  let passCharacters = confirm("Do you want to include: Special Characters?");         
  console.log(passCharacters);
    if (passCharacters == "specialChara") {
      for (i = 0; i <= passLength - 1; i++) {
        var index = Math.floor(Math.random() * criteria.specialChara.length);
        var digit = criteria.specialChara[index];
        console.log(digit);
      }
    }

  
  // }
  // else if (passCharacters == "uppercase") {
  //   for (i = 0; i <= passLength - 1; i++) {
  //     var index = Math.floor(Math.random() * criteria.uppercase.length);
  //     var digit = criteria.uppercase[index];
  //     console.log(digit);
  //   }
  // }
  // else if (passCharacters == "numeric") {
  //   for (i = 0; i <= passLength - 1; i++) {
  //     var index = Math.floor(Math.random() * criteria.numeric.length);
  //     var digit = criteria.numeric[index];
  //     console.log(digit);
  //   }
  // }
  // else if (passCharacters == "special character") {
  //   for (i = 0; i <= passLength - 1; i++) {
  //     var index = Math.floor(Math.random() * criteria.specialChara.length);
  //     var digit = criteria.specialChara[index];
  //     console.log(digit);
  //   }
  // }
  // else {
  //   alert("Invalid password, please try again.");
  //   prompt("Please include all of the following: \nLowercase\nUppercase\nNumeric\nSpecial Characters");
  // }
  // return 'Accepted!'
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);