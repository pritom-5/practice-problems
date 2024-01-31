const { graph02, graph03, graph04 } = require("../graph_bank");

const has_undirected_path_values = [
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

module.exports = { has_undirected_path_values };
