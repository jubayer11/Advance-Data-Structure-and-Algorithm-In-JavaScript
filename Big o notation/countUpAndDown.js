const countUpAndDown=(n)=>{
    console.log("Gouing up!");
    for(let i=1;i<=n;i++){
        console.log(i);
    }
    console.log('At the top!\nGoing down....');

    for(let j=n-1;j>=0;j--){
        console.log(j);
    }
    console.log("Back down.Bye!");
}

countUpAndDown(10);