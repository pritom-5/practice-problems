/**
 * @param {import("../types").Edges<string>} edges
 * @param {string} start
 * @param {string} end
 */
function shortestPath(edges, start, end) {
  /** @type {import("../types").Graph<string>} */
  const graph = convertEdgesToGraph(edges);

  // console.log("___graph___", graph);

  return walk(graph, start, end);
}

/**
 * @param {import("../types").Graph<string>} graph
 * @param {string} start
 * @param {string} end
 * */
function walk(graph, start, end) {
  /** @type {Array<[string, number]>} */
  const q = [[start, 0]];
  /** @type {Set<string>} */
  const seen = new Set();

  while (q.length) {
    const curr = q.shift();

    if (curr === undefined) {
      continue;
    }

    const [curr_node, curr_distance] = curr;

    if (seen.has(curr_node)) {
      continue;
    }

    if (curr_node == end) {
      return curr_distance;
    }

    seen.add(curr_node);

    for (const n of graph[curr_node]) {
      q.push([n, curr_distance + 1]);
    }
  }
  return -1;
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

module.exports = { shortestPath };
