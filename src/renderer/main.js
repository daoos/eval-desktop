import '@/assets/styles/index.sass'
import Vue from 'vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'
import HotKey from '@/plugins/hot-key'
import Element from '@/plugins/element-ui'
import AV from 'leancloud-storage'
import config from './config'

/** init LeanCloud SDK */
AV.init({
  appId: config.AppID,
  appKey: config.AppKey
})

/* eslint-disable */
const App = require('./App').default
/* eslint-enable */

require('./store')

Vue.config.productionTip = false

/* use element-ui */
Vue.use(Element)

/* use hot key plguins */
Vue.use(HotKey)

/* use element-ui */
Vue.use(Element)

Vue.use(VueRx, Rx)

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
/* eslint-enble */
