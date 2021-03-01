//an employee wants to randomly create a strong, secure password meeting certain criteria


//User needs a new secure password

//When button is clicked to generate password 

// Then prompt for the user to choose length & length criteria (8-128 characters) pops up

function promptUser(){
    var length = prompt('Please select your number of characters.');
    if (length < 8 || length > 128) {
    alert('Error. Please select correct character length.')
    } else {
    // Log number selected
    console.log(length);}

    var lowercase = confirm('Would you like to include lowercase letters?') 
    var uppercase = confirm('Would you like to include uppercase letters?')
    var numbers = confirm('Would you like to include numbers?')
    var special = confirm('Would you like to include special characters?')
    console.log(lowercase, uppercase, numbers, special);

    var characterPool = ''
    const lowerletters = 'abcdefghijklmnopqrstuvwxyz'
    const upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeric = '0123456789'
    const specChar = '!@#$%^&*()_+{}|:?><[]'

    // if user selects any/all var add to pool 
    if (lowercase) {
       characterPool = lowerletters
    } 
    if (uppercase) {
        // characterPool = characterPool + upperletters
        // is += written out 
        characterPool += upperletters
    }
    if (numbers) {
        characterPool += numeric
    }
    if (special) {
        characterPool += specChar
    }
    console.log(characterPool);

    var password = ''
    for (var i=0; i < length; i++) {
    //     // add selection to password randomly 
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    console.log("Here is your password: " + password);
    alert ("Here is your password: " + password);
};


        // nestle inside else ^^^
// When length has been selected by the user and logged
// Then the next confirm (prompt) for the user to choose yes/no for "lowercase" letters pops up

// // When yes/no selection made by user it is logged
//     console.log(userSelection)
// // Then the next confirm (prompt) for the user to choose yes/no for "uppercase" letters pops up
//     confirm('Would you like to include uppercase letters?') {
//         if (userSelection = true) {
//             console.log(userSelection);
//         } else {
//             console.log(userSelection);
//         }
//     }
// // When yes/no selection made by user it is logged
//     console.log(userSelection)
// // Then the next confirm (prompt) for the user to choose yes/no for "numbers" pops up 
//     confirm('Would you like to include numbers?') {
//         if (userSelection = true) {
//             console.log(userSelection);
//         } else {
//             console.log(userSelection);
//         }
//     }
// // When yes/no selection made by user it is logged
//     console.log(userSelection)
// // Then the next confirm (prompt) for the user to choose yes/no for "special characters" pops up
//     confirm('Would you like to include special characters?') {
//         if (userSelection = true) {
//             console.log(userSelection);
//         } else {
//             console.log(userSelection);
//         }
//     }
// When yes/no selection made by user it is logged 
//     console.log(userSelection)
// Then user input is validated for/and at least one of the previous confirms was selected as yes/true
//     validate data how?
// When user input validated
//     again how?
// Then all of the confirm (prompt) logs are combined to create password fitting selected and required criteria
//     console.log(passwordSolution);
// When password generated
// Then password is displayed on the page
//     return passwordSolution;