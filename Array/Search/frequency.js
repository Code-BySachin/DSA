// frequency using array.
let arr = [1,2,1,3,4,6,2,3];
let obj={};
for(let key of arr){
    // console.log(key);
    if(obj[key]){
        obj[key]=obj[key]+1;
    }else{
        obj[key]=1
    }
}
console.log(obj);

