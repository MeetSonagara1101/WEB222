function buildArray(start, end){
    var arr=[];
    for(let i = start;i<=end;i++){
        arr.push(i);
    }
    return arr;
}

console.log(buildArray(5,10));