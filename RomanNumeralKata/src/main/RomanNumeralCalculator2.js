function removeDoubleCharacterNumerals(romanNumeral) {
  return romanNumeral
    .replace(/IX/g, 'VIV')
    .replace(/IV/g, 'IIII');
}

const romanNumeralValueOrder = ['I', 'V', 'X'];

function sortCharacters(romanNumeralString) {
  return romanNumeralString
    .split('')
    .sort((a, b) => romanNumeralValueOrder.indexOf(b) - romanNumeralValueOrder.indexOf(a))
    .join('');
}

function simplifyRomanNumeralString(sorted) {
  return sorted
    .replace(/IIIII/g, 'V')
    .replace(/VV/g, 'X')
    .replace(/IIII/g, 'IV')
    .replace(/VIV/g, 'IX');
}

export default function add(num1, num2) {
  const num1Expanded = removeDoubleCharacterNumerals(num1);
  const num2Expanded = removeDoubleCharacterNumerals(num2);

  const sorted = sortCharacters(num1Expanded + num2Expanded);

  return simplifyRomanNumeralString(sorted);
}
