<template>
    <div>
        <component-filho nomeLocal1="1" nomeLocal2="Philiphe Ferreira"/> <!-- Nome local está esperando receber array ou string, como está recebendo numero retornara erro -->
    </div>
</template>

<script >
import componentFilho from './componentFilho'
    export default{
        name: 'componentPai',
        components: {componentFilho}
    }
</script>

<styles coped>

</styles>