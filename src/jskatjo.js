const validator = { 

    isValid:(numero)=>{
      var nuevoArray = numero.split("")// convertimos el numero en un arreglo y se le asigna a nuevoArray
      if (parseInt(numero.length==16)){
        return false;
      }
      var sumaTotal = 0 // creamos una variable con valor 0 para que se sume con los resultados parciales 
      nuevoArray.forEach((elemento,posicion)=> {
          elemento = parseInt(elemento)
          console.log(elemento)
          // posicion%2 =>  poscion es par  => respues es 0
          // posicion%2 =>  poscion es inpar => respueta es 1
          if (posicion%2==0) {
              console.log("soy par")
              var ab = 2*elemento
              if(ab>=10){
                  var a = Math.floor(ab/10)
                  var b = ab - a*10
                  sumaTotal = a + b + sumaTotal
              }else{
                  sumaTotal = ab  + sumaTotal
              }          
          }else{ 
              console.log("soy impar")
  
              sumaTotal = sumaTotal +elemento
  
          }
      }); 
      console.log(sumaTotal)
  
      if (sumaTotal%10==0) {
          console.log("Su tarjeta es valida")
          return true
          
      }else{
          console.log("Su tarjeta no es valida")
          return false
      }
    },
  
    
  
    maskify: function(number){
      let hash = number.replace(/.(?=.{4,}$)/g, '#');
      return hash;
    }
  
  };
  
  
    export default validator;
  
  
  
  
   /* maskify : (texto)=>{
      var valor =''
      if(texto.length>4){
        for(var i=0;i<texto.length-4;i++){
        valor = valor + '#'
      }
        return valor + texto.substring(texto.length-4,texto.length)
       }else{
        return texto
       }   
       */
   
  