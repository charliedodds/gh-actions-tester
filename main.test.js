import { sum } from './dist/main';

describe('sum tests', () => {
  it('should add 2 numbers together', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
