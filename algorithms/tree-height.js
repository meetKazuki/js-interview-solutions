class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
}
function treeHeights(root) {
  const stack = [root, "reset"];
  const counters = [0];
  while (stack.length > 1) {
    const node = stack.shift();
    if (node === "reset") {
      counters.push(0); stack.push("reset");
    } else {
      stack.push(...node.children); counters[counters.length - 1]++;
    }
  }
  return counters;
}
mocha.setup("bdd");
const { assert } = chai;
describe("Height of Tree Levels", () => {
  it("Should return height of each tree level", () => {
    const root = new Node(1);
    root.add(2);
    root.add(3);
    root.children[1].add(4);
    assert.deepEqual(treeHeights(root), [1, 2, 1]);
  });
});
mocha.run();