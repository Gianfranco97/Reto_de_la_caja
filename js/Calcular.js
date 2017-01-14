function calcular () {
	var
		x= 0,
		n= document.formulario.pelotas.value,
		cantidad=0,
		y,
		respuesta = 0,
		j;
		if(n > 0){
			while(n>0){
				y=x;
				do{
					y--;
					cantidad++;
				}while(y > 0);
				x++;
				n--;
			}
			if(cantidad % 2 == 0){
				j = 2;
			}
			else{
				j = 3;
			}
			cantidad = cantidad - j;
			respuesta = (cantidad /2) + j;
		}	
	alert("En total existen " + respuesta + " combinaciones distintas");
} 
