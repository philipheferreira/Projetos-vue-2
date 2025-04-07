<template>
    <div>
        {{ minuto }}
    </div>
</template>

<script>
export default{
    name: 'componentMinuto',
    mounted () {
        this.atualizarMinutos()
        setInterval(this.atualizarMinutos, 1000)
    },
    data () {
        return{
            minuto: null
        }
    },
    methods: {
        atualizarMinutos(){
            let agora = new Date()
            this.minuto = agora.getMinutes()
        }
    }
}
</script>

<style>


</style>