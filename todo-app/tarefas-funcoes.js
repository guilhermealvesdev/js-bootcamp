/*
    Função que pega as tarefas no localStorage.
    Ela checa se há algum dado local (alguma TAREFA que o usuário colocou).
    Se sim, atualizar a array tarefas.
    Se não, ele retorna uma nova array.
*/
function pegaTarefas(){
    const tarefasJSON = localStorage.getItem("tarefas");

    if (tarefasJSON !== null){
        return JSON.parse(tarefasJSON);
    } else {
        return [];
    }
}

/*
    Função que salva as tarefas no localStorage.

    PARÂMETRO: é a array que ele vai usar para ler o conteúdo e salvar a tarefa.
*/

function salvaTarefas(array) {
    localStorage.setItem("tarefas", JSON.stringify(array));
}


/*
    Função que renderiza todos os itens da array
*/
const renderizaFiltro = function(tarefas, filtro){

    /*
        Cria uma nova array (o filter cria) que retorna todos os itens da array TAREFAS (que veio no parâmetro)
        para armazenar apenas os que estiverem de acordo com o texto digitado no objeto filtro,
        que por sua vez é alimentado toda vez quando o usuário digita no campo de input
    */

    let filtrados = tarefas.filter(function(item){
        return item.activity.toLowerCase().includes(filtro.texto.toLowerCase());
    });

    /*
        Aqui é elaborado. Mas dá pra entender, juro.

        Pra retornar um valor no filter(), é preciso que alguma condicional seja TRUE.

        No caso, o JS pega a array "filtrados" e atualiza o conteúdo para mostar (return) apenas
        os valores que estiverem o oposto do filtro.ocultaCompletas (isto é, o checkbox. Se o checkbox
        estiver TRUE, o primeiro valor do return vira FALSE), OU o valor oposto do completed do item que
        ele usou para comparar.

        Vamos de novo: ao checar o checkbox, o !filtro.ocultaCompletas estará sempre FALSE (porque checado, está TRUE
        no DOM). Se deixar assim, nunca retornará nada com o checkbox ativo, certo? Então, precisamos colocar outra condicional,
        pro JS ir buscar os conteúdos da array principal que estão como completed para comparar.

        Aí, o JS procura no item que ele está comparando se é TRUE or FALSE. Como queremos que apareça
        apenas as que não estão completadas, a gente pede pra ele buscar o contrário de completed.

        Logo, as tarefas que estiverem na array com valor TRUE (isto é, completas), virarão FALSE no return, logo,
        não aparecerão se o valor do check estiver FALSE (porque os dois valores darão FALSE no final, e o filter() precisa
        de um TRUE pra renderizar algo). Se o valor do objeto estiver como FALSE (isto é, incompleto), virará TRUE no
        return, e aparecerá na lista final (uma tarefa que não foi completada ainda).
    */
    filtrados = filtrados.filter(function(item){
        return !filtro.ocultaCompletas || !item.completed;
    });

    /*
        Filtar incompletos.
        O JS cria uma array que retorna qualquer coisa que for diferente do que está completo (false).
        Então, as que tiverem FALSE, vão virar TRUE, e aparecer na lista.
        As que tiverem TRUE (completas), vão virar FALSE, e não vão aparecer.
    */
    const tarefasIncompletas = filtrados.filter(function(item){
        return !item.completed;
    });
    
    /*
        Limpar a barra de busca
    */
    document.querySelector('#lista').innerHTML = '';

    /*
        Aqui é adicionado ao à div #lista todo o conteúdo
        que retorna da função pegaResumo().
        Isto é, o título e a quantidade de itens.
    */
   document.querySelector('#lista').appendChild(pegaResumo(tarefasIncompletas));
    
    /*
        Aqui os itens filtrados são renderizados à tela.
        São pegos os itens da array filtrados e chamada a função
        gerarTarefasDOM(), que retorna um <p>, que é adicionado
        à div #lista.
    */
    filtrados.forEach(function(item){
        document.querySelector("#lista").appendChild(gerarTarefasDOM(item));
    });
};


/*
    Função que gera o elemento DOM <div> para cada tarefa
    (junto com um checkbox e um botão de remover), e retorna esse elemento.

    PARÂMETRO: É o item que vai ser lido da array e adicionado ao <p>.
*/
function gerarTarefasDOM(item) {
    //Container que tem todos o conteúdo da tarefa.
    const container = document.createElement('div');

    /*
        Aqui cria-se o checkbox.
        Ao ser renderizado, o valor de CHECKED é igual caso
        a tarefa tenha sido completada ou não.
    */
    const checkTarefa = document.createElement('input');
    checkTarefa.setAttribute('type', 'checkbox');
    checkTarefa.checked = item.completed;

    checkTarefa.addEventListener('change', function(){
        completarTarefa(item.id);
        salvaTarefas(tarefas);
        renderizaFiltro(tarefas, filtro);
    });
    
    //Span que tem o texto da tarefa.
    const spanTarefa = document.createElement('span');
    
    /*
        Cria-se o botão de remover.
        A cada clique, chama-se a função removerTarefa, passando o ID de qual
        tarefa foi clicada.
    */ 
    const botaoRemoveTarefa = document.createElement('button');
    botaoRemoveTarefa.textContent = "X";
    botaoRemoveTarefa.addEventListener('click', function(e){
        e.preventDefault();
        removerTarefa(item.id);
    });

    spanTarefa.textContent = item.activity;

    //Adiciona todos os elementos à div.
    container.appendChild(checkTarefa);
    container.appendChild(spanTarefa);
    container.appendChild(botaoRemoveTarefa);
    
    return container;
}

/*
    Função que cria o resumo de quantas tarefas existem.
    
    PARÂMETRO: Ele pega a array que tem a quantidade de tarefas incompletas, e renderiza
    a quantidade (length) que ela tem.
*/
function pegaResumo(arrayTarefasIncompletas){
    const resumo = document.createElement('h2');
    resumo.textContent = `Você tem ${arrayTarefasIncompletas.length} tarefas pra fazer`

    return resumo;
}

/*
    Função que remove uma tarefa. Ele usa o FINDINDEX pra procurar em todos os itens
    da array tarefa e procurar em qual posição (index) da array está o ID
    de acordo com o id passado pelo parâmetro.

    Se houver, ele remove da array (splice) usando a índice achada no findIndex,
    salva todas as tarefas no localStorage(salvaTarefas), e renderiza todas as tarefas de novo (salvaTarefas)

    PARÂMETRO: o ID da tarefa que estamos procurando remover.
*/
function removerTarefa(id) {
    const tarefaIndex = tarefas.findIndex(function(tarefa) {
        return tarefa.id === id;
    });

    if (tarefaIndex > -1) {
        tarefas.splice(tarefaIndex, 1);
        salvaTarefas(tarefas);
        renderizaFiltro(tarefas, filtro);
    }
}

/*
    Função que completa uma tarefa ao usuário clicar no checkbox.

    Aqui o JS procura (find) na array Tarefas o primeiro registro (que é o intuito da função find)
    que tiver do id igual ao id que foi passado no parâmetro. E esse valor é assimilado
    à variável "tarefa".

    Logo depois, há uma checagem pra ver se a tarefa não é undefined (isto é, se ela existe).
    Se ela existir, a propriedade "completed" dela é trocada (isto é, se ela estava FASLE, vira TRUE, e vice-versa).
    
    PARÂMETRO: o id da tarefa que estamos procurando completar.
*/

function completarTarefa(id) {
    const tarefa = tarefas.find(function(tarefa){
        return tarefa.id === id;
    });

    if (tarefa !== undefined) {
        tarefa.completed = !tarefa.completed;
    }
}