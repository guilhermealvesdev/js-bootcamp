//Aqui criamos a função scream.
const scream = (texto) => `${texto.toUpperCase()}!`

/*
    Aqui estamos exportando a função como "default", isto é, uma
    função padrão do arquivo. Qualquer outra função que desejamos
    exportar não pode ser como default, terá que ser por nome (named).
*/
export {scream as default}