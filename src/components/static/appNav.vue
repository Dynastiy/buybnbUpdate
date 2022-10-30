<template>
  <div>
    <div>
      <div class="app--nav">
        <div class="container--fluid">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <router-link to="/">
                <img src="@/assets/img/logo.svg" width="130" alt="" />
              </router-link>
            </div>
            <div class="d-flex align-items-center" style="gap: 20px">
              <ul class="m-0 d-flex align-items-center" style="gap: 20px">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li></li>
                <li>
                  <router-link to="/bnb/ng">Trade</router-link>
                </li>
                <li>
                  <router-link to="/referrals">Refer & Earn</router-link>
                </li>
              </ul>
              <div
                v-if="user"
                class="d-flex align-items-center"
                style="gap: 10px"
              >
                <h6 style="color: var(--primary-color)">
                  {{ greeting + ", " + user.name }}
                </h6>
                <div class="d-flex align-items-center" style="gap: 5px">
                  <span
                    ><svg width="22" height="22" viewBox="0 0 32 32">
                      <path
                        fill="#fff"
                        d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"
                      />
                      <path
                        fill="#fff"
                        d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"
                      /></svg
                  ></span>
                  <router-link class="text-white" to="/dashboard"
                    >Dashboard</router-link
                  >
                </div>
              </div>
              <div v-else class="d-flex align-items-center" style="gap: 20px">
                <router-link to="/login">
                  <button class="primary--btn">Login</button>
                </router-link>
                <router-link to="/register">
                  <button class="primary--btn_border">Signup</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  computed: {
    greeting() {
      const d = new Date();
      let hour = d.getHours();
      var greeting;
      greeting =
        hour < 12
          ? "Good Morning"
          : hour > 12 && hour < 18
          ? "Good Afternoon"
          : "Good Evening";
      return greeting;
    },
    ...mapState("auth", ["user"]),
  },
};
</script>