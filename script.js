function mincost(arr)
{ 
arr.sort((a,b)=> a-b);
// console.log(arr);
let totalcost =0;
    

while(arr.length>1){
let rope1 = arr.shift();
let rope2 = arr.shift();
let cost = rope1 + rope2 ;
totalcost += cost;
arr.push(cost);
arr.sort((a,b)=> a-b);
}

return totalcost;
  
}
 let result = mincost();
 console.log(result);
 module.exports = mincost;
