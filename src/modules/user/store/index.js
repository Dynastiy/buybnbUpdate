import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import http from '../../../config/axios'

import paystack from '../../../config/paystack'


import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        analytics: null,
        loading: null,
        order: {},
        bank_details: null,
        banks: [],
        account_details: {},
        loader: false,
        err: false,
        accountLoader: false,
        user_profile: {},
        deposits: [],
        sells: [],
        withdrawals: []
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
        getOrder: state => {
            return state.order;
        },
        userProfile: state => {
            return state.user_profile
        },
        getBankDetails: state => {
            return state.bank_details;
        },
        getAllBanks: (state) => {
            return state.banks
        },
        getAccountDetails: (state) => {
            return state.account_details
        },
        getAllDeposits: (state) => {
            return state.deposits
        },
        getAllSells: (state) => {
            return state.sells
        },
        getAllWithdrawals: (state) => {
            return state.withdrawals
        },
        isError: (state) => {
            return state.err
        },
        isLoading: state => {
            return state.loading;
        },
        loader: state => {
            return state.accountLoader;
        }

    },
    mutations: {
        SET_ANALYTICS: (state, data) => {
            state.analytics = data;
        },
        SET_ORDER: (state, data) => {
            state.order = data;
        },
        SET_BANK_DETAILS: (state, data) => {
            state.bank_details = data;
        },
        SET_BANKS: (state, data) => {
            state.banks = data
        },
        ACCOUNT_NAME: (state, data) => {
            state.account_details = data
        },
        USER_PROFILE: (state, data) => {
            state.user_profile = data
        },
        SET_DEPOSITS: (state, data) => {
            state.deposits = data
        },
        SET_SELLS: (state, data) => {
            state.sells = data
        },
        SET_WITHDRAWALS: (state, data) => {
            state.withdrawals = data
        },
        REMOVE_ACCOUNT_DETAILS: (state) => {
            state.account_details = {}
            state.err = false
        },
        REMOVE_ERROR_MESSAGE: (state) => {
            state.err = false
        },
        SET_LOADING_STATUS: (state, data) => {
            state.accountLoader = data
        },
        SET_ERROR: (state, data) => {
            state.err = data
        },
        SET_LOADING: (state, data) => {
            state.loading = data;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        // Get User Details
        getUser({ commit }) {
            http().get(`auth/user-account`)
                .then((res) => {
                    commit('USER_PROFILE', res.data)
                    console.log(res);
                })
                .catch((err) => {
                    return err
                })
        },

        // Get Analyitcs
        getAnalytics({ commit }) {
            commit("SET_LOADING", true)
            http().get('/user-dashboard')
                .then((res) => {
                    console.log(res);
                    let analytics = {
                        total_deposits: res.data.user_transactions_total.data[0].deposits_count,
                        pending_deposits: res.data.user.data[0].pending_deposits.length,
                        canceled_deposits: res.data.user.data[0].canceled_deposits.length,
                        completed_deposits: res.data.user.data[0].completed_deposits.length,

                        total_sells: res.data.user_transactions_total.data[0].sells_count,
                        pending_sells: res.data.user.data[0].pending_sells.length,
                        canceled_sells: res.data.user.data[0].canceled_sells.length,
                        completed_sells: res.data.user.data[0].completed_sells.length,
                    }
                    commit("SET_ANALYTICS", analytics)
                })
                .catch((err) => {
                    return err
                })
                .finally(() => {
                    commit("SET_LOADING", false)
                })
        },

        getSingleOrder({ commit }, id) {
            commit("SET_LOADING", true)
            http().get(`/find-deposit/${id}`)
                .then((res) => {
                    console.log(res);
                    commit("SET_ORDER", res.data.deposit)
                })
                .catch((err) => {
                    return err
                })
                .finally(() => {
                    commit("SET_LOADING", false)
                })
        },

        // Get Single Sell
        getSingleSell({ commit }, id) {
            commit("SET_LOADING", true)
            http().get(`/find-sell/${id}`)
                .then((res) => {
                    console.log(res);
                    commit("SET_ORDER", res.data.sell)
                })
                .catch((err) => {
                    return err
                })
                .finally(() => {
                    commit("SET_LOADING", false)
                })
        },

        // Add Bank Details
        addBankDetails({ dispatch }, payload) {
            http().post('/add-bank-details', payload)
                .then((res) => {
                    dispatch('getUser')
                    Toastify({
                        text: ` Bank details added`,
                        className: "info",
                        style: {
                            background: "#333",
                            fontSize: "13px",
                            borderRadius: "3px"
                        },
                    }).showToast();
                    console.log(res);
                    // commit("SET_BANKS", res.data.data)
                })
                .catch((err) => {
                    Toastify({
                        text: ` Something went wrong`,
                        className: "info",
                        style: {
                            background: "red",
                            fontSize: "13px",
                            borderRadius: "3px"
                        },
                    }).showToast();
                    console.log(err);
                })
        },

        deleteBankDetails({ commit, dispatch }, id) {
            commit("SET_LOADING", true)
            http().post(`/delete-bank-details/${id}`)
                .then((res) => {
                    console.log(res);
                    dispatch('getUser')
                    Toastify({
                        text: ` Bank details deleted`,
                        className: "info",
                        style: {
                            background: "#333",
                            fontSize: "13px",
                            borderRadius: "3px"
                        },
                    }).showToast();
                    console.log(res);
                })
                .catch((err) => {
                    return err
                })
                .finally(() => {
                    commit("SET_LOADING", false)
                })
        },

        // List Banks from paystack 
        getBanks({ commit }) {
            paystack().get('/bank')
                .then((res) => {
                    // console.log(res);
                    commit("SET_BANKS", res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        // Resolve Bank Account 
        getAccountName({ commit }, payload) {
            commit("SET_LOADING_STATUS", true)
            paystack().get(`/bank/resolve?account_number=${payload.account_number}&bank_code=${payload.bank_code}`)
                .then((res) => {
                    console.log(res);
                    commit("ACCOUNT_NAME", res.data.data)
                })
                .catch((err) => {
                    console.log(err.response.status);
                    if (err.response.status === 422) {
                        commit("SET_ERROR", true)
                    }
                })
                .finally(() => {
                    if (payload.account_number.length === 10) {
                        commit("SET_LOADING_STATUS", false)
                    }
                    // console.log(payload.account_number);
                })
        },

        // Get Deposits
        getDeposits({ commit }) {
            http().get('/my-deposits')
                .then((res) => {
                    console.log(res.data.deposits.data);
                    commit("SET_DEPOSITS", res.data.deposits.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        // Get Sells
        getSells({ commit }) {
            http().get('/my-sells')
                .then((res) => {
                    console.log(res);
                    commit("SET_SELLS", res.data.sells.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        // Get Sells
        getWithdrawals({ commit }) {
            http().get('/my-withdrawals')
                .then((res) => {
                    console.log(res);
                    commit("SET_WITHDRAWALS", res.data.withdrawals.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        // Get Sells
        createWithdrawal({ dispatch }, payload) {
            http().post('/create-withdrawal', payload)
                .then((res) => {
                    console.log(res);
                    dispatch('getWithdrawals')
                    Toastify({
                        text: `${res.data.message}`,
                        className: "info",
                        style: {
                            background: "#333",
                            fontSize: "13px",
                            borderRadius: "3px"
                        },
                    }).showToast();
                    console.log(res);
                    // commit("SET_WITHDRAWALS", res.data.withdrawals.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },


        removeAccountDetails({ commit }) {
            commit("REMOVE_ACCOUNT_DETAILS")
        },
        removeErrorMessage({ commit }) {
            commit("REMOVE_ERROR_MESSAGE")
        },

        logout: ({ commit }) => {
            commit('RESET', '');
        }
    }
};