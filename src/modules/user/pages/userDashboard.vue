<template>
  <div>
    <section>
      <div class="d-flex d-flex-analytics" style="gap: 30px">
        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="carbon:cost-total"></i-icon>
          </span>
          <div>
            <h4> {{ total_deposits }} </h4>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Total Deposits</span
            >
          </div>
        </div>

        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="ic:outline-pending"></i-icon>
          </span>
          <div>
            <h4> {{ pending_deposits }} </h4>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Pending Deposits</span
            >
          </div>
        </div>

        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="ant-design:file-done-outlined"></i-icon>
          </span>
          <div>
            <h4> {{ completed_deposits }} </h4>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Completed Deposits</span
            >
          </div>
        </div>

        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="line-md:cancel"></i-icon>
          </span>
          <div>
            <h4> {{ canceled_deposits }} </h4>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Cancelled Deposits</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Deposits Table  -->
    <section class="mt-5">
      <h5 class="text-bold">Recent Deposits</h5>
      <div class="mt-3 other--tables">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Reference</th>
                <th scope="col">Date</th>
                <th scope="col">Amount (NGN)</th>
                <th scope="col">Amount (BNB)</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    methods: {
        ...mapActions("user", ["getAnalytics"])
    },
    beforeMount(){
        this.getAnalytics()
    },
    computed:{
        ...mapState("user", ["analytics"]),
        canceled_deposits(){
            return this.analytics.canceled_deposits.length
        },
        completed_deposits(){
            return this.analytics.completed_deposits.length
        },
        pending_deposits(){
            return this.analytics.pending_deposits.length
        },
        total_deposits(){
            return Number(this.analytics.canceled_deposits.length) + Number(this.analytics.completed_deposits.length) + Number(this.analytics.pending_deposits.length)
        }
    }
}
</script>