<template>
    <div>
        <component-filho>
            <button @click="alertar">Botão</button>
        </component-filho>
    </div>
</template>

<script>
import ComponentFilho from './ComponentFilho.vue';
export default {
    name: 'componentPai',
    components: {ComponentFilho},
    data (){
        return{
            mensagem: 'O botão foi apertado'
        }
    },
    methods: {
        alertar(){
            alert(this.mensagem)
        }
    }
    
}
</script>

<style>

</style>