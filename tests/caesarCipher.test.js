import { caesarCipher } from '../src/caesarCipher';

test('Encrypt Caesar Cipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 4)).toBe('Lipps, Asvph!');
  expect(caesarCipher('', 8)).toBe('');
});
