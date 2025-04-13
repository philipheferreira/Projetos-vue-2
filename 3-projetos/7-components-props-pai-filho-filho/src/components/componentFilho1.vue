<template>
    <div>
        {{ nomeLocal1 }}
    </div>
</template>

<script>

    export default {
        name: 'componentFilho1',
        props: {
            nomeLocal1: {
                type: String,
                required: true
            }
        },
        data () {
            return{

            }
        }
    }

</script>

<style scoped>

</style>