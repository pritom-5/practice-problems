const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const { hasPath } = require("../src/has_path");
const { nosConnectedComponents } = require("../src/nos_connected_components");
const {
  nos_connected_components_test_data,
} = require("../data/__test_data__/nos_connected_components_test_data");

describe("test_hasUndirectedPath", () => {
  for (const { graph, exp, test_no } of nos_connected_components_test_data) {
    it(`test no ${test_no}`, () => {
      const result = nosConnectedComponents(graph);
      equal(result, exp);
    });
  }
});
