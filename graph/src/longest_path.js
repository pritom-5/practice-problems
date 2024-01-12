/**
 *
 * @param {import("../types").Graph<string>} graph
 * @returns
 */
function longestPath(graph) {
  let max_count = 0;
  for (const n of Object.keys(graph)) {
    const res = walk(graph, n);
    max_count = Math.max(max_count, res);
  }
  return max_count;
}

/**
 * @param {import("../types").Graph<string>} graph
 * @param {string} node
 * @returns {number}
 */
function walk(graph, node, seen = new Set()) {
  /** @type {[string, number][]} */
  const q = [[node, 0]];
  let max_range = 0;

  while (q.length) {
    const curr = q.shift();

    if (curr === undefined) {
      continue;
    }

    max_range = Math.max(max_range, curr[1]);

    for (const n of graph[curr[0]]) {
      q.push([n, curr[1] + 1]);
    }
  }

  return max_range;
}

module.exports = { longestPath };
