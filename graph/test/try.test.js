const a = require("../src/01");
const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const { deepEqual } = require("node:assert");

const arr = [
  [1, 2],
  [2, 3],
  [3, 4],
];
const arr_0 = [
  [1, 2],
  [2, 3],
  [3, 4],
];
const arr_1 = [
  [1, 2],
  [2, 3],
];

describe("add", () => {
  it("add to 3", () => {
    equal(1 + 2, 3);
  });
  it("fail to 3", () => {
    equal(1 + 1, 3);
  });

  it("deep equal", () => {
    deepEqual(arr, arr_0);
  });

  it("deep equal fail", () => {
    deepEqual(arr, arr_1);
  });
});
