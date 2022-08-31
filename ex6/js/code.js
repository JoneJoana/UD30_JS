let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z",
    "S","Q","V","H","L","C","K","E","T"];

let dniUser;
let letraDni;
let calc;

function preguntarDNI(){
    dniUser = prompt("Introduce tu DNI completo");   
    extraerLetra(); 
}

function extraerLetra(){
    letraDni = dniUser.substring(dniUser.length-1);
}

function validarDNI(){
    dniUser = parseInt(dniUser);
    if(dniUser<0 || dniUser>99999999){
        alert("El numero facilitado es erroneo."); 
        return;
    }
    return true;
}

function calcLetra(){
    calc = dniUser%23;    
    calc = letras[calc];
}

function compararLetra(){
    if(calc == letraDni){
        alert("El numero y la letra indicados son correctos");
    }else{
        alert("La letra indicada no es correcta");
    }
}