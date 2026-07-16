<template>
    <div>
        <button @click="alterarNome">Alterar nome pelo componente pai</button>
        <ComponentFilho :nomeLocalComponentFilho="nomeCompletoLocalComponentPai" @comando-reiniciar-nome="nomeCompletoLocalComponentPai = $event"></ComponentFilho>
    </div>
</template>

<script >
import ComponentFilho from './componentFilho.vue';

    export default{
        name: 'ComponentPai',
        components:{
            ComponentFilho
        },
        data(){
            return{
                nomeCompletoLocalComponentPai: 'Philiphe Siqueira Ferreira'
            }
        },
        methods: {
            alterarNome() {
                this.nomeCompletoLocalComponentPai = "Leticia Martins Wanzeller"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>