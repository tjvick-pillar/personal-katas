function removeDoubleCharacters(numeral) {
  return numeral
    .replace(/IX/g, 'VIV')
    .replace(/IV/g, 'IIII')
    .replace(/XC/, 'LXL')
    .replace(/XL/, 'XXXX');
}

const romanNumeralOrder = ['I', 'V', 'X', 'L', 'C'];

function sortNumeral(numeral) {
  return numeral
    .split('')
    .sort((a, b) => romanNumeralOrder.indexOf(b) - romanNumeralOrder.indexOf(a))
    .join('');
}

function simplifyNumeral(concatenated) {
  return concatenated
    .replace(/IIIII/g, 'V')
    .replace(/VV/g, 'X')
    .replace(/XXXXX/g, 'L')
    .replace(/LL/, 'C')
    .replace(/IIII/g, 'IV')
    .replace(/VIV/g, 'IX')
    .replace(/XXXX/g, 'XL')
    .replace(/LXL/g, 'XC');
}

export default function add(num1, num2) {
  const num1Extended = removeDoubleCharacters(num1);
  const num2Extended = removeDoubleCharacters(num2);

  const concatenated = num1Extended + num2Extended;

  const sorted = sortNumeral(concatenated);

  return simplifyNumeral(sorted);
}
