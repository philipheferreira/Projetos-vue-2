<template>
    <div>
        <filho nomeLocal="Philiphe Ferreira" /> <!-- Componente pai passando uma info props para o componente filho -->
    </div>
</template>

<script>
import filho from './ComponentFilho' // importando componente filho no componentPai
    export default{
        name: 'ComponentPai',
        components: {
            filho // Chamando componente filho dentro da aplicação
        }
    }
</script>

<style scoped>

</style>