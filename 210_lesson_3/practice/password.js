function verify(givenPassword) {
  var actualPassword = 'password';
  return givenPassword === actualPassword;
}

function printMsg(match) {
  if (match) {
    console.log("You have successfully logged in.");
  } else {
    console.log("You have been denied access.")
  }
}

function loginAssistant() {
  var givenPassword;
  var permittedAttempts = 3;
  var failedAttempts = 0;
  while (failedAttempts <= permittedAttempts) {
    failedAttempts++;
    givenPassword = prompt("What is the password: ");
    var isMatch = verify(givenPassword); 
    if (isMatch || failedAttempts === permittedAttempts) {
      printMsg(isMatch);
      break;
    }
  }
}

loginAssistant();