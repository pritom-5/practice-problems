const { convertEdgesToGraph } = require("./03");
const { edges0 } = require("./data");

/** @param {GraphT} graph  */
function bfs(graph, s, d) {
  const q = [s];
  const path = [];
  let count = 0;
  while (q.length) {
    const curr = q.shift();

    if (curr in path) {
      continue;
    }

    path.push(curr);

    if (curr == d) {
      break;
    }

    for (const item of graph[curr]) {
      q.push(item);
    }

    count++;
    console.log(count);
  }

  console.log(path);
  return;
}

const graph = convertEdgesToGraph(edges0);
console.log(graph);
bfs(graph, "w", "z");
