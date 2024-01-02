/**
 * @typedef {Record<string, Array<number>>} GraphT
 */

/** @param {GraphT} graph  */
function connected_comp_count(graph) {
  const seen = new Set();

  let count = 0;

  for (const item of Object.keys(graph)) {
    if (travel(Number(item), seen, graph)) {
      count++;
    }
  }

  return count;
}

/**
 * @param {number} node
 * @param {Set<number>} seen
 * @param {GraphT} graph
 * @returns {boolean}
 */
function travel(node, seen, graph) {
  if (seen.has(node)) {
    return false;
  }

  seen.add(node);

  for (const item of graph[node]) {
    travel(item, seen, graph);
  }

  return true;
}

/** @param {GraphT} graph  */
function connected_comp_count_01(graph) {
  let count = 0;

  /** @type {Set<GraphNodeT>} */
  const seen = new Set();

  for (const item of Object.keys(graph)) {
    if (travel_01(Number(item), graph, seen)) {
      count++;
    }
  }

  return count;
}

/**
 *
 * @param {GraphNodeT} start
 * @param {GraphT} graph
 * @param {Set<GraphNodeT>} seen
 * @returns
 */
function travel_01(start, graph, seen) {
  // check if visited then return false
  if (seen.has(start)) {
    return false;
  }

  seen.add(start);

  for (const item of graph[start]) {
    travel_01(item, graph, seen);
  }

  // return true
  return true;
}

///////////////////////////////////////////

/** @param {GraphT} graph  */
function largestComponent(graph) {
  const seen = new Set();
  let max = 0;

  for (const item of Object.keys(graph)) {
    const res = travel_02(Number(item), graph, seen);
    max = Math.max(max, res);
  }
  return max;
}

/**
 * @param {number} node
 * @param {GraphT} graph
 * @param {Set<number>} seen
 * @returns
 */
function travel_02(node, graph, seen) {
  if (seen.has(node)) {
    return 0;
  }

  let count = 1;
  seen.add(node);

  for (const item of graph[node]) {
    count += travel_02(item, graph, seen);
  }

  return count;
}

module.exports = {
  connected_comp_count,
  connected_comp_count_01,
  largestComponent,
};
