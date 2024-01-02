const { equal } = require("assert/strict");
const { describe, it } = require("node:test");
const { edges0, edges1, edges2, edges3 } = require("../data/data");
const { shortestPath } = require("../src/03");

const test_arr = [
  { test_no: 5, edges: edges1, start: "b", end: "g", exp: -1 },
  { test_no: 1, edges: edges0, start: "w", end: "z", exp: 2 },
  { test_no: 2, edges: edges0, start: "y", end: "x", exp: 1 },
  { test_no: 3, edges: edges1, start: "a", end: "e", exp: 3 },
  { test_no: 4, edges: edges1, start: "e", end: "c", exp: 2 },
  { test_no: 6, edges: edges2, start: "w", end: "e", exp: 1 },
  { test_no: 7, edges: edges2, start: "n", end: "e", exp: 2 },
  { test_no: 8, edges: edges3, start: "m", end: "s", exp: 6 },
];

describe("shortest path", () => {
  for (const { edges, end, exp, start, test_no } of test_arr) {
    it(`test: ${test_no}`, () => {
      const res = shortestPath(edges, start, end);

      equal(res, exp);
    });
  }
});
