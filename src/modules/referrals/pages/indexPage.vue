<template>
  <div>
    <div>
      <div class="bg-white p-4" style="border-radius: 10px">
        <!-- Header -->
        <div>
          <h4>Referrals</h4>
          <small class="text-muted">
            Invite your friends to buyBNB. If they sign up and complete a
            transaction, you get <span class="font-weight-bold">0.1USD</span>.
          </small>
        </div>

        <!-- Guide -->
        <section
          class="d-flex d-flex-analytics align-items-center mt-4"
          style="gap:80px"
        >
          <div class="text-center">
            <div class="text-center d-flex justify-content-center">
              <span class="icon--area mb-2">
                <i-icon icon="typcn:messages"></i-icon>
              </span>
            </div>
            <h6 class="font-weight-bold">Send Invitation</h6>
            <small class="text-muted">
              Send your referral link to friends and tell them how to use buyBNB
            </small>
          </div>

          <div class="divider--icon">
            <i-icon icon="tabler:arrows-join-2"></i-icon>
          </div>

          <div class="text-center">
            <div class="text-center d-flex justify-content-center">
              <span class="icon--area mb-2">
                <i-icon icon="bi:person-check-fill"></i-icon>
              </span>
            </div>
            <h6 class="font-weight-bold">Registration</h6>
            <small class="text-muted">
              Let them register to buyBNB using your referral link or code
            </small>
          </div>

          <div class="divider--icon">
            <i-icon icon="tabler:arrows-join-2"></i-icon>
          </div>

          <div class="text-center">
            <div class="text-center d-flex justify-content-center">
              <span class="icon--area mb-2">
                <i-icon icon="fluent:payment-24-filled"></i-icon>
              </span>
            </div>
            <h6 class="font-weight-bold">Complete Transaction</h6>
            <small class="text-muted">
              Let them complete a transaction and you earn on their first
              transaction
            </small>
          </div>
        </section>

        <!-- Copy referral  Link / Referral Code -->
        <section class="mt-5">
          
          <h5 class="font-weight-bold mb-3">Share the referral link/Code</h5>
          <div class="d-flex d-flex-analytics w-100" style="gap:40px">
            <!-- Copy referral link -->
              <div class="referral--codes pr-3 w-100">
                <input type="text" v-model="referral_link"  placeholder="referral link" />
                <i-icon role="button" v-clipboard:copy="referral_link"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError" icon="ion:copy"></i-icon>
              </div>

            <!-- Copy referral code  -->
              <div class="referral--codes pr-3 w-100">
                <input type="text" v-model="user.ref_code"  placeholder="referral code" />
                <i-icon role="button" v-clipboard:copy="user.ref_code"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError" icon="ion:copy"></i-icon>
              </div>
          </div>
        </section>
      </div>

      <!-- My referrals Table -->
    <section class="mt-4">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="text-bold">My Referrals</h5>
        <router-link style="font-weight:400; font-size:13px" to="/referrals-list">
            See All &raquo;
        </router-link>
        <!-- <span style="font-weight:400; font-size:13px" @click='$router.push("/referrals-list")'>
            
        </span> -->
      </div>
      <div class="mt-3 other--tables">
        <div class="table-responsive">
              <table class="table table-centered table-nowrap">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Created At</th>
              </tr>
                <div v-if="referrals === null">
                <p class="text-danger small mt-3">You dont have any referrals yet...</p>
              </div>
              <tr v-for="item in referrals" :key="item.id">
                <td class="d-flex align-items-center" style="gap:10px"> 
                  <span :class="item.name.charAt(0)" class="user--avatar text-capitalize"> {{ item.name.charAt(0) }} </span>
                  <span>{{ item.name }} </span>
                </td>
                <td> {{ item.email }} </td>
                <td> {{ timeStamp(item.created_at) }}  </td>
              </tr>
              </table>
            </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import { timeStamp } from '@/plugins/filter'
import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return {
      timeStamp
    }
  },
  methods:{
    ...mapActions('referrals', ['getReferrals']),
    onCopy: function (value) {
      alert("copied")
      console.log(value);
    },
    onError: function () {
      alert("Failed to copy texts");
    },
  },
  beforeMount(){
    this.getReferrals()
  },
  mounted(){
  },
  
  computed:{
    ...mapState('auth', ['user']),
    ...mapState('referrals', ['referrals']),
    referral_link(){
      return window.location.origin + '/register/?referral_id=' + this.user.ref_code
    }
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