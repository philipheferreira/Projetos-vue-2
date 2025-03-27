<template>
    <q-page>
        <button @click="pressionarBotao1" >1</button>
    </q-page>
</template>

<script>
export default {
    name: 'botaoUmComponent',
    props: {
        displayLocal: String
    }, 
    methods: {
        pressionarBotao1(){
            let novoValor = this.displayLocal
                novoValor += 1
                this.$emit('pressionar-botao1', novoValor)
            }
    }
}
</script>

<style scoped>

button {
        width: 71.25px;
        cursor: pointer;
    }

</style>