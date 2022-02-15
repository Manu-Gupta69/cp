let str = 'Climbing the mountain'
let count = {}
let ans=[];
let word  =1;
for(let i = 0 ; i<=str.length ;i++ ){
    if(str[i] === " " || i== str.length){
        console.log(count);
        ans.push(Object.keys(count).join(''));
       count = {};
    }
    else if(!count.hasOwnProperty(str[i])){
        count[str[i]] = true;
    }
    else{
         delete count[str[i]];
    }
}



console.log(ans);
console.log(ans.join(' '));
