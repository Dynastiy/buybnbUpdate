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
              <h5 class="text-dark mb-3 text-center">Add Bank Account</h5>
              <form action="" @submit.prevent="addBank">
                <div class="mb-3">
                  <select name="" @change="getAccountDetails" id="mySelect" v-model="bank_name" required>
                    <option value="" selected disabled>Select Bank</option>
                    <option
                      v-for="item in banks"
                      :key="item.id"
                      :value="item.name"
                      :id="item.code"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <input
                    required
                    type="number"
                    v-model="account_number"
                    @keyup="getAccountDetails"
                    placeholder="Enter Account Number"
                  />
                </div>
                <div class="mb-3">
                  <div class="text-right" v-if="accountLoader">
                      <span>
                          <i class="el-icon-loading"></i>
                      </span>
                  </div>
                  <div class="text-right" v-show="err">
                      <span class="text-danger" style="font-size:10px">
                         * Account not found
                      </span>
                  </div>
                  <input
                  required
                    type="text"
                    placeholder="Account Name"
                    v-model="account_details.account_name"
                    readonly
                  />
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
        bank_name: "",
        account_number: "",
      };
    },
    methods: {
        ...mapActions('user', ['removeErrorMessage', 'getAccountName', 'removeAccountDetails', 'getBanks', 'addBankDetails']),
      getAccountDetails() {
        this.removeErrorMessage();
        this.removeAccountDetails();
        var priceOptions = document.getElementById("mySelect");
        var bank_code = priceOptions.options[priceOptions.selectedIndex].id;
        var payload = {
          bank_code: bank_code,
          account_number: this.account_number,
        };
        this.getAccountName(payload);
      },
      addBank(){
        let payload = {
          bank_name: this.bank_name,
          account_no: this.account_details.account_number,
          account_name: this.account_details.account_name,
          id: this.user.id
        }
        this.addBankDetails(payload)
        this.close()
        // if (!loading) {
        //   this.close
        // }
      },
      close() {
        this.$emit("close");
      },
    },
    beforeMount() {
      this.getBanks();
    },
    computed: {
        ...mapState('user', [ 'banks', 'account_details', 'accountLoader', 'err']),
        ...mapState('auth', [ 'user'] )
    },
  };
  </script>