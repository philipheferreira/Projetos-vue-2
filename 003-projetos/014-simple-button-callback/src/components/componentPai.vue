<template>
    <div>
        <button @click="alterarNome">Alterar nome pelo componente pai</button>
        <component-filho :nomeLocalComponentFilho="nomeCompletoLocalComponentPai" :reiniciarNome="reiniciarNomeUsandoCallback" :alertaFn="reiniciarNomeUsandoCallback"></component-filho> <!-- A funcionalidade atribui para o props alertaFn o metodo metodoAlerta-->
    </div>
</template>

<script>
    import componentFilho from './componentFilho'
    export default{
        name:'componentPai',
        components: {componentFilho},
        data(){
            return{
                nomeCompletoLocalComponentPai: 'Philiphe Siqueira Ferreira'
            }
        },
        methods:{
            metodoAlerta(){ // metodo criado no pai que ira ser ativado pelo component filho
                alert("Componente filho está conectado e funcionando")
            },
            alterarNome() {
                this.nomeCompletoLocalComponentPai = "Leticia Martins Wanzeller"
            },
            reiniciarNomeUsandoCallback() {
                this.nomeCompletoLocalComponentPai = 'Philiphe Siqueira Ferreira'
            }
        }
    }

</script>

<style scoped>

</style>