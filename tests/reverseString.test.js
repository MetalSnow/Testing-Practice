import reverseString from '../src/reverseString';

test('reversed', () => {
  expect(reverseString('fox')).toBe('xof');
  expect(reverseString('aymane')).toBe('enamya');
  expect(reverseString('2215')).toBe('5122');
  expect(reverseString('')).toBe('');
});
