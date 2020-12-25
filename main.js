x = [];
function sa(){
var n1=document.getElementById("i1").value;
var n2=document.getElementById("i2").value;
var n3=document.getElementById("i3").value;
var n4=document.getElementById("i4").value;
x.push(n1);
x.push(n2);
x.push(n3);
x.push(n4);
console.log(x);
document.getElementById("d1").innerHTML=x;
document.getElementById("b1").style.display="none";
document.getElementById("b2").style.display="inline-block";
}
function so(){
    x.sort();
    console.log(x);
    document.getElementById("d1").innerHTML=x;
}