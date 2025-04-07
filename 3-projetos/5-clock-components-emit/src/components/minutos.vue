<template>
    <div>
        {{ minutoLocal }}
    </div>
</template>

<script>
export default{
    name: 'componentMinuto',
    mounted () {
        setInterval(() => {
            this.atualizarMinutosLocal()
            this.$emit('atualizar-minutos-local', this.minutoLocal)
        }, 1000)
    },

    data () {
        return{
            minutoLocal: null
        }
    },
    methods: {
        atualizarMinutosLocal(){
            let agora = new Date()
            this.minutoLocal = agora.getMinutes()
        }
    }
}
</script>

<style>


</style>