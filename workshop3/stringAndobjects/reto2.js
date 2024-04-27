function checkPassword(password){
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let tester= undefined;

    if(password.match(passwordCheck)){
        tester = true;
    } else{
        tester = false;
    }

    return tester
}

let init = true;

while(init){
    let password = prompt("Agrega una contraseña con un minimo de 8 caracteres, una letra, un numero y un caracter especial.");
    let check = checkPassword(password);

    if(check){
        alert("passaword check.");
        init +=1;
    }else{
        alert("ingresa una contraseña valida");
    }
}
