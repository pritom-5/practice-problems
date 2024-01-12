const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");

const { grid0, grid1, grid2, grid3 } = require("../data/data");
const { islandCount } = require("../src/05");
const { minimunIsland } = require("../src/06");

/**
 * @typedef {{no: number, grid: GraphGridT, island_count_exp: number, min_island_exp:number}} ISLAND_COUNT_VALUES_T
 * @type {ISLAND_COUNT_VALUES_T[]}
 * */
const island_count_values = [
  { no: 0, grid: grid0, island_count_exp: 3, min_island_exp: 2 },
  { no: 1, grid: grid1, island_count_exp: 4, min_island_exp: 1 },
  { no: 2, grid: grid2, island_count_exp: 1, min_island_exp: 9 },
  { no: 3, grid: grid3, island_count_exp: 0, min_island_exp: 1 },
];

describe("island_count", () => {
  for (const { island_count_exp, grid, no } of island_count_values) {
    it(`test: ${no}`, () => {
      const res = islandCount(grid);
      equal(res, island_count_exp);
    });
  }
});

describe("min_island", () => {
  for (const { grid, min_island_exp, no } of island_count_values) {
    it(`test: ${no}`, () => {
      const res = minimunIsland(grid);

      equal(res, min_island_exp);
    });
  }
});
