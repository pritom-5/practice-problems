const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const { minIsland } = require("../src/island_count");
const {
  island_count_test_data,
} = require("../data/__test_data__/island_count_test_data");

describe("min_island", () => {
  for (const { grid, min_island_exp, no } of island_count_test_data) {
    it(`test: ${no}`, () => {
      const res = minIsland(grid);

      equal(res, min_island_exp);
    });
  }
});
