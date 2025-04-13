<template>
    <div>
        <componentFilho1 /> <!-- O component pode ser chamado pelo nome definido no codigo -->
        <component-filho1 /> <!-- Ou pela nomenclatura dada pela separação de letras maisculas -->
        <app-component-filho2 /> <!-- Nome criado para o component 2 e usado para a chamada -->
    </div>
</template>

<script>
import componentFilho1 from './componentFilho1'
import componentFilho2 from './componentFilho2'
    export default {
        name: 'componentPai',
        components: {
            componentFilho1,
            'app-component-filho2' : componentFilho2 // Dando um nome de chamada para o segundo component criado
        },
        data () {
            return{

            }
        }
    }
</script>

<style scoped>

</style>