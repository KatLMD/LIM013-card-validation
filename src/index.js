import validator from './validator.js';

let numeroTarjeta = ''

let btn = document.getElementById('guardar')

btn.addEventListener('click',() => { 
   if (numeroTarjeta.length==16) {
      if(validator.isValid(numeroTarjeta)){
         ver('Su N° de tarjeta es VALIDA, felicidades sea registrado correctamente',true)
         //dialog diciendo que es valido 
      }else{
         ver('Su N° de tarjeta no es VALIDA',false)
         // dialog diciendo que es invalido 
      }   
   }else{
      ver('! Faltan completar los campos',false)
   }
   
});

let input = document.getElementById('numTarjeta')

input.addEventListener('input',(numero) => { 
   if(input.value.length==0){
      console.log('todo')
      input.value = ''
      numeroTarjeta = ''
   }else{
      console.log(numero)
      if(numero.inputType=="insertText"){
         let ultimodigito = numero.data
         numeroTarjeta = numeroTarjeta + ultimodigito
         input.value = validator.maskify(numeroTarjeta)
         console.log(numeroTarjeta,validator.maskify(numeroTarjeta))
      }else if(numero.inputType=="deleteContentBackward"){
         numeroTarjeta = numeroTarjeta.slice(0, -1)
         console.log(numeroTarjeta ,input.value)
      }else{
         input.value = ''
         numeroTarjeta = ''
      }
   }
   
 
});


document.getElementById('cerrar').onclick = function (){
   ver('')
}

function ver(resultado,tipo){
   let img = document.getElementById('imagen')
   
   if(tipo){
      img.src ="/imagenes/OK.png"
   }else{
      img.src ="/imagenes/ERROR.png"
   }

   if(resultado){
      document.getElementById('respuesta').innerText = resultado
     document.getElementById('e4_16').style.display="flex"
   }else{
     document.getElementById('e4_16').style.display="none"
   }

 }