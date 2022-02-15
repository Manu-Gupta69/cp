let arr = [1,20,6,7,5,8,11,3];
let countinversion = 0;

function merge(leftarr ,  rightarr){
let mergearr = [];
let i = 0 ; j = 0;
 while(i < leftarr.length && j < rightarr.length ){
     if(leftarr[i] <= rightarr[j]){
      mergearr.push(leftarr[i]);
      i++;
     }else{
         countinversion += leftarr.length - i ;
         mergearr.push(rightarr[j])
         j++;
     }
 }
    while(i !== leftarr.length){
        mergearr.push(leftarr[i])
        i++;
    }
    while(j !== rightarr.length){
        mergearr.push(rightarr[j]);
        j++;
    }
    return mergearr;
}

function mergesort(arr){
    if(arr.length === 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));

    return merge(left , right);
   
}
let ans = mergesort(arr);
console.log(ans , countinversion);
