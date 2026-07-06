<template>
    <div>
        <button @click="pressionarFn(0)">0</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoZeroComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>