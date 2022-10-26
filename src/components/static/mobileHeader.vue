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
                    <router-link  to="/orders" class="d-flex align-items-center" style="gap:10px">
                      <span> <i-icon icon="bxs:business" > </i-icon> </span>
                      <span>Orders</span>
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
                    <button class="primary--btn w-100">
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
  import { mapState } from 'vuex';
  export default {
    name: "app",
    data() {
      return {
        open: false
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      },
  
    },
    computed:{
        ...mapState('auth', ['user'])
    }
    
  }
  </script>