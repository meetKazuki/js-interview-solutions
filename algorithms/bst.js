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

  search(data) {
    if (this.data === data)
      return this;
    if (this.data < data && this.right)
      return this.right.search(data);
    else if (this.data > data && this.left)
      return this.left.search(data);
    return null;
  }
}

mocha.setup("bdd");

const { assert } = chai;

describe("Binary Search Tree", () => {
  it("Should insert node", () => {
    const root = new Node(2);
    root.insert(1);
    root.insert(3);
    root.insert(0);
    assert.equal(root.left.left.data, 0);
  });

  it("Should implement search", () => {
    const root = new Node(2);
    root.insert(1);
    root.insert(3);
    root.insert(0);
    assert.equal(root.search(3).data, 3);
    assert.equal(root.search(4), null);
  });
});

mocha.run();
