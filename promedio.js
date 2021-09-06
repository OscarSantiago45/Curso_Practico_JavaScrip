
var valores=[];
function addValor(){
    var valor= document.getElementById("inputValor");
    const value1= parseInt(valor.value);
    if (value1>=0){
        valores.push(value1);
    }
    else{
        valores.push(0);
    }
    document.getElementById("inputValor").value = "";
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
      );
    const promedioLista = sumaLista / valores.length;
    document.getElementById("mensaje1").innerHTML = `Los datos utilizados fueron: ${valores.sort()} <br> La Media Aritmetica es: ${promedioLista}`;
    return promedioLista;
    
}

function enviarLista(){
    calcularMediaAritmetica(valores.sort());
}



let mediana;
function calcularMediana(dato,mitadLista){
  //debugger
  if (dato) {
    const elemento1 = valores[mitadLista - 1];
    const elemento2 = valores[mitadLista];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    console.log("entro a la validacion 1");
    mediana = promedioElemento1y2;
    document.getElementById("mensaje2").innerHTML = `El promedio de la Mediana por ser un dato par es: ${mediana}`;
  } else {
    mediana = valores[mitadLista];
    document.getElementById("mensaje2").innerHTML = `El elemento encontrado con la mediana es: ${mediana}`;
  }
}


function enviarValidacion(){
  const longitud= (valores.length);
  return esPar(longitud);
  
}


function esPar(numero) {
  if (numero%2 === 0) {
    return true;
  } else {
    return false; 
  }
}

function enviarDatoMediana(){
  var dato=enviarValidacion();
   var mitadLista = parseInt(valores.length / 2);
  calcularMediana(dato,mitadLista);
}


function Limpiar(){
    document.getElementById("inputValor").value = "";
    document.getElementById("mensaje1").innerHTML = ``;
    document.getElementById("mensaje2").innerHTML= "";
    valores=[];
}


//moda
function clacularModa(lista1Count){
  lista1Count = {};

valores.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];
/*console.log(moda);
document.getElementById("mensaje3").innerHTML = `La moda es: ${moda[0]}, se repite ${moda[1]} veces`;

//debugger
for(let i=0;i<lista1Array.length; i++ ){
  var valor1= lista1Array[0];
  var valor2= lista1Array[1];

  var suma=suma+(valor1[i]/valor2[i])
  console.log(suma);
  //console.log(lista1Array[i][i]);
}*/

}

function enviarDatoModa(){
  clacularModa(valores);
}


