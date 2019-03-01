function replaceDoubleCharacters(romanNumeral) {
  return romanNumeral
    .replace(/IX/g, 'VIV')
    .replace(/IV/g, 'IIII')
    .replace(/XC/g, 'LXL')
    .replace(/XL/g, 'XXXX');
}

const romanNumeralValueOrder = ['I', 'V', 'X', 'L', 'C'];

function sortRomanNumeral(romanNumeral) {
  return romanNumeral
    .split('')
    .sort((a, b) => romanNumeralValueOrder.indexOf(b) - romanNumeralValueOrder.indexOf(a))
    .join('');
}

function simplifyNumeral(romanNumeral) {
  return romanNumeral
    .replace(/IIIII/g, 'V')
    .replace(/VV/g, 'X')
    .replace(/IIII/g, 'IV')
    .replace(/VIV/g, 'IX')
    .replace(/XXXXX/g, 'L')
    .replace(/LL/g, 'C')
    .replace(/XXXX/g, 'XL')
    .replace(/LXL/g, 'XC');
}

export default function add(numeral1, numeral2) {
  const expandedNumeral1 = replaceDoubleCharacters(numeral1);
  const expandedNumeral2 = replaceDoubleCharacters(numeral2);

  const sorted = sortRomanNumeral(expandedNumeral1 + expandedNumeral2);

  return simplifyNumeral(sorted);
}