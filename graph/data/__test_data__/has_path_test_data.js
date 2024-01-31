const { graph00, graph01 } = require("../graph_bank");
const { hasPath } = require("../../src/has_path");

const hasPath_test_data = [
  { test_no: 1, graph: graph00, start: "f", dst: "j", exp: false },
  { test_no: 2, graph: graph00, start: "i", dst: "h", exp: true },
  { test_no: 3, graph: graph00, start: "f", dst: "k", exp: true },
  { test_no: 4, graph: graph01, start: "v", dst: "w", exp: true },
  { test_no: 5, graph: graph01, start: "v", dst: "z", exp: false },
];

module.exports = { hasPath_test_data };
