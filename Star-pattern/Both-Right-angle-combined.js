
// without method
let n = 5;
let noOfSpace = n-1;
for (let i=1;i<=n;i++){
    let str1 = ''
    let space = ''
    for(j=1;j<=i;j++){
        str1+='*';
    }
    for(k=1; k<=(noOfSpace*2) ; k++){
        space+=' '
    }
    console.log(str1+space+str1);
    noOfSpace--
}
