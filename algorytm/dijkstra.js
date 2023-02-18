const graph = {
	A: { B: 3, E: 3 },
	B: { C: 1},
	C: { D: 3, F: 1 },
	D: { B: 3},
	E: { F: 2 },
	F: { A: 6, D: 1}
};

const shortestDistanceNode = (distances, visited) => {
	let shortest = null;

	for (const node in distances) {
		const currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};

const setDistances = (endNode,startNode,graph) =>{
	let distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);
	return distances;
};

const setParents = (graph,startNode) => {
	const parents = { endNode: null };
	for (const child in graph[startNode]) {
		parents[child] = startNode;
	}
	return parents;
}

const findShortestPath = (graph, startNode, endNode) => {
	const distances = setDistances(endNode,startNode,graph);

	const parents = setParents(graph,startNode);

	const visited = [];

	let node = shortestDistanceNode(distances, visited);

	while (node) {
		const distance = distances[node];
		const children = graph[node];
		for (const child in children) {
			if (String(child) === String(startNode)) {
				continue;
			} else {
				const newDistance = distance + children[child];
				if (!distances[child] || distances[child] > newDistance) {
					distances[child] = newDistance;
					parents[child] = node;
				}
			}
            
		}
		visited.push(node);
		node = shortestDistanceNode(distances, visited);
	}

	
	const shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	const results = {
		distance: distances[endNode],
		path: shortestPath,
	};

	return results;
};

console.log(findShortestPath(graph,"E","A"))
