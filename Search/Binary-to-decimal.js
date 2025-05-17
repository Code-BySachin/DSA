
function BinaryToDecimal(input){
    let pow = 0;
    let base = 2;
    let decimal = 0;
    const str= input.toString();
    for (let i=str.length-1;i>=0;i--){
        decimal += (base**pow) * Number(str[i]);
        pow++;
    }
    console.log(decimal);
    
}

BinaryToDecimal(10110001010101)

// It can be also solved through mathematics without usind to string

function BinaryToDecimal(input){
    while (input>0){
        num = input%10;
        //do operation and forward

        input = Math.floor(input/10);

    }
}
