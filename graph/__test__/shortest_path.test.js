const { equal } = require("assert/strict");
const { describe, it } = require("node:test");
const {
  shortest_path_test_data,
} = require("../data/__test_data__/shortest_path_test_data");
const { shortestPath } = require("../src/shortest_path");
describe("shortest path", () => {
  for (const { edges, end, exp, start, test_no } of shortest_path_test_data) {
    it(`test: ${test_no}`, () => {
      const res = shortestPath(edges, start, end);

      equal(res, exp);
    });
  }
});
