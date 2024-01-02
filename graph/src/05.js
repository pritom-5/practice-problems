/**
 * loop through everysingle points
 * see if we have already visited it
 * if haven't visited it : new island : update count : travel through the
 * island and add all of the points of the add to seen
 */
const { grid0 } = require("./data");

/** @param {GraphGridT} graph_grid  */
function islandCount(graph_grid) {
  const seen = new Set();

  let count = 0;

  // through rows
  for (let r = 0; r < graph_grid.length; r++) {
    for (let c = 0; c < graph_grid[0].length; c++) {
      const curr = { x: r, y: c };
      const curr_string = `${r} ${c}`;

      if (!seen.has(curr_string) && graph_grid[r][c] === "L") {
        count++;
        travel(graph_grid, curr, seen);
      }
    }
  }

  return count;
}

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/** @param {GraphGridT} graph @param {{x: number, y: number}} curr @param {Set<string>} seen */
function travel(graph, curr, seen) {
  const curr_string = `${curr.x} ${curr.y}`;

  // base
  // out of bound
  if (
    curr.x < 0 ||
    curr.x >= graph.length ||
    curr.y < 0 ||
    curr.y >= graph[0].length
  ) {
    return;
  }

  // already seen
  if (seen.has(curr_string)) return;

  // not land
  if (graph[curr.x][curr.y] === "W") {
    return;
  }

  seen.add(curr_string);

  for (const [x, y] of dirs) {
    const updated_curr = { x: curr.x + x, y: curr.y + y };
    travel(graph, updated_curr, seen);
  }
}

islandCount(grid0);

module.exports = { islandCount };
