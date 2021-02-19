function cardrm(){
    var cn=document.getElementById("in1").value ;
    var cnc=cn.slice(12 , 16);
    document.getElementById("p1").innerHTML="************"+cnc ;
 




}

function poam(){

    var cn=document.getElementById("in2").value ;
    switch(cn){
case "potato":
    document.getElementById("p2").innerHTML="1 is the Desired value." ; 
break ;
case "potatopotato":
    document.getElementById("p2").innerHTML="2 is the Desired value." ;
    break;
    case "potatoapple":

document.getElementById("p2").innerHTML="1 is the Desired value." ;
break;
default:

    document.getElementById("p2").innerHTML="You Have Not Entered the Matching Text." ;
    





}

}



function repet(){
    var c1=document.getElementById("in3").value ;
    document.getElementById("p3").innerHTML=c1.repeat(2) ;




}


function chk(){

    var c2=document.getElementById("in4").value ;
    if (c2<=10000){

        document.getElementById("p4").innerHTML="HRA: "+0.2*c2 ;
        document.getElementById("p5").innerHTML="HRA: "+0.8*c2 ;
    }
else if (c2<=20000){
    document.getElementById("p4").innerHTML="HRA: "+0.25*c2 ;
    document.getElementById("p5").innerHTML="HRA: "+0.9*c2 ;

}
else if(c2>20000){
    document.getElementById("p4").innerHTML="HRA: "+0.3*c2 ;
    document.getElementById("p5").innerHTML="HRA: "+0.95*c2 ;

}

}
function chkk1(){
    var c3=document.getElementById("in5").value ;
if (c3<=50){
    var c1=c3*0.5;
    var c2=0.2*c1;
    var c4=c1+c2
    document.getElementById("p6").innerHTML="Your bill is : "+c4  ;


}
else if (c3<=150){
    var c1=c3*0.75;
    var c2=0.2*c1;
    var c4=c1+c2
    document.getElementById("p6").innerHTML="Your bill is : "+ c4;


}

else if (c3<=250){
    var c1=c3*1.20;
    var c2=0.2*c1;
    var c4=c1+c2
    document.getElementById("p6").innerHTML="Your bill is : "+ c4;

}
else if (c3>250){
    var c1=c3*1.50;
    var c2=0.2*c1;
    var c4=c1+c2
    document.getElementById("p6").innerHTML="Your bill is : "+ c4;
}











}
function chkk11() {
    var number=document.getElementById("in6").value;
    let sum = 0;
    for (let i = 0; i <= number; i++) {
  
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      
      document.getElementById("p7").innerHTML=sum;
        }
      }
    }