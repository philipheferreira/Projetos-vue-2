 <template>
    <div>
        <component-filho :nomeLocal="nome"/>
        {{ nome }}
    </div>
</template>

<script>
import barramento from '@/barramento'
import ComponentFilho from './ComponentFilho.vue'
export default {
    name: 'componentPai',
    components: {
        ComponentFilho
    },
    created() {
        barramento.$on('comando-alterar-nome', (nomeLocalRecebido)=> {
            this.nome = nomeLocalRecebido
        })
    },
    data () {
        return {
            nome: 'Philiphe Siqueira Ferreira'
        }
    }
}
</script>

<style>

</style>