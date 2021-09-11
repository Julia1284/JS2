
function calcSum(){
   let digit1 = document.getElementById('input1');
   let digit2 = document.getElementById('input2');
   let result = Number(digit1.value)+Number(digit2.value);// преобразуем в число
   document.getElementById ('resultsum').innerHTML=result;
}


function calcSubtract(){
   let digit1 = document.getElementById('input3');
   let digit2 = document.getElementById('input4');
   let result = Number(digit1.value)-Number(digit2.value);// преобразуем в число
   document.getElementById ('resultsubtract').innerHTML=result;
}
function calcDiv(){
   let digit1 = document.getElementById('input5');
   let digit2 = document.getElementById('input6');
   let result = Number(digit1.value)/Number(digit2.value);// преобразуем в число
   document.getElementById ('resultdivision').innerHTML=result;
}
function calcMulty(){
   let digit1 = document.getElementById('input7');
   let digit2 = document.getElementById('input8');
   let result = Number(digit1.value)*Number(digit2.value);// преобразуем в число
   document.getElementById ('resultmulty').innerHTML=result;
}