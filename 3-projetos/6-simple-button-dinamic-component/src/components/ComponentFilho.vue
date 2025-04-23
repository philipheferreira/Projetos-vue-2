<template>
    <div>
        <button @click="mensagemAlerta">Alerta</button>
    </div>
</template>

<script>
export default {
    name: 'componentFilho',
    props: {nomeLocal: String},
    methods: {
        mensagemAlerta(){
            alert(`Essa mensagem é de um alerta pelo ${this.nomeLocal}`)
        }
    }
}
</script>

<style>

</style>