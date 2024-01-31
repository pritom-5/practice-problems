const { describe, it, only } = require("node:test");
const { deepEqual, equal } = require("node:assert/strict");
const {
  graph00,
  graph01,
  graph02,
  graph03,
  graph04,
} = require("../data/graph_bank");
const { hasPath, hasPath_01, hasDirectPath } = require("../src/01");

const Arr = [
  { a: 1, b: 2, c: 3 },
  { a: 2, b: 3, c: 2 },
];

const graphs = [
  { test_no: 1, graph: graph00, start: "f", dst: "j", exp: false },
  { test_no: 2, graph: graph00, start: "i", dst: "h", exp: true },
  { test_no: 3, graph: graph00, start: "f", dst: "k", exp: true },
  { test_no: 4, graph: graph01, start: "v", dst: "w", exp: true },
  { test_no: 5, graph: graph01, start: "v", dst: "z", exp: false },
];

const has_direct_path_values = [
  { test_no: 1, graph: graph02, node_1: "j", node_2: "m", exp: true },
  { test_no: 2, graph: graph02, node_1: "m", node_2: "j", exp: true },
  { test_no: 3, graph: graph02, node_1: "l", node_2: "j", exp: true },
  { test_no: 4, graph: graph02, node_1: "k", node_2: "o", exp: false },
  { test_no: 5, graph: graph02, node_1: "i", node_2: "o", exp: false },
  { test_no: 6, graph: graph03, node_1: "a", node_2: "b", exp: true },
  { test_no: 7, graph: graph03, node_1: "a", node_2: "c", exp: true },
  { test_no: 8, graph: graph03, node_1: "r", node_2: "t", exp: true },
  { test_no: 9, graph: graph03, node_1: "r", node_2: "b", exp: false },
  { test_no: 10, graph: graph04, node_1: "r", node_2: "t", exp: true },
];

describe("test hasPath dfs", () => {
  for (const { graph, start, dst, exp, test_no } of graphs) {
    it(`test ${test_no}`, () => {
      equal(hasPath(graph, start, dst), exp);
    });
  }
});
describe("test hasPath bfs", () => {
  for (const { graph, start, dst, exp, test_no } of graphs) {
    it(`test ${test_no}`, () => {
      equal(hasPath_01(graph, start, dst), exp);
    });
  }
});

describe.only("test hasDirectPath", () => {
  for (const {
    test_no,
    graph,
    node_1,
    node_2,
    exp,
  } of has_direct_path_values) {
    it(`${test_no}`, () => {
      const result = hasDirectPath(graph, node_1, node_2);
      equal(result, exp);
    });
  }
});
