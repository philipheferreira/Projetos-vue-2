<template>
    <div>
        <button @click="pressionarFn(4)">4</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoQuatroComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>