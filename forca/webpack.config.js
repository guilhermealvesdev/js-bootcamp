/*
    É um pouquinho elaborado o que acontece aqui, mas dá pra entender.

    Este é o arquivo de configuração do Webpack, que trabalha com módulos
    e outras coisas no JS. Aqui estamos fazendo ele minificar e exportar
    um arquivo index.js que criamos dentro de SRC.
*/

//Aqui associamos uma variável PATH e chamamos (require) o módulo 'path', do NODE.JS.
const path = require('path');

/*
    Aqui exportamos o arquivo usando module.exports.
    Criamos um objeto com dois valores: ENTRY e OUTPUT.

    O ENTRY recebe apenas uma string, que é o arquivo que estamos usando.

    O OUTPUT usa o método path.resolve do NODE.JS, e recebe dois parâmetros: o __DIRNAME,
    que nada mais é do que o valor da pasta desde o ROOT, e que é usado aqui de uma
    forma universal (por isso o path), e a pasta que queremos cuspir o arquivo, no caso, public/scripts.
    
    O FILENAME significa que é o nome do arquivo que queremos dar para o output.

    O MODULE permite que configuremos opções no sistema de módulos. A propriedade
    RULES espera uma array de objetos. Cada objeto é uma regra.

    O DEVSERVER faz todo o trabalho do live-server e mudança de arquivos (watch)
    numa ferramenta só.

    O DEVTOOL habilita um source map, igual ao SASS.

    Após isso, rodamos npm run webpack (que é o script que está no package.json).
*/
module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["env"]
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}

