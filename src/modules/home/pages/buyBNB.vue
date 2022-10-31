<template>
  <div>
    <div class="container py-4">
      <div class="mt-2">
        <label for="" class="text-white">Amount:</label>
        <div class="amounts">
          <input
            type="number"
            v-model="amount"
            :placeholder="
              currency_type === 'bnb'
                ? 'Enter BNB Amount to buy'
                : 'Min amount 2000 NGN'
            "
          />
          <select
            name=""
            id=""
            v-model="currency_type"
            :class="currency_type"
            class="amount--box"
          >
            <option value="ngn">NGN</option>
            <option value="bnb">BNB</option>
          </select>
        </div>
      </div>

      <div class="mt-3" v-if="amount">
        <div class="" v-if="currency_type === 'bnb' ">
          <span class="text-success">~{{ usdPrice }} USD </span>
        </div>

        <div
          class="
            bg-white
            p-3
            mt-2
            d-flex
            align-items-center
            justify-content-between
          "
        >

        <!-- Polaris Bank -->
          <div>
            <h5 class="font-weight-bold">
              <span class="text-success"> {{ Number(higherNgnRate).toLocaleString() }} </span> NGN/BNB -
              <span class="text-secondary" style="font-weight: 400">via</span>
              Polaris Bank
            </h5>
            <div class="mt-3 mt-2">
              <span class="text-secondary">Total Amount:</span>
              <span>  {{(qty2).toLocaleString()}} <span> {{ currency_type === 'bnb' ? 'NGN' : 'BNB'  }} </span> </span>
            </div>
            <div>
              <span class="text-secondary">Completion Time:</span>
              <span> ~0secs </span>
            </div>
          </div>

          <div>
            <router-link :to='"/buy/bnb/account-details/?bank_type=polaris-bank"'>
                <button @click="saveAmount(qty2)" class="btn btn-success">Buy</button>
            </router-link>
          </div>
        </div>

        <!-- GT BANK  -->
        <div
          class="
            bg-white
            p-3
            mt-3
            d-flex
            align-items-center
            justify-content-between
          "
        >
          <div>
            <h5 class="font-weight-bold">
              <span class="text-success"> {{ Number(ngnRate).toLocaleString() }} </span> NGN/BNB -
              <span class="text-secondary" style="font-weight: 400">via</span>
              GTB
            </h5>
            <div class="mt-3 mt-2">
              <span class="text-secondary">Total Amount:</span>
              <span> {{(qty).toLocaleString()}} <span> {{ currency_type === 'bnb' ? 'NGN' : 'BNB'  }} </span> </span>
            </div>
            <div>
              <span class="text-secondary">Completion Time:</span>
              <span> ~180secs </span>
            </div>
          </div>

          <div>
            <router-link :to='"/buy/bnb/account-details/?bank_type=gtb"'>
                <button @click="saveAmount(qty)" class="btn btn-success">Buy</button>
            </router-link>
          </div>
        </div>

        <!-- 9 Payment service Bank  -->
        <div
          class="
            bg-white
            p-3
            mt-3
            d-flex
            align-items-center
            justify-content-between
          "
        >
          <div>
            <h5 class="font-weight-bold">
              <span class="text-success"> {{ Number(ngnRate).toLocaleString() }} </span> NGN/BNB -
              <span class="text-secondary" style="font-weight: 400">via</span>
              9 Payment service Bank
            </h5>
            <div class="mt-3 mt-2">
              <span class="text-secondary">Total Amount:</span>
              <span> {{(qty).toLocaleString()}} <span> {{ currency_type === 'bnb' ? 'NGN' : 'BNB'  }} </span> </span>
            </div>
            <div>
              <span class="text-secondary">Completion Time:</span>
              <span> ~180secs </span>
            </div>
          </div>

          <div>
            <router-link :to='"/buy/bnb/account-details/?bank_type=9-payment-service-bank "'>
                <button @click="saveAmount(qty)" class="btn btn-success">Buy</button>
            </router-link>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      currency_type: "ngn",
      amount: ''
    };
  },
  methods:{
    saveAmount(value){
      
      let amount = {
        bnb_amount: '',
        ngn_amount: ''
      }
      amount.bnb_amount = this.currency_type == 'bnb' ? this.amount : value.toFixed(4)
      amount.ngn_amount = this.currency_type == 'ngn' ? this.amount : value.toFixed(4)
      localStorage.setItem('amount', JSON.stringify(amount))
    }
  },
  computed: {
    ...mapState('home', ['oneBnbInNaira', 'bnb']),
    bnbRate(){
      return Number(this.bnb.priceUsd).toFixed(4)
    },
    ngnRate(){
      return this.oneBnbInNaira.toFixed(4)
    },
    higherNgnRate(){
      return (this.oneBnbInNaira+979).toFixed(4)
    },
    usdPrice(){
      let qty ;
      qty =  this.bnbRate * this.amount
      return qty 
    },
    qty(){
      let qty ;
      qty = this.currency_type === 'ngn' ? this.amount / this.ngnRate  :  this.ngnRate * this.amount
      return qty 
    },
    qty2(){
      let qty ;
      qty = this.currency_type === 'ngn' ? this.amount / this.higherNgnRate  :  this.higherNgnRate * this.amount
      return qty 
    }
  },
};
</script>