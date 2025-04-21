<template>
    <div>
        <button @click="pressionarFn(6)">6</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoSeisComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>