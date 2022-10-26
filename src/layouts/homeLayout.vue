<template>
    <div>
      <div>
        <div>
          <router-view />
        </div>
        <AppFooter/>
      </div>
    </div>
  </template>
  
  <script>
import AppFooter from "../modules/home/components/appFooter.vue";
  import { mapActions } from "vuex";
  export default {
    components: { AppFooter },
    methods: {
      ...mapActions('home', ['getAssets', 'getNaira'])
    },
    beforeMount(){
      this.getAssets(),
      this.getNaira()
    }
  };
  </script>