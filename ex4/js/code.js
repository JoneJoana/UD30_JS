let valores = [true,5,false,"hola","adios",2];

function mayorQue(){
    if(valores[3] > valores[4]){
        document.write("hola es mayor que adios");
    }else{
        document.write("adios es mayor que hola");
    }
}

function mostrarBoolean(){
    document.write(!true+"\n");
    document.write(!false);
}

function operaciones(){
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