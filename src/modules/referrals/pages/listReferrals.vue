<template>
  <div>
    <div>
      <div>
        <!-- My referrals Table -->
        <section class="mt-4">
        <h5 class="text-bold">My Referrals</h5>
          <div class="mt-3 other--tables">
            <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0">
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
    ...mapActions('referrals', ['getReferrals'])
  },
  beforeMount(){
    this.getReferrals()
  },
  mounted(){
    console.log(window.location.origin)
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