/*
There are n stairs, a person standing at the bottom wants to reach the top. 
The person can climb either 1 stair or 2 stairs at a time. 
Count the number of ways, the person can reach the top.
                                  
                                 __ top
                              __|
                           __|                        
                   base __|
*/

function numWays(n){
  
  if (n<2) {
    return 1
  }

 return numWays(n-2) + numWays(n-1) 
}

// driver code
console.log(numWays(5));
