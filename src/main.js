// import { createApp, VueElement } from 'vue'
// import App from './App.vue'
// import Vue from 'vue'
// import {firestorePlugin} from "vuefire";

// Vue.use(firestorePlugin)
// Vue.config.productionTip = false

// new Vue({
//     render: h => h(App),
// }).$mount()


// createApp(App).mount('#app')


import Vue from 'vue'
import App from './App.vue'
import {firestorePlugin} from "vuefire"; //추가

Vue.use(firestorePlugin) //추가
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
