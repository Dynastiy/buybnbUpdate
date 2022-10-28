<template>
  <div>
    <div
      class="mobile--header_nav container--fluid"
      style="background-color: var(--main-color)"
    >
      <div class="d-flex justify-content-between">
        <div>
          <img src="@/assets/img/icon.svg" width="35" alt="" />
        </div>
        <div @click="toggle">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="var(--primary-color)"
              d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"
            />
          </svg>
        </div>
      </div>

      <el-drawer :visible.sync="open" direction="ltr" size="80%">
        <div>
          <div class="container--fluid">
            <div class="d-flex flex-column" style="gap: 20px">
              <div class="mb-3">
                <div
                  v-if="token"
                  class="d-flex flex-column"
                  style="gap: 10px"
                >
                  <h6 style="color: var(--primary-color)">
                    {{ greeting + ',' }}
                  </h6>
                  <h5>
                    {{ user.name }}
                  </h5>
                  <div class="d-flex align-items-center" style="gap: 5px">
                    <span
                      ><svg width="22" height="22" viewBox="0 0 32 32">
                        <path
                          fill="#000"
                          d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"
                        />
                        <path
                          fill="#000"
                          d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"
                        /></svg></span>
                    <router-link class="text-dark small text-secondary" to="/dashboard">Go To Dashboard</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column" style="gap: 20px">
                <ul class="m-0 d-flex flex-column" style="gap: 20px">
                  <li id="menu_item" @click="toggle">
                    <router-link
                      to="/"
                      class="d-flex align-items-center"
                      style="gap: 10px"
                    >
                      <span>
                        <svg width="20" height="20" viewBox="0 0 24 24">
                          <path
                            fill="#888888"
                            d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Z"
                          />
                        </svg>
                      </span>
                      <span>Home</span>
                    </router-link>
                  </li>
                  <li id="menu_item" @click="toggle">
                    <router-link
                      to="/bnb/ng"
                      class="d-flex align-items-center"
                      style="gap: 10px"
                    >
                      <span>
                        <svg width="20" height="20" viewBox="0 0 24 24">
                          <g fill="none">
                            <path d="M0 0h24v24H0z" />
                            <path
                              fill="#888888"
                              d="M1.498 12.082c-.01-1.267 1.347-1.987 2.379-1.406l.113.07l2.678 1.804c1.424.96.538 3.145-1.099 2.915l-.138-.025l-.108-.024a7.504 7.504 0 0 0 13.175.335a1.5 1.5 0 0 1 2.599 1.498c-2.317 4.019-7.119 6.152-11.815 4.893a10.502 10.502 0 0 1-7.784-10.06ZM12 6a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2 4a2.5 2.5 0 0 1-2 4h-1v1a1 1 0 1 1-2 0v-1H9.1A1.1 1.1 0 0 1 8 14.9V9.1A1.1 1.1 0 0 1 9.1 8H11V7a1 1 0 0 1 1-1Zm2 7h-4v1h4a.5.5 0 0 0 0-1ZM2.904 6.751C5.22 2.732 10.022.6 14.718 1.858a10.502 10.502 0 0 1 7.784 10.06c.01 1.267-1.347 1.987-2.379 1.407l-.113-.07l-2.678-1.805c-1.424-.96-.538-3.145 1.099-2.914l.138.025l.109.023A7.504 7.504 0 0 0 5.504 8.25a1.5 1.5 0 1 1-2.6-1.498ZM14 10h-4v1h4a.5.5 0 0 0 0-1Z"
                            />
                          </g>
                        </svg>
                      </span>
                      <span>Trade</span>
                    </router-link>
                  </li>
                  <li id="menu_item" @click="toggle">
                    <router-link
                      to="/refer-and-earn"
                      class="d-flex align-items-center"
                      style="gap: 10px"
                    >
                      <span>
                        <svg width="20" height="20" viewBox="0 0 24 24">
                          <path
                            fill="#888888"
                            d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363q.025-.187.075-.337l-7.05-4.1q-.425.375-.95.587Q6.575 15 6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.212q.525.213.95.588l7.05-4.1q-.05-.15-.075-.337Q15 5.175 15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.213q-.525-.212-.95-.587L8.9 11.3q.05.15.075.337Q9 11.825 9 12t-.025.362q-.025.188-.075.338l7.05 4.1q.425-.375.95-.588Q17.425 16 18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Z"
                          />
                        </svg>
                      </span>
                      <span>Refer & Earn</span>
                    </router-link>
                  </li>
                </ul>
                
                <div v-if="token === null " class="d-flex flex-column" style="gap: 20px">
                  <router-link id="menu_item" @click="toggle" to="/login">
                    <button class="primary--btn w-100">Login</button>
                  </router-link>
                  <router-link id="menu_item" @click="toggle" to="/register">
                    <button class="primary--btn_border">Signup</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  computed: {
    greeting() {
      const d = new Date();
      let hour = d.getHours();
      var greeting;
      greeting =
        hour <= 12
          ? "Good Morning"
          : hour > 12 && hour < 18
          ? "Good Afternoon"
          : "Good Evening";
      return greeting;
    },
    ...mapState("auth", ["user"]),
    token(){
      return localStorage.getItem('token')
    }
  },
};
</script>