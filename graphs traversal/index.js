class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);

        if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
        if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
    }

    // 🔍 DFS Recursive — you implement
    dfsRecursive(start,track = {}) {
        //take a empty array result
        //take a hash table track
        //loop through from start element
        //check every element weather exists on hastables or not
        //if not then put it on hastables

        //if not then put that in recursive and store value in value
        //join results and value as an array
        //return results
        let results=[];
        let value=[];

        if(!track[start]){
            track[start]=true;
            results.push(start);
            let items=this.adjacencyList[start];

            for(let item of items){
                if(!track[item]){
                    const innerResult = this.dfsRecursive(item, track);
                    results = [...results, ...innerResult];
                }
            }
        }


        return results;
    }


    // 🧭 DFS Iterative — you implement
    dfsIterative(start) {
        //take a empty array results
        //take hashtables name visited
        //take empty queue
        //push start in the queue and on results and on visited
        //take a variable anme current and popOut last vertex from queue
        //use loop on that vertex edges while queue<0
        //and push neighbour it on the queue if that vertex is not visited.
        //return results

        let results=[];
        let visited={};
        let queue=[];

        queue.push(start);


        while(queue.length>0){

            const current=queue.pop();

            if(!visited[current]){
                results.push(current);
                visited[current]=true;
                for(let item of this.adjacencyList[current]){


                    if(!visited[item]){

                        queue.push(item);
                    }
                }
            }
        }

        return results;


    }

    // 🌐 BFS — you implement
    bfs(start) {
        //take variable name queue=[]
        //take a variable name results=[]
        //take a varible name visited=[];
        //push start on queue
        //use while to check queue length >0
        // unshift first element as current
        //check if current exists on visisted
        //if not then add it and
        //push it to results
        // loop through current neighbour and check if it is visited
        //if not then pushing it queue
        //return results;

        let queue=[];
        let results=[];
        let visited={};

        queue.push(start);

        while(queue.length>0){
            const current=queue.shift();
            if(!visited[current]){
                results.push(current);
                visited[current]=true;
                for(let neighbour of this.adjacencyList[current]){
                    if(!visited[neighbour]){
                        queue.push(neighbour);
                    }
                }
            }
        }
        return results;
    }
}
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log("DFS Recursive:", g.dfsRecursive("A"));   // ex: [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log("DFS Iterative:", g.dfsIterative("A"));   // same result, possibly diff order
console.log("BFS:", g.bfs("A"));                      // ex: [ 'A', 'B', 'C', 'D', 'E', 'F' ]

