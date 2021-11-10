// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// My Solution
function correct(string) {
  //   return string.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I"); *FUNC NOT AVAILABLE IN NODE VER*
    return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
};

// Member Solution
const corrections = {
  '5': 'S',
  '0': 'O',
  '1': 'I',
};

const correct = string => (
  string.replace(/[501]/g, character => corrections[character])
);

