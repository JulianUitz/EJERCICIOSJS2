

const palindromo = (texto)  => {
    const x = texto.toLowerCase(); 
    const a = x.replace(/\s/g, ''); 
    const c = a.split("").reverse().join(""); 
  
    if (a === c) {
      document.write("Esto SI es un palindromo");
    } else {
      document.write("Esto NO es un palindromo..");
    }
  
  }
  
  palindromo(prompt("Introduce tu frase para saber si es un palindromo"));