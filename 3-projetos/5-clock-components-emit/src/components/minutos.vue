<template>
    <div></div>
</template>

<script>
export default{
    name: 'componentMinuto',
    mounted () {
        setInterval(() => {
            this.atualizarMinutosLocal() // ativando o metodo de atualizar minutos
            this.$emit('atualizar-minutos-local', this.minutoLocal) // repassar para o componente pai o metodo atualizarMinutosLocal e o valor de minutoLocal
        }, 1000)
    },

    data () {
        return{
            minutoLocal: null
        }
    },
    methods: {
        atualizarMinutosLocal(){
            let agora = new Date() // pegando a biblioteca Date
            this.minutoLocal = agora.getMinutes() // passando o valor para getMinutes
        }
    }
}
</script>

<style>


</style>