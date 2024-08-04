import { calculator } from '../src/calculator';

test('calculator', () => {
  expect(calculator.add(2, 4)).toBe(6);
  expect(calculator.subtract(5, 4)).toBe(1);
  expect(calculator.devide(10, 5)).toBe(2);
  expect(calculator.multiply(3, 4)).toBe(12);
});
