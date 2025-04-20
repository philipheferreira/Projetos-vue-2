<template>
    <div>
        <component-filho :alertaFn="metodoAlerta"></component-filho> <!-- A funcionalidade atribui para o props alertaFn o metodo metodoAlerta-->
    </div>
</template>

<script>
    import componentFilho from './componentFilho'
    export default{
        name:'componentPai',
        components: {componentFilho},
        methods:{
            metodoAlerta(){ // metodo criado no pai que ira ser ativado pelo component filho
                alert("Componente filho está conectado e funcionando")
            }
        }
    }

</script>

<style scoped>

</style>