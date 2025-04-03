/*
1
01
101
0101
10101
*/

let n=5;
for(let i=1;i<=n;i++){
    str='';
    if(i%2!==0){
        console.log("odd");
        
        str+=1;
        let loop = 2;
        for(j=1;j<=(i-loop);j++){
            for(let k=0;k<i;k++){
                str+=k;
            }
        }
        loop++;
        console.log(str);
    }else{
        console.log("even");
        
        for(let j=1;j<=i;j++){
            for(let k=0; k<i;k++){
                str+=k
            }
        }
        console.log(str);
    }
    
    
}