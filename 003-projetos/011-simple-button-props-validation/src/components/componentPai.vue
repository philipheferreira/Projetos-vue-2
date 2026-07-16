<template>
    <div>
        <button @click="alterarNome">Alterar Nome</button>
        <component-filho bind:nomeLocalComponentFilho1="nomeCompletoLocalComponentPai" :nomeLocalComponentFilho2="nomeCompletoLocalComponentPai" bind:nomeLocalComponentFilho3="nomeCompletoLocalComponentPai" :nomeLocalComponentFilho4="12314123"/> <!-- Nome local está esperando receber array ou string, como está recebendo numero retornara erro -->
    </div>
</template>

<script >
import componentFilho from './componentFilho'
    export default{
        name: 'componentPai',
        components: {componentFilho},
        data(){
            return {
                nomeCompletoLocalComponentPai: 'Philiphe Siqueira Ferreira'
            }
        },
        methods: {
            alterarNome() {
                this.nomeCompletoLocalComponentPai = 'Leticia Martins Wanzeller'
            }
        }
    }
</script>

<styles coped>

</styles>