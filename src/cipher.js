window.cipher = {

encode: (desplaz,cifrarLe)=>
  {
  let resultado = '';

  for (let i = 0 ; i<cifrarLe.length ; i++){
  let asc = cifrarLe.charCodeAt(i);
   let formula = (asc - 65 + desplaz )% 26 + 65;
   resultado =resultado + String.fromCharCode(formula);
}
 return resultado;
},


decode: (desplaz,dscifrarLe) =>
  {
    let dsresultado = '';
    let newdesplaz = (desplaz%26);
    for (let i = 0; i<dscifrarLe.length; i++){
        let desc = dscifrarLe.charCodeAt(i);
        let formula = (desc + 65 - newdesplaz)%26+65;
        dsresultado = dsresultado + String.fromCharCode(formula);
    }
    return dsresultado;
}
};
