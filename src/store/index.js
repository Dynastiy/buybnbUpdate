import Vue from 'vue'
import Vuex from 'vuex'

// Modules 
import auth from "../modules/auth/store/index"
import transactions from '../modules/transactions/store/index'
import user from '../modules/user/store/index'
import home from '../modules/home/store/index'
import referrals from '../modules/referrals/store/index'

import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

const getDefaultState = () => {
    return {

    };
};

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        auth,
        transactions,
        user,
        home,
        referrals
    },
})