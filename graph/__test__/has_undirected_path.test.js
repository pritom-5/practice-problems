const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const { hasPath } = require("../src/has_path");
const {
  has_undirected_path_values,
} = require("../data/__test_data__/has_undirected_path_test_data");
const { hasUndirectedPath } = require("../src/has_undirected_path");

describe("test_hasUndirectedPath", () => {
  for (const {
    test_no,
    graph,
    node_1,
    node_2,
    exp,
  } of has_undirected_path_values) {
    it(`test no ${test_no}`, () => {
      const result = hasUndirectedPath(graph, node_1, node_2);
      equal(result, exp);
    });
  }
});
