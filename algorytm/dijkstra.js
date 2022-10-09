let graph = [
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

const Q = [0, 1, 2, 3, 4, 5];
const S = [];
const n = Q.length;
const v = 0;
let current;
let next;

const d = [];
const p = [];

for (let i = 0; i < n; i++) {
    if (i === v) {
        d.push(0);
    } else {
        d.push(Infinity);
    }
    p.push(-1);
}

console.log(p, d);

for (let u = 0; u < Q.length; u++) {
    if (u === v) {
        d[u] = Q[u];
        S.push(Q[u]);
        Q.splice(u, 1);
        current = d[u];
    }
    if (current === graph[u].x) {
        d[graph[u].y] = graph[u].w;
        p[graph[u].y] = graph[u].x;
        next = u;
    }
}


console.log(Q, S);
console.log(p, d);
console.log(next);
console.log(Q.indexOf(next));

while (Q.length) {
    current = next;
    S.push(Q[Q.indexOf(current)]);
    Q.splice(Q.indexOf(current), 1);
    graph.forEach(element => {
        if (current === element.x) {
            next = element.y;
            if (d[next] > d[current] + element.w) {
                d[next] = d[current] + element.w;
                p[next] = element.x;
            }
        }
    });

    //console.log(Q,S);
    //console.log(p,d);
    //console.log(next);
}