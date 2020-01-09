function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[j] < array[indexOfMin]) indexOfMin = j;
    if (indexOfMin !== i) {
      let less = array[indexOfMin];
      array[indexOfMin] = array[i];
      array[i] = less;
    }
  }

  return array;
}

mocha.setup('bdd');

const { assert } = chai;

describe('Selection Sort', () => {
  it('Should sort an array', () => {
    assert.deepEqual(selectionSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
