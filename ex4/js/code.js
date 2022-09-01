let valores = [true,5,false,"hola","adios",2];

function mayorQue(){
    palabras = valores.filter(element => typeof element === "string");
    if(palabras[0] > palabras[1]){
        document.write(palabras[0]+" es mayor que "+palabras[1]);
    }else{
        document.write(palabras[1]+" es mayor que "+palabras[0]);
    }
}

function mostrarBoolean(){ //metodo find no funciona con booleans,me devulve array vacio
    document.write(!true+"\n");
    document.write(!false);
}

function operaciones(){ //no me funciona con numeros, no rellena el array
    let suma = valores[1]+valores[5];
    let mult = valores[1]*valores[5];
    let rest = valores[1]-valores[5];
    let div = valores[1]/valores[5];

    let calc = [suma,mult,rest,div]
    let names = ["suma","multiplicacion","resta","division"]
    for(let i=0;i<calc.length;i++){
        document.write(names[i]+": "+calc[i]+"\n");
    }
}