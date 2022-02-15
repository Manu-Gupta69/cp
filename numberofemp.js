let test = {
 A : 'C',
 B : 'C',
 C  : 'F',
 D : 'E',
 E : 'F',
 F : 'F'
}

let treemap = {}
let ceo ;
for(let key in test){

    if(test[key] === key.toString()){
        ceo = key;
    }

    else if(!treemap.hasOwnProperty(test[key])){
        treemap[test[key]] = [];
        treemap[test[key]].push(key);
    }else{
        treemap[test[key]].push(key);
    }
}

let reporting = {}

//tree traverse recursive

function traverse(node , treemap1){
   if(!treemap1.hasOwnProperty(node)){
      reporting[node] = 0;
       return 1;
   }

   let total = 0;

   for(let emp of treemap1[node]){
      total +=  traverse(emp , treemap1);
   }
   reporting[node] = total;
   return total + 1;
}
traverse(ceo , treemap);

console.log(reporting);