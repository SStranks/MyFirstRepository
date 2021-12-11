// Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

// Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

// eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.


// My Solution
//These are your super secret characters you will use to make the password super secure
var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];

function createSSP(password) {
  let newPassword = password.split("")
  const lowerCasePassword = password.toLowerCase();
  for (let i = 0; i < password.length; i++) {
    switch (true) {
      case (lowerCasePassword[i] === superSecretChars[0][0]): newPassword[i] = superSecretChars[0][1]; break;
      case (lowerCasePassword[i] === superSecretChars[1][0]): newPassword[i] = superSecretChars[1][1]; break; 
      case (lowerCasePassword[i] === superSecretChars[2][0]): newPassword[i] = superSecretChars[2][1]; break;
      case (lowerCasePassword[i] === superSecretChars[3][0]): newPassword[i] = superSecretChars[3][1]; break;
      case (lowerCasePassword[i] === superSecretChars[4][0]): newPassword[i] = superSecretChars[4][1]; break;
    }
  }
  return newPassword.join("");
}

// Other Solutions
var chars = {a: '@', s: '$', o: 0, h: 5, x: '*'};
function createSSP(password){
  return password.replace(/[asohx]/gi, function(m){ return chars[m.toLowerCase()] });
}

//These are your super secret characters you will use to make the password super secure
var ssc = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
  for(var i = 0; i < ssc.length; i++){
    password = password.replace(new RegExp(ssc[i][0], 'gi'), ssc[i][1]);
  }
  return password;
}