

function calcularDescuento(precioInicial,descuento){
    var valorSinDesc= 100-descuento;
    var valorConDesc= (precioInicial*valorSinDesc)/100;

    return valorConDesc;
}

/*function precioSinDescuento(){
    var input1= document.getElementById("inputPrice");
    var valor1= parseInt(input1.value);
    var input2= document.getElementById("inputDescount");
    var valor2= parseInt(input2.value);

    const varSinDesc= calcularDescuento(valor1,valor2);
    document.getElementById("divDesc").innerHTML = `<p class="centrar">El Precio aplicando el Descuento es de: ${varSinDesc}</p>`;
}*/

function descuentoCupones(){
    var input1= document.getElementById("inputPrice");
    var valor1= parseInt(input1.value);

    var input2= document.getElementById("inputDescount");
    var valor2= input2.value;

    if (valor2==="oro"){
        const varSinDesc= calcularDescuento(valor1,25);
        document.getElementById("divDesc").innerHTML = `<p class="centrar">El Precio aplicando el Descuento es de: ${varSinDesc}</p>`;
    }
    else if(valor2==="plata"){
        const varSinDesc= calcularDescuento(valor1,20);
        document.getElementById("divDesc").innerHTML = `<p class="centrar">El Precio aplicando el Descuento es de: ${varSinDesc}</p>`;
    }
    else if(valor2==="bronce"){
        const varSinDesc= calcularDescuento(valor1,10);
        document.getElementById("divDesc").innerHTML = `<p class="centrar">El Precio aplicando el Descuento es de: ${varSinDesc}</p>`;
    }
    else{
        document.getElementById("divDesc").innerHTML = `<p class="centrar">Cupon No Valido</p>`;
    }
}