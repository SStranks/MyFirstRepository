// You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx


// My Solution
function londonCityHacker(journey) {
  let price = 0;
  for (let i = 0; i < journey.length; i++){
    if (typeof journey[i] === "string"){
      price += 2.40;
      continue;
    }
    if (typeof journey[i] === "number" && typeof journey[i + 1] === "number"){
      price += 1.50
      i++
      continue
    }
    price += 1.50
  }
  return `£${price.toFixed(2)}`
}

// Other Solutions
function londonCityHacker(journey) { console.log(journey)
  let busFare = 0;
  return `£${ journey.map( (v,i) => isNaN(v) ? ( busFare=0, 2.4 ) : busFare=1.5-busFare ).reduce( (v,w) => v+w , 0 ).toFixed(2) }`;
}

function londonCityHacker(journey) {
  let sum = 0;
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === "string") sum += 2.40;
    else {
      sum += 1.50;
      if (typeof journey[i + 1] === "number") i++;
    }  
  }
  return `£${sum.toFixed(2)}`;
}