const {
  graph05,
  graph06,
  graph07,
  graph08,
  graph09,
} = require("../../data/data");

/** @type {{test_no: number, graph: import("../../types").Graph<number> | {}, exp: number}[]} */
const largest_component_arr = [
  { test_no: 1, graph: graph05, exp: 4 }, // 4
  { test_no: 2, graph: graph06, exp: 6 },
  { test_no: 3, graph: graph07, exp: 5 },
  { test_no: 4, graph: graph08, exp: 0 },
  { test_no: 5, graph: graph09, exp: 3 },
];

module.exports = { largest_component_arr };
