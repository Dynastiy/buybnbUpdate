<template>
  <div>
    <div class="bg-white p-4 rounded-lg">
        <h6 class="text-secondary mb-1" style="font-weight:300">Wallet Balance</h6>
        <h1 class="font-weight-bold"> {{ wallet_balance }}<span class="small font-weight-bold" style="font-size:12px">USD</span> </h1>
    </div>
    <hr />
    <div class="bg-white p-4">
      <h5>Bank Details</h5>
      <div class="mt-2" v-if="!bank_details">
        <button
          class="primary--btn"
          style="width: max-content"
          @click="add_bank = !add_bank"
        >
          Add Bank Details
        </button>
        <div>
            {{ bank_details }}
        </div>
      </div>
      <div v-else>
        <div class="table-responsive">
          <table class="rwd-table">
            <tr>
              <td>Account Number</td>
              <td>{{ bank_details.account_no }}</td>
            </tr>
            <tr>
              <td>Account Name</td>
              <td>{{ bank_details.account_name }}</td>
            </tr>
            <tr>
              <td>Bank Name</td>
              <td>{{ bank_details.bank_name }}</td>
            </tr>
          </table>
        </div>
        <div class="text-right">
          <button @click="removeBankDetails" class="btn btn-danger" style="font-size: 0.8rem">
            Remove Bank Details
          </button>
        </div>
      </div>
    </div>

    <!-- Add Bank Account  -->
    <AddBankDetails @close="add_bank = !add_bank" v-if="add_bank" />
  </div>
</template>

<script>
import AddBankDetails from "../components/modals/addBankDetails.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    AddBankDetails,
  },
  data() {
    return {
      add_bank: false,
    };
  },
  methods: {
    ...mapActions("user", ["getUser", "deleteBankDetails"]),
    removeBankDetails(){
        this.deleteBankDetails(this.bank_details.id)
    }
  },
  beforeMount() {
    this.getUser();
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("user", ["user_profile"]),
    bank_details() {
      return this.user_profile.bank_details;
    },
    wallet_balance() {
      return this.user_profile.wallet.ref_balance;
    },
  },
};
</script>