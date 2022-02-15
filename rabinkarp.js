let str = 'coderboltebicepsbolte';
let pattern = 'bolte';
function hashing(){
    let cal = 0;
     for(let i=pattern.length -1, j=0 ; i>=0 ; i-- , j++){
        cal += (pattern.charCodeAt(i)) * Math.pow(10 , j);
     }
     return cal;
}
let code = hashing();
console.log(code);
function rabin(){
    let runningcode = 0;
    for(let i= pattern.length-1 ,j=0 ; i>=0  ; i-- , j++){
      runningcode += str.charCodeAt(i) * Math.pow(10 , j);
    }
    console.log('runningcode ---->' , runningcode );
    for(let i = pattern.length , start=0 ; i<=str.length   ; i++ , start++){
         if(code === runningcode){
             console.log('running------>' , i)
             let k = 0 , j = Math.abs(pattern.length - i) ;
             console.log( j);
                 while(j < str.length && k < pattern.length){
                     if(str[j]!== pattern[k]){
                         break;
                     }
                     j++;
                     k++;
                 }
             if(k == pattern.length) return [Math.abs(pattern.length - i) , j-1];
         }
         runningcode -= str.charCodeAt(start) * Math.pow(10,pattern.length -1);
         console.log(str.charAt(start));
         runningcode *= 10;
         runningcode += str.charCodeAt(i) * Math.pow(10 , 0);
         console.log(str.charAt(i))
           console.log(runningcode);
    }
    return false;
}

console.log(rabin());