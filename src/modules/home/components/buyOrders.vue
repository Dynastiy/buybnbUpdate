<template>
    <div>
         <!-- You want to Buy  -->
    <section class="container--fluid">
        <div class="d-flex align-items-center mt-3 mb-4" style="gap:10px">
            <span><svg width="20" height="20" viewBox="0 0 15 15"><path fill="#000" d="m14.5.5l.457.203A.5.5 0 0 0 14.5 0v.5ZM.5.5V0a.5.5 0 0 0-.5.5h.5Zm14 9v.5a.5.5 0 0 0 .457-.703L14.5 9.5Zm-2-4.5l-.457-.203a.5.5 0 0 0 0 .406L12.5 5Zm2-5H.5v1h14V0ZM0 .5v9h1v-9H0ZM.5 10h14V9H.5v1Zm14.457-.703l-2-4.5l-.914.406l2 4.5l.914-.406Zm-2-4.094l2-4.5l-.914-.406l-2 4.5l.914.406ZM1 15V9.5H0V15h1Z"/></svg></span>
            <h5 class="text-dark" style="font-weight:600">
                You want to <span class="text-success">buy</span> Binance Coin?
            </h5>
        </div>

        <!-- List of Amounts to buy -->
        <div>
            <div class="row mb-3 buy--orders align-items-center" v-for="item in buy_orders" :key="item.id">
                <div class="col-md-3 mb-3">
                    <h5 class="text-dark font-weight-bold mb-1"> <span class="text-success">{{ (item.ngn_amount).toLocaleString() }}</span> NGN </h5>
                    <h6> <span class="font-weight-bold">To get:</span> {{ getExchange(item) }} BNB </h6>
                </div>
                <div class="col-md-4 mb-3">
                    <h5 class="text-dark font-weight-bold mb-1">BuyBNB NGN Wallet</h5>
                    <h6> Completion time ~ 0secs </h6>
                </div>
                <div class="col-md-3 mb-3">
                    <h6> {{ item.seller }} 
                        <span>
                            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#34c38f" d="m23 12l-2.44-2.79l.34-3.69l-3.61-.82l-1.89-3.2L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5l.34 3.7L1 12l2.44 2.79l-.34 3.7l3.61.82L8.6 22.5l3.4-1.47l3.4 1.46l1.89-3.19l3.61-.82l-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81l1.48-1.48l2.32 2.33l5.85-5.87l1.48 1.48l-7.33 7.35z"/></svg>
                        </span> 
                    </h6>
                </div>

                <div class="col-md-2">
                    <button class="primary--btn">{{ 'Buy' }}</button>
                </div>
            </div>
        </div>
      </section>
    </div>
</template>


<script>

import { mapState } from 'vuex'
export default {
    
    data(){
        return{
            buy_orders: [
                {
                    id: 1,
                    ngn_amount: 50000,
                    seller: "Milord"
                },
                {
                    id: 2,
                    ngn_amount: 100000,
                    seller: "Vin"
                },
                {
                    id: 3,
                    ngn_amount: 200000,
                    seller: "Prestige"
                },
                {
                    id: 4,
                    ngn_amount: 500000,
                    seller: "Tank"
                },
                {
                    id: 5,
                    ngn_amount: 1000000,
                    seller: "Tank"
                }
            ]
        }
    },
    methods:{
        getExchange(item) {
            let res = item.ngn_amount / this.oneBnbInNaira
            res = res.toFixed(4)
            return res
        }
    },
    computed:{
        ...mapState('home', ['oneBnbInNaira']),
        
    }
}
</script>

