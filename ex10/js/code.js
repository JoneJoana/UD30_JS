function palindromo(palabra){
    let quitarEspacios = palabra.split(" ").join("").toLowerCase();
    console.log(quitarEspacios);
    let inv = quitarEspacios.split("").reverse().join("");
    console.log(inv);
    if(inv === palabra){
        alert(palabra+" es un palindromo");
    }else{
        alert(palabra+" no es un palindromo");
    }

    let newStr = palabra.replace(/[\W_]/g,'').toLowerCase();
    let strReversed = newStr.split('').reverse().join('');

    alert(newStr === strReversed ? palabra+' es palindromo' : palabra+' no es palindromo')
}
