<template>
    <div>
        <button @click="pressionarFn(5)">5</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoCincoComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>