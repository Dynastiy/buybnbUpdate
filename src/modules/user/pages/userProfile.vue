<template>
  <div>
    <div class="bg-white p-4 rounded-lg">
       <div class="d-flex align-items-center" style="gap:10px">
        <h3> {{ user.name }} </h3>
        <span :class="user.status === 'unbanned' ? 'active' : 'banned' "> {{ user.status === 'unbanned' ? 'active' : 'banned' }} </span>
       </div>
       <h6> {{ user.email }} </h6>
       <h4>
         {{ user.upline_code }}
       </h4>
    </div>
    <hr />
    <div class="bg-white p-4">
      <h5>Bank Details</h5>
      <div class="mt-2" v-if="bank_details === null ">
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

    <div class="d-flex justify-content-end">
      <button class="btn btn-danger d-flex py-1 mt-3" @click="userLogout" style="gap:5px">
        <span>  <i-icon icon="icon-park-outline:logout"></i-icon> </span>
        <span>Logout</span>
      </button>
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
    ...mapActions("auth", ['logout']),
    removeBankDetails(){
        this.deleteBankDetails(this.bank_details.id)
    },
    userLogout(){
        this.logout()
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
    
  },
};
</script>