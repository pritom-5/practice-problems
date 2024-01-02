const { graph14 } = require("../data/data");

/**
 * @param {GraphT} graph
 * @param {GraphNodeT} current
 * @param {GraphNodeT} end
 * @returns {GraphNodeT[]}
 */
function dfs(graph, current, end) {
  if (current === end) {
    return [];
  }

  /** @type {GraphNodeT[]} */
  let path = [];

  for (const item of graph[current]) {
    const res = dfs(graph, item, end);
    path = [...res, item];
  }

  return path;
}

/**
 * @param {GraphT} graph
 * @param {GraphNodeT} current
 * @param {GraphNodeT} end
 * @returns {GraphNodeT[]}
 */
function bfs(graph, current, end) {
  /** @type {GraphNodeT[]} */
  const q = [current];

  /** @type {GraphNodeT[]} */
  const path = [];

  while (q.length) {
    const curr = q.shift();
    if (!curr || path.includes(curr)) {
      continue;
    }

    if (curr === end) {
      break;
    }

    path.push(curr);

    for (const item of graph[curr]) {
      q.push(item);
    }
  }

  return path;
}

console.log(bfs(graph14, "A", "F"));
