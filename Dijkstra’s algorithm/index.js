class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class Dijkstra {
    constructor(graph) {
        this.graph = graph;
    }

    findShortestPath(start) {
        const distances = {};
        const previous = {};
        const pq = new PriorityQueue();

        for (let node in this.graph) {
            distances[node] = node === start ? 0 : Infinity;
            previous[node] = null;
            pq.enqueue(node, distances[node]);
        }

        while (!pq.isEmpty()) {
            const { node: currentNode } = pq.dequeue();

            for (let neighbor in this.graph[currentNode]) {
                const weight = this.graph[currentNode][neighbor];
                const alt = distances[currentNode] + weight;

                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = currentNode;
                    pq.enqueue(neighbor, alt);
                }
            }
        }

        return { distances, previous };
    }

    getPathTo(end, previousMap) {
        const path = [];
        let current = end;
        while (current !== null) {
            path.unshift(current);
            current = previousMap[current];
        }
        return path;
    }
}
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1, E: 3 },
    E: { D: 3 }
};

const dijkstra = new Dijkstra(graph);
const { distances, previous } = dijkstra.findShortestPath("A");

console.log("Shortest distances from A:", distances);
console.log("Path from A to E:", dijkstra.getPathTo("E", previous));
