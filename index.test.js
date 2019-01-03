const { sum, multiply } = require("./index");

test("adds 1 + 2 to equal 3", sumTest);
test("multiply 1 * 2 equal 2", multiplyTest);

function sumTest() {
  expect(sum(1, 2)).toBe(3);
}

function multiplyTest() {
  expect(multiply(1, 2)).toBe(2);
}
