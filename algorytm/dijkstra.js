const graph = [
    {
        startVertex: 0,
        endVertex: 1,
        pathCost: 3
    },
    {
        startVertex: 0,
        endVertex: 4,
        pathCost: 3
    },
    {
        startVertex: 1,
        endVertex: 2,
        pathCost: 1
    },
    {
        startVertex: 2, 
        endVertex: 3,
        pathCost: 3
    },
    {
        startVertex: 2,
        endVertex: 5,
        pathCost: 1
    },
    {
        startVertex: 3, 
        endVertex: 1,
        pathCost: 3
    },
    {
        startVertex: 4,
        endVertex: 5,
        pathCost: 2
    },
    {
        startVertex: 5,
        endVertex: 0,
        pathCost: 6
    },
    {
        startVertex: 5,
        endVertex: 3,
        pathCost: 1
    }
]

const algorithmState = {
    startNode : [0, 1, 2, 3, 4, 5],
    endNode : [],
    currentVertex: 0,
    nextVertex: 0,
    distance : [],
    parents : []
};

const setDistanceAndParentsState = (state) => {
    const parseState = state;

    const currentVertex = parseState.currentVertex;
    const distance = parseState.startNode.map(item => (item === currentVertex)? 0: Infinity);
    const parents = parseState.startNode.map(item => item = -1);

    parseState.distance = distance;
    parseState.parents = parents;

    const updateStartNode = parseState.startNode.filter(vertex => vertex!==currentVertex);

    parseState.startNode = updateStartNode;
    parseState.endNode.push(currentVertex);
    return parseState;
}

const shortestPath = (state,graph) =>{
    const getCurrentVertex = state.currentVertex;
    const relativeNodes = graph.filter(nodePath => nodePath.startVertex === getCurrentVertex);
    const shortestNodePathWeight = relativeNodes.reduce((firstPath,secondPath) => {
        const shortestPathWeight = secondPath.pathCost < firstPath.pathCost ? secondPath.pathCost : firstPath.pathCost;
        return shortestPathWeight;
    });
    const shortestNodePath = relativeNodes.filter(nodePath => nodePath.pathCost === shortestNodePathWeight)
    return shortestNodePath;
}


const nextStep = (state,shortestPath) =>{
    const currentState = state;
    const shortest = shortestPath;
    shortest.forEach(nodePath => {
        const updateStartNode =  currentState.startNode.filter(node => node!==nodePath.endVertex);
        const updateCurrentVertex = currentState.startNode.filter(node => node === nodePath.endVertex);
        //  Object.keys(curr)

        // const updateDistance = currentState.distance.splice(nodePath.endVertex,1,nodePath.pathCost);
        // console.log(updateDistance);
        currentState.distance[nodePath.endVertex] = nodePath.pathCost;
        currentState.parents[nodePath.endVertex] = nodePath.startVertex;
        
        currentState.currentVertex = updateCurrentVertex;
        currentState.endNode.push(updateCurrentVertex);
        currentState.startNode = updateStartNode;


        // console.log(currentState);
        return currentState;
    });


}


const main = () => {
    const setStartState = setDistanceAndParentsState(algorithmState);
    
    const searchShortestPath = shortestPath(algorithmState,graph);
    const next = nextStep(algorithmState,searchShortestPath);

    console.log(algorithmState);
}
main();
