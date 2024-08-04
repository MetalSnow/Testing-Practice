export { caesarCipher };

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
