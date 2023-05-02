import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
	history: createWebHistory(),
	routes:[
		{
			path:'/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/home.vue')
		},
		{
			path: '/favor',
			name: 'favor',
			component: () => import('@/views/favor/favor.vue')
		},
		{
			path: '/order',
			name: 'order',
			component: () => import('@/views/order/order.vue')
		},
		{
			path: '/message',
			name: 'message',
			component: () => import('@/views/message/message.vue')
		},
		{
			path: '/city',
			name: 'city',
			component: () => import('@/views/city/cities.vue'),
		},
		{
			path: '/search',
			name: 'search',
			component: () => import('@/views/home/home-componets/homeSearchResults.vue'),
			meta: {
				hideFooter: true
			}
		},
		{
			path: '/detail/:id',
			name: 'detail',
			component: () => import('@/views/detail/HouseDetail.vue'),
		}
	]
})

export default router