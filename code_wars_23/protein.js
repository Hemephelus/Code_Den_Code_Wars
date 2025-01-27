// https://docs.codewars.com/gamification/ranks/#:~:text=Kyu%20(or%20Ky%C5%AB)%20indicates%20the,master%20level%2C%20we%20count%20upward.

// URL
// https://www.codewars.com/kata/555a03f259e2d1788c000077/train/javascript

// Input
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputs = [
  { input: ["AUG"], expected_result: "M" },
  { input: ["AUGUGA"], expected_result: "M" },
  { input: ["AUGGUUAGUUGA"], expected_result: "MVS" },
  { input: ["UGCUGAGAUGAAUGGGCUCGCUCC"], expected_result: "CDEWARS" },
  {
    input: ["AUGUCCUUCCAUCAAGGAAACCAUGCGCGUUCAGCUUUCUGA"],
    expected_result: "MSFHQGNHARSAF",
  },
  {
    input: ["AUGCUUCAAGUGCACUGGAAAAGGAGAGGGAAAACCAGUUGA"],
    expected_result: "MLQVHWKRRGKTS",
  },
  {
    input: ["AUGGCGUUCAGCUUUCUAUGGAGGGUAGUGUACCCAUGCUGA"],
    expected_result: "MAFSFLWRVVYPC",
  },
  {
    input: ["AUGCAGCUUUCUAUGGAGGGUAGUGUUAACUACCACGCCUGA"],
    expected_result: "MQLSMEGSVNYHA",
  },
  {
    input: ["AUGCUAUGGAGGGUAGUGUUAACUACCACGCCCAGUACUUGA"],
    expected_result: "MLWRVVLTTTPST",
  },
  {
    input: [
      "AUGUAUCCUUCCAUCAAGGAAACCAUGCGCGUUCAGCUUUCUAUGGAGGGUAGUGUUAACUACCACGCCUUCAAGUGCACUGGAAAAGGAGAGGGAAAACCAUACGAAGGCACCCAAAGCCUGAAUAUUACAAUAACUGAAGGAGGUCCUCUGCCAUUUGCUUUUGACAUUCUGUCACACGCCUUUCAGUAUGGCAUCAAGGUCUUCGCCAAGUACCCCAAAGAAAUUCCUGACUUCUUUAAGCAGUCUCUACCUGGUGGUUUUUCUUGGGAAAGAGUAAGCACCUAUGAAGAUGGAGGAGUGCUUUCAGCUACCCAAGAAACAAGUUUGCAGGGUGAUUGCAUCAUCUGCAAAGUUAAAGUCCUUGGCACCAAUUUUCCCGCAAACGGUCCAGUGAUGCAAAAGAAGACCUGUGGAUGGGAGCCAUCAACUGAAACAGUCAUCCCACGAGAUGGUGGACUUCUGCUUCGCGAUACCCCCGCACUUAUGCUGGCUGACGGAGGUCAUCUUUCUUGCUUCAUGGAAACAACUUACAAGUCGAAGAAAGAGGUAAAGCUUCCAGAACUUCACUUUCAUCAUUUGCGUAUGGAAAAGCUGAACAUAAGUGACGAUUGGAAGACCGUUGAGCAGCACGAGUCUGUGGUGGCUAGCUACUCCCAAGUGCCUUCGAAAUUAGGACAUAACUGA",
    ],
    expected_result:
      "MYPSIKETMRVQLSMEGSVNYHAFKCTGKGEGKPYEGTQSLNITITEGGPLPFAFDILSHAFQYGIKVFAKYPKEIPDFFKQSLPGGFSWERVSTYEDGGVLSATQETSLQGDCIICKVKVLGTNFPANGPVMQKKTCGWEPSTETVIPRDGGLLLRDTPALMLADGGHLSCFMETTYKSKKEVKLPELHFHHLRMEKLNISDDWKTVEQHESVVASYSQVPSKLGHN",
  },
  {
    input: [
      "AUGUAUCCUUCCAUCAAGGAAACCAUGCGCGUUCAGCUUUCUAUGGAGGGUAGUGUUAACUACCACGCCUUCAAGUGCACUGGAAAAGGAGAGGGAAAACCAUACGAAGGCACCCAAAGCCUGAAUAUUACAAUAACUGAAGGAGGUCCUCUGCCAUUUGCUUUUGACAUUCUGUCACACGCCUUUCAGUAUGGCAUCAAGGUCUUCGCCAAGUACCCCAAAGAAAUUCCUGACUUCUUUAAGCAGUCUCUACCUGGUGGUUUUUCUUGGGAAAGAGUAAGCACCUAUGAAGAUGGAGGAGUGCUUUCAGCUACCCAAGAAACAAGUUUGCAGGGUGAUUGCAUCAUCUGCAAAGUUAAAGUCCUUGGCACCAAUUUUCCCGCAAACGGUCCAGUGAUGCAAAAGAAGACCUGUGGAUGGGAGCCAUCAACUGAAACAGUCAUCCCACGAGAUGGUGGACUUCUGCUUCGCGAUACCCCCGCACUUAUGCUGGCUGACGGAGGUCAUCUUUCUUGCUUCAUGGAAACAACUUACAAGUCGAAGAAAGAGGUAAAGCUUCCAGAACUUCACUUUCAUCAUUUGCGUAUGGAAAAGCUGAACAUAAGUGACGAUUGGAAGACCGUUGAGCAGCACGAGUCUGUGGUGGCUAGCUACUCCCAAGUGCCUUCGAAAUUAGGACAUAACUGA",
    ],
    expected_result:
      "MYPSIKETMRVQLSMEGSVNYHAFKCTGKGEGKPYEGTQSLNITITEGGPLPFAFDILSHAFQYGIKVFAKYPKEIPDFFKQSLPGGFSWERVSTYEDGGVLSATQETSLQGDCIICKVKVLGTNFPANGPVMQKKTCGWEPSTETVIPRDGGLLLRDTPALMLADGGHLSCFMETTYKSKKEVKLPELHFHHLRMEKLNISDDWKTVEQHESVVASYSQVPSKLGHN",
  },
];

// Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const codons = {
  // Phenylalanine
  UUC: "F",
  UUU: "F",
  // Leucine
  UUA: "L",
  UUG: "L",
  CUU: "L",
  CUC: "L",
  CUA: "L",
  CUG: "L",
  // Isoleucine
  AUU: "I",
  AUC: "I",
  AUA: "I",
  // Methionine
  AUG: "M",
  // Valine
  GUU: "V",
  GUC: "V",
  GUA: "V",
  GUG: "V",
  // Serine
  UCU: "S",
  UCC: "S",
  UCA: "S",
  UCG: "S",
  AGU: "S",
  AGC: "S",
  // Proline
  CCU: "P",
  CCC: "P",
  CCA: "P",
  CCG: "P",
  // Threonine
  ACU: "T",
  ACC: "T",
  ACA: "T",
  ACG: "T",
  // Alanine
  GCU: "A",
  GCC: "A",
  GCA: "A",
  GCG: "A",
  // Tyrosine
  UAU: "Y",
  UAC: "Y",
  // Histidine
  CAU: "H",
  CAC: "H",
  // Glutamine
  CAA: "Q",
  CAG: "Q",
  // Asparagine
  AAU: "N",
  AAC: "N",
  // Lysine
  AAA: "K",
  AAG: "K",
  // Aspartic Acid
  GAU: "D",
  GAC: "D",
  // Glutamic Acid
  GAA: "E",
  GAG: "E",
  // Cystine
  UGU: "C",
  UGC: "C",
  // Tryptophan
  UGG: "W",
  // Arginine
  CGU: "R",
  CGC: "R",
  CGA: "R",
  CGG: "R",
  AGA: "R",
  AGG: "R",
  // Glycine
  GGU: "G",
  GGC: "G",
  GGA: "G",
  GGG: "G",
  // Stop codon
  UAA: "Stop",
  UGA: "Stop",
  UAG: "Stop",
};

function solution1(rna = "") {
  let result = "";
  console.log(rna);

  for (let i = 0; i < rna.length; i += 3) {
    const a = rna.slice(i, i+3);
    const codon = codons[a]
    console.log(codon);

    if(codon === 'Stop'){
      break
    }
    
    result += codon;
  }

  return result;
}

var dict = {'UUC':'F','UUU':'F','UUA':'L','UUG':'L','CUU':'L','CUC':'L','CUA':'L','CUG':'L','AUU':'I','AUC':'I','AUA':'I','AUG':'M','GUU':'V','GUC':'V','GUA':'V','GUG':'V','UCU':'S','UCC':'S','UCA':'S','UCG':'S','AGU':'S','AGC':'S','CCU':'P','CCC':'P','CCA':'P','CCG':'P','ACU':'T','ACC':'T','ACA':'T','ACG':'T','GCU':'A','GCC':'A','GCA':'A','GCG':'A','UAU':'Y','UAC':'Y','CAU':'H','CAC':'H','CAA':'Q','CAG':'Q','AAU':'N','AAC':'N','AAA':'K','AAG':'K','GAU':'D','GAC':'D','GAA':'E','GAG':'E','UGU':'C','UGC':'C','UGG':'W','CGU':'R','CGC':'R','CGA':'R','CGG':'R','AGA':'R','AGG':'R','GGU':'G','GGC':'G','GGA':'G','GGG':'G'};

function protein(rna){
  return rna.replace(/.{3}/g, function(r){ return dict[r] || '' });
}

// test result
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let [tester, numberOfInputs] = test([solution1, protein], 2, inputs, 4);
console.log(tester.actual_result);
console.log(tester.expected_result);
console.log(tester.expected_result === tester.actual_result);

console.log(numberOfInputs);

/**
 * Test Multiple solutions and input at the same time.
 * @constructor
 * @param {Array} funcs - An array of functions solutions
 * @param {number} funcIndex - Index of the function we want to test.
 * @param {Array} inputs - An array of inputs to test the function
 * @param {number} inputsIndex - Index of the input we want to test.
 */
function test(funcs, funcIndex = 1, inputs, inputsIndex = 1) {
  inputsIndex--;
  const results = {};

  for (let i = 0; i < funcs.length; i++) {
    results[i + 1] = {
      actual_result: funcs[i](...inputs[inputsIndex].input),
      expected_result: inputs[inputsIndex].expected_result,
    };
  }

  return [
    {
      ...results[funcIndex],
    },
    inputs.length,
  ];
}
