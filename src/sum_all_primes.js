exports.sumPrimes = function (num) {
  var arr=[];
    var count=0;

    for(var j=2;j<=num;j++){
        for(var i=1;i<=j;i++){
            if(j%i===0){
                count++;   
            }
        }
        if(j==1){
            arr.push(j);
        }
        if(count==2){
            arr.push(j);
        }
    count=0;
    }
    
  return arr.reduce(function(sum, value) {
    return sum + value;
  });
}
