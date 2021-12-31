// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]


// My Solution
function bald(x){
  let hairs = x.match(/(\-)+/g).join("")
  let result = x.match(/\//g)
  switch(true){
    case result === null: result = "Clean!"; break
    case result.length < 2: hairs += "-".repeat(result.length); result = "Unicorn!"; break
    case result.length < 3: hairs += "-".repeat(result.length); result = "Homer!"; break
    case result.length < 6: hairs += "-".repeat(result.length); result = "Careless!"; break
    default: hairs += "-".repeat(result.length); result = "Hobo!"; break
  }
  return [hairs, result]
}