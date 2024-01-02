/**
 * same as island count just keep count of island size
 * test in 05.test.js
 */

/** @param {GraphGridT} grid_graph  */
function minimunIsland(grid_graph) {
  const seen = new Set();
  let minimum = Infinity;

  // loop through every node
  // if land and not in seen travel
  for (let row = 0; row < grid_graph.length; row++) {
    for (let col = 0; col < grid_graph[0].length; col++) {
      const curr = { x: row, y: col };
      const curr_string = `${curr.x} ${curr.y}`;
      if (!seen.has(curr_string) && grid_graph[row][col] === "L") {
        const island_length = travel(grid_graph, curr, seen);
        minimum = Math.min(minimum, island_length);
      }
    }
  }
  return minimum === Infinity ? 1 : minimum;
}

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * traverse through the whole island and collect number from last pattern
 * @param {GraphGridT} grid_graph
 *  @param {{x: number, y: number}} curr
 * @param {Set<string>} seen
 * @returns {number}
 */
function travel(grid_graph, curr, seen) {
  // collection number
  const curr_string = `${curr.x} ${curr.y}`;

  // base

  // outof bound
  if (
    curr.x < 0 ||
    curr.x >= grid_graph.length ||
    curr.y < 0 ||
    curr.y >= grid_graph[0].length
  ) {
    return 0;
  }

  //  not land
  if (grid_graph[curr.x][curr.y] == "W") {
    return 0;
  }

  // already seen
  if (seen.has(curr_string)) {
    return 0;
  }

  seen.add(curr_string);

  let count = 1;

  for (const [x, y] of dir) {
    const new_curr = { x: curr.x + x, y: curr.y + y };
    count += travel(grid_graph, new_curr, seen);
  }

  return count;
}

module.exports = { minimunIsland };
