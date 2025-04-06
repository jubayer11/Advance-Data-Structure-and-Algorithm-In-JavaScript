function mixedNestedLoops(n, m) {
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < m; j++) { 
            console.log(i, j); 
        }
    }

    for (let k = 0; k < n; k++) { 
        console.log(k); 
    }
}
mixedNestedLoops(2,3);