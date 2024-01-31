const { describe, it } = require("node:test");
const { equal } = require("assert/strict");

const {
  edges4,
  edges5,
  edges6,
  edges7,
  edges8,
  edges9,
} = require("../data/graph_bank");
const { semisterRequired } = require("../src/09");

const semister_required_arr = [
  { no: 0, edges: edges4, num_courses: 6, exp: 3 },
  { no: 1, edges: edges5, num_courses: 7, exp: 5 },
  { no: 2, edges: edges6, num_courses: 5, exp: 2 },
  { no: 3, edges: edges7, num_courses: 12, exp: 1 },
  { no: 4, edges: edges8, num_courses: 3, exp: 3 },
  { no: 5, edges: edges9, num_courses: 6, exp: 2 },
];

describe("semister_required", () => {
  for (const { edges, exp, no, num_courses } of semister_required_arr) {
    it(`test: ${no}`, () => {
      const res = semisterRequired(edges, num_courses);
      equal(res, exp);
    });
  }
});
