let per = [ 'b' ,'c'];

function permutation(permu){
  if(permu.length === 0) return [[]];

   let firstele = permu[0];
   let permutationwithoutfirst =  permutation(permu.slice(1));
     let finalpermutation = [];
   permutationwithoutfirst.forEach(element => {
       for(let i=0 ; i<=element.length ; i++){
       let singleperwithfirst = [...element.slice(0,i) , firstele , ...element.slice(i)];
       finalpermutation.push(singleperwithfirst);
       }
   })
  return finalpermutation;
}

console.log(permutation(per));