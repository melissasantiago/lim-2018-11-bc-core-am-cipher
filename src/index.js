
 const desplazar1 = document.getElementById('desplazar1');
 const text1 = document.getElementById('text1');
 const btnCifra = document.getElementById('btnCifra');
 const btnDscifra = document.getElementById('btnDscifra');
 const text2 = document.getElementById('text2');


 btnCifra.addEventListener('click',llamarFuncion);
 btnDscifra.addEventListener('click',llamarDsfuncion);


function llamarFuncion(){
text2.value =cifrar(parseInt(desplazar1.value),text1.value);
 }

 function llamarDsfuncion() {
 text2.value =dscifrar(parseInt(desplazar1.value),text1.value);
  }

 function cifrar(desplaz,cifrarLe){
   let resultado = '';

   for (let i = 0 ; i<cifrarLe.length ; i++){
   let asc = cifrarLe.charCodeAt(i);
    let formula = (asc - 65 + desplaz )% 26 + 65;
    resultado =resultado + String.fromCharCode(formula);
 }
  return resultado;
 }

 function dscifrar(desplaz,dscifrarLe){
     let dsresultado = '';
     let newdesplaz = (desplaz%26);
     for (let i = 0; i<dscifrarLe.length; i++){
         let desc = dscifrarLe.charCodeAt(i);
         let formula = (desc + 65 - newdesplaz)%26+65;
         dsresultado = dsresultado + String.fromCharCode(formula);
     }
     return dsresultado;
  }
