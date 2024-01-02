/**
 * @param {EdgesT} edges
 * @param {string | number} start
 * @param {string | number} des
 * @returns
 */
function shortestPath(edges, start, des) {
  const graph = convertEdgesToGraph(edges);
  const res = travel_03(graph, start, des);

  console.log("res: ", res);

  return res;
}

/**
 * @param {GraphT} graph
 * @param {string | number} start
 * @param {string | number}  des
 * @returns
 */
function travel_02(graph, start, des) {
  /** @type {[start, number][]} */
  const q = [[start, 0]];
  let count = 0;

  /** @type {start[]} */
  const path = [];

  while (q.length) {
    const curr = q.shift();
    if (!curr) {
      continue;
    }

    const [curr_val, curr_dis] = curr;

    if (curr_val === des) {
      return curr_dis;
    }

    if (path.includes(curr_val)) {
      continue;
    }

    path.push(curr_val);

    if (curr == undefined) {
      continue;
    }

    for (const item of graph[curr_val]) {
      q.push([item, curr_dis + 1]);
    }
  }
  return -1;
}

/** @param {EdgesT} edges  */
function convertEdgesToGraph(edges) {
  /** @type {GraphT} */
  const graph = {};

  return edges.reduce((acc, curr) => {
    const [one, two] = curr;

    if (!(one in acc)) {
      acc[one] = [];
    }
    if (!(two in acc)) {
      acc[two] = [];
    }

    acc[one].push(two);
    acc[two].push(one);

    return acc;
  }, graph);
}

/**
 * @param {GraphT} graph
 * @param {GraphNodeT} s
 * @param {GraphNodeT} d
 * @returns
 */
function travel_03(graph, s, d) {
  /** @type {[GraphNodeT, number][]} */
  const q = [[s, 0]];

  /** @type {Set<GraphNodeT>} */
  const seen = new Set();

  while (q.length) {
    // shift
    // destructure
    const curr = q.shift();
    if (!curr) continue;
    const [val, des] = curr;

    // reached destination
    if (val === d) {
      return des;
    }

    // check already visited
    if (seen.has(val)) {
      continue;
    }

    // add to visited
    seen.add(val);

    // loop through graph
    for (const item of graph[val]) {
      q.push([item, des + 1]);
    }
  }
  return -1;
}

module.exports = { shortestPath, convertEdgesToGraph };
