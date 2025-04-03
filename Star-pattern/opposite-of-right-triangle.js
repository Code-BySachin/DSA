// ********using repeat() Method*********

// let n= 10;
// let space = n-1;
// for (let i=1;i<=n;i++){
//     console.log(' '.repeat(space) + '*'.repeat(i));
//     space--
    
// }

// ***********Without Method***********

let n=5;
let noOfSpace= n-1;
for (let i=1;i<=n;i++){
    let str='';
    let space = '';
    for (let j=1; j<=i;j++){
         str+="*" ;
    }
    for (k=1; k<= noOfSpace;k++){
        space+=' ';
    }
    console.log(space + str);
    noOfSpace--
    
}
