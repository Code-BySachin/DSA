let n = 20;
let space = n-1
let str='';
for (let i=1;i<=n;i++){
    let _space ='';
    if(i===1){
        str+='*'
    }else{
        for(let j=1;j<=2;j++){
            str+='*'
        }
    }
    for (let k=1; k<=space;k++){
        _space+=' '
    }
    console.log(_space+str);
    space--
    
}