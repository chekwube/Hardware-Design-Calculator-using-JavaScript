//transformer script

function transformer(){
	var P,Vp,Vs,Np,Ns,Ip,Is,gauge;

	P = document.getElementById("P").value;
	Vp = document.getElementById("Vp").value;
	Vs = document.getElementById("Vs").value;
	Np = document.getElementById("Np").value;
	
	Ip = P/Vp;
	Is = P/Vs;
	Ns = (Np*Ip)/Is;
	
	Ip = Ip.toFixed(3);
	Is = Is.toFixed(3);
	Ns = Ns.toFixed(3);
	
	document.getElementById("first_three").innerHTML = 
	"Primary current, Ip = "+Ip+"Ampere</br>Secondary current,Is = "+Is+"Ampere</br>Number of secondary turn, Ns = "+Ns+"turns.";


	if(Ip<=0.090){
	 gauge = "the wire guage for the primary winding = 40";
 }
 else if(Ip<=0.110){
	 gauge = "the wire guage for the primary winding = 39";
 }
  else if(Ip<=0.126){
	 gauge = "the wire guage for the primary winding = metric 1";
 }
 else if(Ip<=0.130){
	 gauge = "the wire guage for the primary winding = 38";
 }
 else if(Ip<=0.163){
	 	 gauge = "the wire guage for the primary winding = metric 1.12";
 }
 else if(Ip<=0.170){
	 gauge = "the wire guage for the primary winding = 37";
 }
 else if(Ip<=0.200){
	 gauge = "the wire guage for the primary winding = metric 1.25";
 }
 else if(Ip<=0.210){
	 	 gauge = "the wire guage for the primary winding = metric 1.4";
 }
 else if(Ip<=0.260){
	 gauge = "the wire guage for the primary winding = 35";
 }
  else if(Ip<=0.270){
	  	 gauge = "the wire guage for the primary winding = metric 1.6";
  }
   else if(Ip<=0.330){
	   	 gauge = "the wire guage for the primary winding = 34";
   }
 else if(Ip<=0.430){
	 	 gauge = "the wire guage for the primary winding = 33";
 }
 else if(Ip<=0.510){
	 	 gauge = "the wire guage for the primary winding = metric 2.0";
 }
 else if(Ip<=0.530){
	 	 gauge = "the wire guage for the primary winding = 32";
 }
 else if(Ip<=0.700){
	 	 gauge = "the wire guage for the primary winding = 31";
 }
 else if(Ip<=0.86){
	 	 gauge = "the wire guage for the primary winding = 30";
 }
 else if(Ip<=1.2){
	 	 gauge = "the wire guage for the primary winding = 29";
 }
 else if(Ip<=1.4){
	 	 gauge = "the wire guage for the primary winding = 28";
 }
 else if(Ip<=1.7){
	 	 gauge = "the wire guage for the primary winding = 27";
 }
 else if(Ip<=2.2){
	 	 gauge = "the wire guage for the primary winding = 26";
 }
 else if(Ip<=2.7){
	 	 gauge = "the wire guage for the primary winding = 25";
 }
 else if(Ip<=3.5){
	 	 gauge = "the wire guage for the primary winding = 24";
 }
 else if(Ip<=4.7){
	 	 gauge = "the wire guage for the primary winding = 23";
 }
 else if(Ip<=7){
	 	 gauge = "the wire guage for the primary winding = 22";
 }
 else if(Ip<=9){
	 	 gauge = "the wire guage for the primary winding = 21";
 }
 else if(Ip<=11){
	 	 gauge = "the wire guage for the primary winding = 20";
 }
 else if(Ip<=14){
	 	 gauge = "the wire guage for the primary winding = 19";
 }
 else if(Ip<=16){
	 	 gauge = "the wire guage for the primary winding = 18";
 }
 else if(Ip<=19){
	 	 gauge = "the wire guage for the primary winding = 17";
 }
 else if(Ip<=22){
	 	 gauge = "the wire guage for the primary winding = 16";
 }
 else if(Ip<=28){
	 	 gauge = "the wire guage for the primary winding = 15";
 }
 else if(Ip<=32){
	 	 gauge = "the wire guage for the primary winding = 14";
 }
 else if(Ip<=35){	
		gauge =  "the wire guage for the primary winding = +13";
 }
 else if(Ip<=41){
	 	 gauge = "the wire guage for the primary winding = 12";
 }
 else if(Ip<=47){
	 	 gauge = "the wire guage for the primary winding = 11";
 }
 else if(Ip<=55){
	 	 gauge = "the wire guage for the primary winding = 10";
 }
 else if(Ip<=64){
	 	 gauge = "the wire guage for the primary winding = 9";
 }
 else if(Ip<=73){
	 	 gauge = "the wire guage for the primary winding = 8";
 }
 else if(Ip<=89){
	 	 gauge = "the wire guage for the primary winding = 7";
 }
 else if(Ip<=101){
	 	 gauge = "the wire guage for the primary winding = 6";
 }
 else if(Ip<=118){
	 	 gauge = "the wire guage for the primary winding = 5";
 }
 else if(Ip<=135){
	 	 gauge = "the wire guage for the primary winding = 4";
 }
 else if(Ip<=158){
	 	 gauge = "the wire guage for the primary winding = 3";
 }
 else if(Ip<=181){
	 	 gauge = "the wire guage for the primary winding = 2";
 }
 else if(Ip<=211){
	 	 gauge = "the wire guage for the primary winding = 1";
 }
 else if(Ip<=245){
	 	 gauge =  "the wire guage for the primary winding = 0";
 }
 else if(Ip<=283){
	 	 gauge = "the wire guage for the primary winding = 00";
 }
 else if(Ip<=328){
	 	 gauge =  "the wire guage for the primary winding = 000";
 }

 else{
	 gauge = "current has no guage in the american wire guage table.";
 }

 	 document.getElementById("gauge_p").innerHTML = gauge;
 
//for secondary winding

 if(Is<=0.090){
	 gauge = "the wire guage for the secondary winding = 40";
 }
 else if(Is<=0.110){
	 gauge = "the wire guage for the secondary winding = 39";
 }
  else if(Is<=0.126){
	 gauge = "the wire guage for the secondary winding = metric 1";
 }
 else if(Is<=0.130){
	 gauge = "the wire guage for the secondary winding = 38";
 }
 else if(Is<=0.163){
	 	 gauge = "the wire guage for the secondary winding = metric 1.12";
 }
 else if(Is<=0.170){
	 gauge = "the wire guage for the secondary winding = 37";
 }
 else if(Is<=0.200){
	 gauge = "the wire guage for the secondary winding = metric 1.25";
 }
 else if(Is<=0.210){
	 	 gauge = "the wire guage for the secondary winding = metric 1.4";
 }
 else if(Is<=0.260){
	 gauge = "the wire guage for the secondary winding = 35";
 }
  else if(Is<=0.270){
	  	 gauge = "the wire guage for the secondary winding = metric 1.6";
  }
   else if(Is<=0.330){
	   	 gauge = "the wire guage for the secondary winding = 34";
   }
 else if(Is<=0.430){
	 	 gauge = "the wire guage for the secondary winding = 33";
 }
 else if(Is<=0.510){
	 	 gauge = "the wire guage for the secondary winding = metric 2.0";
 }
 else if(Is<=0.530){
	 	 gauge = "the wire guage for the secondary winding = 32";
 }
 else if(Is<=0.700){
	 	 gauge = "the wire guage for the secondary winding = 31";
 }
 else if(Is<=0.86){
	 	 gauge = "the wire guage for the secondary winding = 30";
 }
 else if(Is<=1.2){
	 	 gauge = "the wire guage for the secondary winding = 29";
 }
 else if(Is<=1.4){
	 	 gauge = "the wire guage for the secondary winding = 28";
 }
 else if(Is<=1.7){
	 	 gauge = "the wire guage for the secondary winding = 27";
 }
 else if(Is<=2.2){
	 	 gauge = "the wire guage for the secondary winding = 26";
 }
 else if(Is<=2.7){
	 	 gauge = "the wire guage for the secondary winding = 25";
 }
 else if(Is<=3.5){
	 	 gauge = "the wire guage for the secondary winding = 24";
 }
 else if(Is<=4.7){
	 	 gauge = "the wire guage for the secondary winding = 23";
 }
 else if(Is<=7){
	 	 gauge = "the wire guage for the secondary winding = 22";
 }
 else if(Is<=9){
	 	 gauge = "the wire guage for the secondary winding = 21";
 }
 else if(Is<=11){
	 	 gauge = "the wire guage for the secondary winding = 20";
 }
 else if(Is<=14){
	 	 gauge = "the wire guage for the secondary winding = 19";
 }
 else if(Is<=16){
	 	 gauge = "the wire guage for the secondary winding = 18";
 }
 else if(Is<=19){
	 	 gauge = "the wire guage for the secondary winding = 17";
 }
 else if(Is<=22){
	 	 gauge = "the wire guage for the secondary winding = 16";
 }
 else if(Is<=28){
	 	 gauge = "the wire guage for the secondary winding = 15";
 }
 else if(Is<=32){
	 	 gauge = "the wire guage for the secondary winding = 14";
 }
 else if(Is<=35){	
		gauge =  "the wire guage for the secondary winding = +13";
 }
 else if(Is<=41){
	 	 gauge = "the wire guage for the secondary winding = 12";
 }
 else if(Is<=47){
	 	 gauge = "the wire guage for the secondary winding = 11";
 }
 else if(Is<=55){
	 	 gauge = "the wire guage for the secondary winding = 10";
 }
 else if(Is<=64){
	 	 gauge = "the wire guage for the secondary winding = 9";
 }
 else if(Is<=73){
	 	 gauge = "the wire guage for the secondary winding = 8";
 }
 else if(Is<=89){
	 	 gauge = "the wire guage for the secondary winding = 7";
 }
 else if(Is<=101){
	 	 gauge = "the wire guage for the secondary winding = 6";
 }
 else if(Is<=118){
	 	 gauge = "the wire guage for the secondary winding = 5";
 }
 else if(Is<=135){
	 	 gauge = "the wire guage for the secondary winding = 4";
 }
 else if(Is<=158){
	 	 gauge = "the wire guage for the secondary winding = 3";
 }
 else if(Is<=181){
	 	 gauge = "the wire guage for the secondary winding = 2";
 }
 else if(Is<=211){
	 	 gauge = "the wire guage for the secondary winding = 1";
 }
 else if(Is<=245){
	 	 gauge =  "the wire guage for the secondary winding = 0";
 }
 else if(Is<=283){
	 	 gauge = "the wire guage for the secondary winding = 00";
 }
 else if(Is<=328){
	 	 gauge =  "the wire guage for the secondary winding = 000";
 }

 else{
	 gauge = "current has no guage in the american wire guage table.";
 }

 
 	 document.getElementById("gauge_s").innerHTML = gauge;
	}
	
