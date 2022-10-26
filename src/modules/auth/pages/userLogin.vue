<template>
    <div>
        <div class=""  v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0.7)"
      style="width: 100%">
      <div class="user-login-container">
        <div class="user--login">
          <div class="login--box">
            <div class="mb-3 text-center">
                <div class="text-center mb-1">
                <img src="@/assets/img/icon.svg" width="40" alt="">
            </div>
              <h3 class="text-dark">User Login</h3>
              <small class="text-muted">Enter details to login</small>
            </div>
           <form action="" @submit.prevent="userLogin">
              <div class="mb-3">
                <input type="email" v-model="credentials.email" placeholder="Enter Email"/>
                <small
                  class="text-danger"
                  v-for="error in errorMsg.email"
                  :key="error.id"
                  >* {{ error }}
                </small>
              </div>
              <div class="mb-1">
                <input type="password" v-model="credentials.password" placeholder="Enter Password"/>
                <small
                  class="text-danger"
                  v-for="error in errorMsg.password"
                  :key="error.id"
                  >* {{ error }}
                </small>
              </div>
              <div class="text-right mb-3">
              <span class=""> <router-link to="/forgot-password" class="">Forgot Password?</router-link> </span>
            </div>  
              <div>
                <button type="submit" class="primary--btn"> Login </button>
              </div>
            </form>
            
             <div class="text-center mt-2">
              <span class=""> Please <router-link to="/register" class="text-info font-weight-bold">Register</router-link> if you do not have an account </span>
            </div>  
            <div class="text-center">
              <span class=""> Go back to <router-link to="/" class="text-info font-weight-bold">Homepage</router-link> </span>
            </div>  
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        errorMsg: {},
        credentials:{
          email: '',
          password: ''
        },
      };
    },
    methods: {
        ...mapActions("auth", ["login"]),
      async userLogin() {
        this.login(this.credentials)
      },
    },
    computed: {
        ...mapState("auth", ["loading"])
    }
  };
  </script>