//Does my number look big in this?

function numberk(value){
    let x = 0;
let a = 0;
if(value > 9 ){
    x = value.toSring().split('');
    for(let i = 0 ; i < x.length ; i++){
        a += Math.pow(Number(x[i]),x.length)
    }
    return a === value? true : false 
}else {
    return true;
}
}
