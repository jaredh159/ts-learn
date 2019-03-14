import bubbleSort from '../bubble';
import insertionSort from '../insertion';

describe('bubbleSort', () => {
  it('returns a sorted array', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('can handle a large array', () => {
    expect(bubbleSort([8, 2, 5, 3, 8, 9])).toEqual([2, 3, 5, 8, 8, 9]);
  });

  it('can handle empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });
});

describe('insertionSort', () => {
  it('returns a sorted array', () => {
    expect(insertionSort([3, 2, -1])).toEqual([-1, 2, 3]);
  });

  it('can handle a large array', () => {
    expect(insertionSort([8, 2, 5, 3, 8, 9])).toEqual([2, 3, 5, 8, 8, 9]);
  });

  it('can handle empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });
});
