function palindrome(str){

    const remCaracteres = /[\W_]/g;
    const minusJuntas = str.toLowerCase().replace(remCaracteres, "");
    const reverteStr = minusJuntas.split("").reverse().join(""); 

    return reverteStr === minusJuntas;
}

console.log("A dama admirou o rim da amada");
console.log(palindrome("A dama admirou o rim da amada"));

console.log("A dama admirou o rim da amado");
console.log(palindrome("A dama admirou o rim da amado"));
