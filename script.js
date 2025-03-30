function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.reduce((prev, next )=>{
		return prev+next;
	});
  
}
		let result = mincost();
console.log(result);
//module.exports=mincost;
