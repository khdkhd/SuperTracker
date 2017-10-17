import Vue from 'vue'

import 'font-awesome/css/font-awesome.min.css'
import '@/renderer/style/main.scss'

import App from '@/renderer/App'
import router from '@/renderer/router'
import store from '@/renderer/store'

if (!process.env.IS_WEB) {
	Vue.use(require('vue-electron'))
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	components: {
		App,
	},
	router,
	store,
	template: '<App/>',
}).$mount('#app')
