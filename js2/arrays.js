const array = [];

let quantity = parseInt(prompt('INSERT THE QUATITY OF VALUES THAT YOU GONNA PUT INTO'));

for(i = 0 ; i < quantity; i++ ){
    let  num = prompt('INSERT THE NUMBER' + (i + 1) );
    while(isNaN(num)){
        num = prompt(' Is not a valid value');

    }
    array.push(parseInt(num));
    let max = Math.max.apply(null,array)
    console.log(max);
    
}