const generarNumeroAleatorio = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let rangoMin = parseInt(prompt("Ingresa el valor mínimo del rango:"));
  let rangoMax = parseInt(prompt("Ingresa el valor máximo del rango:"));
  
  let numeroAleatorio = generarNumeroAleatorio(rangoMin, rangoMax);
  
  alert("El número aleatorio dentro del rango es:", numeroAleatorio);
  