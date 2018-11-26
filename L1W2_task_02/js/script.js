function recursion(x) {
    if (x >= 1 ) {
      console.log(x);
      recursion(x-1);
    } 
}   
recursion(10);