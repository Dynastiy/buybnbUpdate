import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../layouts/userLayout.vue'
import HomeView from '../layouts/homeLayout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        children: [{
                path: '',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/home/pages/indexPage.vue')
            },
            {
                path: '/bnb/ng',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/home/pages/transactBNB.vue'),
                children: [{
                        path: '',
                        name: 'bnb-ng',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../modules/home/pages/selectOption.vue')
                    }, {
                        path: '/buy/bnb',
                        name: 'buy-bnb',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../modules/home/pages/buyBNB.vue')
                    },

                    {
                        path: '/sell/bnb',
                        name: 'sell-bnb',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../modules/home/pages/sellBNB.vue')
                    },
                    {
                        path: '/buy/bnb/account-details',
                        name: 'account-details',
                        async beforeEnter(to, from, next) {
                            var loggedIn
                            loggedIn = localStorage.getItem("token")
                            console.log(loggedIn);
                            if (!loggedIn) {
                                next({
                                    name: "login",
                                    query: { redirectFrom: to.fullPath },
                                });
                            } else {
                                next();
                            }
                        },
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../modules/home/pages/accountDetails.vue')
                    },
                    {
                        path: '/buy/bnb/wallet-details',
                        name: 'wallet-details',
                        async beforeEnter(to, from, next) {
                            var loggedIn
                            loggedIn = localStorage.getItem("token")
                            console.log(loggedIn);
                            if (!loggedIn) {
                                next({
                                    name: "login",
                                    query: { redirectFrom: to.fullPath },
                                });
                            } else {
                                next();
                            }
                        },
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../modules/home/pages/walletDetails.vue')
                    },
                    {
                        path: '/bnb/ng/order/:id',
                        name: 'order-details',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../modules/home/pages/orderId.vue')
                    },
                ]
            },

        ]
    },
    {
        path: '/dashboard',
        name: 'home',
        component: UserView,
        async beforeEnter(to, from, next) {
            var loggedIn
            loggedIn = localStorage.getItem("token")
            console.log(loggedIn);
            if (!loggedIn) {
                next({
                    name: "login",
                    query: { redirectFrom: to.fullPath },
                });
            } else {
                next();
            }
        },
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
            {
                path: '/wallet',
                name: 'wallet',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/user/pages/userWallet.vue')
            },
            {
                path: '/profile',
                name: 'user-profile',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../modules/user/pages/userProfile.vue')
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
        path: '/register',
        name: 'register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../modules/auth/pages/userRegistration.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../modules/auth/pages/forgotPassword.vue')
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../modules/auth/pages/resetPassword.vue')
    },
    {
        path: '/sent-email',
        name: 'sent-email',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../modules/auth/components/sentEmail.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router