import Vue from 'vue';
import Router from 'vue-router';
import router from '../router'

const index = resolve => require(['@/components/index/index'], resolve)
const mine = resolve => require(['@/components/index/mine'], resolve)
const article = resolve => require(['@/components/index/article'], resolve)
const photos = resolve => require(['@/components/index/photos'], resolve)
const binding = resolve => require(['@/components/mine/binding'], resolve)
const count = resolve => require(['@/components/count'], resolve)
const echarts = resolve => require(['@/components/echarts'], resolve)
const trend = resolve => require(['@/components/trend'], resolve)

import main from '../main'
Vue.use(Router)
export default new Router({
	routes: [

		{
			path: "/index/index",
			name: 'index',
			meta: {
				title: '首页'
			},
			component: index
		}, {
			path: "/index/mine",
			name: 'mine',
			meta: {
				title: '我的'
			},
			component: mine
		}, {
			path: "/index/article",
			name: 'article',
			meta: {
				title: '文本'
			},
			component: article
		},
		{
			path: "/index/photos",
			name: 'photos',
			meta: {
				title: '照片'
			},
			component: photos
		},
		{
			path: "/mine/binding",
			name: 'binding',
			meta: {
				title: '绑定'
			},
			component: binding
		},
		{
			path: "/count",
			name: 'count',
			meta: {
				title: 'vuex'
			},
			component: count
		},
		{
			path: "/echarts",
			name: 'echarts',
			meta: {
				title: 'echarts'
			},
			component: echarts
		},
		{
			path: "/trend",
			name: 'trend',
			meta: {
				title: 'trend'
			},
			component: trend
		},

		// 路径重定向：搜不到的都默认跳转到首页
		{
			path: '*',
			redirect: '/index/index'
		}

	]
})