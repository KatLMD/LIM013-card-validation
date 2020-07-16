import validator from './validator.js';

console.log(validator);


alert("ES IMPORTANTE VALIDAR TU TARJETA PARA CONTINUAR CON TU COMPRA");






function guardarUsuario()
{
    nombre = document.getElementById('inputNombre').value 
    document.getElementById('nombre').textContent = nombre
    document.getElementById("inicio").style.display='none'
    document.getElementById("bienvenido").style.display='block'
    document.getElementById("seleccion").style.display='block'

  }

