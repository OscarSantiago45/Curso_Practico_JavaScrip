//Codigo del cuadrado
function PerimetroCuadrado(lado){
    return lado*4;
}

function AreaCuadrado(lado){
    return lado*lado;
} 

//Codigo del Triangulo
function perimetroTriangulo(lado1,lado2,base){
    resultado= lado1+lado2+base;
    return resultado;
}

function calcularAlturaI(lado1,lado2,base){
    if(lado1===lado2){
        var valor1= (base*base)/2;
        var resultado= Math.sqrt(valor1);
        return resultado;
    }
    else if(lado2===base){
        var valor1= (lado1*lado1)/2;
        var resultado= Math.sqrt(valor1);
        return resultado;
    }
    else if( lado1===base){
        var valor1= (lado2*lado2)/2;
        var resultado= Math.sqrt(valor1);
        return resultado;
    }
    else{
        var resultado= "No es un triangulo Isosceles";
        return resultado;
    }
}

function areaTriangulo(base,altura){
    return (base*altura)/2 ;
}

//Codigo del Circulo
function diametroCirculo(radioCirulo){
    return radioCirulo*2;
};

const PI= Math.PI;

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}


function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;
    
    const perimetro= PerimetroCuadrado(value);
    document.getElementById("divCuadrado").innerHTML = `<p>El Perimetro del Cuadrado es: ${perimetro} cm</p>`;
}

function calcularArea(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const area= AreaCuadrado(value);
    document.getElementById("divCuadrado").innerHTML = `<p>El Area del Cuadrado es: ${area} cm2</p>`;
}

function calcularPerimetroTriangulo(){
    const input1= document.getElementById("InputLado1T");
    const value1= parseInt(input1.value);
    const input2= document.getElementById("InputLado2T");
    const value2= parseInt(input2.value);
    const input3= document.getElementById("InputBaseT");
    const value3= parseInt(input3.value);

    const perimetro= perimetroTriangulo(value1,value2,value3);
    const altura= calcularAlturaI(value1,value2,value3);
    var a= document.getElementById("InputAltura")
    a.value = altura;
    document.getElementById("divT").innerHTML = `<p>El Perimetro del Triangulo es: ${perimetro}</p>`;
}

function calcularAreaTriangulo(){
    const input3= document.getElementById("InputBaseT");
    const value3= parseInt(input3.value);
    const input4= document.getElementById("InputAltura");
    const value4= parseInt(input4.value);

    const perimetro= areaTriangulo(value3,value4);
    document.getElementById("divT").innerHTML = `<p>El Area del Triangulo es: ${perimetro}</p>`;
}


function calcularDiametroCirculo(){
    const input1= document.getElementById("InputRadio");
    const value1= parseInt(input1.value);

    const diametro= diametroCirculo(value1);

    document.getElementById("divCir").innerHTML = `<p>El Diametro del Circulo es: ${diametro}</p>`;
}

function calcularPerimetroCirculo(){
    const input1= document.getElementById("InputRadio");
    const value1= parseInt(input1.value);

    const diametro= perimetroCirculo(value1);

    document.getElementById("divCir").innerHTML = `<p>El Perimetro del Circulo es: ${diametro}</p>`;
}

function calcularAreaCirculo(){
    const input1= document.getElementById("InputRadio");
    const value1= parseInt(input1.value);

    const diametro= areaCirculo(value1);

    document.getElementById("divCir").innerHTML = `<p>El Area del Circulo es: ${diametro}</p>`;
}
console.groupEnd();

