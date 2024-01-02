/**
 * @param {EdgesT} edges
 * @param {number} total
 * @returns {boolean}
 */
function preqsAvailable(edges, total) {
  const graph = convertEdgeToGraph(edges);

  for (let i = 0; i < total; i++) {
    const res = travel(graph, i);

    if (!res) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {GraphT} graph
 * @param {GraphNodeT} node
 * @returns {boolean}
 */
function travel(graph, node) {
  if (!(node in graph)) {
    return true;
  }

  /** @type {GraphNodeT[]} */
  const q = [node];

  // bfs through start node if you find start node in the traverse return false
  while (q.length) {
    const curr = q.shift();

    if (curr === undefined) {
      continue;
    }

    if (curr === node) {
      return false;
    }

    for (const item of graph[curr]) {
      q.push(item);
    }
  }

  return true;
}

/**
 * @param {EdgesT} edges
 * @returns {GraphT}
 */
function convertEdgeToGraph(edges) {
  /** @type {GraphT} */
  const graph = {};

  return edges.reduce((acc, curr) => {
    const [one, two] = curr;
    if (!(one in graph)) {
      graph[one] = [];
    }
    graph[one].push(two);
    return acc;
  }, graph);
}

module.exports = { preqsAvailable };
