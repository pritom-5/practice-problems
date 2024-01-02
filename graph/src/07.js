/**
 * shortest path is bfs
 */
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/** @param {CarrotGridT} graph_grid  @param {number} x @param {number} y  */
function closestCarrot(graph_grid, x, y) {
  // q : [[val, dis]]
  /** @type {{cor: {x: number, y: number}, dis: number}[]} */
  const q = [{ cor: { x, y }, dis: 0 }];

  /** @type {Set<string>} */
  const seen = new Set();

  while (q.length) {
    // get curr
    const curr = q.shift();
    if (!curr) {
      continue;
    }

    const {
      cor: { x, y },
      dis,
    } = curr;

    // move dir
    // if out of bounds continue
    if (x < 0 || x >= graph_grid.length || y < 0 || y >= graph_grid[0].length) {
      continue;
    }

    // check if seen before
    const curr_string = `${x} ${y}`;
    if (seen.has(curr_string)) {
      continue;
    }

    seen.add(curr_string);

    // continue if wall
    if (graph_grid[x][y] === "X") {
      continue;
    }

    // reached destination
    if (graph_grid[x][y] === "C") {
      return dis;
    }

    // loop through dir and add to queue
    for (const [x_del, y_del] of dir) {
      q.push({ cor: { x: x + x_del, y: y + y_del }, dis: dis + 1 });
    }
  }
  return -1;
}
module.exports = { closestCarrot };
