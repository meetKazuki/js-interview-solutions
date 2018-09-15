const reverse = integer =>
    parseInt(integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);

mocha.setup("bdd");
const { assert } = chai;

describe("Integer Reversal", () => {
    it("Should reverse integer", () => {
        assert.equal(reverse(1234), 4321);
        assert.equal(reverse(-1200), -21);
    });
});

mocha.run();