<template>
    <div>
        <button @click="pressionarFn(7)">7</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoSeteComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>