let n = parseInt(prompt("INGRESA LA CIFRA"));
let s = 0;

while(n > 0){
    s = s + (n % 10)
    
    n =  Math.floor(n/10);

}
alert('la suma es ' + s);