let n=5;
let noOfspace = 0;
for(let i = n; i>0;i--){
    str='';
    for(let j=1;j<=i;j++){
        str+='*'
    }
    
    for(let spaceloop = noOfspace;spaceloop>0;spaceloop--){
        str+=' '
    }
    // noOfspace+=1;
    for(let k=1;k<=i;k++){

        str+="*";
    }
    noOfspace+=2;
    console.log(str);
}
noOfspace=n+1;
// console.log(noOfspace);

for(let i=2;i<=n;i++){
    str='';
    for(let j=1;j<=i;j++){
        str+='*';
    }
    // console.log(str);
    for(let k=1;k<=noOfspace;k++){
        str+=" ";
    }
    for(let l=1;l<=i;l++){
        str+='*'
    }
    // console.log(noOfspace);
    
    console.log(str);
    
    noOfspace-=2;
}