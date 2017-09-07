//frequency script
	

function calculate(){
	var f, c;	
	f = document.getElementById("freq").value;
	c = document.getElementById("capa").value;
	var T = 1/f;
	var t = T/2;
	var r = t/c*1e3;
	
	T = T.toFixed(3);
	t = t.toFixed(3);
	r = r.toFixed(3);
	
	document.getElementById("freq-ans").innerHTML = 
	"The period, T = "+T+"seconds </br> time,t = "+t+"seconds </br> resistor value,r = "+r+"kilo-ohms.";
}