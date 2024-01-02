/**
 * @typedef {Record<string, Array<string>>} GraphT
 */

const { graph02 } = require("../data/data");

/**
 * @param {GraphT} graph
 * @param {string} start
 * @param {string} dst
 * @returns {boolean}
 */
function hasPath(graph, start, dst) {
  if (start === dst) {
    return true;
  }

  for (const item of graph[start]) {
    if (hasPath(graph, item, dst)) {
      return true;
    }
  }
  return false;
}

/**
 * @param {GraphT} graph
 * @param {string} start
 * @param {string} dst
 * @returns {boolean}
 */
function hasPath_01(graph, start, dst) {
  const q = [start];
  while (q.length) {
    const curr = q.shift();

    if (curr === dst) {
      return true;
    }

    if (curr === undefined) {
      continue;
    }

    for (const item of graph[curr]) {
      q.push(item);
    }
  }

  return false;
}

/**
 * @param {string[][]} graph_arr
 * @param {string} node_01
 * @param {string} node_02
 * @returns {boolean}
 */
function hasDirectPath(graph_arr, node_01, node_02) {
  const seen = new Set();
  const graph = transformToGraph(graph_arr);
  return findDirectPath(graph, node_01, node_02, seen);
}

/**
 * @param {GraphT} graph
 * @param {string} node_01
 * @param {string} node_02
 * @param {Set<string>} seen
 * @returns {boolean}
 */
function findDirectPath(graph, node_01, node_02, seen) {
  if (seen.has(node_01)) {
    return false;
  }
  if (node_01 === node_02) {
    return true;
  }

  seen.add(node_01);

  for (const item of graph[node_01]) {
    if (findDirectPath(graph, item, node_02, seen)) {
      return true;
    }
  }

  return false;
}

/** @param {string[][]} untransformed  @returns {GraphT} */
function transformToGraph(untransformed) {
  /** @type {GraphT} */
  let a = {};

  const transformed_graph = untransformed.reduce((acc, curr) => {
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
  }, a);

  return transformed_graph;
}

console.log(transformToGraph(graph02));

module.exports = { hasPath, hasPath_01, hasDirectPath };
