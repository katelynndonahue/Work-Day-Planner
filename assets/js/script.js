// Assignment Code

var password=document.getElementById("password");


// Write password to the #password input
function genPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
      document.getEleme
      function copyPassword() {
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");  
      }ntById("password").value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");