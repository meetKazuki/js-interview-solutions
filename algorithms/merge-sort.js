const mergeSort = array => {
  if (array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle), right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
};

function _mergeSort(array) {
  if (array.length === 1) return array;

  const center = Math.floor(array.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(center);

  return _merge(_mergeSort(left), _mergeSort(right));
}

function _merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) results.push(left.shift());
    else results.push(right.shift());
  }

  return [...results, ...left, ...right];
}

mocha.setup('bdd');

const { assert } = chai;

describe('Merge Sort', () => {
  it('Should implement merge sort', () => {
    assert.deepEqual(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(mergeSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(_mergeSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
