<!--  -->

<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'segundosComponent',
    mounted (){
        setInterval(() => {
            this.atualizarSegundosLocal()
        }, 1000)
    },
    props: {
        segundoLocal
    },
    methods: {
        atualizarSegundosLocal() {
            let agora = new Date()
            this.segundoLocal = agora.getSeconds()
        }
    }
}
</script>

<style>

</style>