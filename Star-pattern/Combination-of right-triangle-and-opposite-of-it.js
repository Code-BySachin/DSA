n=5;
for(let i=1;i<=5;i++){
    str='';
    for(let j=1; j<=i;j++){
        str+='*';
    }
    console.log(str);
    
    if(i==n){
        for(let k=n-1;k>0;k--){
            str='';
            for(l=1;l<=k;l++){
                str+='*';
            }
            console.log(str);
        }
    }
}