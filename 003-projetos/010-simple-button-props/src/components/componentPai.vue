/* No Vue 2, os Props (abreviação de propriedades) são o mecanismo 
fundamental para a passagem de dados de um componente pai para um 
componente filho.

Eles formam a base da comunicação unidirecional (one-way data 
flow) no Vue. */

<template>
    <div>
        <button @click="alterarNome">Alterar nome no componente filho</button>
        <filho :nomeLocalComponentFilho="nomeCompletoLocalComponentPai" /> <!-- Componente pai passando uma info props para o componente filho -->
    </div>
</template>

<script>
import filho from './ComponentFilho' // importando componente filho no componentPai
    export default{
        name: 'ComponentPai',
        components: {
            filho // Chamando componente filho dentro da aplicação
        },
        data(){
            return{
                nomeCompletoLocalComponentPai: 'Philiphe Ferreira'
            }
        },
        methods: {
            alterarNome(){
                this.nomeCompletoLocalComponentPai = 'Leticia Algo'
            }
        }
    }
</script>

<style scoped>

</style>