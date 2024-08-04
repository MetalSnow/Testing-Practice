export default function capitalize(string) {
  if (string === '' || !isNaN(string)) return '';

  let str = string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    str += string[i];
  }

  return str;
}
