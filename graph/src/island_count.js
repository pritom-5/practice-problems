/**
 * @param {import("../types").IslandGraphGrid} graph
 * @returns
 */
function islandCount(graph) {
  /** @type {Set<string>} */
  const seen = new Set();
  let count = 0;
  for (const [row_id, row] of graph.entries()) {
    for (const [col_id, col] of row.entries()) {
      const address = `${row_id} ${col_id}`;
      if (!seen.has(address) && col === "L") {
        count++;
        walk(graph, { row: row_id, col: col_id }, seen);
      }
    }
  }
  return count;
}

/**
 * @param {import("../types").IslandGraphGrid} graph
 * @returns
 */
function minIsland(graph) {
  /** @type {Set<string>} */
  const seen = new Set();
  let min = Infinity;
  for (const [row_id, row] of graph.entries()) {
    for (const [col_id, col] of row.entries()) {
      const address = `${row_id} ${col_id}`;
      if (!seen.has(address) && col === "L") {
        const res = walk(graph, { row: row_id, col: col_id }, seen);
        min = Math.min(res, min);
      }
    }
  }
  return min === Infinity ? 1 : min;
}

/**
 * @param {import("../types").IslandGraphGrid} graph
 * @param {{row: number, col: number}} node_address
 * @param {Set<string>} seen
 * @returns
 */
function walk(graph, node_address, seen) {
  const q = [node_address];
  const temp_seen = [];

  while (q.length) {
    const curr = q.shift();

    if (curr === undefined) {
      continue;
    }
    const { row, col } = curr;
    // oob check
    // already seen
    if (
      row < 0 ||
      row >= graph.length ||
      col < 0 ||
      col >= graph[0].length ||
      seen.has(`${row} ${col}`) ||
      graph[row][col] === "W"
    ) {
      continue;
    }

    seen.add(`${row} ${col}`);
    temp_seen.push(`${row} ${col}`);

    for (const [__row, __col] of [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      if (__row == 0 && __col == 0) {
        continue;
      }
      q.push({ row: row + __row, col: col + __col });
    }
  }

  return temp_seen.length;
}

module.exports = { islandCount, minIsland };
