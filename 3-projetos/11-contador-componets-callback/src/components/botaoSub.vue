<template>
    <div>
        <button @click="subFn">Subtrair Contador</button>
    </div>
</template>

<script>
    export default{
        name: 'botaoSomaComponent',
        props: { subFn: Function }
    }
</script>

<style scoped>

</style>