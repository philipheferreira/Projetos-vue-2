<template>
    <div>
        <p> {{ mensagem }} </p>
    </div>
</template>

<script>
export default {
    name: 'createdComponente',
    created(){
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(data => {
            this.usuario = data;
        });
    },
    data () {
        return{
            mensagem: "Bem vindo ao Vue"
        }
    }
}
</script>

<style>

</style>