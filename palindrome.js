let N=5  
let str= "ketan"
function checkPalindrome(N, str) {
    let bag1="";
    let bag2="";
    
    for(let i=0; i<=str.length-1; i++)
{
        bag1 += str[i];
    }for(let i=str.length-1; i>=0; i--)
{
        bag2 += str[i];
    } 
    if (bag1==bag2)
{
        console.log("Yes");
    }else
{
        console.log("No");
}   
}