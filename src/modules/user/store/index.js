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
        analytics: null,
        loading: null
    }
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getAnalytics: state => {
            return state.analytics;
        },
        isLoading: state => {
            return state.loading;
        },
    },
    mutations: {
        SET_ANALYTICS: (state, data) => {
            state.analytics = data;
        },
        SET_LOADING: (state, data) => {
            state.loading = data;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        getAnalytics({ commit }) {
            commit("SET_LOADING", true)
            http().get('/user-dashboard')
                .then((res) => {
                    console.log(res);
                    commit("SET_ANALYTICS", res.data.user.data[0])
                })
                .catch((err) => {
                    return err
                })
                .finally(() => {
                    commit("SET_LOADING", false)
                })
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    }
};