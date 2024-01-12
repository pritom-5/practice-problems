/**
 * @param {import("../types").Graph<number>} graph
 * @returns {number}
 */
function nosConnectedComponents(graph) {
  /** @type {Set<number>} */
  const seen = new Set();
  let count = 0;
  for (const node of Object.keys(graph)) {
    if (!seen.has(Number(node))) {
      count++;
      walk(graph, Number(node), seen);
    }
  }

  return count;
}

/**
 *
 * @param {import("../types").Graph<number>} graph
 * @param {number} node
 * @param {Set<number>} seen
 */
function walk(graph, node, seen) {
  const q = [node];
  while (q.length) {
    const curr = q.shift();

    if (curr == undefined || seen.has(curr)) {
      continue;
    }

    seen.add(curr);

    for (const n of graph[curr]) {
      q.push(n);
    }
  }
}

module.exports = { nosConnectedComponents };
