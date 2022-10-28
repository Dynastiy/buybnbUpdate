<template>
    <div>
      <div class="user-login-container">
        <div class="user--login">
          <div class="login--box">
            <div>
                <div class="mb-3 text-center">
                 <div class="text-center mb-2">
              <img src="@/assets/img/icon.svg" width="50" alt="">
              </div>
              <h4 class=" ">Reset Password</h4>
              <!-- <small>Enter the email address you used when you joined and we'll send you instructions to reset your password.</small> -->
            </div>
           <form action="" @submit.prevent="reset" >
              <div class="mb-4">
                <label class="" for="">New Password</label>
                <input type="text" v-model="credentials.password"/>
                <small
                  class="text-danger"
                 v-if="errorMsg"
                  >* {{ errorMsg }}
                </small>
              </div>
              <div class="mb-4">
                <label class="" for="">Confirm Password</label>
                <input type="text" v-model="credentials.password_confirmation"/>
                <small
                  class="text-danger"
                 v-if="errorMsg"
                  >* {{ errorMsg }}
                </small>
              </div>
              <div>
                <div class="d-flex justify-content-center" v-if="loading">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
                  <button type="submit" class="primary--btn" v-else>Reset Password</button>
                </div>
            </form>
            </div>
            <!-- <div v-else>
                <h5>If this email address was used to create an account, instructions to reset your password will be sent to you. Please check your email.</h5>
            </div> -->
  
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
import { mapActions, mapState } from 'vuex';
  export default {
    data() {
      return {
        errorMsg: '',
        credentials:{
          password: '',
          password_confirmation: ''
        },
      };
    },
    methods: {
        ...mapActions("auth", ["resetPassword"]),
      async reset() {
        let payload = {
            token: this.$route.query.token,
            email: this.$route.query.email,
            password: this.credentials.password,
            password_confirmation: this.credentials.password_confirmation
        }
        this.resetPassword(payload)
      },
    },
    computed:{
        ...mapState("auth", ["loading"])
    }
  };
  </script>