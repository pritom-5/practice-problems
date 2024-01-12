/**
 * @param {import("../types").Edges<string>} edges
 * @param {string} curr_node
 * @param {string} target
 */
function hasUndirectedPath(edges, curr_node, target) {
  const graph = convertEdgesToGraph(edges);

  console.log("____graph____", graph);

  return walk(graph, curr_node, target);
}

/**
 * @param {import("../types").Graph<string>} graph
 * @param {string} curr_node
 * @param {string} target
 */
function walk(graph, curr_node, target, seen = new Set()) {
  if (curr_node === target) {
    return true;
  }
  if (seen.has(curr_node)) {
    return false;
  }
  seen.add(curr_node);
  for (const n of graph[curr_node]) {
    if (walk(graph, n, target, seen)) {
      return true;
    }
  }
  return false;
}

/**
 * @param {import("../types").Edges<string>} edges
 */
function convertEdgesToGraph(edges) {
  /** @type {import("../types").Graph<string>} */
  const graph = {};
  return edges.reduce((acc, curr) => {
    const [a, b] = curr;
    if (!(a in acc)) {
      acc[a] = [];
    }
    if (!(b in acc)) {
      acc[b] = [];
    }

    acc[a].push(b);
    acc[b].push(a);
    return acc;
  }, graph);
}

module.exports = { hasUndirectedPath };
