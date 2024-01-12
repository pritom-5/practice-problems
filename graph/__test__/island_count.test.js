const { describe, it } = require("node:test");
const { equal } = require("node:assert/strict");
const {
  island_count_test_data,
} = require("../data/__test_data__/island_count_test_data");
const { islandCount } = require("../src/island_count");

describe("island_count", () => {
  for (const { island_count_exp, grid, no } of island_count_test_data) {
    it(`test: ${no}`, () => {
      const res = islandCount(grid);
      equal(res, island_count_exp);
    });
  }
});
