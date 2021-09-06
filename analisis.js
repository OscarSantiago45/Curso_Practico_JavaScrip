//Helpers
function esPar(numero){
    return (numero % 2 ===0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );
    const promedioLista = sumaLista / lista.length;
    //document.getElementById("mensaje1").innerHTML = `Los datos utilizados fueron: ${valores.sort()} <br> La Media Aritmetica es: ${promedioLista}`;
    return promedioLista;
    
}
// Mediana Salarios
function medianaSalarios(lista){
    var mitad= parseInt(lista.length / 2)
    if (esPar(lista.length)){
        var personaMitad1= lista[mitad-1];
        var personaMitad2= lista[mitad];
        var mediana= calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }
    else{
        var personMitad= lista[mitad];
        return personMitad;
    }
}

//Calculando Meiana General
var salarios= colombia.map(
    function (persona){
        return persona.salary;
    }
);

var salriosOrder= salarios.sort(
    function (salaryA,SalaryB){
        return salaryA-SalaryB;
    }
);

var salariosSorted= salarios.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);
var medianaGeneral= medianaSalarios(salariosSorted);
//Mediana Top 10%
var spliceStart=(salariosSorted.length *90)/100;
var spliceCount=salariosSorted.length-spliceStart;
var salariosTop10= salariosSorted.splice(spliceStart,spliceCount);


var medianaTop10= medianaSalarios(salariosTop10);


console.log({
    medianaGeneral, 
    medianaTop10
});

