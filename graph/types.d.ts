export type GraphNode<T> = T;
export type Graph<GraphNode> = Record<string, Array<GraphNode>>;

export type Edges<T> = Array<Array<T>>;

export type IslandNode = "L" | "W";
export type IslandGraphGrid = Array<Array<IslandNode>>;
