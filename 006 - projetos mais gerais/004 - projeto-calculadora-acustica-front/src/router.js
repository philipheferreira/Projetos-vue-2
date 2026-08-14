import Vue from 'vue'
import Router from 'vue-router' // para utilizar a biblioteca de rotas do vuue instalar 
import SobreComponent from './components/Sobre.vue'
import CalculadoraAcusticaComponent from './components/CalculadoraAcustica.vue'
import AcusticaEducacionalComponent from './components/AcusticaEducacional.vue'

Vue.use(Router)//ativa os comandos de vue e encapsulando os comandos da biblioteca rota

export default new Router({//inicializa as operações de rotas
    mode: "history",
    routes: [{
        path: '/',//rota
        component: SobreComponent//Component importado ativado quando acessado a rota
    }, {
        path: '/calculadora-Acustico',
        component: CalculadoraAcusticaComponent
    }, {
        path: '/acustica-Educacional-Projeto',
        component: AcusticaEducacionalComponent
    }]
})