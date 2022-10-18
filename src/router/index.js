import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../layouts/userLayout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/dashboard',
        name: 'home',
        component: UserView,
        children: [{
                path: '',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/user/pages/userDashboard.vue')
            },
            {
                path: '/referrals',
                name: 'referrals',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/referrals/pages/indexPage.vue')
            },
            {
                path: '/referrals-list',
                name: 'referrals-list',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/referrals/pages/listReferrals.vue')
            },
            {
                path: '/transactions',
                name: 'transactions',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/transactions/pages/indexPage.vue')
            },
            {
                path: '/orders',
                name: 'orders',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/user/pages/userOrders.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../modules/auth/pages/userLogin.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router