const { it, describe } = require("node:test");
const { equal } = require("assert/strict");
const { grid5, grid6, grid7, grid4, grid8 } = require("./data");
const { closestCarrot } = require("./07");

const carrot_grid_arr = [
  { no: 1, grid: grid4, x: 1, y: 2, exp_0: 4 },
  { no: 2, grid: grid4, x: 0, y: 0, exp_0: 5 },
  { no: 3, grid: grid5, x: 3, y: 4, exp_0: 9 },
  { no: 4, grid: grid6, x: 1, y: 4, exp_0: 2 },
  { no: 5, grid: grid6, x: 2, y: 0, exp_0: -1 },
  { no: 6, grid: grid7, x: 0, y: 0, exp_0: -1 },
  { no: 7, grid: grid8, x: 2, y: 2, exp_0: 5 },
];

describe("closest_carrot", () => {
  for (const { exp_0, grid, no, x, y } of carrot_grid_arr) {
    it(`test: ${no}`, () => {
      const res = closestCarrot(grid, x, y);

      equal(res, exp_0);
    });
  }
});
