<template>
    <div>
        <button @click="alertaFn">Botão alerta component filho</button>
    </div>
</template>

<script>
    export default{
        name:'componentFilho',
        props: { alertaFn: Function }
    }
</script>

<style scoped>

</style>