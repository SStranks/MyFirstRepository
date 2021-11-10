function howMuchILoveYou(nbPetals) {
  // Use Select to determine the return phrase
  switch (nbPetals % 6) {
    case 1:
      return "I love you";
    case 2:
      return "a little";
    case 3:
      return "a lot";
    case 4:
      return "passionately";
    case 5:
      return "madly";
    case 6:
      return "not at all";
    default:
      return "not at all";
  }
}