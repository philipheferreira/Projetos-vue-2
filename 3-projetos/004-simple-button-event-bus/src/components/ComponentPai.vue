<!-- Comunicação via barramento é interessante para fazer uma comunicação direta que não precise passar para um outro componente. Só entre 2 componentes especificos
 sem precisar passar por um componente pai ou etc. Só direto entre 2 -->

<template>
    <div>
        <component-filho :nomeLocal="nome"/> <!-- Não possui o comando receber o metodo emit aqui pois a informação está sendo mandada pelo barramento usando event bus -->
        {{ nome }}
    </div>
</template>

<script>
import barramento from '@/barramento' // o Arroba significa que vai linkar com a raiz do projeto, que é o src
import ComponentFilho from './ComponentFilho.vue'
export default {
    name: 'componentPai',
    components: {
        ComponentFilho
    },
    created() {
        barramento.$on('comando-alterar-nome', (nomeLocalRecebido)=> { /* barramento.$on está recebendo a informação pelo barramento, 
            usando o emit do component filho, que o nome é comando-alterar-nome para identificar */
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