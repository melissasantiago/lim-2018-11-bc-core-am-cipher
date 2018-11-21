



const desplazar1 =document.getElementById('desplazar1');
const 





function cifrar(cifrarLe,desplaz){
  let resultado = '';

  for (let i = 0 ; i<cifrarLe.length ; i++){
   let asc = cifrarLe.charCodeAt(i);
   const formula = (asc - 65 + desplaz)%26 + 65;
   resultado = resultado + String.fromCharCode(formula);
}
 return resultado;
}
console.log(cifrar('AMOR',100));

//funcion para descifrar
function dscrifrar(dscifrarLe,desplaz){
 let dsresultado = '';
 let newdesplaz = (desplaz%26);
for (let i = 0; i<dscifrarLe.length; i++){
      let desc = dscifrarLe.charCodeAt(i);
      const formula = (desc+ 65-newdesplaz)%26+65;
      dsresultado = dsresultado + String.fromCharCode(formula);
}
    return dsresultado;
}
console.log(dscrifrar('WIKN',100));
