// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


// My Solution
function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/g;
  return username.match(res) ? true : false; 
}

// Other Solutions
function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}