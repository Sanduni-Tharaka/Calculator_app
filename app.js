let display = document.getElementById("display");


function press(num){
display.value += num;
}


function calculate(){
try{
display.value = eval(display.value);
}catch{
display.value = "Error";
}
}


function clearDisplay(){
display.value = "";
}