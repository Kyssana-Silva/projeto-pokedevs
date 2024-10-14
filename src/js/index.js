/*
Objetivo - quando clicar no pokedev da listagem, temos que esconder o cartão pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
Passo 1 - precisamos criar uma variável no JS par trabalhar com a listagem de pokedevs
Passo 2 - Identificar o evento de clique no elemento da listagem
Passo 3 - remover a classe aberto só do cartão que tá aberto
Passo 4 - ao clicar em um pokedev da listagem, pegamos o id dese pokedv pra saber qual cartão abrir
Passo 5 - remover a classe ativo que marca o pokedev selecionado na listagem
Passo 6 - adicionar a classe ativo no pokedev selecionado da listgem
 * / 
 //------------------------------------------------//
 /*Passo 1 */

 const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
/*
    esse é um jeito de fazer mas não é o mais recomendado
 /*passo 2*/
 /*---const devchu = document.getElementById('devchu');
 //função de seta (arrowlog)
 devchu.addEventListener('click',()=>{

 });--- */

 /*passo 2 feito para qualquer pokedev*/

 listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click",()=>{
        /*passo 3*/
        esconderCartaoPokedev();

        /*passo 4 */
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);


        /*passo 5 */

        desativarPokedevNaListagem();


        /*passo 6 */

        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
        

    })
 })

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
 