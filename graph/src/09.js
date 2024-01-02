/**
 * calculate longest path use bfs
 */

/**
 * @param {EdgesT} edges
 * @param {number} total_course
 * @returns
 */
function semisterRequired(edges, total_course) {
  const graph = convertEdgeToGraph(edges);

  // minimum 1 semister is required
  let req_sem = 1;

  for (const node of Object.keys(graph)) {
    const res = travel(graph, Number(node));
    req_sem = Math.max(res, req_sem);
  }

  return req_sem;
}

/**
 * @param {GraphT} graph
 * @param {GraphNodeT} node
 * @returns
 */
function travel(graph, node) {
  let max_path = 0;

  /** @type {{val: GraphNodeT, dis: number}[]} */
  // this course will take min 1 semister
  const q = [{ val: node, dis: 1 }];

  while (q.length) {
    const curr = q.shift();
    if (!curr) {
      continue;
    }

    const { val, dis } = curr;

    max_path = dis;

    if (!(val in graph)) {
      continue;
    }

    for (const item of graph[val]) {
      q.push({ val: item, dis: dis + 1 });
    }
  }
  return max_path;
}

/**
 * @param {EdgesT} edges
 * @returns {GraphT}
 */
function convertEdgeToGraph(edges) {
  /** @type {GraphT} */
  const graph = {};
  const returned_graph = edges.reduce((acc, curr) => {
    const [one, two] = curr;

    if (!(one in graph)) {
      graph[one] = [];
    }

    graph[one].push(two);

    return acc;
  }, graph);

  return returned_graph;
}

module.exports = { semisterRequired };
