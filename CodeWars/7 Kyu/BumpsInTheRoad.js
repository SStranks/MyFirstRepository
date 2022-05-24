// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// My Solution
function bump(x) {
  return (x.match(/n/g) || []).length <= 15 ? 'Woohoo!' : 'Car Dead';
}

// Other Solutions
const bump = (x) => (x.split('n').length > 16 ? 'Car Dead' : 'Woohoo!');
