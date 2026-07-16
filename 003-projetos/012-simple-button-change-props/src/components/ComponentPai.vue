/* 

*/

<template>
    <div>
        <button @click="alterarNome">Alterar nome no component Filho</button>
        <ComponentFilho :nomeLocalComponentFilho="nomeCompletoLocalComponentPai"></ComponentFilho>
    </div>
</template>

<script>
import ComponentFilho from './ComponentFilho.vue';

    export default{
        name: 'componentPai',
        components: {
            ComponentFilho
        },
        data(){
            return{
                nomeCompletoLocalComponentPai: 'Philiphe Ferreira'
            }
        },
        methods:{
            alterarNome(){
                this.nomeCompletoLocalComponentPai = 'Leticia Algo'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>