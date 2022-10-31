<template>
  <div>
    <div class="container mt-4">
      <div class="bg-white p-3 mb-4">
        <h4>NGN Deposit Order is ready</h4>
      </div>

      <!-- Account Details  -->
      <div class="bg-white p-3">
        <div class="table-responsive">
          <h5 class="mb-3">
            <span>Bank Name: </span>
            <span style="font-weight: 800"> {{ bank_name }} </span>
          </h5>
          <table class="rwd-table">
            <!-- <tr>
              <td>Bank Name</td>
              <td> {{ account_number }} </td>
            </tr> -->
            <tr>
              <td>Send Money to Account Number</td>
              <td class="font-weight-bold">
                {{ account_number }}
                <span
                  style="
                    border: 1px solid var(--primary-color);
                    color: var(--primary-color);
                    padding: 0.1rem 0.3rem;
                  "
                  role="button"
                  v-clipboard:copy="account_number"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  >{{ action1 }}
                </span>
              </td>
            </tr>
            <tr>
              <td>Bank Account Name</td>
              <td class="font-weight-bold">Ndifreke UDOBONG</td>
            </tr>
            <tr>
              <td>Exactly with the amount</td>
              <td class="font-weight-bold">
                {{ Number(amount.ngn_amount).toLocaleString() + "NGN" }}

                <span
                  style="
                    border: 1px solid var(--primary-color);
                    color: var(--primary-color);
                    padding: 0.1rem 0.3rem;
                  "
                  role="button"
                  v-clipboard:copy="amount.ngn_amount"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  >{{ action2 }}
                </span>
              </td>
            </tr>
            <tr>
              <td>Exactly with the content as reference</td>
              <td class="font-weight-bold">
                {{ description }}
                <span
                  style="
                    border: 1px solid var(--primary-color);
                    color: var(--primary-color);
                    padding: 0.1rem 0.3rem;
                  "
                  role="button"
                  v-clipboard:copy="description"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  >{{ action3 }}
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="mt-3">
          <small>
            <em
              >To be automatically confirmed by the system for this
              transaction</em
            >
          </small>
        </div>

        <div class="d-flex mt-3" style="gap: 20px" v-if="!require_proof">
          <button class="btn btn-success" @click="require_proof = true">
            I have sent the payment
          </button>
          <button class="btn btn-danger" @click="$router.go(-1)">
            Cancel my deposit
          </button>
        </div>

        <div class="mt-3" v-if="require_proof">
          <button class="btn btn-success" @click="submitProof">
            Submit Payment Proof
          </button>
          <hr />
          <div class="d-flex mt-3" style="gap: 20px">
            <button class="btn btn-outline-danger" @click="$router.go(-1)">
              Cancel my deposit
            </button>
            <a href="https://chat.whatsapp.com/CC7gMzPetgv08EE0EchOFi"
              ><button class="btn btn-outline-success">
                Contact Support
              </button></a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Submit Proof -->
    <SubmitProof @close="closeSubmitProofModal" v-if="submit_proof" />
  </div>
</template>

<script src="vue-clipboard2-master/dist/vue-clipboard.min.js"></script>
<script>
import SubmitProof from '@/modules/home/components/submitProof.vue'
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  components:{
    SubmitProof
  },
  data() {
    return {
      text: "",
      action1: "copy",
      action2: "copy",
      action3: "copy",
      require_proof: false,
      submit_proof: false
    };
  },
  methods: {
    ...mapActions('home', ['removeSubmitted']),
    getWords() {
      axios.get("https://random-words-api.vercel.app/word").then((res) => {
        this.text = res.data[0].word;
      });
    },
    submitProof(){
      this.submit_proof = !this.submit_proof
    },
    closeSubmitProofModal(){
      this.submit_proof = !this.submit_proof
      this.removeSubmitted()
    },
    onCopy: function (value) {
      console.log(value.action);
      console.log(value);
      console.log(value.trigger.textContent)
      value.trigger.textContent = 'copied'
    },
    onError: function (e) {
      alert("Failed to copy texts");
    },

    // generateRandomString(length) {
    //   var text = "";
    //   var possible =
    //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //   for (var i = 0; i < length; i++)
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));
    //   return text;
    // },
  },
  beforeMount() {
    this.getWords();
    this.amount
  },
  computed: {
    ...mapState("auth", ["user"]),
    amount(){
      let res = JSON.parse(localStorage.getItem('amount'))
      console.log(res);
      return res
    },
    description() {
      return this.user == null ? this.text : this.text + " " + this.user.name;
    },
    account_number() {
      let queryName = this.$route.query.bank_type;
      return queryName == "gtb" ? "0658338408"
        : (queryName == 'polaris-bank') ? "7040358980" : "6075265384";
    },
    bank_name() {
      let queryName = this.$route.query.bank_type;
      let check =  queryName == "gtb"
        ? "Guaranty Trust Bank" :
        ( queryName === 'polaris-bank') ? 'Polaris Bank' : '9 Payment service Bank' ;
        return check
      
    },
  },
};
</script>