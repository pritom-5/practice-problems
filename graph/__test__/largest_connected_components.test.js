const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const {
  largest_component_arr,
} = require("../data/__test_data__/largest_component_test_data");
const {
  largestConnectedComponents,
} = require("../src/largest_connected_components");

describe("test_hasUndirectedPath", () => {
  for (const { graph, exp, test_no } of largest_component_arr) {
    it(`test no ${test_no}`, () => {
      const result = largestConnectedComponents(graph);
      equal(result, exp);
    });
  }
});
