const {
  graph05,
  graph06,
  graph07,
  graph08,
  graph09,
} = require("../graph_bank");

/** @type {{test_no: number, graph: import("../../types").Graph<number> | {}, exp: number}[]} */
const nos_connected_components_test_data = [
  { test_no: 1, graph: graph05, exp: 2 },
  { test_no: 2, graph: graph06, exp: 1 },
  { test_no: 3, graph: graph07, exp: 3 },
  { test_no: 4, graph: graph08, exp: 0 },
  { test_no: 5, graph: graph09, exp: 5 },
];

module.exports = { nos_connected_components_test_data };
