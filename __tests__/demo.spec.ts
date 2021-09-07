import { getIndexResponse } from '../src/demo';

describe('demo', () => {
  it('should return the correct index response', () => {
    expect(getIndexResponse()).toBe('Prlooooooo!');
  });
});
