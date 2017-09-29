import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/renderer/components/Main.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'landing-page',
		component: Main,
	}, {
		path: '*',
		redirect: '/',
	}],
})
