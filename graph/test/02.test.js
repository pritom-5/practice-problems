const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const { graph05, graph06, graph07, graph08, graph09 } = require("../data/data");
const {
  connected_comp_count,
  largestComponent,
  connected_comp_count_01,
} = require("../src/02");

/** @type {{test_no: number, graph: import("../src/02").GraphT | {}, exp: number}[]} */
const connected_comp_arr = [
  { test_no: 1, graph: graph05, exp: 2 },
  { test_no: 2, graph: graph06, exp: 1 },
  { test_no: 3, graph: graph07, exp: 3 },
  { test_no: 4, graph: graph08, exp: 0 },
  { test_no: 5, graph: graph09, exp: 5 },
];

describe("test connected_comp_count", () => {
  for (const { exp, graph, test_no } of connected_comp_arr) {
    it(`${test_no}`, () => {
      const count = connected_comp_count_01(graph);
      equal(count, exp);
    });
  }
});

/** @type {{test_no: number, graph: import("../src/02").GraphT | {}, exp: number}[]} */
const largest_component_arr = [
  { test_no: 1, graph: graph05, exp: 4 }, // 4
  { test_no: 2, graph: graph06, exp: 6 },
  { test_no: 3, graph: graph07, exp: 5 },
  { test_no: 4, graph: graph08, exp: 0 },
  { test_no: 5, graph: graph09, exp: 3 },
];

describe.skip("test largest component", () => {
  for (const { exp, graph, test_no } of largest_component_arr) {
    it(`${test_no}`, () => {
      const result = largestComponent(graph);
      equal(result, exp);
    });
  }
});
