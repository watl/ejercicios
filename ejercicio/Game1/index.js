$(function () {

    $(document).on("click", "#btnApl", function (evt) {
  
     //recibir valores
    let arregloString = $("#txt1").val();
    let valorN = $("#txt2").val();

     //Ejecutar funcion
     let result = ConjuntoNumeros(arregloString,valorN);
     $("#Textarea1").val(result);
    });

    function ConjuntoNumeros(arregloString,valorN){
        /*
        * se obtiene valores string y se convierte a tipo array
        * con la funcion {map} se realiza el cambio de string tipo number
        */   
       var arraynumeros = arregloString.split(',').map(Number);
       let resultado = "";//valor de retorno

       let s = new Set();//almancena datos para validar
       //recorre arreglo para encontrar valores pares que sumados coincidad con el valor de N
       for (let i = 0; i < arraynumeros.length; ++i)
       {
           let temp = valorN - arraynumeros[i];
           // checking for condition
           if (s.has(temp)) {
               resultado =  "El conjunto de numeros de la suma de N = "
               + valorN + " es el siguiente (" + arraynumeros[i]
               + ", " + temp + ")";           
           }
           s.add(arraynumeros[i]);     
       }

       return resultado;

    }

  

});