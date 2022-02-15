function partition(arr ,low , high){
    let pivot = arr[low];
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

function  quicksort(array , low , high){
    if(low < high){
        let pivotPos= partition(array , low , high);
         quicksort(array , low , pivotPos -1);
         quicksort(array , pivotPos  +1 , high);
    }
}
let array = [4,6,2,5,7,9,1,3];
quicksort(array , 0 , array.length -1);
console.log(array);