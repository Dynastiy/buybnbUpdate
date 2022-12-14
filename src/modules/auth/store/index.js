import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import http from '../../../config/axios'

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

import router from "../../../router"

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        user: null,
        loading: null
    }
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getUser: state => {
            return state.user;
        },
        isLoading: state => {
            return state.loading;
        },
    },
    mutations: {
        SET_USER: (state, data) => {
            state.user = data;
        },
        SET_LOADING: (state, data) => {
            state.loading = data;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        async login({ commit }, credentials) {
            commit("SET_LOADING", true)
            try {
                let res = await http().post("/auth/signin", credentials);
                const token = res.data.token
                const user = res.data.user
                console.log(res);
                Toastify({
                    text: `Welcome ${res.data.user.name}`,
                    className: "info",
                    style: {
                        background: "green",
                        fontSize: "13px",
                        borderRadius: "3px"
                    },
                }).showToast();
                localStorage.setItem("token", token)
                commit('SET_USER', user);
                let url = window.location.search
                console.log(url);
                const params = new URLSearchParams(url);
                // const q = params.get("return_url");
                const d = params.get("redirectFrom")
                router.push('/dashboard')
                    // console.log(q);
                router.push(d)
            } catch (error) {
                console.log(error);
            } finally {
                commit("SET_LOADING", false)
            }

        },


        async forgotPassword({ commit }, credentials) {
            commit("SET_LOADING", true)
            try {
                let res = await http().post("auth/forgot-password", credentials);
                console.log(res);
                Toastify({
                    text: `Check mail for instructions`,
                    className: "info",
                    style: {
                        background: "green",
                        fontSize: "13px",
                        borderRadius: "3px"
                    },
                }).showToast();
            } catch (error) {
                console.log(error);
            } finally {
                commit("SET_LOADING", false)
                router.push('/sent-email')
            }
        },


        async resetPassword({ commit }, payload) {
            commit("SET_LOADING", true)
            try {
                let res = await http().post(`/auth/reset-password?token=${payload.token}&email=${payload.email}`, payload);
                console.log(res);
                Toastify({
                    text: `Password Updated`,
                    className: "info",
                    style: {
                        background: "green",
                        fontSize: "13px",
                        borderRadius: "3px"
                    },
                }).showToast();
                router.push('/login')
            } catch (error) {
                console.log(error);
                Toastify({
                    text: `Something went wrong`,
                    className: "info",
                    style: {
                        background: "red",
                        fontSize: "13px",
                        borderRadius: "3px"
                    },
                }).showToast();
            } finally {
                commit("SET_LOADING", false)

            }
        },

        async register({ commit }, credentials) {
            commit("SET_LOADING", true)
            try {
                let res = await http().post("/auth/signup", credentials);
                console.log(res);
                Toastify({
                    text: ` Account Created Succesfully`,
                    className: "info",
                    style: {
                        background: "green",
                        fontSize: "13px",
                        borderRadius: "3px"
                    },
                }).showToast();
                router.push('/login')

            } catch (error) {
                console.log(error);
            } finally {
                commit("SET_LOADING", false)
            }
        },

        amounts: ({ commit }, { amount }) => {
            commit('SET_AMOUNT', amount);
        },

        logout: ({ commit }) => {
            commit('RESET', '');
            localStorage.removeItem("token")
            router.push('/')
        }
    }
};