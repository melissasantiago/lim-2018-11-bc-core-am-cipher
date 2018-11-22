
const desplazar1 = document.getElementById('desplazar1');
const text1 = document.getElementById('text1');
const btnCifra = document.getElementById('btnCifra');
const btnDscifra = document.getElementById('btnDscifra');
const text2 = document.getElementById('text2');



btnCifra.addEventListener('click',llamarFuncion);
btnDscifra.addEventListener('click',llamarDsfuncion);

//Creamos la llamarFuncion xq en addEventListener solo puede haber dos parametros ya que si
//llamamos la funcion Cifrar jalaria los parametros que ya existen en esa funcion
function llamarFuncion() {
text2.value =cifrar(text1.value,parseInt(desplazar1.value));
}

function llamarDsfuncion(){
text2.value=dscrifrar(text1.value,desplazar1.value);
}

// funcion para cifrar//
function cifrar(cifrarLe,desplaz){
  let resultado = '';

  for (let i = 0 ; i<cifrarLe.length ; i++){
   let formula = ((cifrarLe[i].charCodeAt())- 65 + desplaz ) % 26 + 65;
  let  result = String.fromCharCode(formula);
  resultado=resultado+result;
}
  return resultado;
}


//funcion para descifrar//
function dscrifrar(dscifrarLe,desplaz){
 let dsresultado = '';
 let newdesplaz = (desplaz%26);
for (let i = 0; i<dscifrarLe.length; i++){
  let desc = dscifrarLe.charCodeAt(i);
  const formula = (desc + 65 - newdesplaz)%26 + 65;
  dsresultado = dsresultado + String.fromCharCode(formula);
}
    return dsresultado;
}
