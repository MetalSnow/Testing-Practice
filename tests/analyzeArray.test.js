import analyzeArray from '../src/analyzeArray';

test('Analyze Array', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
