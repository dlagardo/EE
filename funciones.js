/* let edad2 = parseInt(prompt("Ingrese su edad : "));
let salir = 0;
let edad3 = 0;
let condicion = 1;
var valor = isNaN(edad2);;
while (condicion === 1) {
	
	if (valor === true) {
		console.log("Debe ingresar numero");
		alert(("Debe ingresar numero"));
	} else {
		if (edad2 < 18) {
			console.log("USTED ES MENOR DE EDAD");
			alert(("USTED ES MENOR DE EDAD"));
		} else {
			console.log("USTED ES Mayor DE EDAD");
			alert(("USTED ES Mayor DE EDAD"));
		}
	}

	let salir = parseInt(prompt(" Si Desea seguir presione 2: "));
	if (salir === 2) {

		let edad3 = parseInt(prompt("Ingrese su edad : "));
		edad2 = edad3;
	} else {
		condicion = 0;
	 	console.log("Gracias por su Visita");
		alert(("Gracias por su Visita"));
	}
	valor = isNaN(edad2);
}  */

saludo();
function saludo(){
         console.log("Bienvenidos");
         alert(("Bienvenidos"));
}
let edad = parseInt(prompt(" Ingrese Edad : "));
var valor = isNaN(edad);
var valor2=0;
var valor3=0;
var salir=0;


while(valor2===0 && edad!==null){
  
    if (valor === true) {
        
        console.log("Debe ingresar numero");
        alert(("Debe ingresar numero"));
        let edad = parseInt(prompt(" Ingrese Edad : "));
        var valor = isNaN(edad);	
	} else {
		
        calcular(edad);
        function calcular(edad){
            let edadaux=2021-edad;
                    console.log("Nacio en : "+edadaux);
                    alert(("Nacio en : ")+edadaux);
            }
	    let salir = parseInt(prompt(" Si Desea seguir presione 2: "));
	    if (salir!==  2) {
         valor2=1;
	 	 
         valor=1;
        }else{
            let edad = parseInt(prompt(" Ingrese Edad : "));
            var valor = isNaN(edad);
        }
	}
        
}

let x=0;
while(x===0){
	let compra = parseInt(prompt(" Si Desea realizar compra presione 1: "));
	if(compra!==1){
		x=1;
	}

	if(compra===1){
		let compra2 = parseInt(prompt(" Ingrese Monto a Gastar: "));
     	calcularIva(compra2);

	}
			
	}

	calcularMult();

function calcularMult(){
	let mult = parseInt(prompt(" Si Desea saber si un numero es multiplo ingrese 1: "));
	if(mult===1){
		let num1=parseInt(prompt("ingrese numero a dividir : "));
		let num2=parseInt(prompt("ingrese numero2 a dividir : "));
		var resto = num1 % num2;   
			if ( resto == 0 ){
			  alert("multiplo");
			}else{
				alert("No es multiplo");
			}
	}
	
}

function calcularIva(compra2){
	let iva=0;
 if(compra2 >=10000){
	iva=(compra2*10.5)/100
	alert(("El pago de Iva sera : " +iva));
 }else{
	alert(("El pago de Iva sera : " +iva));
 }

}

		console.log("Gracias por su Visita");
		 alert(("Gracias por su Visita"));



