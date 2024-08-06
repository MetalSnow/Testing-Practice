export default function analyzeArray(array) {
  const obj = {};

  obj['average'] = Math.ceil(array.reduce((a, b) => a + b) / array.length);
  obj['max'] = Math.max(...array);
  obj['min'] = Math.min(...array);
  obj['length'] = array.length;

  return obj;
}
