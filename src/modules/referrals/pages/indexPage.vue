<template>
  <div>
    <div>
      <div class="bg-white p-4" style="border-radius: 10px">
        <!-- Header -->
        <div>
          <h4>Referrals</h4>
          <small class="text-muted">
            Invite your friends to buyBNB. If they sign up and complete a
            transaction, you get 0.01% of the BNB quantity transacted.
          </small>
        </div>

        <!-- Guide -->
        <section
          class="d-flex d-flex-analytics align-items-center mt-4"
          style="gap: 80px"
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

          <div>
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

          <div>
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
          <div class="d-flex w-100" style="gap:40px">
            <!-- Copy referral link -->
              <div class="referral--codes pr-3">
                <input type="text" placeholder="search" />
                <i-icon icon="ion:copy"></i-icon>
              </div>

            <!-- Copy referral code  -->
              <div class="referral--codes pr-3">
                <input type="text" placeholder="search" />
                <i-icon icon="ion:copy"></i-icon>
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
  </div>
</template>