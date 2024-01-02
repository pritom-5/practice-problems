const { it, describe } = require("node:test");
const { equal } = require("assert/strict");

const {
  edges10,
  edges11,
  edges12,
  edges13,
  edges14,
  edges15,
  edges16,
} = require("../data/data");
const { preqsAvailable } = require("../src/10");

const preqs_avalilable_arr = [
  { no: 0, edges: edges10, total: 6, exp: true },
  { no: 1, edges: edges11, total: 6, exp: false },
  { no: 2, edges: edges12, total: 5, exp: false },
  { no: 3, edges: edges13, total: 6, exp: false },
  { no: 4, edges: edges14, total: 8, exp: true },
  { no: 5, edges: edges15, total: 8, exp: false },
  { no: 6, edges: edges16, total: 42, exp: true },
];

describe("preqs_avalilable", () => {
  for (const { edges, exp, no, total } of preqs_avalilable_arr) {
    it(`test: ${no}`, () => {
      const res = preqsAvailable(edges, total);
      equal(res, exp);
    });
  }
});
