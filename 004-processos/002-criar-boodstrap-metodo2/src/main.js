import Vue from 'vue'
import App from './App.vue'
// 1. Importe o BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// 2. Importe os arquivos CSS (do Bootstrap normal e do BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 3. Torne o BootstrapVue disponível no projeto
Vue.use(BootstrapVue)
// Opcional: Plugin de ícones
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
