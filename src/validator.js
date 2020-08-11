const validator = { 

  isValid:(numero)=>{
    if (numero.length>16){
      return false;
    }
    var nuevoArray = numero.split("")// convierto el numero en un arreglo y se le asigna a nuevoArray
    var sumaTotal = 0 // creo una variable con valor 0 para que se sume con los resultados parciales 
    nuevoArray.forEach((elemento,posicion)=> {
        elemento = parseInt(elemento)
        // posicion%2 =>  poscion es par  => respuesta es 0
        // posicion%2 =>  poscion es inpar => respueta es 1
        if (posicion%2==0) {
            var ab = 2*elemento
            if(ab>=10){
                var a = parseInt(ab/10)
                var b = ab - a*10
                sumaTotal = a + b + sumaTotal
            }else{
                sumaTotal = ab  + sumaTotal
            }          
        }else{ 
            sumaTotal = sumaTotal +elemento
        }
    });
    if ((sumaTotal%10)==0) {
        return true;
    }
    else{
        return false;
    }
  },


maskify: function maskify (numero_tarjeta) {
  numero_tarjeta= numero_tarjeta.replace(/.(?=.{4})/g, "#");
  return numero_tarjeta;}
};


export default validator;
