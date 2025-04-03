function isHexCodeValid(hex){
    const isAphabet = ['a','b','c','d','e','f'];
    const isNumber = [0,1,2,3,4,5,6,7,8,9];
    const size = hex.length
    let check = false;
    if(hex[0]==='#' && size === 7){
        console.log("Inside");
        const newHex = hex.toLowerCase();
        for(let i = 1; i<size;i++){
            let num = Number(hex[i]);
            
            // Validation is alphabet or number
            if (num.toString() === 'NaN'){
                console.log('Alphabet');
                
                let loop = 0;
                for (let ele of isAphabet){
                    // console.log(newHex[i],ele,check);
                    if (newHex[i] === ele){
                        check=true;
                        break;
                    }
                    loop+=1;
                    console.log(loop);
                }
                if(loop===isAphabet.length){
                    check=false;
                    break;
                }
            }else{
                console.log("Number");
                let loop=0;
                for (let ele of isNumber){
                    if (num === ele){
                        check=true;
                        break;
                    }
                    loop+=1
                }
                if(loop===isAphabet.length){
                    check=false;
                    break;
                }
            }
        }
    }
    return check;
}
console.log(isHexCodeValid("#11GHIE"));
