<template>
    <div>
      <div>
        <div class="modal--mask">
          <div class="modal--content">
            <div class="text-right">
              <i
                class="el-icon-close"
                role="button"
                style="font-size: 18px"
                @click="close"
              ></i>
            </div>
            <div class="">
              <h5 class="text-dark mb-3 text-center">Enter Withdrawal Amount</h5>
              <form action="" @submit.prevent="withdraw">
                <div class="mb-3">
                    <input type="text" @keyup="getNumber()" v-model="amount_usd" placeholder="Enter Amount in USD">
                </div>
                <div v-if="amount_usd" class="mb-3">
                    <span> You will receive &#8358;{{ amount_naira }} to your bank account if withdrawal is approved </span>
                </div>
                <div class="text-center">
                  <button class=" primary--btn" >Done</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data() {
      return {
        amount_usd: "",
        amount_naira: "",
      }
    },
    methods: {
        ...mapActions("user", ["createWithdrawal"]),
        withdraw(){
            let payload = {
                amount_naira: Math.round(this.amount_naira),
                amount_usd: this.amount_usd
            }
            this.createWithdrawal(payload)
            this.$emit("close")
        },
      close() {
        this.$emit("close");
      },
      getNumber(){
        this.amount_naira = Number(this.amount_usd) * this.naira
        console.log(this.amount_naira);
      }
    },
    computed: {
        ...mapState('home', [ 'naira']),
        // amount_naira(){
        //     return this.amount_usd * this.naira
        // }
        // ...mapState('auth', [ 'user'] )
    },
  };
  </script>