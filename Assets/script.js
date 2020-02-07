// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordChoice = {
  };

  var passLength = prompt("Enter the number of characters you want your password to be");
  var confirmLower = confirm("Do you want to include lowercase letters?");
  var confirmUpper = confirm("Do you want to include uppercase letters?");
  var confirmNumber = confirm("Do you want to include numbers?");
  var confirmSpecial = confirm("Do you want to include special characters");

  if (confirmLower) {
    var lettersLowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    passwordChoice["letters"] = lettersLowerArr;
  }
  if (confirmUpper) {
    var lettersUpperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    passwordChoice["lettersU"] = lettersUpperArr;
  }
  if (confirmNumber) {
    var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    passwordChoice["numbers"] = numbersArr;
  }
  if (confirmSpecial) {
    var specialArr = ["\\", ".", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-"];
    passwordChoice["special"] = specialArr;
  }

  var finalPass = "";

  for (var i = 0; i < parseInt(passLength); i++) {

    var randChoice = Math.floor(Math.random() * Object.keys(passwordChoice).length);

    var tempArray = passwordChoice[Object.keys(passwordChoice)[randChoice]];
    var randCharIndex = Math.floor(Math.random() * tempArray.length);
    finalPass = finalPass + (tempArray[randCharIndex]);
  }
  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
