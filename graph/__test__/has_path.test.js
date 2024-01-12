const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const { hasPath } = require("../src/has_path");
const {
  hasPath_test_data,
} = require("../data/__test_data__/has_path_test_data");

describe("test_hasPath", () => {
  for (const { test_no, graph, start, dst, exp } of hasPath_test_data) {
    it(`test no ${test_no}`, () => {
      const result = hasPath(graph, start, dst);
      equal(result, exp);
    });
  }
});
