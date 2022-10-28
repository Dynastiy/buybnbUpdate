<template>
  <div>
    <div class="text-danger" v-if="user_profile.wallet === null ">
      You dont have any existing wallet
    </div>
    <div class="wallet--card p-4" v-else>
      <div class="d-flex" style="gap:30px">
        <div>
          <h6 class="text-secondary mb-1" style="font-weight: 300">
            Wallet Balance
          </h6>
          <h1 class="font-weight-bold">
            <span class="small" style="font-wieght: 300; font-size: 3rem">
              &#36;</span
            >{{ view_balance ? wallet_balance : "***" }}
          </h1>
          <h4 class="text-white">
            {{
              view_balance
                ? "&#8358;" + amount_in_naira.toLocaleString()
                : "****"
            }}
          </h4>
        </div>
        <div>
          <span
          style="font-size:30px"
            class="text-white"
            role="button"
            @click="view_balance = !view_balance"
          >
            <i-icon
              :icon="view_balance ? 'charm:eye-slash' : 'akar-icons:eye-open'"
            />
          </span>
        </div>
      </div>
      <div class="mt-4">
        <button class="primary--btn py-2" @click="enter_amount = !enter_amount" style="width:max-content">Withdraw</button>
      </div>
    </div>
    <hr />

    <!-- Withdrawal Table -->
    <div class="withdrawals">
      <WithdrawalTable/>
    </div>

    <!-- Enter Withdrawal Amount -->
    <enter-amount @close="enter_amount = !enter_amount" v-if="enter_amount"/>

  </div>
</template>
  
  <script>
import { mapState, mapActions } from "vuex";
import EnterAmount from '../components/modals/enterAmount.vue';
import WithdrawalTable from '../components/withdrawalTables.vue'
export default {
  components:{
    WithdrawalTable,
    EnterAmount
  },
  data() {
    return {
      add_bank: false,
      view_balance: true,
      enter_amount: false
    };
  },
  methods: {
    ...mapActions("user", ["getUser", "createWithdrawal"]),
  },
  beforeMount() {
    this.getUser();
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("user", ["user_profile"]),
    ...mapState("home", ["naira"]),
    wallet_balance() {
      return this.user_profile.wallet.ref_balance;
    },
    amount_in_naira() {
      return (this.naira * this.wallet_balance).toFixed(2);
    },
  },
};
</script>