let str = 'abc';

function combinations(str){
    if(str === '') return [''];

    let startval = str[0];

    let returnedcombinationwithoutfirst = combinations(str.substr(1));
    let withfirst = returnedcombinationwithoutfirst.map(element => {
         return element+ startval;
    });
    return [...returnedcombinationwithoutfirst , ...withfirst];
}
console.log(combinations(str));