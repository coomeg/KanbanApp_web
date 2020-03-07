import Vue from "vue"
import Login from "./app/login/Login.vue"
import "./plugins/element.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(Login)
}).$mount("#app")
