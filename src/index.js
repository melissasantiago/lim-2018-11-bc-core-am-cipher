
<<<<<<< HEAD
const desplazar1 =document.getElementById('desplazar1');
=======
const desplazar1 = document.getElementById('desplazar1');
>>>>>>> acfe50f5a77f72bad702873e01b7c556e41b6efb
const text1 = document.getElementById('text1');
const btnCifra = document.getElementById('btnCifra');
const btnDscifra = document.getElementById('btnDscifra');
const text2 = document.getElementById('text2');


btnCifra.addEventListener('click',llamarFuncion);
btnDscifra.addEventListener('click',llamarDsfuncion);

<<<<<<< HEAD


function llamarFuncion(){
text2.value =cifrar(text1.value,parseInt(desplazar1.value));
}
=======
btnCifra.addEventListener('click',llamarFuncion);
btnDscifra.addEventListener('click',llamarDsfuncion);
>>>>>>> acfe50f5a77f72bad702873e01b7c556e41b6efb

//Creamos la llamarFuncion xq en addEventListener solo puede haber dos parametros ya que si
//llamamos la funcion Cifrar jalaria los parametros que ya existen en esa funcion
function llamarFuncion() {
text2.value =cifrar(text1.value,parseInt(desplazar1.value));
}

function llamarDsfuncion(){
<<<<<<< HEAD
text2.value =dscrifrar(text1.value,parseInt(desplazar1.value));
}

=======
text2.value=dscrifrar(text1.value,desplazar1.value);
}
>>>>>>> acfe50f5a77f72bad702873e01b7c556e41b6efb

// funcion para cifrar//
function cifrar(cifrarLe,desplaz){
  let resultado = '';

  for (let i = 0 ; i<cifrarLe.length ; i++){
<<<<<<< HEAD
  let asc = cifrarLe.charCodeAt(i);
   let formula = (asc - 65 + desplaz )% 26 + 65;
   resultado =resultado + String.fromCharCode(formula);
=======
   let formula = ((cifrarLe[i].charCodeAt())- 65 + desplaz ) % 26 + 65;
  let  result = String.fromCharCode(formula);
  resultado=resultado+result;
>>>>>>> acfe50f5a77f72bad702873e01b7c556e41b6efb
}
  return resultado;
}
<<<<<<< HEAD

=======
>>>>>>> acfe50f5a77f72bad702873e01b7c556e41b6efb


//funcion para descifrar//
function dscrifrar(dscifrarLe,desplaz){
 let dsresultado = '';
 let newdesplaz = (desplaz%26);
for (let i = 0; i<dscifrarLe.length; i++){
<<<<<<< HEAD
      let desc = dscifrarLe.charCodeAt(i);
      let formula = (desc + 65 - newdesplaz)%26+65;
      dsresultado = dsresultado + String.fromCharCode(formula);
}
    return dsresultado;
 }
=======
  let desc = dscifrarLe.charCodeAt(i);
  const formula = (desc + 65 - newdesplaz)%26 + 65;
  dsresultado = dsresultado + String.fromCharCode(formula);
}
    return dsresultado;
}
>>>>>>> acfe50f5a77f72bad702873e01b7c556e41b6efb
