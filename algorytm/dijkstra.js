const graph = [
    {
        x: 0,
        y: 1,
        w: 3
    },
    {
        x: 0,
        y: 4,
        w: 3
    },
    {
        x: 1,
        y: 2,
        w: 1
    },
    {
        x: 2,
        y: 3,
        w: 3
    },
    {
        x: 2,
        y: 5,
        w: 1
    },
    {
        x: 3,
        y: 1,
        w: 3
    },
    {
        x: 4,
        y: 5,
        w: 2
    },
    {
        x: 5,
        y: 0,
        w: 6
    },
    {
        x: 5,
        y: 3,
        w: 1
    }
]

const algorithmState = {
    Q : [0, 1, 2, 3, 4, 5],
    S : [],
    n : 0,
    v : 0,
    current: [],
    next: [],
    d : [],
    p : []
};

algorithmState.Q.forEach(element => {
    if(element === algorithmState.v)
        algorithmState.d.push(0);
    else
        algorithmState.d.push(Infinity);
    algorithmState.p.push(-1);
});

function findShortestPath(algorithmState,graph){
    const Q = algorithmState.Q;
    const S = algorithmState.S;
    while(Q.length){
        Q.forEach(element => {
            S.push(element);
        });
        S.forEach(element =>{
            Q.splice(element,1);
        })
        console.log(Q);
    }
    algorithmState.Q=Q;
    algorithmState.S=S;
    return algorithmState;
}
console.log(findShortestPath(algorithmState,graph));


// algorithmState.n = algorithmState.Q.length;

// for (let i = 0; i < algorithmState.n; i++) {
//     if (i === algorithmState.v) {
//         algorithmState.d.push(0);
//     } else {
//         algorithmState.d.push(Infinity);
//     }
//     algorithmState.p.push(-1);
// }

// console.log(algorithmState);

// for (let u = 0; u < algorithmState.Q.length; u++) {
//     if (u === algorithmState.v) {
//         algorithmState.d[u] = algorithmState.Q[u];
//         algorithmState.S.push(algorithmState.Q[u]);
//         algorithmState.Q.splice(u, 1);
//         algorithmState.current = algorithmState.d[u];
//     }
//     if (algorithmState.current === graph[u].x) {
//         algorithmState.d[graph[u].y] = graph[u].w;
//         algorithmState.p[graph[u].y] = graph[u].x;
//         algorithmState.next.push(graph[u].y);
//     }
// }


