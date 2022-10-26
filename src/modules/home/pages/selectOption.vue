<template>
  <div>
    <div class="container--fluid">
      <div class="container mt-4">
        <div class="pricing">
          <div class="price--cards">
            <div class="d-flex align-items-center mb-3" style="gap:8px">
              <span>
                <svg width="20" height="20" viewBox="0 0 256 256">
                  <path
                    fill="#34c38f"
                    d="M224 48v120a8.1 8.1 0 0 1-3.2 6.4c-15.1 11.4-29.6 15.4-43.4 15.4c-18.8 0-36.3-7.5-52.6-14.4c-26.7-11.5-49.9-21.4-76.8-3.3V216a8 8 0 0 1-16 0V47.4a.6.6 0 0 1 .1-.4v-.4c0-.1.1-.2.1-.4s.1-.2.1-.3s.1-.3.1-.4s.1-.2.1-.3s.1-.3.2-.4a.8.8 0 0 1 .2-.4c0-.1.1-.2.1-.3l.2-.4c.1-.1.2-.2.2-.3l.3-.3l.2-.3l.3-.3l.2-.3l.3-.2l.4-.3h.1c35.7-26.8 67.7-13.1 95.9-1s51.8 22.2 80.1 1A8 8 0 0 1 224 48Z"
                  />
                </svg>
              </span>
              <span class="font-weight-bold">Selling Price:</span>
            </div>
            <h3 style="font-weight: 700">
              
              <span class="text-success">{{ Math.round(oneBnbInNaira).toLocaleString() }}</span> <span>NGN</span>
            </h3>
            <div class="mt-4">
              <router-link to="/buy/bnb">
                <button class="btn btn-success font-weight-bold">
                  Buy now
                </button>
              </router-link>
            </div>
          </div>

          <div class="price--cards">
            <div class="d-flex align-items-center mb-3" style="gap: 8px">
              <span>
                <svg width="20" height="20" viewBox="0 0 256 256">
                  <path
                    fill="#f46a6a"
                    d="M224 48v120a8.1 8.1 0 0 1-3.2 6.4c-15.1 11.4-29.6 15.4-43.4 15.4c-18.8 0-36.3-7.5-52.6-14.4c-26.7-11.5-49.9-21.4-76.8-3.3V216a8 8 0 0 1-16 0V47.4a.6.6 0 0 1 .1-.4v-.4c0-.1.1-.2.1-.4s.1-.2.1-.3s.1-.3.1-.4s.1-.2.1-.3s.1-.3.2-.4a.8.8 0 0 1 .2-.4c0-.1.1-.2.1-.3l.2-.4c.1-.1.2-.2.2-.3l.3-.3l.2-.3l.3-.3l.2-.3l.3-.2l.4-.3h.1c35.7-26.8 67.7-13.1 95.9-1s51.8 22.2 80.1 1A8 8 0 0 1 224 48Z"
                  />
                </svg>
              </span>
              <span class="font-weight-bold">Buying Price:</span>
            </div>
            <h3 style="font-weight: 700">
              <span class="text-danger">{{ Math.round(oneBnbInNaira - 3124 ).toLocaleString() }}</span> <span>NGN</span>
            </h3>
            <div class="mt-4">
              <router-link to="/sell/bnb">
                <button class="btn btn-danger font-weight-bold">Sell now</button>
              </router-link>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState('home', ['bnb', 'oneBnbInNaira'])
  }
}
</script>