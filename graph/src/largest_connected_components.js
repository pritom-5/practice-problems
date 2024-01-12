/**
 * @param {import("../types").Graph<number>} graph
 * @returns {number}
 */
function largestConnectedComponents(graph) {
  /** @type {Set<number>} */
  const seen = new Set();
  let max = 0;

  for (const _node of Object.keys(graph)) {
    const node = Number(_node);
    if (!seen.has(node)) {
      max = Math.max(max, walk(graph, node, seen));
    }
  }

  return max;
}

/**
 *
 * @param {import("../types").Graph<number>} graph
 * @param {number} node
 * @param {Set<number>} seen
 * @param {Set<number>} new_seen
 */
function walk(graph, node, seen, new_seen = new Set()) {
  const q = [node];

  while (q.length) {
    const curr = q.shift();

    if (curr == undefined) {
      continue;
    }
    if (new_seen.has(curr)) {
      continue;
    }

    seen.add(curr);
    new_seen.add(curr);

    for (const n of graph[curr]) {
      q.push(n);
    }
  }
  return new_seen.size;
}
module.exports = { largestConnectedComponents };
