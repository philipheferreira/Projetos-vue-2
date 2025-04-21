<template>
    <div>
        <button @click="pressionarFn(1)">1</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoUmComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>