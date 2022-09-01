function infoString(palabra){
    let upper = 0;
    let lower = 0;
    // recorremos el string
    for (let i = 0; i < palabra.length; i++) {
        let code = palabra[i].charCodeAt();
        
        // si pertenece a las mayúsculas
        if (code >= 65 && code <= 90) {
            upper++;
        }
        // si pertenece a las minúsculas
        else if (code >= 97 && code <= 122) {
            lower++;
        }
    }
    if(upper==0){
        alert("palabra formada por minusculas");
    }else if(upper>0&&lower>0){
        alert("palabra esta formada por "+ lower +" minusculas y "+ upper +" mayusculas")
    }else{
        alert("palabra formada por mayusculas")
    }        
}

