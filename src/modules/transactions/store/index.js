import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import http from '../../../config/axios'

// import "toastify-js/src/toastify.css"
// import Toastify from 'toastify-js'

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        loading: false,
        transactions: []
    }
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getTransactions: state => {
            return state.transactions;
        },
        isLoading: state => {
            return state.loading;
        },
    },
    mutations: {
        SET_TRANSACTIONS: (state, data) => {
            state.transactions = data;
        },

    },
    actions: {
        getTransactions({ commit }) {
            http().get('/my-transactions')
                .then((res) => {
                    console.log(res);
                    commit('SET_TRANSACTIONS', res.data.transactions.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
};