const { grid0, grid1, grid2, grid3 } = require("../../data/data");

/**
 * @typedef {{no: number, grid: GraphGridT, island_count_exp: number, min_island_exp:number}} ISLAND_COUNT_VALUES_T
 * @type {ISLAND_COUNT_VALUES_T[]}
 * */
const island_count_test_data = [
  { no: 1, grid: grid0, island_count_exp: 3, min_island_exp: 2 },
  { no: 2, grid: grid1, island_count_exp: 4, min_island_exp: 1 },
  { no: 3, grid: grid2, island_count_exp: 1, min_island_exp: 9 },
  { no: 4, grid: grid3, island_count_exp: 0, min_island_exp: 1 },
];

module.exports = { island_count_test_data };
