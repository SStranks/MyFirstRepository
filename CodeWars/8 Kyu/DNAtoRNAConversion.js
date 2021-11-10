function DNAtoRNA(dna) {
  // TASK: Create a function which returns an RNA sequence from the given DNA sequence
  // Replace all instances of 'T' with 'U'
  // return dna.replaceAll('T', 'U') *NOT SUPPORTED IN THIS JS VER*
  return dna.replace(/T/g, 'U')
}