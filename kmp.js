let str = 'aefaefaefaedaefaedaefaef';
let pattern = 'aefaedaefaef';
let patterntable = createpattern(pattern);

console.log(kmp(str , pattern , patterntable));

function kmp(str , pattern , patterntable){
 let i=0 ; j=0 ;
 while(i<=str.length){
    if(str[i] === pattern[j]){
        if(j == pattern.length -1) return [Math.abs(i-pattern.length)+1 , i];
        i++;
        j++
    }
    else if (j>0){
        j = patterntable[j-1] + 1;
    }else{
        i++;
    }
 }
 return false;
}

function createpattern(patternstr){
  let j=0 , i=1;
  let patterntable = new Array(patternstr.length).fill(-1);
  while(i < patternstr.length){
      if(patternstr[i] === patternstr[j]){
          patterntable[i] = j;
          i++;
          j++
      }
      else if(j>0){
          j = patterntable[j-1] + 1
      }
      else{
          i++;
      }
  }
  return patterntable;
}