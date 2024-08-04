import {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
} from './app';

test('first character capitalized', () => {
  expect(capitalize('fox')).toBe('Fox');
  expect(capitalize('a')).toBe('A');
  expect(capitalize('22')).toBe('');
  expect(capitalize('')).toBe('');
});

test('reversed', () => {
  expect(reverseString('fox')).toBe('xof');
  expect(reverseString('aymane')).toBe('enamya');
  expect(reverseString('2215')).toBe('5122');
  expect(reverseString('')).toBe('');
});

test('calculator', () => {
  expect(calculator.add(2, 4)).toBe(6);
  expect(calculator.subtract(5, 4)).toBe(1);
  expect(calculator.devide(10, 5)).toBe(2);
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('Encrypt Caesar Cipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 4)).toBe('Lipps, Asvph!');
  expect(caesarCipher('', 8)).toBe('');
});

test('Analyze Array', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
