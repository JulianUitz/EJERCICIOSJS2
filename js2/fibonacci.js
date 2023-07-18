const generarSecuenciaFibonacci = (numeroMaximo)=> {
    let secuencia = [];
    let numeroAnterior = 0;
     let  numeroActual = 1;
  
    while (numeroAnterior <= numeroMaximo) {
      secuencia.push(numeroAnterior);
  
      let  siguienteNumero = numeroAnterior + numeroActual;
      numeroAnterior = numeroActual;
      numeroActual = siguienteNumero;
    }
  
    return secuencia;
  }
  
  let  numeroMaximo = parseInt(prompt("Ingresa el número máximo para la secuencia de Fibonacci:"));
  
  let  secuenciaFibonacci = generarSecuenciaFibonacci(numeroMaximo);
  
  console.log("La secuencia de Fibonacci hasta el número", numeroMaximo, "es:", secuenciaFibonacci.join(", "));
  