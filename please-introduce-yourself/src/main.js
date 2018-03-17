// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Promise from 'promise-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
Vue.use(VueFire)

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0
    return this.indexOf(searchString, position) === position
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
