// Rotate Array by k times
// Given an array of n elements and a number k, rotate the array by k times.
// For example, if the array is [1, 2, 3, 4, 5] and k is 2, the rotated array will be [ 4, 5, 1, 2, 3].

// Approach:
// 1. Reverse the first n-k elements of the array.
// 2. Reverse the last k elements of the array.
// 3. Reverse the entire array.
// 4. Return the rotated array.

function rotateArray(arr,k){
    const n=arr.length;
    // console.log(n);
    
    for (let i=0;i<(n-k-1);i++){
        for(let j=i+1;j<n-k)
        console.log(arr[i]<arr[i+1]);
         if(arr[i]<arr[i+1]){
            const temp = arr[i];
            
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            console.log("Swaped");
         }
    }
    // for(let i=(n-k);i<n;i++){
        
    // }
    console.log(arr);
    
}
rotateArray([1,2,3,4,5],2);
