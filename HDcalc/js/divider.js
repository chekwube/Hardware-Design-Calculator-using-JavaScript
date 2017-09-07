//divider script


function voltage(){
	var V1, V2, R2;
	V1 = document.getElementById("Vin").value;
	V2 = document.getElementById("Vout").value;
	R2 = document.getElementById("R2").value;
	var R1 = V1*R2;
	R1 = R1/V2;
	R1 = R1-R2;
	R1 = R1.toFixed(3);

	document.getElementById("R1").innerHTML = "The value of resistor,R1 = "+R1+"kilo-ohms";
}
