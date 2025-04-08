class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // 🟢 Add a vertex (node) to the graph
    addVertex(vertex) {
        // TODO: Only add if it doesn’t already exist
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
        return this.adjacencyList;
    }

    // 🔗 Add an undirected edge between two vertices
    addEdge(v1, v2) {
        if(!this.adjacencyList[v1]){
            this.addVertex(v1);
        }
        if(!this.adjacencyList[v2]){
            this.addVertex(v2);
        }
        let isV2Exists=false;
        let isV1Exists=false;
        for(let i=0;i<this.adjacencyList[v1].length;i++){
            if(this.adjacencyList[v1][i]===v2){
                isV2Exists=true;
            }
        }
        for(let i=0;i<this.adjacencyList[v2].length;i++){
            if(this.adjacencyList[v2][i]===v1){
                isV1Exists=true;
            }
        }

        if(!isV2Exists){
            this.adjacencyList[v1].push(v2);
        }
        if(!isV1Exists){
            this.adjacencyList[v2].push(v1);
        }

        return this.adjacencyList;
    }

    // 🧹 Remove an edge
    removeEdge(v1, v2) {
        const index1 = this.adjacencyList[v1].indexOf(v2);
        if (index1 !== -1) this.adjacencyList[v1].splice(index1, 1);

        const index2 = this.adjacencyList[v2].indexOf(v1);
        if (index2 !== -1) this.adjacencyList[v2].splice(index2, 1);

    }

    // ❌ Remove a vertex and all connected edges
    removeVertex(vertex) {
        //  const index=this.adjacencyList.indexOf(vertex);
        //  this.adjacencyList.splice(index,1);
        delete this.adjacencyList[vertex];

        for(let item in this.adjacencyList){
            this.adjacencyList[item]=this.adjacencyList[item].filter((value)=>{
                if(value===vertex){
                    return false;
                }else{
                    return true;
                }
            })
        }

    }

    // (Optional later) Traverse functions: DFS, BFS
}
const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");

console.log("Adjacency List:");
console.log(g.adjacencyList);

// Expected:
// {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A'],
//   D: ['B']
// }

g.removeEdge("A", "B");
console.log("After removing edge A-B:");
console.log(g.adjacencyList);

// Expected:
// A: ['C'],
// B: ['D']

g.removeVertex("C");
console.log("After removing vertex C:");
console.log(g.adjacencyList);

// Expected:
// A: [],
// B: ['D'],
// D: ['B']
