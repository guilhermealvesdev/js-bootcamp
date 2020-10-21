/*
    Aqui criamos uma CLOSURE.
    O que é closure? É uma forma de fazer com que as variáveis dentro de uma função se refere à forma como
    funções definidas dentro de um "contexto léxico" (i.e. o corpo de uma função, um bloco, um arquivo fonte)
    acessam variáveis definidas nesse contexto.

    As closures também podem ser definidas como uma função "filho" que existe dentro de outra função "pai", e que tem uma
    referência nessa função "pai".

    Nesse caso, criamos uma função chamada "criarGorjeta" que recebe como parâmetro
    um valor.

    Ele retorna (return) uma função que recebe como parâmetro o total,
    pega o valor da gorjeta, divide por 100 e adiciona o valor da gorjeta ao total,
    e retorna o total, criando a closure.

    Referência: https://medium.com/@stephanowallace/javascript-mas-afinal-o-que-s%C3%A3o-closures-4d67863ca9fc
    https://pt.stackoverflow.com/questions/1859/como-funcionam-closures-em-javascript
*/
const criarGorjeta = (gorjeta) => {    
    return (total) => {
        gorjeta = gorjeta / 100;

        total = total * gorjeta

        return total
    }
}

//Aqui, criamos três funções: Uma pra adicionar 10% de gorjeta, outra com 15%, e outra com 20%.
const gorjeta10 = criarGorjeta(10);
const gorjeta15 = criarGorjeta(15);
const gorjeta20 = criarGorjeta(20);

/*
    Aqui, chamamos as funções passando como parâmetro o total (já que a função de criar gorjeta já existe),
    e passamos o total.
*/
console.log(gorjeta20(190));
console.log(gorjeta15(190));
console.log(gorjeta10(190));