const produtos = [{nome: 'Mouse'}];
const product = productos [0];

/*
    Os valores nativos falso (FALSY) são: NaN, false, 0, '' (string vazia), null, e undefined.
    O resto é nativamente TRUTHY.
*/

if (product) {
    console.log('produto encontrado');
} else {
    console.log('produto não encontrado');
}