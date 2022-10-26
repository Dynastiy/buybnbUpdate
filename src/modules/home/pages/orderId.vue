<template>
  <div>
    <div class="container">
      <div class="bg-white p-4">
       <div class="d-flex align-items-center justify-content-between">
        <div>
          <h5 class="font-weight-bold text-uppercase">
            Order
            <span class="text-success">{{ createRef(order.ref_no) }}</span>
          </h5>
          <span class="text-secondary small"
            >Submitted: {{ timeStamp(order.created_at) }}</span
          >
        </div>
        <div>
          <h6 class="text-secondary">{{ order.status === "pending" ? 'Please wait...' : 'BNB Disbursed' }}</h6>
          <h4 id="countdown" class="text-danger"></h4>
          <!-- <progress value="0" max="180" id="progressBar"></progress> -->
        </div>
       </div>
        <div class="table-responsive">
          <table class="rwd-table">
            <tr>
              <td>Status</td>
              <td>
                <span :class="order.status"> {{ order.status }} </span>
              </td>
            </tr>
            <tr>
              <td>Wallet Address</td>
              <td>{{ order.wallet_address }}</td>
            </tr>

            <tr>
              <td>Amount (Naira)</td>
              <td class="text-success">{{ (order.amount_naira).toLocaleString() + " NGN" }}</td>
            </tr>
            <tr>
              <td>Amount(BNB)</td>
              <td style="color:var(--primary-color)">{{ order.amount_bnb + " BNB" }}</td>
            </tr>
            <tr>
              <td>Payment Proof</td>
              <td>
                <a target="_blank" :href="config.imgUrl + order.payment_proof"
                  >View Proof</a
                >
              </td>
            </tr>
            <tr v-if="order.payment_report">
              <td>Payment Report</td>
              <td>{{ order.payment_report.description }}</td>
            </tr>
            <tr v-if="order.payment_report">
              <td>Payment Report</td>
              <td><a target="_blank" :href="config.imgUrl + order.payment_report.credit_proof"
                  >View Proof</a
                ></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/api";
import { mapState, mapActions } from "vuex";
import { createRef, timeStamp } from "@/plugins/filter";
export default {
  data() {
    return {
      createRef,
      config,
      timeStamp,
      id: this.$route.params.id,
    //   order: null,
    getNewOrder: null
    };
  },

  methods: {
    ...mapActions("user", ["getSingleOrder"]),
  },

  mounted() {
    var objectValue = this.order
    // console.log(order);
    var timeleft = 180;
    // console.log(this.order);
    document.getElementById("countdown").innerHTML = timeleft;
    var downloadTimer = setInterval(function () {
        var item = objectValue
      if (timeleft <= 0 || item.status === "completed" ) {
        clearInterval(downloadTimer);
        var timeralert = document.getElementById("countdown");
        // var progressBar = document.getElementById("progressBar");
        timeralert.style.display = "none";
        // progressBar.style.display = "none";
      }
      document.getElementById("countdown").innerHTML = timeleft + "secs";
    //   document.getElementById("progressBar").value = 180 - timeleft;
      timeleft -= 1;
    }, 1000);

    
  },

  

  watch: {
  order () {
    clearInterval(this.productCheckInterval)
      this.getNewOrder = setInterval(() => {
        if(this.order.status === 'pending'){
            this.getSingleOrder(this.id)
        }
      }, 20000)
    }
  },
//   var reloadStatus = setInterval(function () {
//         if (order.status == 'approved' ) {
//         clearInterval(reloadStatus);
//         }
//         this.$store.dispatch('user/getSingleOrder', this.id);
//     }, 5000);
  beforeMount() {
    this.getSingleOrder(this.id);
  },

  computed: {
    ...mapState("user", ["order"]),
  },
};
</script>