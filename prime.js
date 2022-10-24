// Check whether a number is Prime or not

function checkprime(num){
  let factors=0;
  for(let i=1; i<=num; i++){
    if(num%i==0){
      factors++
    }
  }

  if(factors==2){
    console.log("Prime Number");
  }else{
    console.log("Not a Prime Number");
  }
}

checkprime(10);
checkprime(13);
checkprime(9);