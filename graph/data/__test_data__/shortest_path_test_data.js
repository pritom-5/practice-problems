const { edges0, edges1, edges2, edges3 } = require("../../data/data");

const shortest_path_test_data = [
  { test_no: 0, edges: edges0, start: "w", end: "z", exp: 2 },
  { test_no: 1, edges: edges0, start: "y", end: "x", exp: 1 },
  { test_no: 2, edges: edges1, start: "a", end: "e", exp: 3 },
  { test_no: 3, edges: edges1, start: "e", end: "c", exp: 2 },
  { test_no: 4, edges: edges1, start: "b", end: "g", exp: -1 },
  { test_no: 5, edges: edges2, start: "w", end: "e", exp: 1 },
  { test_no: 6, edges: edges2, start: "n", end: "e", exp: 2 },
  { test_no: 7, edges: edges3, start: "m", end: "s", exp: 6 },
];

module.exports = { shortest_path_test_data };
