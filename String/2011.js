// 2011. Final Value of Variable After Performing Operations
var finalValueAfterOperations = function(operations) {
    var x = 0;
    for(var i=0;i<operations.length;i++){
      if (operations[i][1] == "-") {
        x--;
      } else {
        x++;
      }
    }
    return x; 
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));