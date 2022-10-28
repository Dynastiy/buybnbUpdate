<template>
    <div>
      <div class="user-login-container">
        <div class="user--login">
          <div class="login--box">
            <div>
                <div class="mb-4 text-center">
                 <div class="text-center mb-4">
              <img src="@/assets/img/icon.svg" width="50" alt="">
              </div>
              <h4 class=" ">Forgot Password</h4>
              <small>Enter the email address.</small>
            </div>
           <form action="" @submit.prevent="forgotPass" >
              <div class="mb-4">
                <label class="" for="">Email</label>
                <input type="email" v-model="credentials.email"/>
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
                  <button type="submit" class="primary--btn" v-else>Send Reset Mail</button>
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
          email: '',
        },
      };
    },
    methods: {
        ...mapActions('auth', ['forgotPassword']),
      forgotPass(){
        this.forgotPassword(this.credentials)
      }
    },
    computed:{
        ...mapState('auth', ['loading'])
    }
  };
  </script>