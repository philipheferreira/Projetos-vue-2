<template>
    <div>
        <button @click="metodoSelecionarComponent">Selecionar Component</button>
        <component :is="selecionarComponent" />
    </div>
</template>

<script>
import ComponentFilho1 from './ComponentFilho1.vue'
import ComponentFilho2 from './ComponentFilho2.vue'

export default {
    name: 'componentPai',
    components: {
        ComponentFilho1,
        ComponentFilho2
    },
    data () {
        return{
            selecionarComponent: 'ComponentFilho1',
            numero: 1
        }
    },
    methods: {
        metodoSelecionarComponent(){
            if(this.numero == 1){
                this.selecionarComponent = 'ComponentFilho2'
                this.numero++
            }else if(this.numero == 2){
                this.selecionarComponent = 'ComponentFilho1'
                this.numero--
            }
        }
    }
}
</script>

<style>

</style>