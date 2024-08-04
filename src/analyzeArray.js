export default function analyzeArray(array) {
  const obj = {};

  obj['average'] = array[Math.ceil((array.length - 1) / 2)];
  obj['max'] = Math.max(...array);
  obj['min'] = Math.min(...array);
  obj['length'] = array.length;

  return obj;
}
