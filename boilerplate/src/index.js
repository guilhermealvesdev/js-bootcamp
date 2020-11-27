/*
    Aqui usamos IMPORT para chamar a função SCREAM de SCREAM.JS.
    Não necessariamente precisamos passar a extensão de JS.

    Como estamos chamando uma função DEFAULT (e não NAMED), podemos
    chamar sem as chaves. Inclusive, podemos até chamá-la de outra
    coisa, que estamos referenciando o valor padrão (default),
    e a função funcionará normalmente.
*/

import {quadrado} from './utilities'
import grito from './scream'

console.log(grito('teste'));
console.log(quadrado(10));