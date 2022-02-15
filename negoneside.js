function partition(arr ,low , high){
    let pivot = 0;
    let i = low ; 
    let j = high;
 while(i < j){
      while(arr[i] <= pivot){
        i++;    
    } 
      while(arr[j] > pivot){
        j--;
      } 
      if(i < j) {
        swap(arr , i , j);
      }
 }
 swap(arr , low , j);
  return j;
}

function swap(arr , idx1 , idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

let arr = [12, 11, -13, -5, 6, -7, 5, -3, -6];
partition(arr , 0 , arr.length -1 );
console.log(arr);

