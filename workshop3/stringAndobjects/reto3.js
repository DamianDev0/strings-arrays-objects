
function checkEmail(email){

const check = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let validateEmail = check.test(email);

return validateEmail
}


let init = true;

while(init){
let email = prompt("ingresa tu email:");
let verify = checkEmail(email);
if(verify){
alert("Has ingresado un email valido");
}else{
alert("email incorrecto");
}
}
