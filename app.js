export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

function capitalize(string) {
  if (string === '' || !isNaN(string)) return '';

  let str = string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    str += string[i];
  }

  return str;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  devide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// helper functions for caesarCipher function
function generateAlphabet() {
  return 'abcdefghijklmnopqrstuvwxyz'.split('');
}

function cipherAlphabet(key) {
  const alphabet = generateAlphabet();
  let cipher = [];

  for (let i = key; i < alphabet.length; i++) {
    cipher.push(alphabet[i]);
  }

  for (let i = 0; i < key; i++) {
    cipher.push(alphabet[i]);
  }

  return cipher;
}

function caesarCipher(text, key) {
  const alphabet = generateAlphabet();
  const cipher = cipherAlphabet(key);
  let textArr = text.split('');

  for (let i = 0; i < textArr.length; i++) {
    let chart = textArr[i];
    for (let j = 0; j < alphabet.length; j++) {
      if (chart.toLowerCase() === alphabet[j]) {
        if (chart === chart.toUpperCase()) {
          textArr.splice(i, 1, cipher[j].toUpperCase());
        } else {
          textArr.splice(i, 1, cipher[j]);
        }
      }
    }
  }

  return textArr.join('');
}

function analyzeArray(array) {
  const obj = {};

  obj['average'] = array[Math.ceil((array.length - 1) / 2)];
  obj['max'] = Math.max(...array);
  obj['min'] = Math.min(...array);
  obj['length'] = array.length;

  return obj;
}
