<template>
<div>
    {{ nomeLocal2 }}
</div>
</template>

<script>

    export default {
        name: 'componentFilho2',
        props: {
            nomeLocal2: {
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

<style>


</style>