const { describe, it } = require("node:test");
const { equal } = require("assert/strict");
const {
  longest_path_test_data,
} = require("../data/__test_data__/longest_path_test_data");
const { longestPath } = require("../src/longest_path");

describe("find_longest_path", () => {
  for (const { no, graph, exp } of longest_path_test_data) {
    it(`test: ${no}`, () => {
      const res = longestPath(graph);

      equal(res, exp);
    });
  }
});
