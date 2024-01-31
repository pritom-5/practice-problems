const { graph10, graph11, graph12, graph13 } = require("../graph_bank");

const longest_path_test_data = [
  { no: 0, graph: graph10, exp: 2 },
  { no: 1, graph: graph11, exp: 4 },
  { no: 2, graph: graph12, exp: 2 },
  { no: 3, graph: graph13, exp: 3 },
];

module.exports = { longest_path_test_data };
