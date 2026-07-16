/*
O $emit é um dos conceitos mais importantes no Vue.js (versão 2) e é a 
peça fundamental para a comunicação entre componentes.

Para entender o $emit, primeiro precisamos lembrar da regra de ouro da 
arquitetura do Vue: "Props descem, eventos sobem" (Props down, events up).

O componente pai passa dados para o filho usando props.
O componente filho avisa o pai que algo aconteceu (ou envia dados de volta) 
usando $emit.

O que é o $emit?
É um método interno de todo componente Vue que permite ao filho 
disparar (emitir) um evento personalizado. O componente pai fica 
"escutando" esse evento e pode reagir a ele executando uma função.


*/

<template>
    <div>
        {{ nomeLocalComponentFilho }}
        <button @click="reiniciarNome">Reiniciar valor original Nome pelo componente filho usando emit</button>
    </div>
</template>

<script>
    export default{
        name: 'componentFilho',
        data(){
            return{
                nomeLocalCriadoParaMudarEmEmit: ''
            }
        },
        props: {
            nomeLocalComponentFilho: String
        },
        methods: {
            reiniciarNome(){
                this.nomeLocalCriadoParaMudarEmEmit = this.nomeLocalComponentFilho
                this.nomeLocalCriadoParaMudarEmEmit = 'Philiphe Siqueira Ferreira'
                this.$emit('comando-reiniciar-nome', this.nomeLocalCriadoParaMudarEmEmit);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>