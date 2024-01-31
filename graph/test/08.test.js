const { describe, it } = require("node:test");
const { equal } = require("assert/strict");

const { graph10, graph11, graph12, graph13 } = require("../data/graph_bank");
const { longestPath } = require("../src/08");

const longest_path_arr = [
  { no: 0, graph: graph10, exp: 2 },
  { no: 1, graph: graph11, exp: 4 },
  { no: 2, graph: graph12, exp: 2 },
  { no: 3, graph: graph13, exp: 3 },
];

describe("find_longest_path", () => {
  for (const { no, graph, exp } of longest_path_arr) {
    it(`test: ${no}`, () => {
      const res = longestPath(graph);

      equal(res, exp);
    });
  }
});
