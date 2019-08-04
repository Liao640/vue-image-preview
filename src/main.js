// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import XhImagePreview from "@/components/image-preview"
// import XhImagePreview from "/dist/XhImagePreview"

Vue.config.productionTip = false
Vue.use(XhImagePreview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
