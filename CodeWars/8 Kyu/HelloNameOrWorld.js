// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String


// My Solution
function hello(name) {
  return name ? `Hello, ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!` : `Hello, World!`;
}

// Other Solutions
const hello = s => `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;