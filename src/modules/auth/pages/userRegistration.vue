<template>
    <div>
      <div class="user-login-container">
        <div class="user--login">
          <div class="login--box">
            <div class="text-center mb-4">
              <img src="@/assets/img/icon.svg" width="40" alt="" />
            </div>
            <div class="mb-2 text-center">
              <h4 class=" ">User Registration</h4>
              <small>Enter details to create a new account</small>
            </div>
            <form action="" @submit.prevent="createUser">
              <div class="mb-3">
                <input type="text" v-model="credentials.name" placeholder="Enter Full Name"/>
                <small
                  class="text-danger"
                  v-for="error in errorMsg.name"
                  :key="error.id"
                  >* {{ error }}
                </small>
              </div>
              <div class="mb-3">
                <input type="email" v-model="credentials.email" placeholder="Enter Email"/>
                <small
                  class="text-danger"
                  v-for="error in errorMsg.email"
                  :key="error.id"
                  >* {{ error }}
                </small>
              </div>
              <div class="mb-3">
                <input type="text" v-model="credentials.upline_code" placeholder="Referral code"/>
                <small
                  class="text-danger"
                  v-for="error in errorMsg.ref_code"
                  :key="error.id"
                  >* {{ error }}
                </small>
              </div>
              <div class="mb-4">
                <input type="password" v-model="credentials.password" placeholder="Enter Password"/>
                <small
                  class="text-danger"
                  v-for="error in errorMsg.password"
                  :key="error.id"
                  >* {{ error }}
                </small>
              </div>
              <div>
                <div class="d-flex justify-content-center" v-if="loading">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
                <button type="submit" class="primary--btn" v-else>Register</button>
              </div>
            </form>
            <div class="text-center mt-4">
              <span class="">
                Please
                <router-link to="/login" class="text-info font-weight-bold"
                  >Login</router-link
                >
                if have an existing account
              </span>
            </div>
            <div class="text-center">
              <span class="">
                Go back to
                <router-link to="/" class="text-info font-weight-bold"
                  >Homepage</router-link
                >
              </span>
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
          name: '',
          email: '',
          password: '',
          upline_code: null
        },
      };
    },
    methods: {
        ...mapActions("auth", ["register"]),
      async createUser() {
        this.register(this.credentials)
      },
    },
    mounted(){
        let code = this.$route.query.referral_id
        console.log(code);
        this.credentials.upline_code = code
    },
    computed: {
        ...mapState("auth", ["loading"])
    }
  };
  </script>

  