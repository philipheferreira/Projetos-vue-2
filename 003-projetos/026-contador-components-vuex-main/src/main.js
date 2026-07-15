import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        contador: 0
    },
    mutations: {
        somar(state) {
            state.contador++
        },
        subtrair(state) {
          state.contador--
        }
    },
    actions: { // permite utilizar os comandos dispacth para realizar as operações
        somar({ commit }) {
            commit('somar') // o nome precisa ser o mesmo da mutation
        },
        subtrair({ commit }){
          commit('subtrair')
        }
    },
    getters: { // pega as infos dentro dos state para realizar um repasse com alguma regra, nesse caso ele repassa só a info dentro do state
        contador: state => state.contador
    }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
