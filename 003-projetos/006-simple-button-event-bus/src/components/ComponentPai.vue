<!-- O Event Bus (ou "Barramento de Eventos") é um padrão de comunicação utilizado no Vue.js para permitir que componentes se comuniquem entre si, mesmo quando não são pai e filho diretos. 

Para entender bem, precisamos lembrar como o Vue funciona normalmente:

Pai passa dados para Filho: Usa props.
Filho avisa o Pai: Usa $emit.
Mas e se dois componentes forem "irmãos" (estiverem lado a lado)? Ou se estiverem muito distantes na árvore de componentes? O Pai teria que repassar a mensagem manualmente, o que é trabalhoso. É aí que entra o Event Bus.

A Analogia do Rádio
Imagine o Event Bus como uma Estação de Rádio.

O Emissor (Componente A): Quer enviar uma mensagem. Ele não vai até a casa do Componente B. Ele liga para a Estação de Rádio e diz: "Passe a mensagem: 'Olá'".
O Event Bus (Estação de Rádio): Recebe a mensagem e a transmite no ar.
O Receptor (Componente B): Está com o rádio ligado sintonizado naquela estação. Quando a mensagem "Olá" é transmitida, o Componente B a ouve e executa uma ação.
Como funciona na prática?
Tecnicamente, o Event Bus é apenas uma instância do Vue (vazia) que você importa nos seus componentes. Ele serve apenas como um "correio".

-->

<template>
    <div>
        <component-um :nomeLocal="nome"/> <!-- Não possui o comando receber o metodo emit aqui pois a informação está sendo mandada pelo barramento usando event bus -->
        {{ nome }}
    </div>
</template>

<script>
import barramento from '@/barramento' // o Arroba significa que vai linkar com a raiz do projeto, que é o src
import ComponentUm from './ComponentFilho.vue'
export default {
    name: 'componentPai',
    components: {
        ComponentUm
    },
    created() {
        barramento.$on('comando-alterar-nome', (nomeLocalRecebido)=> { /* barramento.$on está recebendo a informação pelo barramento, 
            usando o emit do outro componente, que o nome é comando-alterar-nome para identificar */
            this.nome = nomeLocalRecebido
        })
    },
    data () {
        return {
            nome: 'Philiphe Siqueira Ferreira'
        }
    }
}
</script>

<style>

</style>