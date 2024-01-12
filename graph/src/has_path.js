/**
 * @param {import("../types").Graph<string>} graph
 * @param {import("../types").GraphNode<string>} curr_node
 * @param {import("../types").GraphNode<string>} end
 * @returns {boolean}
 */
function hasPath(graph, curr_node, end) {
  if (curr_node === end) {
    return true;
  }

  for (const node of graph[curr_node]) {
    if (hasPath(graph, node, end)) {
      return true;
    }
  }

  return false;
}

module.exports = { hasPath };
