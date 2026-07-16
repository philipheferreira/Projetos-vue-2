/*
quando falamos sobre "callbacks", estamos nos referindo a funções que 
são passadas como argumento para outras funções e que são executadas 
em um momento posterior (assíncronamente ou após um evento).

Porém, no ecossistema do Vue 2, o termo "callback" ganha um significado 
muito especial. Ele se refere principalmente aos Ganchos de Ciclo de Vida 
(Lifecycle Hooks), aos Callbacks do Watcher e aos Callbacks de Eventos.

1. Callbacks do Ciclo de Vida (Lifecycle Hooks)
Esta é a utilização mais famosa. O Vue 2 gerencia o ciclo de vida 
dos seus componentes (criação, montagem no DOM, atualização e destruição).
 Em cada uma dessas fases, o Vue "chama de volta" (callback) 
 funções específicas que você definiu no seu componente, permitindo 
 que você execute código no momento exato.

Exemplos mais comuns:

created(): Chamado logo após o componente ser criado na memória. 
Ótimo para buscar dados na API (já tem acesso aos data e methods, 
mas o HTML ainda não foi renderizado).
mounted(): Chamado quando o componente já foi inserido no DOM. 
Ótimo se você precisar manipular elementos HTML diretamente 
(ex: usar document.getElementById).
destroyed(): Chamado quando o componente é destruído. Ótimo 
para limpar timers (como setInterval) ou remover event listeners.

2. Callbacks do watch (Observadores)
O Vue 2 permite que você observe mudanças em uma variável (data). 
Quando essa variável muda de valor, o Vue dispara uma função de 
callback para que você reaja a essa mudança.

3. Callbacks de Eventos do DOM
Quando você usa a diretiva v-on (ou o atalho @) no template do 
Vue 2, a função que você chama também é um callback. Ela será 
executada apenas quando o usuário clicar, digitar, etc.


4. Callbacks Assíncronos (Promises, Axios, etc.)
Dentro dos métodos ou ganchos de ciclo de vida do Vue, você 
frequentemente lidará com callbacks tradicionais do JavaScript, 
como resolver Promises (usando .then()) ou fazer requisições HTTP.

⚠️ A Armadilha do this no Vue 2 (Muito Importante)
A confusão mais comum com callbacks no Vue 2 envolve a palavra-chave 
this. No Vue 2, o this representa a instância do seu componente (onde 
ficam seus data, methods, etc.).

O Vue 2 faz a mágica: Os callbacks nativos do Vue (como created, 
mounted, watch e methods) são automaticamente "amarrados" (bound) 
ao this do componente. Você não precisa se preocupar com eles.
O JavaScript estraga a mágica: Se você usar uma função de seta (=>) 
ou uma função tradicional anônima dentro de um callback assíncrono 
(como um setTimeout ou um .then()), o this pode ser perdido (apontando 
para window ou undefined).

Como resolver:
Use funções de seta (Arrow Functions) dentro de callbacks assíncronos, 
pois elas "herdam" o this do contexto pai (que no caso será o componente Vue).


Resumo
No Vue 2, callbacks são funções que você escreve e entrega para o 
Vue (ou para o JavaScript nativo) executar no momento certo. Seja 
quando o componente nasce (created), quando uma variável muda (watch), 
quando o usuário clica (@click) ou quando uma API responde (.then()). 
A única regra de ouro é ficar de olho no this ao usar funções assíncronas.

*/


<template>
    <div>
        <button @click="alertaFn">Botão alerta component filho</button>
    </div>
</template>

<script>
    export default{
        name:'componentFilho',
        props: { alertaFn: Function }
    }
</script>

<style scoped>

</style>