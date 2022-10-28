<template>
    <div>
      <div class="mobile--header_nav container--fluid" style="background-color:var(--main-color)">
        <div class="d-flex justify-content-between">
          <div>
            <img src="@/assets/img/icon.svg" width="30" alt="" />
          </div>
          <div  @click="toggle">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="var(--primary-color)"
                d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"
              />
            </svg>
          </div>
        </div>
  
        <el-drawer
          :visible.sync="open"
          direction="ltr"
          size="80%">
          <div>
              <div class="container--fluid">
            <div class="d-flex flex-column" style="gap:20px">
              <div class="mb-3 d-flex align-items-center" style="gap:20px">
                <span :class="user.name.charAt(0)" class="user--avatar text-capitalize"> {{ user.name.charAt(0) }} </span>
               <div>
                <h6> {{ user.name }} </h6>
                <small class="text-secondary"> {{ user.email }} </small>
               </div>
                <!-- <router-link to="/">
                  <img src="@/assets/img/icon.svg" width="60" alt="" />
                </router-link> -->
              </div>
              <div class="d-flex flex-column justify-content-between" style="height:70vh">
                <ul class="m-0 d-flex  flex-column" style="gap: 20px">
                  <li id="menu_item" @click="toggle">
                    <router-link  to="/dashboard" class="d-flex align-items-center" style="gap:10px">
                      <span><i-icon icon="material-symbols:dashboard-rounded"></i-icon></span>
                      <span>Dashboard</span>
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
                    <router-link  to="/orders" class="d-flex align-items-center" style="gap:10px">
                      <span> <i-icon icon="bxs:business" > </i-icon> </span>
                      <span>Orders</span>
                    </router-link>
                  </li>
                  <li id="menu_item" @click="toggle">
                    <router-link  to="/wallet" class="d-flex align-items-center" style="gap:10px">
                      <span> <i-icon icon="bxs:business" > </i-icon> </span>
                      <span>Wallet</span>
                    </router-link>
                  </li>
                  <li id="menu_item" @click="toggle">
                    <router-link  to="/profile" class="d-flex align-items-center" style="gap:10px">
                      <span> <i-icon icon="carbon:user-avatar" > </i-icon> </span>
                      <span>Profile</span>
                    </router-link>
                  </li>
                  <li id="menu_item" @click="toggle">
                    <router-link  to="/transactions" class="d-flex align-items-center" style="gap:10px">
                      <span> <i-icon icon="uil:transaction"></i-icon> </span>
                      <span>Transactions</span>
                    </router-link>
                  </li>
                  <li id="menu_item" @click="toggle">
                    <router-link  to="/referrals" class="d-flex align-items-center" style="gap:10px">
                      <span> <i-icon icon="ci:share"></i-icon> </span>
                      <span>Referrals</span>
                    </router-link>
                  </li>
                </ul>
                <div class="d-flex flex-column" style="gap: 20px">
                    <button class="primary--btn w-100" @click="userLogout">
                        <span> <i-icon icon="icon-park-outline:logout"></i-icon> </span>
                                <span>Logout</span>
                    </button>
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
  import { mapState, mapActions } from 'vuex';
  export default {
    name: "app",
    data() {
      return {
        open: false
      }
    },
    methods: {
      ...mapActions('auth', ['logout']),
      toggle() {
        this.open = !this.open
      },
      userLogout(){
        this.logout()
      }
  
    },
    computed:{
        ...mapState('auth', ['user'])
    }
    
  }
  </script>