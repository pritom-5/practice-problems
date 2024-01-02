const graph00 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

//   has_path(graph, 'f', 'k') # True
//   has_path(graph, 'f', 'j') # False
//   has_path(graph, 'i', 'h') # True

const graph01 = {
  v: ["x", "w"],
  w: [],
  x: [],
  y: ["z"],
  z: [],
};

//   has_path(graph, 'v', 'z') # False
//   has_path(graph, 'v', 'w') # True

const graph02 = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const graph03 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

const graph04 = [
  ["s", "r"],
  ["t", "q"],
  ["q", "r"],
];

const graph05 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const graph06 = {
  1: [2],
  2: [1, 8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2],
};

const graph07 = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};

const graph08 = {};

const graph09 = {
  0: [4, 7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: [],
};

const graph14 = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["D", "F"],
  D: [],
  E: ["F"],
  F: [],
};

const edges0 = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const edges1 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

const edges2 = [
  ["c", "n"],
  ["c", "e"],
  ["c", "s"],
  ["c", "w"],
  ["w", "e"],
];

const edges3 = [
  ["m", "n"],
  ["n", "o"],
  ["o", "p"],
  ["p", "q"],
  ["t", "o"],
  ["r", "q"],
  ["r", "s"],
];

const edges4 = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];

const edges5 = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];

const edges6 = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];

/** @type {EdgesT} */
const edges7 = [];

const edges8 = [
  [0, 2],
  [0, 1],
  [1, 2],
];

const edges9 = [
  [3, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 5],
];

const edges10 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];

const edges11 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];

const edges12 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
];

const edges13 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
  [5, 3],
  [3, 5],
];

const edges14 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [4, 3],
];

const edges15 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [7, 4],
  [4, 3],
];

const edges16 = [[6, 36]];

/** @type {GraphGridT} */
const grid0 = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

/** @type {GraphGridT} */
const grid1 = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

/** @type {GraphGridT} */
const grid2 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

/** @type {GraphGridT} */
const grid3 = [
  ["W", "W"],
  ["W", "W"],
  ["W", "W"],
];

/** @type {CarrotGridT} */
const grid4 = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

/** @type {CarrotGridT} */
const grid5 = [
  ["O", "O", "X", "X", "X"],
  ["O", "X", "X", "X", "C"],
  ["O", "X", "O", "X", "X"],
  ["O", "O", "O", "O", "O"],
  ["O", "X", "X", "X", "X"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "C", "O", "O"],
  ["O", "O", "O", "O", "O"],
];

/** @type {CarrotGridT} */
const grid6 = [
  ["O", "O", "X", "O", "O"],
  ["O", "X", "X", "X", "O"],
  ["O", "X", "C", "C", "O"],
];

/** @type {CarrotGridT} */
const grid7 = [
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "C"],
];

/** @type {CarrotGridT} */
const grid8 = [
  ["O", "O", "X", "C", "O"],
  ["O", "X", "X", "X", "O"],
  ["C", "X", "O", "O", "O"],
];

/** @type {GraphT} */
const graph10 = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
};

/** @type {GraphT} */
const graph11 = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
  q: ["r"],
  r: ["s", "u", "t"],
  s: ["t"],
  t: ["u"],
  u: [],
};

/** @type {GraphT} */
const graph12 = {
  h: ["i", "j", "k"],
  g: ["h"],
  i: [],
  j: [],
  k: [],
  x: ["y"],
  y: [],
};

/** @type {GraphT} */
const graph13 = {
  a: ["b"],
  b: ["c"],
  c: [],
  e: ["f"],
  f: ["g"],
  g: ["h"],
  h: [],
};

module.exports = {
  graph00,
  graph01,
  graph02,
  graph03,
  graph04,
  graph05,
  graph06,
  graph07,
  graph08,
  graph09,
  edges0,
  edges1,
  edges2,
  edges3,
  edges4,
  edges5,
  edges6,
  edges7,
  edges8,
  edges9,
  edges10,
  edges11,
  edges12,
  edges13,
  edges14,
  edges15,
  edges16,

  grid0,
  grid1,
  grid2,
  grid3,
  grid4,
  grid5,
  grid6,
  grid7,
  grid8,
  graph10,
  graph11,
  graph12,
  graph13,
  graph14,
};
