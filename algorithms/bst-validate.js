class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left)
      this.left.insert(data);
    else if (data < this.data)
      this.left = new Node(data);
    else if (data > this.data && this.right)
      this.right.insert(data);
    else if (data > this.data) this.right = new Node(data);
  }
}

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max)
    return false;
  if (min !== null && node.data < min)
    return false;
  if (node.left && !validate(node.left, min, node.data))
    return false;
  if (node.right && !validate(node.right, node.data, max))
    return false;
  return true;
}

mocha.setup("bdd");

const { assert } = chai;

describe("Validate a Binary Search Tree", () => {
  it("Should validate a binary search tree", () => {
    const root = new Node(2);
    root.insert(1);
    root.insert(3);
    root.insert(0);
    assert.equal(validate(root), true);
  });
});

mocha.run();
