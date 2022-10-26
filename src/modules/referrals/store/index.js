import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import http from '../../../config/axios'

// import "toastify-js/src/toastify.css"
// import Toastify from 'toastify-js'

// import router from "../../../router"

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        referrals: null,
        loading: null
    }
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getReferrals: state => {
            return state.referrals;
        },
        isLoading: state => {
            return state.loading;
        },
    },
    mutations: {
        SET_REFERRALS: (state, data) => {
            state.referrals = data;
        },
        SET_LOADING: (state, data) => {
            state.loading = data;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        getReferrals({ commit }) {
            commit("SET_LOADING", true)
            http().get('auth/my-referrals')
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    commit("SET_LOADING", false)
                })
        }
    }
};