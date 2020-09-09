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

function generatePassword() {
  var pw = ""


  //All your code here
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
  var charlength = parseInt(prompt("How long would you like your password to be? The password cannot be less than 8 or more than 128 characters."))
  if (charlength < 8 || charlength > 128) {
    alert("Password has to be atleast 8 characters and no more than 128 characters")
    return ""
  }
  else {
    var numschar = confirm("Do you want numbers in your password?")
    var islower = confirm("Do you want lower characters in your password?")
    var upperchar = confirm("Do you want upper characters in your password?")
    var specialchar = confirm("Do you want special characters in your password?")
    var passwordchars = []
    if (numschar) {
      passwordchars = passwordchars.concat(nums)
    }
    if (islower) {
      passwordchars = passwordchars.concat(lowerChar)
    }
    if (upperchar) {
      passwordchars = passwordchars.concat(upperChar)
    }
    if (specialchar) {
      passwordchars = passwordchars.concat(special)
    }
    console.log(passwordchars)

    for (var i = 0; i < charlength; i++) {
      var userchoice = passwordchars[Math.floor(Math.random() * passwordchars.length)];
      console.log(userchoice);
      console.log("something")
      pw = pw + userchoice
    }
    return pw
  }
}