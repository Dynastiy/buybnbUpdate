<template>
    <div>
      <div>
        <div>
          <!-- My referrals Table -->
          <section class="">
            <div class="mt-3 other--tables">
              <h4>Withdrawal History</h4>
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
                  <tr v-if="withdrawals.length === 0">
                      <span class="text-danger">
                        No items here
                      </span>
                    </tr>
                  <tr v-for="item in withdrawals" :key="item.id">
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
      </div>
    </div>
  </template>
  
    <script>
  import { createRef, timeStamp } from "@/plugins/filter";
  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
        createRef,
        timeStamp,
      };
    },
    methods:{
        ...mapActions('user', ['getWithdrawals'])
    },
    beforeMount(){
        this.getWithdrawals()
    },
    computed: {
      ...mapState("user", ["withdrawals"]),
      ...mapState("home", ["naira"]),
    },
  };
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