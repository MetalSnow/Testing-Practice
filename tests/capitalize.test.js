import capitalize from '../src/capitalize';

test('first character capitalized', () => {
  expect(capitalize('fox')).toBe('Fox');
  expect(capitalize('a')).toBe('A');
  expect(capitalize('22')).toBe('');
  expect(capitalize('')).toBe('');
});
