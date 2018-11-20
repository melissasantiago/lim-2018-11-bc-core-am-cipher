function cifrar(cifrarLe,desplaz){
  let resultado = '';

  for (let i = 0 ; i<cifrarLe.length ; i++){
   const asc = cifrarLe.charCodeAt(i);
   const formula = (asc - 65 + desplaz)%26 + 65;

  resultado = resultado + String.fromCharCode(formula);
}

 return resultado;
}

console.log(cifrar('AMOR',7));
