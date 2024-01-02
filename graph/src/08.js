/**
 * kind of same strategy as largest component as there can be disjointed nodes not connected.
 * but with bfs.
 * go through every single node and go as far as possible while keeping distance (steps) count
 * keep record of visited nodes
 */

/** @param {GraphT} graph  */
function longestPath(graph) {
  /** @type {Set<GraphNodeT>} */
  const visited = new Set();

  let final_dis = 0;

  for (const item of Object.keys(graph)) {
    if (!visited.has(item)) {
      const dis = travel(item, graph, visited);
      final_dis = Math.max(dis, final_dis);
    }
  }
  return final_dis;
}

/**
 * @param {GraphNodeT} start
 * @param {GraphT} graph
 * @param {Set<GraphNodeT>} visited
 * @returns
 */
function travel(start, graph, visited) {
  let final_dis = 0;

  /** @type {{val: GraphNodeT, dis: number}[]} */
  const q = [{ val: start, dis: 0 }];

  while (q.length) {
    const curr = q.shift();

    if (!curr) {
      continue;
    }

    const { val, dis } = curr;

    visited.add(val);

    final_dis = dis;

    for (const item of graph[val]) {
      q.push({ val: item, dis: dis + 1 });
    }
  }
  return final_dis;
}

module.exports = { longestPath };
