import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import http from '../../../config/axios'

import axios from 'axios'

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        assets: {},
        loading: false,
        bnb: null,
        naira: null,
        oneBnbInNaira: null,
        submitted: false,
        deposit_details: {},
        sell_details: {}
    }
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getAssets: state => {
            return state.assets;
        },
        getBNB: state => {
            return state.bnb;
        },
        getNaira: state => {
            return state.naira;
        },
        depositDetails: state => {
            return state.deposit_details
        },
        sellDetails: state => {
            return state.sell_details
        },
        isLoading: state => {
            return state.loading;
        },
        isSubmitted: state => {
            return state.submitted;
        },
    },
    mutations: {
        SET_ASSETS: (state, data) => {
            state.assets = data;
        },
        SET_BNB: (state, data) => {
            state.bnb = data;
        },
        SET_NAIRA: (state, data) => {
            state.naira = data;
        },
        SET_BNB_IN_NAIRA: (state) => {
            state.oneBnbInNaira = state.naira * state.bnb.priceUsd;
        },
        SET_DEPOSIT_DETAILS: (state, data) => {
            state.deposit_details = data
        },
        SET_SELL_DETAILS: (state, data) => {
            state.sell_details = data
        },
        SET_SUBMITTED: (state, data) => {
            state.submitted = data;
        },
        SET_LOADING: (state, data) => {
            state.loading = data;
        },

    },
    actions: {
        getAssets({ commit }) {
            axios.get('https://api.coincap.io/v2/assets')
                .then((res) => {
                    console.log(res);
                    commit("SET_ASSETS", res.data.data.slice(0, 10))
                    commit("SET_BNB", res.data.data[3])
                })
                .catch((err) => {
                    return err
                })
        },
        getNaira({ commit }) {
            axios.get('https://v6.exchangerate-api.com/v6/068c19b21593d6f62990aa1b/latest/USD')
                .then((res) => {
                    console.log(res.data.conversion_rates.NGN + 328);
                    commit("SET_NAIRA", (res.data.conversion_rates.NGN + 328))
                    commit("SET_BNB_IN_NAIRA")
                })
                .catch((err) => {
                    return err
                })
        },

        createDeposit({ commit }, payload) {
            commit('SET_LOADING', true)
            http().post('/create-deposit', payload)
                .then((res) => {
                    console.log(res.data.deposit);
                    Toastify({
                        text: "Order Created",
                        className: "info",
                        style: {
                            background: "#333",
                            fontSize: "11px",
                            borderRadius: "3px"
                        }
                    }).showToast();
                    commit("SET_DEPOSIT_DETAILS", (res.data.deposit))

                    commit('SET_SUBMITTED', true)
                })
                .catch((err) => {
                    Toastify({
                        text: "Something went wrong",
                        className: "info",
                        style: {
                            background: "red",
                            fontSize: "11px",
                            borderRadius: "3px"
                        }
                    }).showToast();
                    return err
                }).finally(() => {
                    commit("SET_LOADING", false)
                })
        },

        createSell({ commit }, payload) {
            commit('SET_LOADING', true)
            http().post('/create-sell', payload)
                .then((res) => {
                    console.log(res.data.sell);
                    Toastify({
                        text: "Sell Order Created",
                        className: "info",
                        style: {
                            background: "#333",
                            fontSize: "11px",
                            borderRadius: "3px"
                        }
                    }).showToast();
                    commit("SET_SELL_DETAILS", (res.data.sell))

                    commit('SET_SUBMITTED', true)
                })
                .catch((err) => {
                    Toastify({
                        text: "Something went wrong",
                        className: "info",
                        style: {
                            background: "red",
                            fontSize: "11px",
                            borderRadius: "3px"
                        }
                    }).showToast();
                    return err
                }).finally(() => {
                    commit("SET_LOADING", false)
                })
        },

        removeSubmitted({ commit }) {
            commit('SET_SUBMITTED', false)
        }
    }
};