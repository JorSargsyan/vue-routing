import Vue from 'vue'
import App from "./app/app"
import {router} from "./app/app"


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
