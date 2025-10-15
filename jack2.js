function Cards (){
let firstInputEl= parseInt(document.getElementById("no1").value);
let secondInputEl= parseInt(document.getElementById("no2").value);
return {firstInputEl , secondInputEl}
}
let firstNoEl=document.getElementById("first");
let secondNoEl=document.getElementById("no2");
let sumEl=document.getElementById("sum")
let messageEl=document.getElementById("message")

function sumCards(){
const {firstInputEl , secondInputEl} = Cards ()
let sum= parseInt( firstInputEl + secondInputEl)
return sum
}



