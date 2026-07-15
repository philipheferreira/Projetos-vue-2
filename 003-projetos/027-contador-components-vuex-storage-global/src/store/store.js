import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    actions: {
        somar({ commit }) {
            commit('somar') // o nome precisa ser o mesmo da mutation
        },
        subtrair({ commit }){
          commit('subtrair')
        }
    },
    getters: {
        contador: state => state.contador
    }
})