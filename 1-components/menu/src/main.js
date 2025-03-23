import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router, //inicializando dentro da estancia Vue o arquivo router com o uso das rotas
  render: h => h(App),
}).$mount('#app')
