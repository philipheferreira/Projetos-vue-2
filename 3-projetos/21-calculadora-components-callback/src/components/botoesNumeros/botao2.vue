<template>
    <div>
        <button @click="pressionarFn(2)">2</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoDoisComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>