//Asighment Code
var generateBtn = document.querySelector("#generate");
//Event Listener to prompt questions when button is pushed
generateBtn.addEventListener("click", writePassword);

// Arrays containing possible password characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "<", ">", "=", "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
// Declarations to be used below
var confirmLength = "";
var confirmSpecialCharacter;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumericCharacter;

//Function button reacts to when the user selects the generate password button 
function generatePassword() {
  var confirmLength = (prompt("How many characters do you want your password to be?"));
// Alert to the user when an non-supported answer is provided
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password must be between 8-128 characters. Please try again!");
      var confirmLength = (prompt("How many characters do you want your password to be?"));
      }
    // Questions regarding what characters the user desires within password
    var confirmNumericCharacter = confirm("Click OK to include numbers in your password");    
    var confirmSpecialCharacter = confirm("Click OK to include special characters in your password");
    var confirmLowerCase = confirm("Click OK to include lowercase characters in your password");
    var confirmUpperCase = confirm("Click OK to include uppercase characters in your password");
      // Reactions to an incorrect/non-supported input is provided
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmNumericCharacter = confirm("Click OK to include numeric characters in your password");
        var confirmSpecialCharacter = confirm("Click OK to include special characters in your password");    
        var confirmLowerCase = confirm("Click OK to include lowercase characters in your password");
        var confirmUpperCase = confirm("Click OK to include uppercase characters in your password");   
    } 
      //if statements used to generated based on user input
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      // Randomized characters are seleted with this equation
      var password = ""
      for (var i = 0; i < confirmLength; i++) {
        password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
      return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}