<template>
  <div>
    <section>
      <div class="mb-3">
        <h4 class="font-weight-bold">Dashboard Analytics</h4>
      </div>
      <div class="d-flex d-flex-analytics" style="gap: 30px; margin-bottom: 30px;">
        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="carbon:cost-total"></i-icon>
          </span>
          <div>
            <h2> {{ analytics.total_deposits }} </h2>
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
            <h2> {{ analytics.pending_deposits }} </h2>
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
            <h2> {{ analytics.completed_deposits }} </h2>
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
            <h2> {{ analytics.canceled_deposits }} </h2>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Cancelled Deposits</span
            >
          </div>
        </div>
      </div>

      <div class="d-flex d-flex-analytics" style="gap: 30px">
        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="carbon:cost-total"></i-icon>
          </span>
          <div>
            <h2> {{ analytics.total_sells }} </h2>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Total Sells</span
            >
          </div>
        </div>

        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="ic:outline-pending"></i-icon>
          </span>
          <div>
            <h2> {{ analytics.pending_sells }} </h2>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Pending Sells</span
            >
          </div>
        </div>

        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="ant-design:file-done-outlined"></i-icon>
          </span>
          <div>
            <h2> {{ analytics.completed_sells }} </h2>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Completed Sells</span
            >
          </div>
        </div>

        <div class="analytics--card w-100">
          <span style="" class="icon--area">
            <i-icon icon="line-md:cancel"></i-icon>
          </span>
          <div>
            <h2> {{ analytics.canceled_sells }} </h2>
            <span class="text-muted" style="font-weight: 300; font-size: 12px"
              >Cancelled Sells</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Transactions Table  -->
    <section class="">
            <div class="mt-3 other--tables">
              <h4>Transaction History</h4>
              <div class="table-responsive">
                <table class="table table-centered table-nowrap">
                  <tr>
                    <th scope="col">Reference</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount (NGN)</th>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Transaction Class</th>
                    <th scope="col">Status</th>
                  </tr>
                  <tr v-if="transactions.length === 0">
                      <span class="text-danger">
                        No items here
                      </span>
                    </tr>
                  <tr v-for="item in transactions" :key="item.id">
                    <td class="text-uppercase">{{ createRef(item.ref_no) }}</td>
                    <td>{{ timeStamp(item.created_at) }}</td>
                    <td>&#8358;{{ item.amount_naira.toLocaleString() }}</td>
                    <td>{{ item.type }}</td>
                    <td><span :class="item.class">{{ item.class }}</span></td>
                    <td>
                      <span
                        :class="item.status + '--order'"
                        class="d-flex align-items-center"
                        style="gap: 4px"
                      >
                        <span
                          ><i-icon
                            icon="akar-icons:circle-fill"
                            style="font-size: 10px"
                        /></span>
                        <span>{{ item.status }}</span>
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
  </div>
</template>

<script>
import { createRef, timeStamp } from '@/plugins/filter'
import { mapActions, mapState } from 'vuex'
export default {
  data(){
    return {
      createRef, timeStamp
    }
  },
    methods: {
        ...mapActions("user", ["getAnalytics"]),
        ...mapActions('transactions', ['getTransactions'])
    },
    beforeMount(){
        this.getAnalytics()
    },
    computed:{
        ...mapState("user", ["analytics"]),
        ...mapState("transactions", ["transactions"]),
    }
}
</script>


<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 100%;
}
th {
  background-color: var(--main-color) !important;
  color: white;
}
th,
td {
  /* width: 100%; */
  border: none;
  /* padding: 5px; */
  background: var(--accent-color);
  padding: 1rem;
  font-size: 0.8rem;
}

th:nth-child(1) {
  border-radius: 20px 0 0 20px;
}

th:last-child {
  border-radius: 0 20px 20px 0;
}

td:nth-child(1) {
  border-radius: 20px 0 0 20px;
}

td:last-child {
  border-radius: 0 20px 20px 0;
}
</style>