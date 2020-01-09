const quickSort = array => {
  if (array.length < 2) return array;

  const pivot = array[array.length - 1];
  const left = [], right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

mocha.setup('bdd');

const { assert } = chai;

describe('Quick Sort', () => {
  it('Should implement quick sort', () => {
    assert.deepEqual(quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(quickSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
